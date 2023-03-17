export default (() => {

  let player = document.querySelector('#player');
  let info = document.querySelector('.info');
  let audio = new Audio('https://www.w3schools.com/html/horse.mp3');

  let heart = document.querySelector('.heart');
  let shuffle = document.querySelector('.shuffle');
  let play = document.querySelector('.play');
  let pause = document.querySelector('.pause');

  console.log(player)

  player?.addEventListener("mouseover", () => {
      info.classList.toggle("up");
  });

  player?.addEventListener("touchstart", () => {
      info.classList.toggle("up");
  });

  heart.addEventListener("click", () => {
      heart.classList.toggle("clicked");
  });

  shuffle.addEventListener("click", () => {
      shuffle.classList.toggle("clicked");
  });

  play.addEventListener("click", () => {
      audio.play();
  });

  pause.addEventListener("click", () => {
      audio.pause();
  });
})();