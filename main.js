// O paremetro de uma função diz para a função que ela só pode funcionar quando o parametro esta incluido (imagino eu).
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    /* A forma de todo esse código esta simplificada abaixo.
    //O "null" significa nulo, se o elemento não existir será nulo.
    if (elemento === null) {
      alert('Objeto não encontrado')
    }

    //O código "!=" significa "não for igual".
    if (elemento != null) {
      
      // O "localName" vê que tag esta ex: audio, button, etc.
      if (elemento.localName === 'audio') {
        elemento.play(); 
      }else{
        console.log('não compativel')
      }
      
    }
    */

    // O código '&&' significa 'and'
    // O código "elemento != null" é igual a somente "elemento", pois o javaScript ja verifica se existe, então não é nessesario o 1°.
    if (elemento && elemento.localName === 'audio') {
      elemento.play();
    }else{
      alert('Elemento invalido');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// Aqui usamos o 'let' pois, o valor estará em constante mudança. Esse usariamos se estivessemos usando o 'while'. Linha 13.
//let contador = 0;

// Enquanto. O while(contador < 9) significa nesse codigo [como o codigo estava anteriormente]:
// Enquanto o contador for menor que 9 repita o código abaixo.
//while (contador < listaDeTeclas.length) {

// Aqui mudamos a forma de lupem para a 'for', pois ela tem algumas funções muito utio para o codigo como:
// Não prescisar de um 'let contador = 0' externo, e nem de um 'contador = contador + 1' longe.
for (contador = 0; contador < listaDeTeclas.length; contador++) {
    // Uma 'const' sempre armezena um valor constante, que não vai mudar.
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // Aqui a baixo temos uma 'template string', ela não utiliza aspas simples'', ou aspas duplas"", para escrevela usaremos crases ``.
    // A variavel sera colocada dentro de chaves {}, e com um sinal de sifrão na frente.
    const idAudio = `#som_${instrumento}`;
    // O template string é uma forma de facilitar a exibição de texto no JavaScript,
    // ele permite agrupar textos (strings) com outros tipos de informação, como number, boolean, array, entre outros.

    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // Esse codigo funciona igual a nona linha abaixo, porém com escritas repetidas
    // if (tecla.onkeydown === 'espace' || tecla.onkeydown === 'Enter' ) {
    //    tecla.classList.add('ativa');
    //}

    
  
    // Aqui usamos o 'onkeydwon' para o JS verificar quando uma tecla e precionada no teclado (qualquer tecla).
    // E como essa função esta em cima da tecla ela vai verificar quando qualquer tecla do teclado é precionada quando o botão do intrumento esta selecionado.
    tecla.onkeydown = function (evento) {
      if (evento.code === 'espace' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
      }
       
       console.log(evento.code);
    }

    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    //Esse seria usado para o 'while'. Linha 13.
    //contador = contador + 1;

    console.log(contador);

    //console.log("Número da lista:", contador);
}
/*  ATIVIDADE ALURA

for (let contadorr = 0; contadorr < 10; contadorr++) {
    console.log("ola mundo");
}

for (let tesouro = 0; tesouro < 100; tesouro++) {
    alert("Jogue novamente");
}

var nomes = ["Joy", "Beethoven", "Jully", "Leopoldo"];

for (var contador = 0; contador < nomes.length; contador++) {
    console.log(nomes[contador]);
}

*/
// O PONTO "." NO JAVA SCRIPT É USADO PARA NAVEGAR/PROCURAR/ENTRAR EM ALGO EX: "document.querySelector", O PONTO ESTÁ //
// ENTRANDO/NAVEGANDO/PROCURANDO NO DOCUMENTO //

// TENTE SEMPRE ACABAR UM CÓDIGO USANDO PONTO E VIRGULA ";", PARA EVITAR ERROS FUTUROS //
var nomes = ["Joy", "Beethoven", "Jully", "Leopoldo"];

for (var contador = 0; contador < nomes.length; contador++) {
    console.log(nomes[contador]);
}

/*
assim pode criar comentários
*/





/* primeira esta errada
const tecla = document.querySelectorAll('.tecla');
//const textNumber = document.querySelector('.text');

function telefoneNumber(valueNumber) {
  console.log(valueNumber);
}

console.log(telefoneNumber());

for (let contador = 0; contador < tecla.length; contador++) {
  
  const teclas = tecla[contador];
  const todas = teclas.classList[1];
  
  tecla.onclick () => {
    telefoneNumber(todas);
  }  
}

//terminar atividade 

*/

/* essa esta certa
const listaDeTeclas = document.querySelectorAll('input[type=button]');

const inputTel = document.querySelector('input[type=tel]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  
  const tecla = listaDeTeclas[indice];
  
  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}
*/

