"use strict";

const passwordInput = document.getElementById('password');
const passwordBox = document.getElementById('password-box');
const passwordRequirements = `<ul id="requirements"><li>5-16 characters</li><li>1 number</li><li>1 uppercase character</li><li>1 lowercase character</li></ul>`;
const confirmPasswordInput = document.getElementById('password-confirm');
const confirmPasswordBox = document.getElementById('confirm-password-box');
const passwordDoesNotMatch = `<ul id="mismatch"><li>Passwords do not match.</li></ul>`;
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
            if (passwordBox.contains(requirementsList)) {
                passwordBox.removeChild(requirementsList);
            }
        }
    }

    if (field.id === 'password-confirm') {
        if (!(field.value === passwordInput.value)) {
            field.classList.add('required');
            field.setCustomValidity("Passwords do not match.");
            if (!(confirmPasswordBox.contains(passwordMismatchTip))) {
                confirmPasswordBox.insertAdjacentHTML('beforeend', passwordDoesNotMatch);
            } return;
        } else {
            if (confirmPasswordBox.contains(passwordMismatchTip)) {
                confirmPasswordBox.removeChild(passwordMismatchTip);
            } if (!(field.value.length == 0)) {
            field.classList.remove('required');
            confirmPasswordInput.setCustomValidity("");
            } return;
        }
    }

    if (field.id === 'password') {
        if (!(field.value === confirmPasswordInput.value)) {
            confirmPasswordInput.classList.add('required');
            confirmPasswordInput.setCustomValidity("Passwords do not match.");
            if (!(confirmPasswordBox.contains(passwordMismatchTip))) {
                confirmPasswordBox.insertAdjacentHTML('beforeend', passwordDoesNotMatch);
            } return;
        } else {
            if (confirmPasswordBox.contains(passwordMismatchTip)) {
                confirmPasswordBox.removeChild(passwordMismatchTip);
            } if (!(field.value.length == 0)) {
            confirmPasswordInput.classList.remove('required');
            confirmPasswordInput.setCustomValidity("");
            } return;
        }
    }
    return;
})

const loginButton = document.getElementById('log-in');

loginButton.addEventListener('click', () => {
    let loginBoxHTML = 
    `<div id="login-box" style="
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0 0 10px 2px #0000003b;
    border-radius: 4px;
    padding: 1rem 5rem;">
        <h1>Existing Users</h1>
        <form style="
        display: flex;
        flex-direction: column;
        gap: 1rem;">
            <div>
                <label for="login-email">Email:</label>
                <input id="login-email">
            </div>
            <div>
                <label for="login-password">Password:</label>
                <input id="login-password">
            </div>
            <div>
                <button type="submit" id="login-button" class="submit-button">Log in</button>
            </div>
        </form>
    </div>`;
})


