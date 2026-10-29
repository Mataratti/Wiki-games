document.addEventListener('DOMContentLoaded', () => {
    // --- Variáveis para Tema ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // --- Variáveis para Menu ---
    const menuIcon = document.querySelector('.menu-icone');
    const sideMenu = document.querySelector('.side-menu');


    // =======================================
    // 1. Lógica do Tema (Cyberpunk Dark por padrão)
    // =======================================

    function applyTheme(isDarkMode) {
        if (isDarkMode) {
            body.classList.remove('light-mode'); // Se houver um modo claro customizado
            themeToggle.textContent = '☀️'; // Exibe o sol para poder voltar ao claro se quiser
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.add('light-mode'); // Opcional caso queira suportar claro
            themeToggle.textContent = '🌙'; // Exibe a lua
            localStorage.setItem('theme', 'light');
        }
    }

    // Carrega o tema salvo. Como o padrão agora é escuro, definimos 'dark' se não houver preferência salva.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        applyTheme(false);
    } else {
        // Padrão inicial agora é o tema escuro Cyberpunk
        applyTheme(true); 
    }

    // Adiciona o evento de clique ao botão de tema
    themeToggle.addEventListener('click', () => {
        const isCurrentlyLight = body.classList.contains('light-mode');
        applyTheme(isCurrentlyLight); // Inverte o estado atual
    });


    // =======================================
    // 2. Lógica do Menu Lateral
    // =======================================

    menuIcon.addEventListener('click', (event) => {
        // Impede que o clique no ícone feche o menu imediatamente
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