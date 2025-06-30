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
    "Buat kamu yang mungkin sedang lelah jadi segalanya untuk semua orang, puisi ini untukmu. Sebuah pengingat kecil bahwa dirimu juga butuh dicintai... oleh dirimu sendiri",
    " ",
    "CERMIN",
    "Kulihat diriku di balik cermin,",
    "mata letih, namun tetap bersinar.",
    "Penuh cerita yang tak terdengar,",
    "namun tetap berdiri, tak pernah pudar.",
    " ",
    "Dulu kuhujat tiap cela,",
    "kini kucoba merangkai makna.",
    "Bahwa indah bukan tanpa luka,",
    "dan kuat bukan tanpa air mata.",
    " ",
    "Aku belajar mencinta pelan-pelan,",
    "bukan untuk jadi yang sempurna,",
    "tapi jadi diriku yang paling jujur itu sudah luar biasa.",
    `Terima Kasih ${name} karena telah berkunjung🙏🫡`,
  ];

  // Ketik semua kalimat
  typeMultipleLines("multi-text", kalimat, 80);
}

// Efek ketik halaman pertama
window.onload = function () {
  typeEffect(document.getElementById("typed-text"), "Selamat datang.🤗", 100);
};
