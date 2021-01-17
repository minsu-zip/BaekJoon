//실버2 나이트의 이동
const BFS = (s_x, s_y, f_x, f_y) => {
  graph[s_x][s_y] = 1; //시작위치 방문처리
  graph[f_x][f_y] = 2; //종료위치(찾아야하는 위치)
  let stack = [s_x, s_y]; //stack
  let cnt = 0;

  while (stack.length !== 0) {
    cnt += 1; //카운트한 뒤, 현재 위치에서 모든 방향에 대해 탐색 진행
    let num = Number(stack.length / 2); // stack에 x축,y축 두개가있으므로 /2한 길이만큼
    //현재 스택의 길이만큼
    for (let k = 0; k < num; k++) {
      let x = stack.shift();
      let y = stack.shift();

      //시작 위치와 종료위치가 같다면 0출력후 종료
      if (s_x === f_x && s_y === f_y) {
        console.log(0);
        return;
      }

      //나이트 이동범위
      for (let j = 0; j < dx.length; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        //이동한 곳이 종료위치라면 이동횟수 출력후 종료
        if (RangeCheck(nx, ny) && graph[nx][ny] === 2) {
          console.log(cnt);
          return;
        }

        //이동한 곳이 범위안이고 0이라면 다음 이동으로 진행
        if (RangeCheck(nx, ny) && graph[nx][ny] === 0) {
          graph[nx][ny] = 1;
          stack.push(nx, ny);
        }
      }
    }
  }
};

//배열 범위 체크
const RangeCheck = (i, j) => {
  if (i >= 0 && i < n && j >= 0 && j < n) {
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
let n = 0;
let dx = [-1, -2, -2, -1, 1, 2, 2, 1];
let dy = [-2, -1, 1, 2, -2, -1, 1, 2];

rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  let T = Number(input.shift());

  for (let i = 0; i < T; i++) {
    n = Number(input.shift());
    graph = Array.from(Array(n), () => Array(n).fill(0));

    //시작 위치
    let [s_x, s_y] = input
      .shift()
      .split(" ")
      .map((el) => Number(el));
    //종료 위치
    let [f_x, f_y] = input
      .shift()
      .split(" ")
      .map((el) => Number(el));

    BFS(s_x, s_y, f_x, f_y);
  }

  process.exit();
});
