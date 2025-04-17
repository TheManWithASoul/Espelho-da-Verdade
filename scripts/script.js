const botao = document.querySelector('.revelar-resposta');
const inputNome = document.getElementById('nome');
const resposta = document.getElementById('resposta');
const audio = document.getElementById('audio');

// Array com frases aleatórias
const frases = [
    "O espelho revela que seu destino é... aprender JavaScript até virar mestre!",
    "O espelho vê grandes conquistas no seu caminho, mas só se você continuar codificando!",
    "A verdade está diante de você, mas cuidado: o código não perdoa os fracos!",
    "Ah, você... O espelho diz que a sua jornada está apenas começando, viajante.",
    "Cuidado! O espelho prevê que você poderá dominar o front-end, se ousar!"
];

// Função para escolher uma frase aleatória
function fraseAleatoria() {
    const index = Math.floor(Math.random() * frases.length);
    return frases[index];
}

botao.addEventListener('click', () => {
    const nome = inputNome.value.trim();

    // Se o nome não for preenchido
    if (nome === "") {
        resposta.textContent = "Você precisa digitar um nome, viajante do além!";
    } else {
        resposta.textContent = `Olá, ${nome}! ${fraseAleatoria()}`;
    }

    // Reproduz o som ao clicar
    audio.play();
});
