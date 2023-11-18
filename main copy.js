const listaDeBotoes = document.querySelectorAll('.tecla');

function playSom(idDoAudio) {
  document.querySelector(idDoAudio).play();
}

for (cada = 0; cada < listaDeBotoes.length; cada++) {
  const botao = listaDeBotoes[cada];
  const bateria = botao.classList[1];


  const mesa = `#som_${bateria}`

  botao.onclick = () => {
    playSom(mesa);
  }
}

console.log(listaDeBotoes);

