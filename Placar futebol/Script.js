
let golsA = 0;
let golsB = 0;

function alterarGols(time, valor) {
  if (time === 'A') {
    golsA = Math.max(0, golsA + valor);
    document.getElementById('golsA').innerText = golsA;
  } else {
    golsB = Math.max(0, golsB + valor);
    document.getElementById('golsB').innerText = golsB;
  }
}

function resetar() {
  golsA = 0;
  golsB = 0;
  document.getElementById('golsA').innerText = 0;
  document.getElementById('golsB').innerText = 0;
}
