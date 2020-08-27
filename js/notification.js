export function showInfo(message) {
    const successBox = document.querySelector("#successBox");

    successBox.textContent = message;
    successBox.parentElement.style.display = 'block';

    setTimeout(hideInfo, 1000);
}

export function showError(message) {
    const errorBox = document.querySelector("#errorBox");

    errorBox.textContent = message;
    errorBox.parentElement.style.display = 'block';

    setTimeout(hideError, 1000);
}

function hideInfo() {
    document.querySelector("#successBox").parentElement.style.display = 'none';
}

function hideError() {
    document.querySelector("#errorBox").parentElement.style.display = 'none';
}