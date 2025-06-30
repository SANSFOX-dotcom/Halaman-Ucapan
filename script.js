// Fungsi universal untuk efek ketik satu kalimat
function typeEffect(element, text, speed = 100, callback = null) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      setTimeout(callback, 500); // Jeda sebelum kalimat berikutnya
    }
  }

  type();
}

// Fungsi untuk mengetik banyak kalimat dari array
function typeMultipleLines(elementId, lines, speed = 100) {
  const container = document.getElementById(elementId);
  container.innerHTML = ""; // Bersihkan kontainer
  let index = 0;

  function next() {
    if (index < lines.length) {
      const p = document.createElement("p");
      container.appendChild(p);

      typeEffect(p, lines[index], speed, () => {
        index++;
        next(); // Ketik kalimat berikutnya
      });
    }
  }

  next();
}

// Fungsi saat tombol "Next" ditekan
function goToGreeting() {
  const name = document.getElementById("username").value.trim();
  if (name === "") {
    alert("Isi dulu namanya, ya!");
    return;
  }

  // Pindah halaman
  document.getElementById("welcome-page").style.display = "none";
  document.getElementById("greeting-page").style.display = "block";

  // Kalimat-kalimat ucapan
  const kalimat = [
    `Halo, ${name}!`,
    "Senang kamu di sini 🤗",
    "Semoga harimu luar biasa menyenangkan 🎉",
    "Tetap semangat dan tersenyum ya 😄"
  ];

  // Ketik semua kalimat
  typeMultipleLines("multi-text", kalimat, 80);
}

// Efek ketik halaman pertama
window.onload = function () {
  typeEffect(document.getElementById("typed-text"), "Selamat datang.🤗", 100);
};
