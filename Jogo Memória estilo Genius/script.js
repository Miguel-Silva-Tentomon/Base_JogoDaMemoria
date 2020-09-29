let order = [];
let clickedOrder = [];
let score = 0;

/***
* 0 = Verde
* 1 = Vermelho
* 2 = Amarelo
* 3 = Azul
*/

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');

//Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random () * 4) // Sorteia um número de 0 a 3
    order[order.length] = colorOrder;
    clickedOrder = [];

    
    for (let i in order) {        
        let elementColor = createElement(order[i]);
        lightColor (elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor, clareando-a
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => { //Executa um código após um tempo pré-determinado
        element.classList.add('selected');
    }, number - 250); 
    setTimeout (() => {
        element.classList.remove('selected');
    })
}

//É o que checa a ordem do jogador se comparado a ordem que o programa executou
//Comparação de array com array
let checkOrder = () => {
    //Verificação dos clicks do jogador
    for(let i in clickedOrder){
        if (clickedOrder[i] != order[i]){
            lose();
            break; //Para a iteração
        }
    }
    if (clickedOrder.length == order.length){
        alert(`Pontuação: ${score} \n Você acertou! Iniciando próximo nível.`);
        score += 5;
        nextLevel();
    }
}

//Função para o clique do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElement(color).classList.add('selected');

    setTimeout(() => {
        createElement(color).classList.remove('selected');
        checkOrder();
    })
}

//Retorna a cor
let createElement = (color) => {
    if (color == 0) {
        return verde;
    } else if (color == 1){
        return vermelho;
    } else if (color == 2){
        return amarelo;
    } else if (color == 3){
        return azul;
    }
}

//Função para o próximo nível (next level)
let nextLevel = () => {
    //score++;
    shuffleOrder();
}

//Função de jogo perdido (Game Over)
let lose = () => {
    alert (`Pontuação: ${score} \n Você perdeu! GAME OVER!\n Clique em OK para iniciar outra partida.`)
    order = [];
    clickedOrder = [];

    playGame();
}

// Função que começa o jogo
let playGame = () => {
    alert ('Bem vindo ao jogo da memória! Iniciando uma nova partida!')
    score = 0;

    nextLevel();
}

// Processa os cliques do jogador
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(02);
azul.onclick = () => click(3);

/*
verde.addEventListener('click', click(0));
vermelho.addEventListener('click', click(1));
amarelo.addEventListener('click', click(2));
azul.addEventListener('click', click(3)); */

playGame();