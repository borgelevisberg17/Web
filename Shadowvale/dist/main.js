//main.js:
import { gameState, updateRelationships, addEvidence } from './gameState.js';
import { story } from './story.js';
import { addMessage, showChoices } from './ui.js';

document.getElementById('startForm').addEventListener('submit', (e) => {
  e.preventDefault();
  gameState.playerName = document.getElementById('playerName').value;
  gameState.playerGender = document.getElementById('playerGender').value;
  startGame();
});

function startGame() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('gameContainer').style.display = 'block';
  startStory();
}

function startStory() {
  story.intro.forEach((dialogue, index) => {
    setTimeout(() => {
      addMessage(dialogue.message, dialogue.sender === 'player');
    }, dialogue.delay + index * 2000);
  });

  setTimeout(() => {
    startChapter(story.chapter1);
  }, (story.intro.length + 1) * 2000);
}

function startChapter(chapter) {
  chapter.forEach((dialogue, index) => {
    setTimeout(() => {
      addMessage(dialogue.message, dialogue.sender === 'player');
      if (dialogue.choices) {
        showChoices(dialogue.choices, (choice) => handleChoice(choice, chapter));
      }
    }, dialogue.delay + index * 2000);
  });
}

function handleChoice(choice, chapter) {
  addMessage(choice, true);

  setTimeout(() => {
    if (chapter === story.chapter1) {
      switch (choice) {
        case 'Eu não faço ideia de como isso aconteceu.':
          addMessage('Estranho você não fazer ideia.', false);
          break;
        case 'Talvez alguém tenha usado o meu telefone.':
          addMessage('E você lembra de alguém ter usado?', false);
          break;
        case 'Do que você está falando? Eu não fiz nada.':
          addMessage('Então como você explica o seu número estar no histórico?', false);
          break;
      }
      setTimeout(() => startChapter(story.chapter2), 3000);
    } else if (chapter === story.chapter2) {
      switch (choice) {
        case 'Eu não sei como meu número foi parar ali.':
          addMessage('Estranho você não saber.', false);
          break;
        case 'Eu já disse, eu não a conheço!':
          addMessage('Então como você explica a conversa de mais de uma hora?', false);
          break;
      }
      setTimeout(() => startChapter(story.chapter3), 3000);
    } else if (chapter === story.chapter3) {
      switch (choice) {
        case 'Eu não estou escondendo nada!':
          addMessage('Parece muito confuso.', false);
          break;
        case 'Isso é uma grande confusão.':
          addMessage('Vamos esclarecer isso então.', false);
          break;
        case 'Eu não vou continuar com isso.':
          addMessage('Uma mulher foi morta, estou apenas tentando entender.', false);
          break;
      }
      setTimeout(() => startChapter(story.chapter4), 3000);
    } else if (chapter === story.chapter4) {
      switch (choice) {
        case 'Eu já disse tudo que sei! Se não tiver provas contra mim, não volte a me contactar.':
          addMessage('Parece que não está lembrando, não é mesmo?', false);
          setTimeout(() => startChapter(story.chapter5), 3000);
          break;
        case 'Eu estava em casa, jogando com amigos.':
          addMessage('Então...', false);
          setTimeout(() => startChapter(story.chapter5b), 3000);
          break;
        case 'Não é da sua conta!':
          addMessage('Parece nervoso.', false);
          setTimeout(() => startChapter(story.chapter5), 3000);
          break;
      }
    } else if (chapter === story.chapter5) {
      switch (choice) {
        case 'Eu acho que sim, só pode ser isso.':
          addMessage('Vamos investigar essa possibilidade.', false);
          break;
        case 'Não estou dizendo nada, só estou confuso.':
          addMessage('Parece que você não tem certeza.', false);
          break;
        case 'Já disse, não sei de nada.':
          addMessage('Isso não parece ajudar muito.', false);
          break;
        case 'Estou falando a verdade, Sr. Agente.':
          addMessage('Espero que esteja.', false);
          break;
      }
      setTimeout(() => startChapter(story.chapter6), 3000);
    } else if (chapter === story.chapter5b) {
      switch (choice) {
        case 'Sim, pode perguntar para meu amigo Tomas ou vizinhos.':
          addMessage('Vamos confirmar isso.', false);
          break;
        case 'Estive sozinho.':
          addMessage('Contraditório. Não acabou de falar que estava com amigos?', false);
          break;
      }
      setTimeout(() => startChapter(story.chapter6), 3000);
    } else if (chapter === story.chapter6) {
      switch (choice) {
        case 'Eu não estou escondendo nada!':
          addMessage('Vamos descobrir em breve.', false);
          const elem = document.getElementById("status");
          return elem.innerHTML = "offline";
          break;
        case 'Você está me acusando sem provas!':
          addMessage('As evidências falam por si.', false);
          const elem2 = document.getElementById("status");

          return elem2.innerHTML = "offline";
          break;
        case 'Fale com o meu advogado.':
          addMessage('Com certeza falaremos.', false);
          const elem3 = document.getElementById("status");

          return elem3.innerHTML = "offline";
          break;
      }
    }
  }, 1500);
}
