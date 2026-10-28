import {readFileSync,writeFileSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const data=JSON.parse(readFileSync(new URL('questions.json',root),'utf8'));
writeFileSync(new URL('questions.js',root),'window.MEIOSIS_BANK = '+JSON.stringify(data,null,2)+';\n');
console.log(`Banco actualizado: ${data.questions.length} preguntas.`);
