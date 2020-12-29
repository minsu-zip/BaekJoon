//실버 5 병든 나이트
function solution(n, m) {
  // 모든 이동은 시작지점 포함이다.
  //세로 길이가 1인 경우 이동이 불가능하므로 1출력
  if (n === 1) {
    console.log(1);
  }
  //세로 길이가 2일때 위 아래로 한칸씩 밖에 못 움직이므로 2, 3번의 경우만 가능
  else if (n === 2) {
    //두 칸 오른쪽으로 갈때마다 한번씩 이동하므로 m에 +1을 해준뒤 2로 나눔
    //이동 횟수가 4이상이면 1~4번 최소 한번이상은 옮겨야하는데 1,4번이 안되니깐
    //4와 두 칸씩 옮긴 횟수와 비교해서 작은값 대입
    console.log(Math.min(4, parseInt((m + 1) / 2)));
  }
  // 세로가 3이상인 경우
  else {
    // 세로가 3이상이지만 가로가 6보다 작다면 최대로 움직일려면 1,4번의 경우만 이용 가능
    if (m <= 6) {
      //이동 횟수가 4이상이면 1~4번 최소 한번이상은 옮겨야하는데 2,3번이 안되니깐
      //4와 두 칸씩 옮긴 횟수와 비교해서 작은값 대입
      console.log(Math.min(4, m));
    } 
    // 세로길이 3이상, 가로길이 6이상일때 1~4모든 경우 가능
    else {
      //최대로 이동할려면 2,3은 각각 한번씩 이후 1,4번만 반복해주면된다.
      //2,3을 한번씩 하고 나면 오른쪽으로 두칸씩 이동한것이 되므로 m에서 -2를 해주면된다.
      console.log(m - 2);
    }
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  let n = input[0];
  let m = input[1];
  solution(n, m);

  process.exit();
});
