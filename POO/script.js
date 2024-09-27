// Classe para gerenciar os botões de copiar
class CopyButton {
  constructor(button, text) {
    this.button = button;
    this.textToCopy = text;
    this.buttonText = this.button.querySelector(".button-text");

    // Adiciona o evento de clique ao invez de onclick direto pois o wordpress(elementor)
    this.button.addEventListener("click", () => this.copyText());
  }

  // Método para copiar o texto
  copyText() {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = this.textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);

    // Inicia a animação de fade
    this.animateTextChange();
  }

  // Método para animar a mudança de texto no botão
  animateTextChange() {
    // Aplica o fade-out
    this.buttonText.classList.add("fade-text");

    // Altera o texto para "TEXTO COPIADO" após o fade-out
    setTimeout(() => {
      this.buttonText.textContent = "TEXTO COPIADO";
      this.buttonText.classList.remove("fade-text");
    }, 500); // Duração do fade-out

    // Retorna ao texto original após 3 segundos
    setTimeout(() => {
      this.buttonText.classList.add("fade-text");
      setTimeout(() => {
        this.buttonText.textContent = "COPIAR TEXTO";
        this.buttonText.classList.remove("fade-text");
      }, 500); // Duração do fade-in
    }, 3000);
  }
}

// Textos a serem copiados
const texts = {
  whats1: `Oi, [nome da indicação]! Tudo bem? 😊

Quero te apresentar a Yelly, perfeita para quem vende muito no parcelado! Com nossa maquininha, você consegue taxas imbatíveis para vendas em 12x. 🌟💳

Aproveite e aumente suas vendas com meu desconto exclusivo de [X%] utilizando meu link e cupom:
[link de indicação] ✨
[nome do cupom] 💰`,
  whats2: `Olá, [nome da indicação]! Como vai? 🌟

Sabia que a Yelly possui o selo RA1000 no Reclame Aqui? Isso prova o nosso compromisso com a excelência e a satisfação dos nossos clientes! 🎉

🤑 Use meu link e cupom e ganhe [X%] de desconto na sua maquininha:
[link de indicação] 🎁
[nome do cupom] ✅`,
  whats3: `Oi, [nome da indicação]! Tudo certo? 🤗

Deixe-me contar sobre a Yelly! Você sabia que além de ótimas taxas, oferecemos um suporte humanizado, pronto para te ajudar em qualquer situação? Chega de perder tempo, venha fazer parte da revolução! 💸🤑

Ganhe [X%] de desconto na sua maquininha com meu link e cupom:
[link de indicação] 🚀
[nome do cupom] ✅`,
};

// Inicializa os botões de copiar
document.querySelectorAll(".copy-btn").forEach((button) => {
  const id = button.getAttribute("data-id");
  new CopyButton(button, texts[id]);
});
