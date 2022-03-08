function solution(array, commands) {
  var answer = [];

  for (a = 0; a < commands.length; a++) {
    let i = commands[a][0];
    let j = commands[a][1];
    let k = commands[a][2];

    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }
  return answer;
}
