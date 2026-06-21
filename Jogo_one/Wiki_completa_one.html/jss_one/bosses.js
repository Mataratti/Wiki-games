document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões que abrem/fecham os acordeões
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Encontra o painel de conteúdo imediatamente após o botão
            const content = header.nextElementSibling; 
            
            // Alterna a classe 'active' para mostrar ou esconder o conteúdo
            content.classList.toggle('active');

            // Opcional: Fechar outros acordeões quando um é aberto
            /*
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
            */
        });
    });
});