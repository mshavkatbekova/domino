const titleEl = document.getElementById("title");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const subTitle1 = document.getElementById("sub-title1");
const subTitle2 = document.getElementById("sub-title2");
const randomN1 = Math.trunc(Math.random() * 6) + 1;
const randomN2 = Math.trunc(Math.random() * 6) + 1;

image1.src = `./image-${randomN1}.png`;
image2.src = `./image-${randomN2}.png`;

if (randomN1 > randomN2) {
  titleEl.textContent = "Player 1 winner !";
  document.body.style.backgroundColor = "aqua";
} else if (randomN2 > randomN1) {
  titleEl.textContent = "Player 2 winner !";
  document.body.style.backgroundColor = "blueviolet";
} else {
  titleEl.textContent = "Draw !";
  document.body.style.backgroundImage = "linear-gradient(aqua, blueviolet)";
}
