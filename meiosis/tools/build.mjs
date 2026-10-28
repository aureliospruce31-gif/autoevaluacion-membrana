import {readFileSync,writeFileSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const data=JSON.parse(readFileSync(new URL('questions.json',root),'utf8'));
writeFileSync(new URL('questions.js',root),'window.MEIOSIS_BANK = '+JSON.stringify(data,null,2)+';\n');
const lines=['# Meiosis — Banco docente y clave','',`${data.brand} · ${data.questions.length} preguntas · 5 por videoclase.`,'','La clave y las explicaciones forman parte de la autoevaluación formativa.',''];
for(const unit of data.units) {
  lines.push(`## Videoclase ${unit.id} · ${unit.title}`,'',unit.reading,'');
  for(const q of data.questions.filter(q=>q.unit===unit.id)) {
    lines.push(`### ${q.id} · ${q.title}`,'',q.prompt,'',...q.options.map(o=>`${o.key}. ${o.label}`),'',`**Clave: ${q.correct}.** ${q.explanation}`,'',`Pista: ${q.hint}`,'',...q.options.map(o=>`- **${o.key}:** ${o.feedback}`),'');
  }
}
writeFileSync(new URL('docs/banco-docente.md',root),lines.join('\n'));
console.log(`Banco actualizado: ${data.questions.length} preguntas.`);
