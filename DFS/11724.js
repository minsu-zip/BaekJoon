//실버2 연결 요소의 개수

//DFS 기본 로직과 동일
function DFS(v) {
  visited[v] = true;
  for (let i = 1; i < graph.length; i++) {
    if (graph[v][i] === 1 && visited[i] === false) {
      DFS(i);
    }
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//전역 변수
let input = [];
let graph = [];
let visited = [];
rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  let [n, m] = input[0].split(" ").map((el) => parseInt(el));
  input = input.slice(1);
  //그래프 정점 개수만큼 초기화
  graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  //방문표시를 위한 visited도 초기화
  visited = new Array(n + 1).fill(false);

  //연결 간선의 정보를 좌표로 그래프에 넣어준다.
  for (let i of input) {
    let [x, y] = i.split(" ").map((el) => parseInt(el));
    graph[x][y] = 1;
    graph[y][x] = 1;
  }

  //연결 요소 개수 카운트 변수
  let cnt = 0;
  //정점의 개수만큼 DFS실행
  for (let i = 1; i < n; i++) {
    //i의 정점에 대해 DFS를 한번 수행하고 나오면 i와 연결된 정점들은
    //전부 방문 처리가 된 상태일것이다. 따라서 반복문을 통해 모든 리스트의
    //돌면서 그 정점이 아직 처리가 안된것이라면 이전의 정점들과는 연결되지 않았음을 의미한다.
    if (visited[i] === false) {
      DFS(i);
      cnt += 1;
    }
  }
  console.log(cnt);
  process.exit();
});
