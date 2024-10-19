const buttons = document.querySelectorAll('#button-list button'); // Seleciona todos os botões
const submitButton = document.getElementById('btn'); // Seleciona o botão de envio
let selectedRating = null; // Inicializa uma variável para armazenar a classificação selecionada

// Função chamada quando um botão de classificação é clicado
function buttonClick(event) {
    // Remove a classe 'active' de todos os botões
    buttons.forEach(button => button.classList.remove('active'));

    // Adiciona a classe 'active' ao botão clicado
    event.target.classList.add('active');

    // Atualiza a variável com o valor da classificação clicada
    selectedRating = event.target.textContent;
}

// Adiciona o evento de clique para cada botão de classificação
buttons.forEach(button => {
    button.addEventListener('click', buttonClick); // Certifique-se de que está chamando 'buttonClick'
});

// Função chamada quando o botão de envio é clicado
function submitRating(event) {
    const container = document.getElementById('container'); // Seleciona o container

    // Verifica se uma classificação foi selecionada
    if (selectedRating != null ) {
        // Atualiza o conteúdo do container para exibir a mensagem de agradecimento com a classificação
        container.innerHTML = `
        <div class="thank-you">
            <img src="./images/illustration-thank-you.svg" alt="Thank you">
            <p class="selected-rating">Você escolheu ${selectedRating} de 5</p>
            <h1>Obrigado!</h1>
            <p>Agradecemos por ter nos dado seu feedback. Estamos sempre procurando melhorar e sua ajuda é muito valiosa!</p>
        </div>
    `;
    } else {
        // Se não houver classificação, exibe um alerta solicitando ao usuário para selecionar uma
        alert('Por favor, selecione uma classificação!');
    }
}

// Adiciona o evento de clique para o botão "Submit"
submitButton.addEventListener('click', submitRating);
