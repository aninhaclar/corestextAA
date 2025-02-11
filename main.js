
const imagens = [
    "./miotela01.jpg",
    "./miotela02.jpg",
    "./miotela03.jpg",
    "./miotela04.jpg",
    "./miotela05.jpg"
];


function trocarImagem() {

    const imagemAtual = imagens.shift(); 
    imagens.push(imagemAtual);

  
    document.body.style.backgroundImage = `url('${imagens[0]}')`;
}

document.getElementById("trocar-imagem").addEventListener("click", trocarImagem);
