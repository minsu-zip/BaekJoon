//골드4_카드 정렬하기
//최소힙 자료구조
function MinHeap() {
  this.heap = [0];
  this.insert = (v) => {
    this.heap.push(v);
    let p = this.heap.length - 1;
    while (p > 1 && this.heap[Math.floor(p / 2)] > this.heap[p]) {
      let tmp = this.heap[Math.floor(p / 2)];
      this.heap[Math.floor(p / 2)] = this.heap[p];
      this.heap[p] = tmp;
      p = Math.floor(p / 2);
    }
  };
  this.getLength = () => {
    return this.heap.length;
  };
  this.delete = () => {
    if (this.heap.length - 1 < 1) {
      return 0;
    }
    let deletedItem = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let p = 1;
    while (p * 2 < this.heap.length) {
      let min = this.heap[p * 2];
      let minP = p * 2;
      if (p * 2 + 1 < this.heap.length && min > this.heap[p * 2 + 1]) {
        min = this.heap[p * 2 + 1];
        minP = p * 2 + 1;
      }
      if (this.heap[p] < min) {
        break;
      }
      let tmp = this.heap[p];
      this.heap[p] = this.heap[minP];
      this.heap[minP] = tmp;
      p = minP;
    }
    return deletedItem;
  };
}

const solution = (n, list) => {
  let cnt = 0;

  for (let i = 1; i < n; i++) {
    //제일 작은 카드 두개의 묶음을 빼낸다.
    let card1 = list.delete();
    let card2 = list.delete();
    //카드 두 묶음을 계산후 카운트
    let sum = card1 + card2;
    cnt += sum;
    //계산된 결과를 최소힙에 넣어줌
    list.insert(sum);
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
  let n = Number(input.shift());

  //최소힙 클래스 생성
  let list = new MinHeap();
  for (let i = 0; i < n; i++) {
    //최소힙을 이용하여 값을 하나씩 넣어준다.
    let tmp = Number(input.shift());
    list.insert(tmp);
  }
  solution(n, list);
  process.exit();
});
