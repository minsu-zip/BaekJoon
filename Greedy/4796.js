//실버 5 캠핑
function solution(list) {
    let L = 0; //L일 동안
    let P = 0; //P일 중
    let V = 0; //휴가 일수
    let cnt = 0; //이용 일 수

    for(let i=0; i<list.length; i++){
        cnt = 0;
        L = list[i][0];
        P = list[i][1];
        V = list[i][2];

        //휴가 일 수가 캠핑 영업보다 클때까지 반복
        while(V > P){
            V -= P; // 캠핑을 한번 이용할때 P일 차감
            cnt += L; //이용 일 수 카운트
        }
        //캠핑 영업일 보다 휴가 일 수가 적지만 남은 휴가가 있다.
        //이용 가능한 일 수가 휴가일 수 보다 클때 사용기간은 휴가일 수 만큼만 사용가능하다.
        if(L > V){
            cnt += V;
        }
        //휴가일수가 클때는 이용가능한 일 수만큼만 사용가능하다.
        else{
            cnt += L;
        }
        console.log("Case "+(i+1) +": "+cnt);
    }
   

}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let list = [];
rl.on("line", function (line) {
   //여러줄 입력
   input.push(line);

}).on("close", function () {

    //이중 배열로 만들기
    for(i of input){
        list.push(i.split(" ").map((el) => parseInt(el)));
    }
    //마지막 입력값 000 없애기
    list = list.slice(0,-1);
    solution(list);
    process.exit();
});
