const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const messages = [
  "Sigur?",
  "Chiar sigur?",
  "Mai gândește-te 😅",
  "Ultima șansă!",
  "Ești foarte sigur?",
  "Pleaseeeeeee🥹",
  "Iti iau milkshake daca vii😏",
  "Vii si gata 😡",
];

let messageIndex = 0;
let yesScale = 1;

yesBtn.addEventListener("click", () => {
  window.location.href = "page2.html";
});

noBtn.addEventListener("click", () => {
  // 1️⃣ schimbă textul butonului NO
  if (messageIndex < messages.length) {
    noBtn.textContent = messages[messageIndex];
    messageIndex++;
  }

  // 2️⃣ mărește butonul YES cu 10%
  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;

  // dacă YES devine foarte mare, ascunde NO
  if (yesScale >= 2.5) {
    noBtn.style.display = "none";
    yesBtn.style.width = "100%";
    yesBtn.style.height = "100%";
  }
});
