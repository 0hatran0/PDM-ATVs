async function navigate(page) {
    try {
        const resposta = await axios.get('dados.json');
        const dadosPublicacoes = resposta.data;
        const dadosPagina = dadosPublicacoes[page] || [];

        // Atualiza o container dos cards
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

        return dadosPagina; // Retorna os dados da página solicitada
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
        return [];
    }
}

window.onload = () => navigate('home');


