const cancelButton = document.getElementById('cancelButton');

cancelButton.addEventListener('click', () => {
window.history.back();
});