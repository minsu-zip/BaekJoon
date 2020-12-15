// 실버2 잃어버린 괄호
function solution(list) {
    let tmp = [];

    //-로 분리된 list를 다시한번 +기준으로 분리 시킨후 각각의 배열요소의 합을 구함
    for(i of list){
        let cnt = 0;
        let s = i.split("+");
        //+로 분리후 cnt에 값을 더한후 tmp에 삽입
        for(j of s){
            cnt += parseInt(j);
        }
        tmp.push(cnt);
    }

    //  위 과정을 eval함수로 함축할 수 있다. 하지만 백준사이트에서는 오류가 발생긴다.
    //  //list 각각의 요소 전부 계산 eval이용
    //  for(i of list){
    //     tmp.push(eval(i));
    // }

    let result = tmp[0];

    //연산된 결과값에 - 를 붙여 계산
    for(let j=1; j<tmp.length; j++){
        result -= tmp[j];
    }
    console.log(result);

}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;
rl.on("line", function (line) {
    input = line;
    rl.close();
}).on("close", function () {
    //-기준으로 문자열 분리
    let list = input.split('-');
    solution(list);
});
