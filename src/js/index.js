const btnDicaAleatoria = document.querySelector(".icon");
const idConselho = document.querySelector(".id-conselho");
const descricaoConselho = document.querySelector(".texto-conselho");

async function pegarDica() {
    const url = await fetch("https://api.adviceslip.com/advice");
    const conteudoDica = await url.json();
    const idDica = `Advice #${conteudoDica.slip.id}`;
    const textoDica = `"${conteudoDica.slip.advice}"`;

    idConselho.innerHTML = idDica;
    descricaoConselho.innerHTML = textoDica;
}

btnDicaAleatoria.addEventListener("click", pegarDica);

pegarDica();