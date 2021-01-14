const solution =() =>{
   
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

    solution();
    process.exit();
});
