// 골드4 수 묶기

function solution(n, list) {


  //0과 음수 리스트
  let negative = [];
  //양수 리스트
  let positive = [];
  let result = 0;

  for (i of list) {
    if (i <= 0) {
      negative.push(i);
    } else if (i > 1) {
      positive.push(i);
    } else if (i === 1) {
      // 숫자가 1인경우는 덧셈이 더 큰 수를 가지므로 미리 계산해준다.
      result += i;
    }
  }

  //큰 값들 부터 계산해야하기 때문에 음수와 양수 정렬

  //양수는 내림차순
  positive.sort(function (a, b) {
    return b - a;
  });

  //음수는 오름차순
  negative.sort(function (a, b) {
    return a - b;
  });

  //양수 리스트 길이에 맞게 반복문
  for (let i = 0; i < positive.length; i += 2) {
    if (i + 1 < positive.length) {
      result += positive[i] * positive[i + 1];
    } else {
      result += positive[i];
    }
  }

  //음수 리스트 길이에 맞게 반복문
  for (let j = 0; j < negative.length; j += 2) {
    if (j + 1 < negative.length) {
      result += negative[j] * negative[j + 1];
    } else {
      result += negative[j];
    }
  }
  console.log(result);

    //큰 수 부터 계산하기 위해 내림차순
    list.sort(function (a, b) {
      return b - a;
    });

    // 곱셈 결과값
    let result = 0;
    // 덧셈 결과값 
    let result1 = 0;
    // 첫번째, 두번째 값을 카운트해주는 변수
    let cnt = 0;
    // 첫번째 값 임시저장 변수
    let tmp = 0;
    //최종 결과값
    let r = 0;
    for (let i = 0; i < n; i++) {
      cnt += 1;

      if (cnt === 2) {
        cnt = 0;
        result = tmp * list[i];
        result1 = tmp + list[i];
        r -= tmp;
        r += Math.max(result, result1);
      } else {
        tmp = list[i];
        r += tmp;
      }
    }

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
  input.push(line);
}).on("close", function () {
  //n개
  let n = input[0];
  //수열 list
  let list = input.slice(1);
  list = list.map((el) => parseInt(el));
  solution(n, list);
  process.exit();
});
