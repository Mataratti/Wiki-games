document.addEventListener('DOMContentLoaded', () => {
    // Esta lógica de acordeão é idêntica à de bosses.js
    const accordionHeaders = document.querySelectorAll('.accordion-header');


    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('active');


            // Opcional: Fechar outros ao abrir um novo
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
});