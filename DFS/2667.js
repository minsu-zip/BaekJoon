//실버1 단지번호붙이기
const solution = () => {
  let cnt = []; //단지별 아파트 개수를 담는 배열

  //이중그래프 전체 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //방문한적 없다면 DFS호출
      if (graph[i][j] === 1) {
        DFS(i, j);
        //DFS가 한번 수행되고 나면 하나의 단지 전체 방문처리 완료
        //전역 변수로 사용한 home을 배열에 넣고 초기화
        cnt.push(home);
        home = 0;
      }
    }
  }

  console.log(cnt.length);
  cnt.sort((a, b) => a - b); //오름차순 정렬
  cnt.map((el) => console.log(el)); //map함수로 순회
};

const DFS = (i, j, a) => {
  //범위 안에 속하고 방문처리가 되지 않았을때
  if (RangeCheck(i, j) && graph[i][j] === 1) {
    graph[i][j] = 0; //방문처리
    home += 1;
    for (let k = 0; k < dx.length; k++) {
      DFS(i + dx[k], j + dy[k]);
    }
  }
};

//그래프(배열) 범위 검증
function RangeCheck(i, j) {
  if (i >= 0 && i < n && j >= 0 && j < n) {
    return true;
  } else return false;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let graph = [];
let n = 0;
let home = 0; //단지별 아파트 개수
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  n = input.shift();
  graph = Array.from(Array(n), () => new Array(n));

  //입력값을 그래프에 담아줌
  for (let i = 0; i < n; i++) {
    graph[i] = input[i].split("").map((el) => Number(el));
  }
  solution();
  process.exit();
});
