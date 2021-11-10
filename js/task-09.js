const btnColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

function getRandomHexColor() {


    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    spanColor.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




btnColor.addEventListener('click', getRandomHexColor);