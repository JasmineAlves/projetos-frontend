let contador = 0;

const valor = document.querySelector("#valor");
const botoes = document.querySelectorAll(".botao")

botoes.forEach(function (botao) {
    botao.addEventListener("click", function(evento) {
        const estilos = evento.currentTarget.classList;

        if(estilos.contains("diminuir")){
            contador--;
        } else if(estilos.contains("aumentar")){
            contador++;
        } else {
            contador = 0;
        }

        if(contador > 0){
            valor.style.color = "green";
        } else if(contador < 0){
            valor.style.color = "red";
        } else {
            valor.style.color = "#222";
        }

        valor.textContent = contador;
    });
})
