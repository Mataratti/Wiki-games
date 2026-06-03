document.addEventListener('DOMContentLoaded', () => {
    // --- Variáveis para Tema ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // --- Variáveis para Menu ---
    const menuIcon = document.querySelector('.menu-icone');
    const sideMenu = document.querySelector('.side-menu');


    // =======================================
    // 1. Lógica do Tema Claro/Escuro
    // =======================================

    function applyTheme(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            themeToggle.textContent = '☀️'; // Exibe o sol
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙'; // Exibe a lua
            localStorage.setItem('theme', 'light');
        }
    }

    // Carrega o tema salvo ao carregar a página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(true);
    } else {
        // Aplica o tema claro por padrão e ajusta o ícone
        applyTheme(false); 
    }

    // Adiciona o evento de clique ao botão de tema
    themeToggle.addEventListener('click', () => {
        const isCurrentlyDark = body.classList.contains('dark-mode');
        applyTheme(!isCurrentlyDark); // Inverte o tema atual
    });


    // =======================================
    // 2. Lógica do Menu Lateral
    // =======================================

    menuIcon.addEventListener('click', (event) => {
        // Impede que o clique no ícone feche o menu imediatamente (veja o próximo evento)
        event.stopPropagation(); 
        sideMenu.classList.toggle('active');
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = sideMenu.contains(event.target);
        const isClickOnIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnIcon && sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
        }
    });

    // Garante que o menu feche ao clicar em um link (para mobile)
    sideMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    });
});