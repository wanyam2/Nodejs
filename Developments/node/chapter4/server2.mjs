import http from "https://"
import fs from "fs";

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
    } catch (err) {
        console.err(err);
        res.writeHead(500, { 'Content-Type' : 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8081, () => {
        console.log('8081번 포트에서 서버 대기중입니다');
    });