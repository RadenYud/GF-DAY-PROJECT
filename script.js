const slot1Options = [
  "You are my", "You're forever my", "Truly my", "Always my", "No doubt you're my", "My sweet"
];

const slot2Options = [
  "adorable", "gorgeous", "radiant", "funny", "lovely", "cuddly", "goofy", "bubbly", "beautiful", "magical"
];

const slot3Options = [
  "sunshine ☀️", "moonlight 🌙", "snack 🍫", "angel 👼", "sparkle ✨", "miracle 🌈", "heartbeat 💓", "comfort ☕", "star 🌟", "favorite hello 👋"
];

const lever = document.getElementById('lever');
lever.addEventListener('click', spinSlots);

function spinSlots() {
  lever.removeEventListener('click', spinSlots);
  lever.classList.add('pulled');
  setTimeout(() => lever.classList.remove('pulled'), 1000);

  const slot1 = document.getElementById('slot1');
  const slot2 = document.getElementById('slot2');
  const slot3 = document.getElementById('slot3');
  const result = document.getElementById('result');
  const personalMessage = document.getElementById('personalMessage');
  const spinSound = document.getElementById('spinSound');
  const dingSound = document.getElementById('dingSound');

  spinSound.currentTime = 0;
  spinSound.play();

  result.style.opacity = 0;
  personalMessage.style.opacity = 0;

  const s1 = randomItem(slot1Options);
  const s2 = randomItem(slot2Options);
  const s3 = randomItem(slot3Options);

  setTimeout(() => slot1.innerHTML = `<span class="slot-text">${s1}</span>`, 500);
  setTimeout(() => slot2.innerHTML = `<span class="slot-text">${s2}</span>`, 1000);
  setTimeout(() => slot3.innerHTML = `<span class="slot-text">${s3}</span>`, 1500);

  setTimeout(() => {
    const finalText = `${s1} ${s2} ${s3}!`;
    result.textContent = finalText;
    result.style.opacity = 1;
    dingSound.play();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

    personalMessage.textContent = `I just want to say... ${s1.toLowerCase()} ${s2} ${s3}, and I feel so lucky. 💖`;
    personalMessage.style.opacity = 1;

    lever.addEventListener('click', spinSlots);
  }, 1800);
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById('darkToggle').addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

const bgMusic = document.getElementById('bgMusic');
document.addEventListener('click', () => {
  bgMusic.play().catch(() => {});
}, { once: true });

const muteBtn = document.getElementById('muteBtn');
muteBtn.addEventListener('click', () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.textContent = bgMusic.muted ? '🔈 Unmute Music' : '🔇 Mute Music';
});

const musicSelect = document.getElementById('musicSelect');
musicSelect.addEventListener('change', () => {
  bgMusic.src = musicSelect.value;
  bgMusic.play();
});
