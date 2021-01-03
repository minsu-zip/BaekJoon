//실버3 바이러스
function solution(n, graph) {
  //방문노드 초기화
  visited = new Array(n + 1).fill(false);
  //노드 1로 dfs시작
  dfs(n, 1);
  //dfs의 재귀가 끝난후 로직
  let cnt = 0;
  //1번 컴퓨터를 통해 바이러스 걸리게 되는 컴퓨터수니깐 1을 제외하고 실행
  for (let i = 2; i <= n; i++) {
    if (visited[i] === true) {
      cnt += 1;
    }
  }
  console.log(cnt);
}

function dfs(n, start) {
  //현재 노드 방문처리
  visited[start] = true;

  for (let i = 1; i <= n; i++) {
    //그래프에서 현재 노드에 해당하는 인접행렬 탐색해서 연결노드가 있거나
    //그 연결된 노드가 아직 방문 처리되지 않았다면 그 노드로 재귀실행
    if (graph[start][i] === 1 && visited[i] === false) {
      dfs(n, i);
    }
  }
}

const { format } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//전역 변수로 이용
let input = [];
let graph = [];
let visited = [];

rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  //es6문법 구조분해 할당후 map을 통해 형 변환
  let [n, m] = input.map((el) => parseInt(el));
  input = input.slice(2);

  // 1번 노드부터 사용하기 위해 n+1로 크기 사용
  graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  for (let i of input) {
    //구조분해 할당으로 x,y에 입력 쌍 대입
    let [x, y] = i.split(" ").map((el) => parseInt(el));
    //x,y는 x,y에서 서로 갈 수 있다는 의미이므로 양방향 그래프에 1대입
    //양방향인 이유는 연결쌍이  5,1  5,3으로 주어지면 1의 연결노드는 3,5인데
    //단방향으로 하게되면 1에서 연결된것이 없으므로 인접노드가 없다고 뜬다
    graph[x][y] = 1;
    graph[y][x] = 1;
  }

  solution(n, graph);
  process.exit();
});
