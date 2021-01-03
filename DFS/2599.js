//실버4 짝 정하기
// 실패한 문제
function solution(list) {
  //같은 학교인지 판별하기 위한 방문표시
  let visited = new Array(list.length).fill(false);
  //남 여 짝꿍이 되는 쌍
  let pair = [];
  //리스트수(초등학교 개수만큼) 반복
  for (let i = 0; i < list.length; i++) {
    //i학교의 남자 학생 인원
    let tmp = list[i][0];
    //i학교 여자 학생과는 짝꿍이 될수없으므로 방문처리
    visited[i] = true;
    for (let j = 0; j < list.length; j++) {
      //같은학교가 아니면
      if (visited[j] === false) {
        //여학생수와 남학생수에서 적은값으로 빼주면 그 만큼 짝꿍 쌍이 생긴다.
        let girl = list[j][1];
        let tmp = Math.min(girl, list[i][0]);
        //맺어진 짝꿍 쌍을 배열에 추가
        pair.push(tmp);
        //쌍을 맺은 남학생 여학생은 값을 뺴준다.
        list[i][0] -= tmp;
        list[j][1] -= tmp;
      }
    }
    //다음 학교를 위해 방문처리를 리셋
    visited[i] = false;
  }

  //
  let result = true;
  //list(학교 학생들)에 값이 남아있다면 짝이 안된 학생이 있으므로 결과값 false
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (list[i][j] !== 0) {
        result = false;
      }
    }
  }
  //위의 결과값에 따라
  //모든 학생들의 짝을 정할 수 있으면 첫 줄에 1을 출력하고, 그렇지 않으면 0을 출력한다.
  if (result) {
    console.log(1);
    //pair에 넣은 맺어진 쌍의 수를 학교당 한번에 출력하기 위해(list길이에 -1을 해준다 (배열은 0부터시작))
    for (let k = 0; k < pair.length; k += list.length - 1) {
      //list(학교 길이)만큼 잘라서 한번씩 출력
      let text = pair.slice(k, k + (list.length - 1));
      console.log(text.join(" "));
    }
  } else {
    console.log(0);
  }
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
  //학생수
  let [n] = input[0];
  input = input.slice(1);
  let list = Array.from(Array(input.length), () => new Array(2));

  //이차원 배열에 학생들의 수를 대입
  for (let i = 0; i < input.length; i++) {
    let [x, y] = input[i].split(" ").map((el) => parseInt(el));
    list[i][0] = x;
    list[i][1] = y;
  }
  solution(list);
  process.exit();
});
