// 브론즈 1 설탕문제

function solution(n) {
    let count = 0;

    while(n > 0){
        if(n % 5 === 0){
            n -= 5;
            count += 1;
        }
        else if(n % 3 === 0){
            n -= 3;
            count += 1;
        }
        else if(n > 5){
            n -= 5;
            count += 1;
        }
        else{
            count = -1;
            break;
        }
    }
    console.log(count);

}

const { count } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = 0;
rl.on("line", function (line) {
    input = parseInt(line);
    rl.close();
}).on("close", function () {
    solution(input);
    process.exit();
});
