async function navigate(page) {
    try {
        const resposta = await axios.get('dados.json');
        const dadosPublicacoes = resposta.data;
        const dadosPagina = dadosPublicacoes[page] || [];
        
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';

        dadosPagina.forEach((card) => {
            cardContainer.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100">
                        ${card.img ? `<img src="${card.img}" class="card-img-top" alt="Imagem">` : ''}
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.text}</p>
                        </div>
                    </div>
                </div>`;
        });

        return dadosPagina; 
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
        return [];
    }
}

window.onload = () => navigate('home');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
}
  
var pedidoInstalacao;
window.addEventListener('beforeinstallprompt', function (installPrompt) {
    if (installPrompt) {
      $('#installAppBt').show();
      pedidoInstalacao = installPrompt;
    }
});
  

function installApp() {
    pedidoInstalacao.prompt();
}

