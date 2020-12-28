//골드3 저울
function solution(n, list) {
    //오름차순
    list.sort(function(a,b){
        return a - b;
    })

    let sum = 0;
    for(i of list){
        //누적합 +1이 현재 인덱스의 값보다 크거나 같다면 누적합 +1 까지 표현이 가능하다.
        if(sum + 1 >= i){
            sum += i; 
        }
        //누적합 +1이 현재 인덱스의 값보다 작다면 이는 누적합 +1 이 표현이
        //불가능하다는 의미이다.
        else{
            break;
        }
    }
    //출력시 누적합 +1을 해준다.
    console.log(sum+1);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {

    let n = parseInt(input[0]);
    let list = input[1].split(" ").map((el) => parseInt(el));
    solution(n, list);
    process.exit();
});
