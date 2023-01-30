"use strict";

const passwordInput = document.getElementById('password');
const passwordBox = document.getElementById('password-box');
const passwordRequirements = `<ul id="requirements"><li>5-16 characters</li><li>1 number</li><li>1 uppercase character</li><li>1 lowercase character</li></ul>`;
const formFields = document.getElementById('input-box');

formFields.addEventListener('focusout', (e) => {
    let field = e.target;
    console.log(field);
    console.log(field.checkValidity());
    let requirementsList = document.getElementById('requirements');
    if (!field.checkValidity()) {
        field.classList.add('required');
        if (field.id === 'password') {
            if (!passwordBox.contains(requirementsList)) {
                passwordBox.insertAdjacentHTML('beforeend', passwordRequirements);
            } else {
                return;
            }
        }
    } else {
        field.classList.remove('required');
        if (field.id === 'password') {
            passwordBox.removeChild(requirementsList);
        }
    }
    return;
})