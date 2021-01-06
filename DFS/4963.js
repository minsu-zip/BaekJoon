//실버2 섬의 개수
const solution = () => {
  //별 섬의 개수
  let cnt = 0;
  //가로 세로 배열 높이 구하기
  [w, h] = input
    .shift()
    .split(" ")
    .map((el) => Number(el));
  //00이면 케이스 종료
  if (w === 0 && h === 0) {
    return;
  } else if (w === 1 && h === 1) {
    cnt = Number(input.shift());
  } else {
    //input값 자체가 그래프이니깐 그래프로 변환
    assignment(h, w);

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        //방문하지 않은 노드일때만 DFS수행
        if (graph[i][j] === 1) {
          //한번 수행하고 나면 인접노드까지 전부 수행
          DFS(i, j);
          cnt += 1;
        }
      }
    }
  }
  console.log(cnt);
};

//그래프에 위치 넣어주는 함수
const assignment = (h, w) => {
  graph = Array.from(Array(h), () => Array(w).fill(0));

  for (let i = 0; i < h; i++) {
    //input에서 한 줄씩 꺼내서 그래프에 대입
    let tmp = input[i].split(" ").map((el) => Number(el));
    graph[i] = tmp;
  }
  //다음 테스트 케이스를 위해 배열 자름
  input = input.slice(h);
};

const DFS = (i, j) => {
  if (RangeCheck(i, j) && graph[i][j] === 1) {
    //현재 위치한 장소를 0을 넣어줌으로써 방문처리
    graph[i][j] = 0;
    //상하좌우 대각선까지 이동
    for (let k = 0; k < move_x.length; k++) {
      DFS(i + move_x[k], j + move_y[k]);
    }
  }
};

//배열 범위 체크
const RangeCheck = (i, j) => {
  if (i >= 0 && i < h && j >= 0 && j < w) {
    return true;
  } else return false;
};

const { group } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let graph = [];
let [w, h] = [0];
//순서대로 상,하,좌,우, 왼쪽위, 오른쪽위, 왼쪽 아래, 오른쪽 아래
let move_x = [-1, 1, 0, 0, -1, -1, 1, 1];
let move_y = [0, 0, -1, 1, -1, 1, -1, 1];
rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  //입력값 처리

  //테스트 케이스 개수가 주어지지 않아 배열이 없을때까지 반복
  while (input.length !== 0) {
    solution();
    //한번 수행후 초기화
    graph.length = 0;
  }

  process.exit();
});
