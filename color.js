const colorPalette = [
  "bg-blue-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-orange-100",
  "bg-teal-100",
  "bg-lime-100",
  "bg-red-100",
  "bg-violet-100",
  "bg-fuchsia-100",
  "bg-rose-100"
];
// console.log(colorPalette);
// for (color of colorPalette){
//   console.log(color);
// }

const themeBtn = document.getElementById("theme-btn");
const colorToBody = document.getElementById("body");

function changeColor() {
  let randomIndexNumber = Math.floor(Math.random() * colorPalette.length);

  let randomColor = colorPalette[randomIndexNumber];

  for (const color of colorPalette) {
    colorToBody.classList.remove(color);
  }
  colorToBody.classList.add(randomColor);
}

themeBtn.addEventListener("click", changeColor)