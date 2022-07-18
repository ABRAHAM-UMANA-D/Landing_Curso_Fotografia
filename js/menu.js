(function () {

    const BotonAbrir = document.querySelector('.nav_menu');
    const BotonCerrar = document.querySelector('.nav_close');
    const menu = document.querySelector('.nav_link');

    BotonAbrir.addEventListener('click', () => {
        menu.classList.add('nav_link--menu');
    });

    BotonCerrar.addEventListener('click', () => {
        menu.classList.remove('nav_link--menu');
    });
    
})();