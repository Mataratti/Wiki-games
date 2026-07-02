document.addEventListener("DOMContentLoaded", function() {
    const botoesAcordeao = document.querySelectorAll(".accordion-header");

    botoesAcordeao.forEach(botao => {
        botao.addEventListener("click", function() {
            
            const conteudo = this.nextElementSibling;
            
            this.classList.toggle("ativo");
            conteudo.classList.toggle("aberto");

            if (conteudo.style.maxHeight) {
                conteudo.style.maxHeight = null; 
            } else {
                conteudo.style.maxHeight = conteudo.scrollHeight + "px"; 
            }
        });
    });
});