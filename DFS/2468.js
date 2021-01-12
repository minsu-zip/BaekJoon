//실버1 안전 영역
const solution = (tmp_graph) => {
  let cnt = 0;
  let cntList = [];
  //비의 높이만큼
  for (let k = 1; k < 101; k++) {
    //그래프 모든 영역
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        //비의 높이보다 클때만 수행
        if (graph[i][j] > k) {
          DFS(i, j, k);
          //한번의 DFS수행이 끝나면 한 영역의 탐색 종료
          cnt += 1;
        }
      }
    }
    cntList.push(cnt);
    cnt = 0;
    //참조없는 복사
    //하나의 비의높이(k)를 수행한후 그래프는 기존의 값으로 초기화
    graph = JSON.parse(JSON.stringify(tmp_graph));
  }
  //배열중 최댓값 출력
  console.log(Math.max.apply(null, cntList));
};

const DFS = (i, j, k) => {
  let stack = [];
  stack.push(i);
  stack.push(j);

  while (stack.length !== 0) {
    //스택 특성상 반대로 빼줌
    let y = stack.pop();
    let x = stack.pop();
    for (let c = 0; c < dx.length; c++) {
      let nx = x + dx[c];
      let ny = y + dy[c];

      //그래프 범위안이고 비의높이(k)보다 값이 크면 방문처리
      if (RangeCheck(nx, ny) && graph[nx][ny] > k) {
        graph[nx][ny] = -1;
        stack.push(nx);
        stack.push(ny);
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
let n = 0;
let graph = [];
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  n = Number(input.shift());
  // console.log(n);
  graph = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    graph[i] = input[i].split(" ").map((el) => Number(el));
  }

  //graph변수가 전역 변수로 설정되어 있기 때문에 깊은 복사로 통해 주소값을 제외한 데이터만 복사
  //참조없는 복사
  let tmp_graph = JSON.parse(JSON.stringify(graph));
  solution(tmp_graph);
  process.exit();
});
