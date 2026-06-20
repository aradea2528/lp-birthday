// === BACKGROUND MUSIC HANDLER ===
(function () {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('musicToggle');

  function setIcon(playing) {
    btn.textContent = playing ? '🔊' : '🔇';
  }

  function tryAutoplay() {
    music.volume = 0.6;
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIcon(true))
        .catch(() => {
          // Browser blocked autoplay — wait for first user interaction
          setIcon(false);
          const resumeOnInteract = () => {
            music.play().then(() => setIcon(true));
            document.removeEventListener('click', resumeOnInteract);
            document.removeEventListener('touchstart', resumeOnInteract);
          };
          document.addEventListener('click', resumeOnInteract, { once: true });
          document.addEventListener('touchstart', resumeOnInteract, { once: true });
        });
    }
  }

  window.toggleMusic = function () {
    if (music.paused) {
      music.play();
      setIcon(true);
    } else {
      music.pause();
      setIcon(false);
    }
  };

  window.addEventListener('DOMContentLoaded', tryAutoplay);
})();
