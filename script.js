// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
const stars = ['⭐','✨','🌟','💫','🌸','💕','🎀'];

document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  if (Math.random() > 0.7) {
    var el = document.createElement('div');
    el.className = 'cursor-star';
    el.textContent = stars[Math.floor(Math.random() * stars.length)];
    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';
    document.body.appendChild(el);
    setTimeout(function() { el.remove(); }, 800);
  }
});

// CONFETTI
var confettiColors = ['#f48fb1','#e91e8c','#c2185b','#fce4ec','#ff80ab','#ff4081','#ffb3d1','#ffffff'];
var confettiContainer = document.getElementById('confetti');

for (var i = 0; i < 60; i++) {
  var p = document.createElement('div');
  p.className = 'confetti-piece';
  p.style.left = Math.random() * 100 + '%';
  p.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
  p.style.width = (6 + Math.random() * 8) + 'px';
  p.style.height = (6 + Math.random() * 8) + 'px';
  p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
  p.style.animationDuration = (3 + Math.random() * 5) + 's';
  p.style.animationDelay = (Math.random() * 5) + 's';
  p.style.opacity = 0.6 + Math.random() * 0.4;
  confettiContainer.appendChild(p);
}

// FLOATING BALLOONS
var balloonEmojis = ['🎈','🎀','🌸','💗','🎊'];
var balloonContainer = document.getElementById('balloons');

for (var j = 0; j < 8; j++) {
  var b = document.createElement('div');
  b.className = 'balloon';
  b.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
  b.style.left = (5 + Math.random() * 90) + '%';
  b.style.animationDuration = (8 + Math.random() * 10) + 's';
  b.style.animationDelay = (Math.random() * 10) + 's';
  b.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
  balloonContainer.appendChild(b);
}

// FLOATING HEARTS BACKGROUND
var hbg = document.getElementById('heartsBg');

for (var k = 0; k < 15; k++) {
  var h = document.createElement('div');
  h.className = 'heart-float';
  h.textContent = '💕';
  h.style.left = Math.random() * 100 + '%';
  h.style.animationDuration = (12 + Math.random() * 10) + 's';
  h.style.animationDelay = (Math.random() * 12) + 's';
  hbg.appendChild(h);
}

// GIFT CARD
function openGift() {
  document.getElementById('cardOverlay').classList.add('active');
  boom();
}

function closeGift() {
  document.getElementById('cardOverlay').classList.remove('active');
}

document.getElementById('cardOverlay').addEventListener('click', function(e) {
  if (e.target === e.currentTarget) {
    closeGift();
  }
});

// MINI CONFETTI BOOM on open gift
function boom() {
  for (var x = 0; x < 30; x++) {
    var piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = (30 + Math.random() * 40) + '%';
    piece.style.top = '30%';
    piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    piece.style.animationDuration = (1 + Math.random() * 1.5) + 's';
    piece.style.animationDelay = '0s';
    document.body.appendChild(piece);
    setTimeout(function() { piece.remove(); }, 2500);
  }
}

// SCROLL REVEAL
var reveals = document.querySelectorAll('.reveal');
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(function(r) {
  observer.observe(r);
});
