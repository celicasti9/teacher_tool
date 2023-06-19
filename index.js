function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submitBtn');
  const resultDiv = document.getElementById('result');

  submitBtn.addEventListener('click', function() {
    const testsInput = document.getElementById('tests');
    const tests = parseInt(testsInput.value);

    if (isNaN(tests)) {
      resultDiv.textContent = 'Please enter a valid number of tests.';
      return;
    }

    const scores = [];

    function getScore(index) {
      const score = prompt(`Enter score for Test ${index + 1}:`);
      const parsedScore = parseInt(score);

      if (!isNaN(parsedScore)) {
        scores.push(parsedScore);
      }

      if (index < tests - 1) {
        getScore(index + 1);
      } else {
        const avg = average(scores);
        resultDiv.textContent = `The average score is: ${avg.toFixed(2)}`;
      }
    }

    getScore(0);
  });
});
