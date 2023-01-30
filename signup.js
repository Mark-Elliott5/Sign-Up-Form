"use strict";

const passwordInput = document.getElementById('password');
const passwordBox = document.getElementById('password-box');
const passwordRequirements = `<ul id="requirements"><li>5-16 characters</li><li>1 number</li><li>1 uppercase character</li><li>1 lowercase character</li></ul>`;
const confirmPasswordInput = document.getElementById('password-confirm');
const confirmPasswordBox = document.getElementById('confirm-password-box');
const passwordDoesNotMatch = `<ul id="mismatch"><li>Password does not match.</li></ul>`
const formFields = document.getElementById('input-box');

formFields.addEventListener('focusout', (e) => {
    let field = e.target;
    console.log(field);
    console.log(field.checkValidity());
    let requirementsList = document.getElementById('requirements');
    let passwordMismatchTip = document.getElementById('mismatch');

    if (!field.checkValidity()) {
        field.classList.add('required');
        if (field.id === 'password') {
            if (!passwordBox.contains(requirementsList)) {
                passwordBox.insertAdjacentHTML('beforeend', passwordRequirements);
            }
        }
    } else {
        field.classList.remove('required');
        if (field.id === 'password') {
            passwordBox.removeChild(requirementsList);
        }
    }

    if (field.id === 'password-confirm') {
        if (!(field.value === passwordInput.value)) {
            field.classList.add('required');
            if (!(confirmPasswordBox.contains(passwordMismatchTip)))
            confirmPasswordBox.insertAdjacentHTML('beforeend', passwordDoesNotMatch);
        } else {
            confirmPasswordBox.removeChild(passwordMismatchTip);
            field.classList.remove('required');
        }
    }

    if (field.id === 'password') {
        if (!(field.value === confirmPasswordInput.value)) {
            confirmPasswordInput.classList.add('required');
            if (!(confirmPasswordBox.contains(passwordMismatchTip)))
            confirmPasswordBox.insertAdjacentHTML('beforeend', passwordDoesNotMatch);
        } else {
            confirmPasswordBox.removeChild(passwordMismatchTip);
            confirmPasswordInput.classList.remove('required');
        }
    }
    return;
})