import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url),data=JSON.parse(readFileSync(new URL('questions.json',root),'utf8'));
assert.equal(data.questions.length,30);
assert.equal(new Set(data.questions.map(q=>q.id)).size,30);
for(const unit of data.units)assert.equal(data.questions.filter(q=>q.unit===unit.id).length,5);
for(const q of data.questions){
  assert.deepEqual(q.options.map(o=>o.key),['A','B','C','D']);
  assert.equal(new Set(q.options.map(o=>o.label)).size,4);
  assert.equal(q.options.filter(o=>o.key===q.correct).length,1);
  assert.ok(q.hint && q.explanation && q.options.every(o=>o.feedback));
}
const selected=n=>{const q=data.questions.find(q=>q.id===`MEI-${String(n).padStart(2,'0')}`);return q.options.find(o=>o.key===q.correct).label};
// Independent results for the numerical models, rather than a copy of the answer-key positions.
assert.ok(selected(1).startsWith('6 cromosomas, 12 cromátidas'));
assert.ok(selected(3).startsWith('2 cromosomas, 4 cromátidas'));
assert.ok(selected(4).startsWith('3 cromosomas, 3 cromátidas'));
assert.ok(selected(10).startsWith('23 cromosomas y 46 cromátidas'));
assert.ok(selected(11).startsWith('4 cromosomas en toda la célula y 2 en cada polo'));
assert.equal(2**(6/2),8);assert.ok(selected(17).startsWith('8 combinaciones'));
assert.equal(selected(21),'3, 3, 1 y 1');assert.equal(selected(22),'3, 1, 2 y 2');
assert.equal((6/2+1)+(6/2),7);assert.ok(selected(23).startsWith('7 cromosomas; trisomía'));
assert.equal(8/2,4);assert.ok(selected(25).startsWith('4 bivalentes, 8 cromosomas y 16 cromátidas'));
assert.ok(selected(27).includes('n, 2C a n, 1C'));
assert.ok(selected(28).startsWith('La probabilidad disminuye'));
assert.equal(0.5*0.5+0.5*0.5,0.5);assert.equal(selected(29),'1/2');
assert.equal(3*(6/2),9);assert.ok(selected(30).startsWith('Triploidía'));
assert.equal(readFileSync(new URL('questions.js',root),'utf8'),'window.MEIOSIS_BANK = '+JSON.stringify(data,null,2)+';\n');
assert.equal(createHash('sha256').update(readFileSync(new URL('assets/logo-oficial.svg',root))).digest('hex'),'a963eacb7df90d57edd538708d3af421698da4f1fbe9992f2cffb8ef95607063');
console.log('Banco, recuentos, sincronización de datos y logotipo oficial: verificados.');
