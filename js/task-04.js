let counterValue = 0;


const btnDecrementEl = document.getElementById("counter").firstElementChild;

const btnIncrementEl = document.getElementById("counter").lastElementChild;

const valueEl = document.querySelector("#value");



btnDecrementEl.addEventListener('click', () => {
    valueEl.textContent = counterValue -= 1;
})


btnIncrementEl.addEventListener('click', () => {
    valueEl.textContent = counterValue += 1;
})