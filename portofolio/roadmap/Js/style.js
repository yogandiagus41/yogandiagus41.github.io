const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
nav.classList.toggle('slide');
});

function openProfile() {
    var content = document.getElementById('profile');
    var note = document.getElementById('note');
    var btn = document.getElementById('btn');
    if (content.style.display == 'none') {
        content.style.display = 'block';
        note.style.display = 'none';
        btn.innerHTML = 'Close';
        
    } else {
        content.style.display = 'none';
        btn.innerHTML = 'Open';
        note.style.display = 'block';
    }
}