const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

nav.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.add('hovered');
    }
});

nav.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.remove('hovered');
    }
});