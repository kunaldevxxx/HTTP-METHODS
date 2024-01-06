const http=require('http');
const fs = require('fs')
const myserver=http.createServer((req,res)=>{
    const log=`${Date.now}:${req.url}\n`
    fs.appendFile('log.txt',log,(err,data)=>{
       switch(req.url){
        case '/':res.end("Home");
        break
        case '/about':res.end("I Am Kunal");
        break 
        default:
            res.end("404 Not Found");
       }
    })
console.log("New Request Recieved");
console.log(req.headers)
console.log("Hello From Server");
});

myserver.listen(8000,()=>{
    console.log("server started")
})
