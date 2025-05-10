let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let y = 300;
let micOn = false;

function startGame() {
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    const mic = new AudioContext();
    const source = mic.createMediaStreamSource(stream);
    const analyser = mic.createAnalyser();
    source.connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);

    setInterval(() => {
      analyser.getByteFrequencyData(data);
      const volume = data.reduce((a, b) => a + b) / data.length;
      micOn = volume > 10; // Awaaz zyada to ball upar
    }, 100);
  });

  gameLoop();
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'skyblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(200, y, 20, 0, 2 * Math.PI);
  ctx.fill();

  if (micOn) y -= 5;
  else y += 5;

  if (y < 0 || y > canvas.height) {
    alert('Game Over!');
    y = 300;
  }

  requestAnimationFrame(gameLoop);
}