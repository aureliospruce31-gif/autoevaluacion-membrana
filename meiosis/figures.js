'use strict';
(() => {
  const BLUE = '#2877ae', GOLD = '#bd8b2a', INK = '#193b50', LINE = '#cbdce1';
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const label = (x,y,text,size=24,color=INK) => `<text x="${x}" y="${y}" text-anchor="middle" fill="${color}" font-size="${Math.max(24,size)}" font-family="system-ui,sans-serif">${esc(text)}</text>`;
  const cell = (x,y,rx=115,ry=88) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="white" stroke="${LINE}" stroke-width="2"/>`;
  function chromosome(x,y,length,color,duplicated=true) {
    if (!duplicated) return `<path d="M${x},${y-length} V${y+length}" stroke="${color}" stroke-width="8" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="4" fill="white" stroke="${color}" stroke-width="2"/>`;
    return [-1,1].map(s => `<path d="M${x+s*13},${y-length} Q${x+s*7},${y-12} ${x+s*4},${y} Q${x+s*7},${y+12} ${x+s*13},${y+length}" fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round"/>`).join('') + `<ellipse cx="${x}" cy="${y}" rx="8" ry="5" fill="white" stroke="${color}" stroke-width="2"/>`;
  }
  const arrow = (x1,y1,x2,y2,color='#91a7af') => `<path d="M${x1},${y1} L${x2},${y2}" stroke="${color}" stroke-width="2" fill="none" marker-end="url(#arrow)"/>`;
  const svg = (body,alt,height=280) => `<svg viewBox="0 0 720 ${height}" role="img" aria-label="${esc(alt)}" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#91a7af"/></marker></defs>${body}</svg>`;
  function orientation(alleles=false) {
    let b = cell(360,130,300,112);
    [88,632].forEach(x => b += `<circle cx="${x}" cy="130" r="7" fill="${GOLD}"/>`);
    [[90,47],[185,32]].forEach(([y,len],p) => {
      [[300,BLUE],[420,GOLD]].forEach(([x,c],h) => {
        b += `<path d="M${h?632:88},130 Q${(x+(h?632:88))/2},${y-15} ${x},${y}" fill="none" stroke="#b4c3c9" stroke-width="2"/>`;
        b += chromosome(x,y,len,c);
        if(alleles) b += label(x+(h?50:-50),y+5,`${p?'B':'A'}${h+1}`,18,c);
      });
    });
    return b;
  }
  function linked(answered) {
    let b = label(195,29,'Locus A') + label(520,29,'Locus B');
    [67,118,169,220].forEach((y,i) => {
      const c = i<2?BLUE:GOLD, exchange = answered && (i===1 || i===2);
      b += `<path d="M100,${y} H${exchange?360:615}" stroke="${c}" stroke-width="10" stroke-linecap="round"/>`;
      if(exchange) b += `<path d="M360,${y} H615" stroke="${i===1?GOLD:BLUE}" stroke-width="10" stroke-linecap="round"/>`;
      [195,520].forEach(x => b += `<path d="M${x},${y-12} v24" stroke="${INK}" stroke-width="2"/>`);
      const a=i<2?1:2, z=exchange?3-a:a;
      b += label(664,y+5,`A${a}B${z}`,16,c);
    });
    b += `<path d="M360,99 V188" stroke="${GOLD}" stroke-width="2" stroke-dasharray="4 4"/>`;
    b += label(360,265,answered?'Resultado del intercambio':'CO entre los loci A y B',24);
    return b;
  }
  function errorDiagram(type,answered) {
    let b='';
    if(!answered) {
      b += cell(225,140,125,85) + cell(500,140,125,85);
      if(type==='mi_error') {
        b += chromosome(165,140,48,BLUE)+chromosome(225,140,48,GOLD)+chromosome(285,140,28,BLUE)+chromosome(500,140,28,GOLD);
        b += label(360,30,'Después de meiosis I',24);
      } else {
        b += chromosome(190,140,48,BLUE)+chromosome(260,140,28,BLUE)+chromosome(465,140,48,GOLD)+chromosome(535,140,28,GOLD);
        b += label(360,30,'Después de meiosis I normal',24);
        b += label(225,255,'El fallo ocurrirá en esta célula',24,INK);
        b += arrow(125,236,176,181,GOLD);
      }
    } else {
      const counts = type==='mi_error'?[3,3,1,1]:[3,1,2,2];
      const colors = type==='mi_error'?[[BLUE,GOLD,BLUE],[BLUE,GOLD,BLUE],[GOLD],[GOLD]]:[[BLUE,BLUE,BLUE],[BLUE],[GOLD,GOLD],[GOLD,GOLD]];
      counts.forEach((n,i) => {
        const cx=105+i*170;b+=cell(cx,138,73,77);
        for(let j=0;j<n;j++) b+=chromosome(cx+(j-(n-1)/2)*24,138,((type==='mi_error' && i>1) || (type==='mii_error' && i===1) || j===n-1)?25:43,colors[i][j],false);
        b+=label(cx,244,`${n} cromosomas`,15);
      });
      b+=label(360,30,'Cuatro productos finales',24);
    }
    return b;
  }
  const captions={
    after_s:'Tres pares de homólogos después de la replicación. Cada estructura duplicada representa un cromosoma; las conexiones entre homólogos se omiten.',
    after_i:'Una célula representativa después de meiosis I. Se omite recombinación para seguir los recuentos. Cada estructura duplicada conserva dos hermanas.',
    orientation:'Un bivalente contiene dos homólogos duplicados. Las conexiones con el huso resumen su orientación funcional; no representan todos los microtúbulos.',
    anaphase_ii:'Una sola célula de meiosis II, antes de la citocinesis. Cada trazo es un cromosoma hijo independiente. Largo y corto identifican tipos cromosómicos distintos.',
    sc:'Esquema ampliado de dos ejes, filamentos transversales y región central. Los bucles representan cromatina; no se individualizan las cromátidas.',
    one_meiosis:'Dos pares de homólogos, con A y B en cromosomas diferentes. La orientación mostrada reúne A1 y B1 hacia un polo. Se omite el aporte de recombinación.',
    linked:'Cada línea horizontal representa una cromátida completa. El ejemplo sigue dos loci del mismo cromosoma; no representa hebras individuales de ADN.',
    mi_error:'Se representan ambos pares del modelo 2n = 4. El fallo afecta al par largo; el par corto se distribuye correctamente. Las estructuras duplicadas conservan sus hermanas.',
    mii_error:'Se representan ambos pares del modelo 2n = 4. Solo falla la separación de hermanas de un cromosoma en una de las dos células; las demás segregaciones son correctas.'
  };
  function figure(id,answered=false) {
    if(!id) return '';
    let b='';
    if(id==='after_s') {
      [0,1,2].forEach(p => {
        [0,1].forEach(h => b+=chromosome(110+p*225+h*80,135,64-p*15,h?GOLD:BLUE));
        b+=label(150+p*225,246,`Par ${p+1}`,17);
      });
    } else if(id==='after_i') {
      b=cell(360,133,170,105)+chromosome(300,133,61,BLUE)+chromosome(425,133,38,GOLD);
    } else if(id==='orientation') b=orientation();
    else if(id==='one_meiosis') b=orientation(true);
    else if(id==='anaphase_ii') {
      b=cell(360,132,300,108);
      [[180,BLUE,47],[245,GOLD,29],[540,BLUE,47],[475,GOLD,29]].forEach(([x,c,l])=>b+=chromosome(x,132,l,c,false));
      b+=arrow(306,132,272,132)+arrow(414,132,448,132);
      b+=label(360,268,'Toda la célula antes de citocinesis',16);
    } else if(id==='sc') {
      [0,1].forEach(h=>{
        const x=h?460:260,c=h?GOLD:BLUE;b+=`<path d="M${x},50 V222" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`;
        for(let y=63;y<204;y+=26) b+=`<path d="M${x},${y} C${x+(h?90:-90)},${y-27} ${x+(h?90:-90)},${y+42} ${x},${y+19}" fill="none" stroke="${c}" stroke-width="3" opacity=".7"/>`;
      });
      for(let y=61;y<222;y+=18)b+=`<path d="M260,${y} H460" stroke="#9db5bd" stroke-width="2"/>`;
      b+=`<path d="M360,49 V222" stroke="#73949c" stroke-width="7"/>`;
      b+=label(260,263,'Elemento lateral',16)+label(460,263,'Elemento lateral',16)+label(360,27,'Región central',15);
    } else if(id==='linked') b=linked(answered);
    else if(['mi_error','mii_error'].includes(id)) b=errorDiagram(id,answered);
    return `<figure class="question-figure">${svg(b,captions[id])}<figcaption>${esc(captions[id])}</figcaption></figure>`;
  }
  function intro() {
    let one=cell(360,132,148,91)+chromosome(280,132,51,BLUE)+chromosome(328,132,32,BLUE)+chromosome(392,132,51,GOLD)+chromosome(440,132,32,GOLD);
    one+=label(360,273,'Antes de dividirse · ADN replicado',24);
    let two=cell(210,132,103,83)+cell(510,132,103,83)+chromosome(177,132,48,BLUE)+chromosome(243,132,29,BLUE)+chromosome(477,132,48,GOLD)+chromosome(543,132,29,GOLD);
    two+=label(360,273,'Meiosis I: se separan los homólogos',18);
    let three='';
    [0,1,2,3].forEach(k=>{const x=105+k*170,c=k<2?BLUE:GOLD;three+=cell(x,132,70,75)+chromosome(x-17,132,39,c,false)+chromosome(x+17,132,24,c,false);});
    three+=label(360,273,'Meiosis II: se separan las hermanas',18);
    return svg(`<g class="intro-scene intro-one">${one}</g><g class="intro-scene intro-two">${two}</g><g class="intro-scene intro-three">${three}</g>`,'Modelo reducido de una meiosis normal, sin aporte de recombinación: una célula 2n = 4 con ADN replicado, dos células después de meiosis I y cuatro productos n = 2 después de meiosis II.',310);
  }
  window.MEIOSIS_FIGURES={figure,intro};
})();
