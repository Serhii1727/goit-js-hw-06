const input = document.querySelector("#validation-input");
const expectedLength = Number(input.dataset.length);

input.addEventListener('blur', () => {
    const isValid = expectedLength === input.value.length;
    if (isValid) {
        validClass();
    } else {
        invalidClass();
    }
});

function validClass() {
    input.classList.remove('invalid');
    input.classList.add('valid');
}

function invalidClass() {
    input.classList.remove('valid');
    input.classList.add('invalid');
}