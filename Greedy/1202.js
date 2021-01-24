//우선순위 큐
class PriorityQueue {
  constructor() {
    this.store = [];
  }
  //무게와 가격을 받아서 배열에 넣어준다.
  enqueue(name, score) {
    this.store.push([name, score]);
  }
  //제일 큰 값을 리턴
  dequeue() {
    let entry = 0;
    this.store.forEach((item, index) => {
      if (this.store[entry][1] < this.store[index][1]) {
        entry = index;
      }
    });
    return this.store.splice(entry, 1);
  }
}

const solution = (k, priorityQueue, bag) => {
  let cnt = 0;
  //가방 개수 만큼
  for (let i = 0; i < k; i++) {
    //우선순위 큐에서 제일 큰 보석정보 가져옴
    let value = priorityQueue.dequeue();

    //가방을 순회하면서 보석 무게보다 크거가 같은 경우는 그 보석을 담았다고 가정하고
    //담은 가방을 제외한 가방을 리턴함
    bag = bag.map((el, index) => {
      if (el >= value[0][0]) {
        return;
      } else {
        return el;
      }
    });
    cnt += value[0][1];
  }
  console.log(cnt);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  let [n, k] = input
    .shift()
    .split(" ")
    .map((el) => Number(el));

  //우선순위 큐 생성
  const priorityQueue = new PriorityQueue();

  for (let i = 0; i < n; i++) {
    let [x, y] = input[i].split(" ").map((el) => Number(el));
    //우선순위 큐에 보석 무게, 가격 담아줌
    priorityQueue.enqueue(x, y);
  }
  let bag = [];
  //가방넣어줌
  for (let j = 0; j < k; j++) {
    bag.push(Number(input[j]));
  }
  //가방 오름차순정렬
  bag = bag.sort((a, b) => a - b);
  solution(k, priorityQueue, bag);
  process.exit();
});
