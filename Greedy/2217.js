// 실버4 로프
function solution(n, list) {

    list.sort(function(a, b) {
        return a - b;
    })

    let result = 0;
    //로프중 최대값 찾기
    for(let i=0; i<n; i++){
        if(result < list[i] * (n-i)){
            result = list[i] * (n-i);
        }
    }
    console.log(result);
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

    input = input.map((el) => parseInt(el));
    let n = input[0];
    let list = input.slice(1);
    solution(n, list);
});
