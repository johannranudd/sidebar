const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const ul = document.querySelector('ul');
const imRed = document.querySelector('.im-red');

hamburger.addEventListener('click', function() {
    // sidebar.classList.add('show-sidebar');
    imRed.classList.toggle('red');
});
