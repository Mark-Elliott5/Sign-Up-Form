"use strict";

const passwordInput = document.getElementById('password');
const passwordBox = document.getElementById('password-box');
const passwordRequirements = `<ul id="requirements"><li>5-16 characters</li><li>1 number</li><li>1 uppercase character</li><li>1 lowercase character</li></ul>`

passwordInput.addEventListener('invalid', () => {
    let requirementsList = document.getElementById('requirements');
    if (!passwordBox.contains(requirementsList)) {
        passwordBox.insertAdjacentHTML('beforeend', passwordRequirements);
    }
    return;
})

passwordInput.addEventListener('valid', () => {
    let requirementsList = document.getElementById('requirements');
    if (passwordBox.contains(requirementsList)) {
        passwordBox.removeChild(passwordRequirements);
    }
    return;
})

