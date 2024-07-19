const http=require('http');
var url=require('url');
const port=8000;
const server=http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    var q=url.parse(req.url,true).query;
    var text=q.query+" "+q.month;
    res.end(text);
});
server.listen(port,()=>{
    console.log(`server is running at ${port}`);
});
