// 골드5 단어 수학
function solution(n, list) {
  let tmp = 0; //객체에서 value 의미
  //여기서 각각의 단어는 key가되고 해당자리수는 value가됨
  let result = {}; //객체 key value 담음
  let v = 0; //검색된 key의 value값

  //단어들의 개수만큼
  for (let i = 0; i < n; i++) {
    //각각의 알파벳만큼
    for (let j = 0; j < list[i].length; j++) {
      //tmp는 각 단어의 자리수만큼 제곱한 값이다 ex)1000, 100, ...
      //단어의 총 길이 - (j+1)를 해줘야지 해당하는 단어가 위치하는 자리수가 구해진다
      tmp = Math.pow(10, list[i].length - (j + 1));

      // (검색 in 객체)는 객체에 key가 있는지 검색하는 함수
      if ([list[i][j]] in result) {
        //result객체에 해당 단어가 있으면
        //v에 key에 해당하는 value값을 가져옴
        v = result[list[i][j]];
        //js 펼침 연산자(es6문법)
        //result에 기존 result를 복사해서 넣고 그중에서 원래있던 key(단어(list[i][j]))가 있으면 교체하고 
        //value값을 기존 value값 + 새로운 value값으로 대체
        result = { ...result, [list[i][j]]: v + tmp };
      } else {
        //객체에 겹치는 key(알파벳)이 없으면 key(알파벳) : value(자리수) 형식으로 넣어줌
        result = { ...result, [list[i][j]]: tmp };
      }
    }
  }
  //반복문을 빠져나오면 'A' : 1000 형식으로 들어가져있는데
  //이 값을 큰 값부터 9,8,7...곱해서 더해야한다. 즉 정렬이 필요하다.
  //객체를 value값에 따라 key값과 함께 정렬할려면 이차원배열에 삽입후 배열을 정렬해줘야한다
  
  //key, value값을 이차원배열에 삽입
  let sortlist = [];
  for (let i in result) {
    sortlist.push([i, result[i]]);
  }
  console.log(sortlist);
  //2차원배열에서 value값에따라 정렬
  sortlist.sort(function (a, b) {
    return b[1] - a[1];
  });

  let cnt = 9;
  let sum = 0;
  //반복문을 통해 value값에 9부터 카운트해주면서 곱해줌
  for (let k = 0; k < sortlist.length; k++) {
    sum += sortlist[k][1] * cnt;
    cnt -= 1;
  }
  console.log(sum);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  let n = parseInt(input[0]);
  let list = input.slice(1);
  solution(n, list);
  process.exit();
});
