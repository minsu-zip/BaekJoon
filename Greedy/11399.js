// 실버 3 ATM문제

function solution(n, list) {

    //js sort는 ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음
    list.sort(function(a, b) { // 오름차순
        return a - b;
    });

    let count = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            count += list[j];
        }
    }
    console.log(count);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
    //여러줄 입력
    input.push(line)
}).on("close", function () {
    let n = parseInt(input[0]);
    //띄어쓰기 기준으로 배열에 넣기
    let list = input[1].split(' ').map((el) => parseInt(el));
    solution(n, list);
    process.exit();
});
