const input = document.querySelector("#validation-input");
const expectedLength = Number(input.dataset.length);

const isValid = expectedLength;
input.addEventListener('blur', addInputClass);


function addInputClass() {
    if (isValid === input.value.length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}