// 실버2 한 줄로 서기
function solution(n, list) {

    let result = new Array(n).fill(0);
    //i는 키 순서를 의미(1부터~)
    for(let i=1; i<n+1; i++){
        //왼쪽에 몇명이 있는지 저장하는 변수
        let tmp = list[i-1];
        let count = 0;

        //j는 배열 인덱스를 의미
        for(let j=0; j<n; j++){
            //왼쪽에 있는 변수와 카운트가 일치하고 빈 배열이면 삽입
            if(count === tmp && result[j] === 0){
                result[j] = i;
                break;
            }
            //result배열이 비어있을때만 카운트(이미 있는값들은 무시)
            else if(result[j] === 0){
                count += 1;
            }
        }
    }
    //배열 요소를 줄바꿈 없이 하나씩 출력하기 위해 join사용
    let r = result.join(" ")
    console.log(r);
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
    //n명
    let n = parseInt(input[0]);

    //띄어쓰기 기준으로 배열에 넣기
    let list = input[1].split(' ').map((el) => parseInt(el));
    solution(n, list);
    process.exit();
});
