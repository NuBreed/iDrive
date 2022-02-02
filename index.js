toggleBtn.addEventListener('click', function() {
    navbar.classList.add('show');
    toggleBtn.style.display = 'none';
    closeBtn.style.display = 'inline';
});
closeBtn.addEventListener('click', function() {
    navbar.classList.remove('show');
    toggleBtn.style.display = 'inline';
    closeBtn.style.display = 'none';
});
// searching
const form = document.querySelector('form');
const start = document.querySelector('.start');