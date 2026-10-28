import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,join,extname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';
const root=fileURLToPath(new URL('../',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml'};
const server=http.createServer(async(req,res)=>{
  try{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(!pathname.startsWith('/meiosis/')){res.writeHead(404);res.end();return;}
    const relative=pathname.slice('/meiosis/'.length)||'index.html';
    const target=resolve(root,relative);
    if(!target.startsWith(resolve(root)+sep)){res.writeHead(403);res.end();return;}
    const data=await readFile(target);res.writeHead(200,{'Content-Type':types[extname(target)]||'application/octet-stream'});res.end(data);
  }catch{res.writeHead(404);res.end();}
});
server.listen(0,'127.0.0.1',()=>{
  const port=server.address().port;
  const child=spawn(process.execPath,[join(root,'tests/ui.cjs')],{cwd:root,stdio:'inherit',env:{...process.env,QUIZ_BASE_URL:`http://127.0.0.1:${port}/meiosis/`}});
  child.on('error',e=>{console.error(e);server.close(()=>process.exit(1))});
  child.on('exit',code=>server.close(()=>process.exit(code??1)));
});
