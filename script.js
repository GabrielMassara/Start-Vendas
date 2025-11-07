document.addEventListener("DOMContentLoaded", () => {
  fetch('faq.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('faqContainer');

      const perguntasFrequentes = data.perguntas.filter(p => p.frequente);

      perguntasFrequentes.forEach(item => {
        const div = document.createElement('div');
        div.className = 'faq';
        div.innerText = item.pergunta;
        container.appendChild(div);
      });
    });
});

function enviarPergunta() {
  const input = document.getElementById('perguntaInput');
  const pergunta = input.value.trim();
  if (pergunta) {
    alert(`Sua pergunta foi enviada: "${pergunta}"`);
    input.value = '';
  } else {
    alert("Por favor, digite uma pergunta.");
  }
}
