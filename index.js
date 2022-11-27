let container = document.querySelector('.container')
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let input = document.querySelector("input");
let score = document.querySelector(".score");
let count = 0;

num1.innerHTML = Math.ceil(Math.random() * 10);
num2.innerHTML = Math.ceil(Math.random() * 10);


input.addEventListener("keypress", (event) => {

  if (event.key === "Enter") {
    let sum = parseInt(num1.innerHTML) + parseInt(num2.innerHTML);
    let response = parseInt(input.value);

    if (sum === response) {
      count++;
      score.innerHTML = count;
      num1.innerHTML = Math.ceil(Math.random() * 10);
      num2.innerHTML = Math.ceil(Math.random() * 10);
      input.value = "";
    } else {
      count--;
      score.innerHTML = count;
      input.value = "";
    }

    if(count === 10) {
        container.innerHTML = 'You win!'
        container.style.fontSize = '32px'
    }
  }
});

