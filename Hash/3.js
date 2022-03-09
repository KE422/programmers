let clothes = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];
// 1차 시도
// function solution(clothes) {
//   let len = clothes.length;
//   let cnt = len;

//   for (let i = 0; i < len; i++) {
//     let curr = clothes[i][1];
//     for (let j = i; j < len; j++) {
//       if (curr !== clothes[j][1]) cnt++;
//     }
//   }
//   return cnt;
// }
// --> 1개 고를 경우 + 2개 고를 경우만 되네

// 2차 시도
function solution(clothes) {
  let len = clothes.length;
  let category = [];
  let cnt = 1;

  for (let i = 0; i < len; i++) {
    let curr = clothes[i][1];
    if (!category.includes(curr)) category.push(curr);
  }

  for (i = 0; i < category.length; i++) {
    cnt *= clothes.filter((item) => item[1] === category[i]).length + 1;
  }

  return cnt - 1;
}

solution(clothes);
