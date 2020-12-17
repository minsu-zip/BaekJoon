// 실버1 동전0 문제

function solution(n, k, list) {
    let count = 0;

    for(let i of list) {
        if(k === 0){
            break;
        }
        if(k >= i){
            count += parseInt(k / i);
            k = k % i;
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

    //tmp에 n, k 저장
    let tmp = input[0].split(' ').map((el) => parseInt(el));
   
    //화폐단위 list에 저장
    let list = input.slice(1);
    //map을 이용하여 INT형으로 바꿈
    list = list.map((el)=> parseInt(el));
    //큰 화폐부터 계산 역순
    list.reverse();
    solution(tmp[0], tmp[1], list);
    process.exit();
});
