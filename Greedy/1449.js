//실버3 수리공 항승
function solution(N, L, list) {
    //구멍난 위치순으로 정렬
    list.sort(function(a,b){
        return a-b;
    })

    //구멍난 위치부터 테이프로 고칠수있는 범위
    let fix = 0;
    let cnt = 0;
    for(let i=0; i<N; i++){
        // fix보다 작거나 같은 구멍난 위치는 하나의 테이프로 해결가능
        if(fix < list[i]){
            //하나의 테이프로 고칠수 있는 범위로 넘어가면
            //새 테이프가 필요하다.
            cnt += 1;
            fix = list[i] + L -1;

        }
    }
    console.log(cnt);
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

    let tmp = input[0].split(" ").map((el) => parseInt(el));
    let N = tmp[0]; //구멍난 개수
    let L = tmp[1]  //테이프 길이
    let list = input[1].split(' ').map((el) => parseInt(el));
    solution(N, L, list);
    process.exit();
});
