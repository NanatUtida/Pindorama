// Elementos
const imagens = document.querySelectorAll(".imagem");
const botaoAnterior = document.getElementById("botao-anterior");
const botaoProximo = document.getElementById("botao-proximo");
const numeroPagina = document.getElementById("numero-pagina");

let indiceAtual = 0;

// Atualiza a exibição do carrossel
function atualizarCarrossel() {
  // Atualiza visibilidade das imagens
  imagens.forEach(imagem => imagem.classList.remove("ativa"));
  imagens[indiceAtual].classList.add("ativa");

  // Atualiza número da página
  numeroPagina.textContent = `${indiceAtual + 1}`;

  // Controla visibilidade dos botões
  botaoAnterior.classList.toggle("oculta", indiceAtual === 0);
  botaoProximo.classList.toggle("oculta", indiceAtual === imagens.length - 1);
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
