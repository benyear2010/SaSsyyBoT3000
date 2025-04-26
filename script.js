script.js
const responses = [
  "Oh sweetie, that’s adorable — but completely wrong.",
  "Absolutely! If you want to fail spectacularly. 💅",
  "2 + 2? Obviously 22. Math is a scam anyway.",
  "The capital of France? Easy. It’s B. Next question.",
  "You breathe oxygen? Wow, how *basic*.",
  "Clearly, the Earth is a triangle. Stay woke.",
  "Pluto is a planet, and so is your ego."
];

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");

  const userText = input.value.trim();
  if (userText === "") return;

  const userMsg = `<div><strong>You:</strong> ${userText}</div>`;
  chatbox.innerHTML += userMsg;

  const sassyReply = responses[Math.floor(Math.random() * responses.length)];
  const botMsg = `<div class="bot"><strong>SassyBot:</strong> ${sassyReply}</div>`;
  chatbox.innerHTML += botMsg;

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}


