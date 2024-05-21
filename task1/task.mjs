import {promises as fs} from "fs"; // fs 모듈에서 프로미스 불러오기 근데 이제 fs라고 부르는,,

console.log('시작');
async function task() { // task 함수 선언
    try { // try 함수를 통해서 콜백
        const file1 = await fs.readFile('./readme2.txt');
        console.log('1번', file1.toString());

        const file2 = await fs.readFile('./readme2.txt');
        console.log('2번', file2.toString());

        const file3 = await fs.readFile('./readme2.txt');
        console.log('3번', file3.toString());

        console.log('끝');

    } catch (error) {
        console.error(error); // error 생길 경우 실행
    }
}
task(); // task 함수 실행
