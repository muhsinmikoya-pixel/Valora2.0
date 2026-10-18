const http=require('http'),fs=require('fs'),path=require('path');
const root=path.join(__dirname,'public'),port=process.env.PORT||3000;
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
const server=http.createServer((req,res)=>{
 const u=new URL(req.url,'http://localhost');
 res.setHeader('X-Content-Type-Options','nosniff');
 if(u.pathname==='/api/health'){res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify({ok:true,app:'Valora 2.0'}))}
 if(u.pathname==='/api/ask'&&req.method==='POST'){let body='';req.on('data',c=>body+=c);req.on('end',()=>{let d={};try{d=JSON.parse(body)}catch{};res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({ok:true,answer:'Backend connected. Real AI answers require an AI provider API key configured securely on the server.',question:String(d.question||'').slice(0,1000)}))});return}
 let p=decodeURIComponent(u.pathname);if(p==='/')p='/index.html';let file=path.resolve(root,'.'+p);if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden')}
 fs.readFile(file,(e,b)=>{if(e){res.writeHead(404,{'Content-Type':'text/plain'});return res.end('Not found')}res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(b)})
});
server.listen(port,()=>console.log('Valora 2.0 running on '+port));
