const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('fs');const assert=require('assert');const path=require('path');
const ROOT=path.resolve(__dirname,'..');
const BASE=process.env.QUIZ_BASE_URL || require('url').pathToFileURL(path.join(ROOT,'index.html')).href;
const OUT=process.env.QUIZ_TEST_OUTPUT || path.join(ROOT,'.test-output');fs.mkdirSync(OUT,{recursive:true});
const bank=JSON.parse(fs.readFileSync(path.join(ROOT,'questions.json'),'utf8'));
const errors=[];const checks=[];
function check(name,cond){assert(cond,name);checks.push(name);console.log('PASS',name)}
async function overflow(page,label){const d=await page.evaluate(()=>({w:document.documentElement.clientWidth,sw:document.documentElement.scrollWidth}));check('no horizontal overflow: '+label,d.sw<=d.w+1)}
async function submit(page,key){await page.locator(`input[name=answer][value=${key}]`).check();await page.getByRole('button',{name:'Comprobar respuesta',exact:true}).click();await page.locator('#feedback-title').waitFor();}
async function onward(page){await page.locator('[data-action=next],[data-action=results],[data-action=pending]').last().click()}
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH || undefined,args:['--no-sandbox']});
 const ctx=await browser.newContext({viewport:{width:1440,height:1050},reducedMotion:'reduce'});const page=await ctx.newPage();page.on('pageerror',e=>errors.push(String(e)));await page.goto(BASE);
 await page.locator('#home-title').waitFor();await overflow(page,'desktop home');
 check('official logo loaded',await page.locator('.identity img').evaluate(el=>el.complete && el.naturalWidth>0));
 check('six class choices',await page.locator('.unit-card').count()===6);
 check('reduced motion uses last static stage',await page.locator('#intro-sequence').getAttribute('data-step')==='2');
 await page.screenshot({path:path.join(OUT,'home_desktop.png'),fullPage:true});
 await page.locator('[data-action=start][data-scope=all]').click();
 check('check disabled without response',await page.locator('#check-answer').isDisabled());
 await page.locator('input[value=A]').focus();await page.keyboard.press('ArrowRight');
 check('keyboard selects radio',await page.locator('input[value=B]').isChecked());
 await page.locator('.hint summary').click();check('hint visible',await page.locator('.hint p').isVisible());
 await page.screenshot({path:path.join(OUT,'question_desktop.png'),fullPage:true});
 for(let i=0;i<bank.questions.length;i++){
  const q=bank.questions[i];check('question order '+q.id,await page.locator('.question-card').getAttribute('data-question')===q.id);
  if(q.figure)await page.screenshot({path:path.join(OUT,`${q.id}_before.png`),fullPage:true});
  await submit(page,q.correct);
  check('immutable submitted answer '+q.id,await page.locator('fieldset input').evaluateAll(xs=>xs.every(el=>el.matches(':disabled'))));
  check('feedback for all four options '+q.id,await page.locator('.feedback dd').count()===4);
  if(q.figure)await page.screenshot({path:path.join(OUT,`${q.id}_after.png`),fullPage:true});
  if(i===0){await page.reload();await page.locator('#feedback-title').waitFor();check('resume after reload',await page.locator('input[value=B]').isChecked());}
  await onward(page);
 }
 await page.locator('#result-title').waitFor();check('full score is 24/24',(await page.locator('.score-circle').innerText()).includes('24/24'));check('six per-class result rows',await page.locator('.result-row').count()===6);check('no error review for perfect attempt',await page.locator('[data-action=review]').count()===0);
 await overflow(page,'desktop results');await page.screenshot({path:path.join(OUT,'results_desktop.png'),fullPage:true});
 await page.getByRole('button',{name:'Elegir otro recorrido'}).click();await page.locator('[data-action=start][data-scope="2"]').click();
 check('scope completed from full course',(await page.locator('.score-circle').innerText()).includes('4/4'));
 await page.getByRole('button',{name:'Reintentar este recorrido',exact:true}).click();
 const stored=await page.evaluate(()=>JSON.parse(localStorage.getItem('aurelio-spruce:meiosis:autoevaluacion:v1')));
 check('retry clears only selected class',Object.keys(stored.answers).length===20 && bank.questions.filter(q=>q.unit===2).every(q=>!stored.answers[q.id]));
 await ctx.close();
 const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});const m=await mobile.newPage();m.on('pageerror',e=>errors.push(String(e)));await m.goto(BASE);await overflow(m,'mobile home');await m.screenshot({path:path.join(OUT,'home_mobile.png'),fullPage:true});
 await m.locator('[data-action=start][data-scope="6"]').click();check('mobile question map collapsed',!(await m.locator('.question-map').getAttribute('open')));
 await overflow(m,'mobile question');await m.screenshot({path:path.join(OUT,'question_mobile.png'),fullPage:true});
 const units=bank.questions.filter(q=>q.unit===6);
 for(let i=0;i<units.length;i++){
  const q=units[i];await submit(m,i===0?q.correct:q.options.find(o=>o.key!==q.correct).key);
  if(i===1)await m.screenshot({path:path.join(OUT,'feedback_mobile.png'),fullPage:true});
  await onward(m);
 }
 check('mixed score is 1/4',(await m.locator('.score-circle').innerText()).includes('1/4'));
 check('mixed score percentage is 25%',(await m.locator('.score-circle').innerText()).includes('25%'));
 await m.screenshot({path:path.join(OUT,'results_mobile.png'),fullPage:true});await overflow(m,'mobile results');
 await m.locator('[data-action=review]').click();check('review contains exactly three mistakes',await m.locator('.review-card').count()===3);await m.screenshot({path:path.join(OUT,'review_mobile.png'),fullPage:true});
 await m.getByRole('button',{name:'Volver a los resultados',exact:true}).last().click();await m.reload();await m.locator('#result-title').waitFor();check('results survive reload',(await m.locator('.score-circle').innerText()).includes('1/4'));
 await mobile.close();
 const small=await browser.newContext({viewport:{width:320,height:700},reducedMotion:'reduce'});const s=await small.newPage();await s.goto(BASE);await overflow(s,'320px home');await s.locator('[data-action=start][data-scope=all]').click();await overflow(s,'320px question');await small.close();
 const anim=await browser.newContext({viewport:{width:1100,height:900},reducedMotion:'no-preference'});const ap=await anim.newPage();await ap.goto(BASE);check('animation starts in auto',await ap.locator('#intro-sequence').getAttribute('data-step')==='auto');await ap.locator('#animation-toggle').click();check('animation can pause',(await ap.locator('#intro-sequence').getAttribute('class')).includes('paused'));await ap.locator('[data-action=animation-step][data-step="1"]').click();check('animation manual step selects meiosis I',await ap.locator('#intro-sequence').getAttribute('data-step')==='1');await anim.close();
 check('no browser JavaScript errors',errors.length===0);
 fs.writeFileSync(path.join(OUT,'ui_checks.json'),JSON.stringify({passed:checks.length,checks,errors},null,2));
 await browser.close();console.log('DONE',checks.length);
})().catch(e=>{console.error(e);process.exit(1)});
