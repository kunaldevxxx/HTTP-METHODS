const http=require('http');
const fs = require('fs');
const url = require('url');
const myserver=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end();
    const log=`${Date.now}:${req.url}\n`
    const myUrl=url.parse(req.url,true);
    console.log(myUrl)
    fs.appendFile('log.txt',log,(err,data)=>{
       switch(myUrl.pathname){
        case '/':res.end("Home");
        break
        case '/about':
            const username=myUrl.query.myname
            res.end(`Hi,${username}`);
        break 
        default:
            res.end("404 Not Found");
       }
    })
console.log("New Request Recieved");

console.log("Hello From Server");
});

myserver.listen(8000,()=>{
    console.log("server started")
})
