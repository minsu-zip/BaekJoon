//실버1 영역 구하기
const solution = () => {
  let cnt = [];
  //모든 그래프를 돌면서 0일때만 DFS실행
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 0) {
        //DFS한번 수행후 한곳의 영역이 전부 방문처리됨
        cnt.push(DFS(i, j));
      }
    }
  }

  cnt.sort((a, b) => a - b);
  console.log(cnt.length); //배열 길이가 곧 영역의 개수
  console.log(cnt.join(" "));
};

//재귀로 작성시 재귀깊이로 인한 런타임 에러때문에 반복문으로 작성
const DFS = (i, j) => {
  //첫번째 단계 셋팅
  let stack = [];
  stack.push(i);
  stack.push(j);
  graph[i][j] = 1; //방문처리
  let num = 1; //영역의 넓이 변수

  //첫번째 이후 계속 반복 DFS재귀와 동일
  while (stack.length !== 0) {
    //스택특성상 꺼꾸로 y,x에 대입
    let y = stack.pop();
    let x = stack.pop();
    for (let k = 0; k < dx.length; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      //배열 범위안이거나 방문한적이 없다면
      if (RangeCheck(nx, ny) && graph[nx][ny] === 0) {
        stack.push(nx); //현재 위치 스택에 삽입
        stack.push(ny);
        graph[nx][ny] = 1; //방문처리
        num += 1; //영역의 넓이 누적 계산
      }
    }
  }
  //한 영역의 탐색이 끝나면 영역의 넓이 반환
  return num;
};

//그래프(배열) 범위 검증
const RangeCheck = (i, j) => {
  if (i >= 0 && i < m && j >= 0 && j < n) {
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
let [m, n, k] = [0];
//영역의 넓이
let sum = 0;
//상하좌우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  [m, n, k] = input
    .shift()
    .split(" ")
    .map((el) => Number(el));

  graph = Array.from(Array(m), () => Array(n).fill(0));

  for (let i = 0; i < k; i++) {
    //제일 왼쪽 위를 0,0으로 사용하기 위해
    //상하 반전을 위해 x,y값 반대로 입력
    let [y1, x1, y2, x2] = input
      .shift()
      .split(" ")
      .map((el) => Number(el));

    //그래프에 도형 그리기
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        graph[x][y] = 1;
      }
    }
  }
  //함수실행
  solution();
  process.exit();
});
