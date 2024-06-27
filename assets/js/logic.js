const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', function () {
    if (themeToggle.checked) {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
});