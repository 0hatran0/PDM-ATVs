// Seleciona o formulário e a mensagem de agradecimento
const form = document.getElementById('interestForm');
const thankYouMessage = document.getElementById('thankYouMessage');
// Adiciona um listener para o evento de submissão do formulário
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Previna o envio padrão do formulário
  // Opcional: Aqui você pode adicionar código para enviar os dados via AJAX
  // Esconde o formulário
  form.style.display = 'none';
  // Exibe a mensagem de agradecimento
  thankYouMessage.style.display = 'block';
});
