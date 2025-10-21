const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave(){
    const text = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavras = text.split(" ");

    campoResultado.textContent = palavras.join(", ")
}