'use strict';
(() => {
  const BANK = window.MEIOSIS_BANK;
  const FIGURES = window.MEIOSIS_FIGURES;
  const root = document.querySelector('#main');
  const STORAGE_KEY = 'aurelio-spruce:meiosis:autoevaluacion:v1';
  const unitById = Object.fromEntries(BANK.units.map(u => [u.id,u]));
  const questionById = Object.fromEntries(BANK.questions.map(q => [q.id,q]));
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let persistenceAvailable = true;
  let animationTimer = null;
  let animationStart = 0;
  let animationElapsed = 0;
  let animationPaused = false;
  const fresh = () => ({schema:1,bank:BANK.version,scope:'all',index:0,view:'home',answers:{},attempt:1});
  function loadState() {
    try {
      const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));
      const previousBank=saved?.bank==='1.0.0' && BANK.version==='1.1.0';
      if(!saved || saved.schema!==1 || (saved.bank!==BANK.version && !previousBank)) return fresh();
      const s=fresh();
      s.answers=Object.fromEntries(Object.entries(saved.answers||{}).filter(([id,key]) => questionById[id]?.options.some(o=>o.key===key)));
      s.scope=saved.scope==='all' || unitById[saved.scope]?saved.scope:'all';
      s.view=['home','quiz','results','review'].includes(saved.view)?saved.view:'home';
      s.index=Number.isInteger(saved.index)?saved.index:0;
      if(previousBank) {
        const current=BANK.questions.filter(q=>s.scope==='all'||q.unit===Number(s.scope));
        const previous=current.filter(q=>Number(q.id.slice(4))<=24);
        const previousId=previous[s.index]?.id;
        s.index=Math.max(0,current.findIndex(q=>q.id===previousId));
      }
      s.attempt=Number.isInteger(saved.attempt)&&saved.attempt>0?saved.attempt:1;
      return s;
    } catch { persistenceAvailable=false;return fresh(); }
  }
  let state=loadState();
  function save() {
    try { localStorage.setItem(STORAGE_KEY,JSON.stringify(state));persistenceAvailable=true; }
    catch { persistenceAvailable=false; }
  }
  const questions = () => state.scope==='all'?BANK.questions:BANK.questions.filter(q=>q.unit===Number(state.scope));
  const isAnswered = q => Object.hasOwn(state.answers,q.id);
  const isCorrect = q => state.answers[q.id]===q.correct;
  const answeredCount = qs => qs.filter(isAnswered).length;
  const score = qs => qs.filter(isCorrect).length;
  const scopeLabel = () => state.scope==='all'?'Recorrido completo':`Videoclase ${state.scope} · ${unitById[state.scope].title}`;
  const storageText = () => persistenceAvailable?'Tu avance se guarda en este navegador.':'El guardado no está disponible: el avance se conservará mientras mantengas abierta esta ventana.';
  function focus(el,scroll=true) {
    if(!el) return;
    el.focus({preventScroll:true});
    if(scroll) el.scrollIntoView({behavior:'auto',block:'start'});
  }
  function stopAnimationTimer() { clearInterval(animationTimer);animationTimer=null; }
  function home() {
    const count=answeredCount(BANK.questions),total=BANK.questions.length;
    root.innerHTML=`
      <section class="hero" aria-labelledby="home-title">
        <div>
          <p class="eyebrow">Autoevaluación · Microcurso 02</p>
          <h1 id="home-title" tabindex="-1">Comprobá cómo comprendés la meiosis.</h1>
          <p class="lede">Seguí cromosomas, interpretá los esquemas y conectá cada resultado con el mecanismo que lo produce.</p>
          <div class="cta-row"><button class="button" data-action="start" data-scope="all">${count===total?'Ver resultados':count?`Continuar evaluación · ${count}/${total}`:`Comenzar las ${total} preguntas`} <span aria-hidden="true">→</span></button></div>
          <p class="small muted">${total} preguntas · ${BANK.units.length} clases · A tu ritmo</p>
          <p class="save-notice">${esc(storageText())}</p>
        </div>
        <div class="hero-visual">
          <div class="visual-kicker"><span>UNA REPLICACIÓN, DOS DIVISIONES</span><span>MODELO 2n = 4</span></div>
          <div id="intro-sequence" class="intro-sequence" data-step="auto">${FIGURES.intro()}</div>
          <div class="animation-actions" aria-label="Control del esquema">
            <button data-action="animation-step" data-step="0">Antes de dividirse</button>
            <button data-action="animation-step" data-step="1">Meiosis I</button>
            <button data-action="animation-step" data-step="2">Meiosis II</button>
            <button data-action="animation-toggle" id="animation-toggle">Pausar</button>
          </div>
          <p class="hero-legend"><i class="legend-dot blue"></i><i class="legend-dot ochre"></i>Colores: origen de los homólogos. Se omite recombinación.</p>
        </div>
      </section>
      <div class="feature-strip"><span>Explicaciones de las cuatro alternativas</span><span>Esquemas para razonar</span><span>Reintentos sin límite</span></div>
      <section class="unit-section" aria-labelledby="units-title">
        <div class="section-heading"><h2 id="units-title">También podés repasar por clase</h2><span class="small muted">Cinco preguntas en cada recorrido</span></div>
        <div class="unit-grid">${BANK.units.map(u=>{
          const qs=BANK.questions.filter(q=>q.unit===u.id),done=answeredCount(qs);
          return `<button class="unit-card" data-action="start" data-scope="${u.id}"><span class="num">VIDEOCLASE ${String(u.id).padStart(2,'0')}</span><strong>${esc(u.title)}</strong><span class="meta"><span>${qs.length} preguntas <span aria-hidden="true">→</span></span><span>${done?`${done}/${qs.length} respondidas`:'Sin comenzar'}</span></span></button>`;
        }).join('')}</div>
        <p class="source-note">Para acompañar las seis videoclases y el PDF del microcurso. Cada respuesta incluye una referencia de lectura. El resultado es orientativo y podés repetir la evaluación para seguir aprendiendo.</p>
      </section>`;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced) setAnimationStep(2);else runAnimation();
  }
  function updateAnimationButtons(step) {
    root.querySelectorAll('[data-action="animation-step"]').forEach(b=>{
      const active=b.dataset.step===String(step);b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));
    });
  }
  function setAnimationStep(step) {
    stopAnimationTimer();
    const sequence=root.querySelector('#intro-sequence');if(!sequence)return;
    sequence.classList.remove('paused');sequence.dataset.step=String(step);animationPaused=false;animationElapsed=0;
    updateAnimationButtons(step);
    root.querySelector('#animation-toggle').textContent='Reproducir';
  }
  function runAnimation() {
    const sequence=root.querySelector('#intro-sequence');if(!sequence)return;
    stopAnimationTimer();sequence.classList.remove('paused');sequence.dataset.step='reset';void sequence.offsetWidth;sequence.dataset.step='auto';
    animationPaused=false;animationElapsed=0;animationStart=performance.now();root.querySelector('#animation-toggle').textContent='Pausar';
    animationTimer=setInterval(()=>{
      const elapsed=performance.now()-animationStart;
      updateAnimationButtons(elapsed<3900?0:elapsed<7800?1:2);
      if(elapsed>=12000)setAnimationStep(2);
    },180);
  }
  function toggleAnimation() {
    const sequence=root.querySelector('#intro-sequence');if(!sequence)return;
    if(sequence.dataset.step!=='auto'){runAnimation();return;}
    if(!animationPaused) {
      animationElapsed=performance.now()-animationStart;animationPaused=true;stopAnimationTimer();sequence.classList.add('paused');root.querySelector('#animation-toggle').textContent='Continuar';
    } else {
      sequence.classList.remove('paused');animationPaused=false;animationStart=performance.now()-animationElapsed;root.querySelector('#animation-toggle').textContent='Pausar';
      animationTimer=setInterval(()=>{
        const elapsed=performance.now()-animationStart;updateAnimationButtons(elapsed<3900?0:elapsed<7800?1:2);if(elapsed>=12000)setAnimationStep(2);
      },180);
    }
  }
  function mapMarkup(qs) {
    const ids=[...new Set(qs.map(q=>q.unit))];
    return `<details class="question-map" ${matchMedia('(min-width:761px)').matches?'open':''}><summary>Mapa de preguntas</summary><nav aria-label="Elegir pregunta">${ids.map(id=>{
      const items=qs.map((q,i)=>({q,i})).filter(o=>o.q.unit===id);
      return `<div class="map-unit"><p>Videoclase ${id}</p><div class="map-buttons">${items.map(({q,i})=>`<button data-action="goto" data-index="${i}" class="${isAnswered(q)?'answered':''}" ${i===state.index?'aria-current="step"':''} aria-label="Pregunta ${i+1}, ${isAnswered(q)?'respondida':'sin responder'}">${String(i+1).padStart(2,'0')}</button>`).join('')}</div></div>`;
    }).join('')}</nav></details>`;
  }
  function feedbackMarkup(q,selected) {
    const correct=selected===q.correct,chosen=q.options.find(o=>o.key===selected),right=q.options.find(o=>o.key===q.correct);
    return `<section class="feedback ${correct?'':'needs-review'}" aria-labelledby="feedback-title" aria-live="polite">
      <h2 id="feedback-title" tabindex="-1">${correct?'El razonamiento es adecuado':'Revisá este mecanismo'}</h2>
      ${correct?'':`<p><strong>Elegiste ${esc(selected)}.</strong> ${esc(chosen.feedback)}</p>`}
      <p><strong>Respuesta de referencia: ${esc(q.correct)}.</strong> ${esc(right.label)}</p>
      <p>${esc(q.explanation)}</p>
      <details><summary>Por qué funciona o falla cada alternativa</summary><dl>${q.options.map(o=>`<dt>${esc(o.key)} · ${esc(o.label)}</dt><dd>${esc(o.feedback)}</dd>`).join('')}</dl></details>
    </section>`;
  }
  function quiz() {
    const qs=questions();state.index=Math.max(0,Math.min(state.index,qs.length-1));
    const q=qs[state.index],unit=unitById[q.unit],answered=isAnswered(q),selected=state.answers[q.id],count=answeredCount(qs),pending=qs.length-count;
    root.innerHTML=`
      <div class="quiz-top"><button class="text-button" data-action="home">← Cambiar recorrido</button><p>${count}/${qs.length} respondidas</p></div>
      <div class="progress-track" role="progressbar" aria-label="Preguntas respondidas" aria-valuemin="0" aria-valuemax="${qs.length}" aria-valuenow="${count}"><span style="width:${count/qs.length*100}%"></span></div>
      <div class="quiz-layout">${mapMarkup(qs)}
        <article class="question-card" data-question="${q.id}">
          <div class="question-meta"><p class="eyebrow">Videoclase ${q.unit} · ${esc(unit.title)}</p><span class="question-number">Pregunta ${state.index+1} de ${qs.length}</span></div>
          <h1 id="question-title" tabindex="-1">${esc(q.title)}</h1>
          <p class="prompt">${esc(q.prompt)}</p>
          ${FIGURES.figure(q.figure,answered)}
          <form id="answer-form">
            <fieldset class="options" ${answered?'disabled':''}><legend>Elegí una sola respuesta</legend>
            ${q.options.map(o=>{
              const isRight=answered && o.key===q.correct,isWrong=answered && o.key===selected && !isRight;
              return `<label class="option ${isRight?'correct':''} ${isWrong?'incorrect':''}"><input type="radio" name="answer" value="${o.key}" ${selected===o.key?'checked':''}><span class="option-key">${o.key}</span><span class="option-text">${esc(o.label)}${isRight?'<span class="option-badge">✓ Respuesta de referencia</span>':isWrong?'<span class="option-badge">Tu elección · para revisar</span>':''}</span></label>`;
            }).join('')}</fieldset>
            ${answered?'':`<details class="hint"><summary>Necesito una pista</summary><p>${esc(q.hint)}</p></details>`}
            ${answered?feedbackMarkup(q,selected):''}
            <div class="answer-actions"><div class="left-actions">${state.index>0?'<button type="button" class="button secondary" data-action="previous">← Anterior</button>':''}${answered?'':'<button type="submit" class="button" id="check-answer" disabled>Comprobar respuesta</button>'}</div>
              ${answered?`<button type="button" class="button" data-action="${state.index===qs.length-1?(pending?'pending':'results'):'next'}">${state.index===qs.length-1?(pending?`Completar pendientes (${pending})`:'Ver resultados'):'Pregunta siguiente →'}</button>`:''}
            </div>
          </form>
          <p class="reading-note"><strong>Para profundizar:</strong> ${esc(unit.reading)}. El PDF organiza siete unidades; este recorrido sigue las seis videoclases.</p>
          <p class="save-notice">${esc(storageText())}</p>
        </article>
      </div>`;
    const form=root.querySelector('#answer-form');
    form.addEventListener('change',()=>{const button=root.querySelector('#check-answer');if(button)button.disabled=!form.querySelector('input[name="answer"]:checked');});
    form.addEventListener('submit',event=>{
      event.preventDefault();if(isAnswered(q))return;
      const radio=form.querySelector('input[name="answer"]:checked');if(!radio)return;
      state.answers[q.id]=radio.value;save();quiz();focus(root.querySelector('#feedback-title'));
    });
  }
  function resultRows(qs) {
    return BANK.units.filter(u=>qs.some(q=>q.unit===u.id)).map(u=>{
      const items=qs.filter(q=>q.unit===u.id),n=score(items);
      return `<div class="result-row"><div><strong>${u.id}. ${esc(u.title)}</strong><p class="reading-note">${esc(u.reading)}</p></div><div class="progress-track" aria-hidden="true"><span style="width:${n/items.length*100}%"></span></div><span class="result-fraction">${n}/${items.length}</span></div>`;
    }).join('');
  }
  function results() {
    const qs=questions();
    if(answeredCount(qs)<qs.length){state.index=qs.findIndex(q=>!isAnswered(q));state.view='quiz';save();quiz();return;}
    const n=score(qs),percent=Math.round(n/qs.length*100),wrong=qs.length-n;
    root.innerHTML=`<section class="score-hero" aria-labelledby="result-title"><div class="score-circle"><strong>${n}<span aria-hidden="true" style="font-size:28px">/${qs.length}</span></strong><span>${percent}% de respuestas correctas</span></div><div><p class="eyebrow">${esc(scopeLabel())}</p><h1 id="result-title" tabindex="-1">Tu recorrido, tema por tema.</h1><p>${wrong?'Volvé sobre los mecanismos de las preguntas que necesitan revisión. Las explicaciones te ayudan a reconocer el origen de cada resultado.':'Completaste este recorrido con todas las respuestas de referencia. Podés repasar los razonamientos o realizar un nuevo intento.'}</p><p class="small">Autoevaluación formativa · Sin nota mínima obligatoria</p></div></section>
      <section class="result-panel" aria-labelledby="result-topics"><h2 id="result-topics">Resultados por videoclase</h2>${resultRows(qs)}</section>
      <div class="result-actions">${wrong?`<button class="button" data-action="review">Repasar ${wrong===1?'el error':`los ${wrong} errores`}</button>`:''}<button class="button ${wrong?'secondary':''}" data-action="restart">Reintentar este recorrido</button><button class="button secondary" data-action="home">Elegir otro recorrido</button></div>
      <p class="source-note" style="margin-bottom:38px">El porcentaje resume las respuestas de este recorrido; no es una certificación de dominio. Conservá el hábito de declarar qué contás, identificar qué se separa y vincular el resultado con su mecanismo.</p>`;
  }
  function review() {
    const wrong=questions().filter(q=>isAnswered(q)&&!isCorrect(q));
    if(!wrong.length){state.view='results';results();return;}
    root.innerHTML=`<div class="quiz-top"><button class="text-button" data-action="results">← Volver a los resultados</button><p>${wrong.length} ${wrong.length===1?'pregunta para repasar':'preguntas para repasar'}</p></div><h1 id="review-title" tabindex="-1" style="font-size:38px;margin-block:20px 30px">Revisá el razonamiento.</h1>${wrong.map(q=>{
      const selected=q.options.find(o=>o.key===state.answers[q.id]),right=q.options.find(o=>o.key===q.correct);
      return `<article class="review-card"><p class="eyebrow">Videoclase ${q.unit} · ${q.id}</p><h3>${esc(q.title)}</h3><p>${esc(q.prompt)}</p><p><strong>Tu elección: ${esc(selected.key)}.</strong> ${esc(selected.feedback)}</p><p><strong>Respuesta de referencia: ${esc(right.key)}.</strong> ${esc(right.label)}</p><p>${esc(q.explanation)}</p><p class="reading-note">${esc(unitById[q.unit].reading)}</p></article>`;
    }).join('')}<div class="result-actions"><button class="button" data-action="restart">Reintentar este recorrido</button><button class="button secondary" data-action="results">Volver a los resultados</button></div>`;
  }
  function render(focusPage=false) {
    stopAnimationTimer();
    if(state.view==='quiz')quiz();else if(state.view==='results')results();else if(state.view==='review')review();else home();
    save();
    if(focusPage)focus(root.querySelector('h1'));
  }
  function startScope(scope) {
    state.scope=scope==='all'?'all':Number(scope);
    const qs=questions(),pending=qs.findIndex(q=>!isAnswered(q));
    state.index=pending<0?0:pending;state.view=pending<0?'results':'quiz';render(true);
  }
  root.addEventListener('click',event=>{
    const button=event.target.closest('button[data-action]');if(!button)return;
    const action=button.dataset.action;
    if(action==='animation-step'){setAnimationStep(Number(button.dataset.step));return;}
    if(action==='animation-toggle'){toggleAnimation();return;}
    if(action==='start'){startScope(button.dataset.scope);return;}
    if(action==='home')state.view='home';
    else if(action==='goto'){state.index=Number(button.dataset.index);state.view='quiz';}
    else if(action==='next')state.index++;
    else if(action==='previous')state.index--;
    else if(action==='pending')state.index=questions().findIndex(q=>!isAnswered(q));
    else if(action==='results')state.view='results';
    else if(action==='review')state.view='review';
    else if(action==='restart'){
      questions().forEach(q=>delete state.answers[q.id]);state.attempt++;state.index=0;state.view='quiz';
    }
    render(true);
  });
  document.querySelector('.identity').addEventListener('click',event=>{event.preventDefault();state.view='home';render(true);});
  render();
})();
