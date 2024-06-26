import "dotenv/config";
import express from "express";
import path from "node:path";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const __dirname = path.resolve();

const app = express();
app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use((req, res, next) => {
    console.log("모든 요청에 다 실행된다");
    next();
});

app.get('/', (req, res, next) => {
    console.log('GET/요청에서만 실행됨')
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다')
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.get("/", (req, res) => {
    // res.send('Hello World!');
    res.sendFile(path.join(process.cwd(), './index.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});

console.log(process.env.PORT);