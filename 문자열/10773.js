//실버4 제로
const solution = (n) => {
  let sum = 0; //총합
  let tmp = []; //스택으로 활용
  for (let i = 0; i < n; i++) {
    //불러주는 수가 0이 아니라면
    //스택에 넣고 총합계산
    if (input[i]) {
      tmp.push(input[i]);
      sum += input[i];
    } else {
      //0이라면 계산을 잘못한거기 때문에
      //제일 마지막에 불렀던 숫자를 빼줘야하기 떄문에
      //pop() 이용
      sum -= tmp.pop();
    }
  }
  console.log(sum);
};

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
  //input값 형변환
  input = input.map((el) => Number(el));
  let n = input.shift();
  solution(n);
  process.exit();
});
