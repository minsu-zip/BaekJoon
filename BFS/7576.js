const solution = (start) => {
  //BFS수행후 가능한 모든 토마토들이 익게됨.
  let day = BFS(start);

  // 0이 있는 경우 안익은 토마토가 있으므로 -1출력후 종료
  for (let i = 0; i < n; i++) {
    if (graph[i].indexOf(0) !== -1) {
      console.log(-1);
      return;
    }
  }
  //모든 토마토가 익은 경우는 날짜 출력
  console.log(day);
};

const BFS = (start) => {
  //시작날짜는 빼줘야하기 때문에 -1부터 시작
  let day = -1;
  while (start.length !== 0) {
    day += 1;
    let num = Number(start.length / 2); //(x,y좌표가 따로 들어가있으니 /2)
    //start스택에는 익은 토마토들의 좌표가 들어있다.
    //즉 start의 길이만큼 반복하면 하루만에 인접한 다른 모든 토마토들을 익게해준다.
    for (let k = 0; k < num; k++) {
      let x = start.shift();
      let y = start.shift();

      for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (RangeCheck(nx, ny) && graph[nx][ny] === 0) {
          //익었다는 표시(방문처리와 같은 의미)
          graph[nx][ny] = 1;
          //익은 토마토 좌표넣기
          start.push(nx, ny);
        }
      }
    }
  }
  return day;
};

//배열 범위 체크
const RangeCheck = (i, j) => {
  if (i >= 0 && i < n && j >= 0 && j < m) {
    return true;
  } else return false;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let graph = [];
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
let [m, n] = [0];
rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  [m, n] = input
    .shift()
    .split(" ")
    .map((el) => Number(el));

  graph = Array.from(Array(n), () => new Array(m));
  let start = [];
  for (let i = 0; i < n; i++) {
    graph[i] = input
      .shift()
      .split(" ")
      .map((el) => Number(el));

    //그래프 값중에 1이 있는 경우, 익은 토마토의 좌표
    let j = graph[i].indexOf(1);
    if (j !== -1) {
      start.push(i, j);
    }
  }

  solution(start);
  process.exit();
});
