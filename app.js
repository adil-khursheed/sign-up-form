const firstNameErrorIcon = document.getElementById('fname-error-icon');
const firstNameErrorMessage = document.getElementById('fname-error-message');
const fName = document.querySelector('[name="fname"]');
const lastNameErrorIcon = document.getElementById('lname-error-icon');
const lastNameErrorMessage = document.getElementById('lname-error-message');
const lName = document.querySelector('[name="lname"]');
const emailErrorIcon = document.getElementById('email-error-icon');
const emailErrorMessage = document.getElementById('email-error-message');
const emailEl = document.querySelector('[name="email"]');
const passwordErrorIcon = document.getElementById('pswrd-error-icon');
const passwordErrorMessage = document.getElementById('pswrd-error-message');
const passwordEl = document.querySelector('[name="password"]');


// First Name Validation
const validateFirstName = () => {
    let firstName = document.getElementById('first_name').value;

    if (firstName.length == 0) {
        firstNameErrorMessage.innerHTML = 'First Name cannot be empty';
        firstNameErrorIcon.innerHTML = '<img src="images/icon-error.svg">';
        fName.style.setProperty('--validationColor', 'hsl(0, 100%, 74%)');

        return false;
    }
    if (!firstName.match(/^[A-Za-z]{4,}$/)) {
        firstNameErrorMessage.innerHTML = 'Please enter a valid first name';
        firstNameErrorIcon.innerHTML = '<img src="images/icon-error.svg">';
        fName.style.setProperty('--validationColor', 'hsl(0, 100%, 74%)');

        return false;
    }
    firstNameErrorMessage.innerHTML = '';
    firstNameErrorIcon.innerHTML = '';
    fName.style.setProperty('--validationColor', 'hsl(249, 10%, 26%)');
    
    return true;
}


// Last Name Validation
const validateLastName = () => {
    let lastName = document.getElementById('last_name').value;

    if (lastName.length == 0) {
        lastNameErrorMessage.innerHTML = 'Last Name cannot be empty';
        lasttNameErrorIcon.innerHTML = '<img src="images/icon-error.svg">';
        lName.style.setProperty('--validationColor', 'hsl(0, 100%, 74%)');

        return false;
    }
    if (!lastName.match(/^[A-Za-z]{1,}$/)) {
        lastNameErrorMessage.innerHTML = 'Please enter a valid last name';
        lastNameErrorIcon.innerHTML = '<img src="images/icon-error.svg">';
        lName.style.setProperty('--validationColor', 'hsl(0, 100%, 74%)');

        return false;
    }
    lastNameErrorMessage.innerHTML = '';
    lastNameErrorIcon.innerHTML = '';
    lName.style.setProperty('--validationColor', 'hsl(249, 10%, 26%)');
    
    return true;
}


// Email Validation
const validateEmail = () => {
    let email = document.getElementById('user_email').value;

    if (email.length == 0) {
        emailErrorMessage.innerHTML = 'Email cannot be empty';
        emailErrorIcon.innerHTML = '<img src="images/icon-error.svg">';
        emailEl.style.setProperty('--validationColor', 'hsl(0, 100%, 74%)');

        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailErrorMessage.innerHTML = 'Looks like this is not an email';
        emailErrorIcon.innerHTML = '<img src="images/icon-error.svg">';
        emailEl.style.setProperty('--validationColor', 'hsl(0, 100%, 74%)');

        return false;
    }
    emailErrorMessage.innerHTML = '';
    emailErrorIcon.innerHTML = '';
    emailEl.style.setProperty('--validationColor', 'hsl(249, 10%, 26%)');
    
    return true;
}


// Password Validation
const validatePassword = () => {
    let password = document.getElementById('user_password').value;

    if (password.length == 0) {
        passwordErrorMessage.innerHTML = 'Password cannot be empty';
        passwordErrorIcon.innerHTML = '<img src="images/icon-error.svg">';
        passwordEl.style.setProperty('--validationColor', 'hsl(0, 100%, 74%)');

        return false;
    }
    passwordErrorMessage.innerHTML = '';
    passwordErrorIcon.innerHTML = '';
    passwordEl.style.setProperty('--validationColor', 'hsl(249, 10%, 26%)');
    
    return true;
}

// Submit Form Validation
const validateForm = () => {
    if (!validateFirstName() || !validateLastName() || !validateEmail() || !validatePassword()) {
        
        return false;
    }
}