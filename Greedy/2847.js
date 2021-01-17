//실버4 게임을 만든 동준이
const solution = (n, list) => {
  // 현재 list는 역순 상태

  let cnt = 0; //연산 횟수
  //1부터 시작
  for (let i = 1; i < n; i++) {
    //이전값보다 현재값이 크거나 같다면 현재값을 감소 시켜야함
    if (list[i - 1] <= list[i]) {
      //현재값 - 이전값 + 1(이전값 보다 1이 작아야하므로)
      cnt += list[i] - list[i - 1] + 1;
      //현재값을 이전값 -1 보다 작은 값으로 설정
      list[i] = list[i - 1] - 1;
    }
  }
  console.log(cnt);
};

const readline = require("readline");
const { isRegExp } = require("util");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  let n = Number(input.shift());
  let list = input.map((el) => Number(el));

  //list 역순으로 전달(큰값부터 연산 편하게 하기 위해)
  solution(n, list.reverse());
  process.exit();
});
