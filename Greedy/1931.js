// 실버2 회의실배정
function solution(n, list) {

    //회의 끝나는 시간 기준으로 정렬
    list.sort(function(a, b) { 

        //회의 끝나는 시간이 동일하다면 시작 시간으로 정렬
        if(a[1] === b[1]){
            return a[0] - b[0]
        }
        else{
            return a[1] - b[1];
        }
    });
    
    //초기 세팅
    let count = 1;
    let tmp = list[0][1];

    //회의 시작 끝나는 시간과 시작 시간 비교
    for(let i=1; i<n; i++){
        if(tmp <= list[i][0]){
            tmp = list[i][1];
            count += 1;
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
    input.push(line);
}).on("close", function () {
    let n = parseInt(input[0]);
    input = input.slice(1);

    let list = [];
    for(i of input){
        list.push(i.split(' ').map((el) => parseInt(el)));
    }

    solution(n, list);
});