// Elementos
const imagens = document.querySelectorAll(".imagem");
const botaoAnterior = document.getElementById("botao-anterior");
const botaoProximo = document.getElementById("botao-proximo");
const numeroPagina = document.getElementById("numero-pagina");
const divazul = document.getElementById("div_azul");
const divbranca = document.getElementById("div_branca");

let indiceAtual = 0;

// Atualiza a exibição do carrossel
function atualizarCarrossel() {
  // Atualiza visibilidade das imagens
  imagens.forEach(imagem => imagem.classList.remove("ativa"));
  imagens[indiceAtual].classList.add("ativa");

  // Atualiza número da página
  numeroPagina.textContent = `${indiceAtual + 1}`;

  // Controla visibilidade dos botões

  divbranca.classList.toggle("oculta", indiceAtual != 0);
  botaoAnterior.classList.toggle("oculta", indiceAtual === 0);
  botaoProximo.classList.toggle("oculta", indiceAtual === imagens.length - 1);
  divazul.classList.toggle("oculta", indiceAtual != imagens.length - 1);


}

// Eventos dos botões
botaoAnterior.addEventListener("click", () => {
  if (indiceAtual > 0) {
    indiceAtual--;
    atualizarCarrossel();
  }
});

botaoProximo.addEventListener("click", () => {
  if (indiceAtual < imagens.length - 1) {
    indiceAtual++;
    atualizarCarrossel();
  }
});

// Inicializa a interface
atualizarCarrossel();
