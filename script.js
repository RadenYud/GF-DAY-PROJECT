const messages = [
  "You + Me = ❤️",
  "You're my jackpot! 🎰",
  "I love you more every spin 💞",
  "Forever with you 💍",
  "You're my lucky charm 🍀"
];

const icons = ["💌", "💖", "💘", "💝", "🌹", "😍", "😘", "💕", "🥰"];

const lever = document.getElementById("lever");
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const message = document.getElementById("message");

const bgMusic = document.getElementById("bg-music");
const leverSound = document.getElementById("lever-sound");
const winSound = document.getElementById("win-sound");

function playConfetti() {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ['💖', '🌹', '🥰', '💘', '💝'],
    emojiSize: 40,
    confettiNumber: 60,
  });
}

function spin() {
  lever.disabled = true;
  leverSound.play();

  const interval = setInterval(() => {
    reel1.textContent = icons[Math.floor(Math.random() * icons.length)];
    reel2.textContent = icons[Math.floor(Math.random() * icons.length)];
    reel3.textContent = icons[Math.floor(Math.random() * icons.length)];
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    const icon1 = icons[Math.floor(Math.random() * icons.length)];
    const icon2 = icons[Math.floor(Math.random() * icons.length)];
    const icon3 = icons[Math.floor(Math.random() * icons.length)];

    reel1.textContent = icon1;
    reel2.textContent = icon2;
    reel3.textContent = icon3;

    if (icon1 === icon2 && icon2 === icon3) {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      message.textContent = `💘 ${randomMsg} 💘`;
      winSound.play();
      playConfetti();
    } else {
      message.textContent = "Try again, my love! 💫";
    }

    lever.disabled = false;
  }, 2000);
}

lever.addEventListener("click", spin);

// Play background music on first interaction
document.body.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }
}, { once: true });

// Load confetti
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/js-confetti@latest";
document.head.appendChild(script);
