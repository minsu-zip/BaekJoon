// 실버1 신입사원
function solution(n, list) {
   
    let arr = [];
    //이차원 배열 int형으로 바꿈
    for(i of list){
        arr.push(i.split(" ").map((el) => parseInt(el)));
    }
    
    //서류 순위별로 정렬
    arr.sort(function(a, b){
        return a[0] - b[0];
    })

    //서류 1등 기준
    let tmp = arr[0][1];
    //뽑는 사원수
    let count = 1;
    //면접 등수 기준으로 사원수 카운트
    for(let i=1; i<arr.length; i++){
        if(tmp > arr[i][1]){
            tmp = arr[i][1];
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
    input.push(line)
}).on("close", function () {
    let test = parseInt(input[0]);
    //console.log("test case : "+test);
    //for 인원수 카운터 변수
    let c = 1;
    //인원수 파악
    let n = 0;
    let list = []
    for(let i=1; i<=test; i++){
        n = parseInt(input[c]);
        //console.log("인원 : "+n);
        c += 1;
        for(let j=c; j<c+n; j++){
            list.push(input[j]);
        }
        solution(n, list);
        c += n; //인원수 카운트
        list = [];
    }
});
