// Ativando a Maquiagem
const btnMake = document.getElementById('btn-make');
const makeEffect = document.getElementById('make-effect');

btnMake.addEventListener('click', () => {
  makeEffect.innerHTML = "<span class='makeup-sparkle'>✨ Estética ativada! A arte no rosto transforma a percepção do mundo. ✨</span>";
  
  btnMake.style.transform = "rotate(25deg) scale(0.9)";
  setTimeout(() => { btnMake.style.transform = ""; }, 200);
});

// Ativando o Bolo (Música)
const btnCake = document.getElementById('btn-cake');
const musicZone = document.getElementById('music-zone');

btnCake.addEventListener('click', () => {
  const urlMusica = "https://youtu.be/0s77yLAG8a8?si=H_dg__cu77oR8rwu";
  
  musicZone.innerHTML = `
    <a href="${urlMusica}" target="_blank" class="music-link">
      🎵 Analisar Trilha Sônica (Pity Party) 🍰
    </a>
  `;
  
  window.open(urlMusica, '_blank');
});
