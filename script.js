function copyText(button) {
  const textToCopy = button.getAttribute("data-text");
  const buttonText = button.querySelector(".button-text");

  // Cria um textarea temporário para copiar o texto com quebras de linha reais
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = textToCopy;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextarea);

  // Adiciona a classe de fade-out no texto
  buttonText.classList.add("fade-text");

  // Após a animação de fade-out, altera o texto e faz o fade-in
  setTimeout(() => {
    buttonText.textContent = "TEXTO COPIADO";
    buttonText.classList.remove("fade-text");
  }, 500); // Tempo da animação (500ms)

  // Retorna para "COPIAR TEXTO" após 3 segundos com fade-in
  setTimeout(() => {
    buttonText.classList.add("fade-text");
    setTimeout(() => {
      buttonText.textContent = "COPIAR TEXTO";
      buttonText.classList.remove("fade-text");
    }, 500); // Tempo da animação (500ms)
  }, 3000);
}
