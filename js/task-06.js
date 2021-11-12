const input = document.querySelector("#validation-input");
const expectedLength = Number(input.dataset.length);

input.addEventListener('blur', () => {
    const isValid = expectedLength === input.value.length;
    if (isValid) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});