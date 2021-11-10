const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSumbit);

function onFormSumbit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const userData = {
        mail,
        password
    }
    console.log(userData);

    if (formElements.email.value === '' || formElements.password.value === '') {

        alert("Please fill in all the fields");
    }
    event.currentTarget.reset();

}