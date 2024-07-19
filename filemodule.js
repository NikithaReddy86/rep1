var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('demo.html',function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 not found");
        }
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write(data);
         return res.end();
    });
}).listen(8001,()=>{
    console.log('server is running at http://localhost:8001');
});