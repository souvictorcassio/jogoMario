const jiafei = document.querySelector(".jiafei");
const pipe = document.querySelector(".pipe");
const gameOverScreen = document.querySelector(".game-over");

const backgroundMusic = new Audio("./audios/rap-god-jiafei.wav");
const gameOverMusic = new Audio("./audios/rap-god-cupcakke.wav");

backgroundMusic.loop;

const jump = () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }

  jiafei.classList.add("jump");
  setTimeout(() => {
    jiafei.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const jiafeiPosition = +window
    .getComputedStyle(jiafei)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && jiafeiPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    jiafei.style.animation = "none";
    jiafei.style.bottom = `${jiafeiPosition}px`;

    jiafei.src = "./images/cupcakke.jpg";

    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    gameOverMusic.play();

    gameOverScreen.style.display = "block";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
