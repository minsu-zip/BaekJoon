//브론즈2 거스름돈
function solution(pay, input, list) {
    let money = pay - input;
    let count = 0;

    for(i of list){
        if(money === 0){
            break;
        }
        count += parseInt(money / i);
        money %= i;
    }
    console.log(count);
}

const { format } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;
rl.on("line", function (line) {
    input = parseInt(line);
    rl.close();
}).on("close", function () {
    
    let pay = 1000;
    let list = [500, 100, 50, 10, 5, 1];
    solution(pay, input, list);
    process.exit();
});