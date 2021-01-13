//풀이 실패 - 시간초과 판정
//실버2 트리의 부모 찾기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let graph = [];
rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  let n = Number(input.shift());

  graph = Array.from(Array(n + 1), () => new Array());

  //양방향 인접그래프
  for (let i = 0; i < input.length; i++) {
    let [x, y] = input[i].split(" ").map((el) => Number(el));
    graph[x].push(y);
    graph[y].push(x);
  }

  //노드 방문처리
  let visited = new Array(n + 1).fill(false);
  //재귀로직 대신 스택 이용
  let stack = [1];
  //부모의 노드를 가지는 배열
  let parent = new Array(n + 1);

  //반복문을 돌면서 인접노드를 방문처리하고 스택에 넣고
  //부모의 노드를 삽입
  while (stack.length !== 0) {
    let tmp = stack.shift();
    for (let j of graph[tmp]) {
      if (visited[j] === false) {
        visited[j] = true;
        parent[j] = tmp;
        stack.push(j);
      }
    }
  }

  //부모 노드 출력
  for (let k = 2; k < n + 1; k++) {
    console.log(parent[k]);
  }
  process.exit();
});
