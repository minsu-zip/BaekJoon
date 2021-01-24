//실버3 바이러스
function solution(n, graph) {
  //방문노드 초기화
  visited = new Array(n + 1).fill(false);
  let result = 0;
  //노드 1로 dfs시작
  result = dfs(n, 1);
  console.log(result);
}

function dfs(n, start) {
  //현재 노드 방문처리
  visited[start] = true;
  let stack = [];
  let cnt = 0;
  //시작노드 삽입
  stack.push(start);
  while (stack.length !== 0) {
    let tmp = stack.pop(); //연결된 인접노드 가져옴
    for (let i = 1; i <= n; i++) {
      //현재 노드와 연결된것이 있고 그 연결노드가 아직 미방문이면
      if (graph[tmp][i] === 1 && visited[i] === false) {
        stack.push(i); //인접노드 삽입
        cnt += 1; // 감염수
        visited[i] = true; //인접노드 방문처리
      }
    }
  }
  return cnt;
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
