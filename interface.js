document.addEventListener("DOMContentLoaded", () => {
  const bowling = new Bowling();
  document.querySelector('#total').innerText = bowling.total;
  document.querySelector('#frame').innerText = bowling.frame;
  document.querySelector('#ball').innerText = bowling.ball;

  const updateTotal = () => {
    document.querySelector('#total').innerText = bowling.total;
    document.querySelector('#frame').innerText = bowling.frame;
    document.querySelector('#ball').innerText = bowling.ball;
  }

  document.getElementById('score0').addEventListener("click", () => {
    bowling.input_score(0);
    updateTotal(); 
})

  document.getElementById('score1').addEventListener("click", () => {
    bowling.input_score(1);
    updateTotal(); 
})

document.getElementById('score2').addEventListener("click", () => {
  bowling.input_score(2);
  updateTotal(); 
})

document.getElementById('score3').addEventListener("click", () => {
  bowling.input_score(3);
  updateTotal(); 
})

document.getElementById('score4').addEventListener("click", () => {
  bowling.input_score(4);
  updateTotal(); 
})

document.getElementById('score5').addEventListener("click", () => {
  bowling.input_score(5);
  updateTotal(); 
})

document.getElementById('score6').addEventListener("click", () => {
  bowling.input_score(6);
  updateTotal(); 
})

document.getElementById('score7').addEventListener("click", () => {
  bowling.input_score(7);
  updateTotal(); 
})

document.getElementById('score8').addEventListener("click", () => {
  bowling.input_score(8);
  updateTotal(); 
})

document.getElementById('score9').addEventListener("click", () => {
  bowling.input_score(9);
  updateTotal(); 
})

document.getElementById('strike').addEventListener("click", () => {
  bowling.input_score(10);
  updateTotal(); 
})

})