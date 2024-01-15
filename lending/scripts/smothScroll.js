document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Убираем # из ID
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});
