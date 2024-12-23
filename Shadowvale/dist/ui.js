// ui.js

export function addMessage(text, isPlayer) {
  const chatMessages = document.getElementById('chatMessages');

  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isPlayer ? 'message-sent' : 'message-received'}`;

  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.textContent = text;

  const timeDiv = document.createElement('div');
  timeDiv.className = 'message-time';
  timeDiv.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  messageDiv.appendChild(contentDiv);
  messageDiv.appendChild(timeDiv);

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

export function showChoices(choices, callback) {
  const choicesContainer = document.getElementById('choicesContainer');
  choicesContainer.style.display = 'block';
  choicesContainer.innerHTML = '';

  choices.forEach((choice) => {
    const button = document.createElement('button');
    button.className = 'choice-button';
    button.textContent = choice;
    button.addEventListener('click', () => {
      choicesContainer.style.display = 'none';
      callback(choice);
    });
    choicesContainer.appendChild(button);
  });
}