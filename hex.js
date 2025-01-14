const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const buttons = [
  { btn: "btn1", color: "color1", container: "cont-1" },
  { btn: "btn2", color: "color2", container: "cont-2" },
  { btn: "btn3", color: "color3", container: "cont-3" },
];

buttons.forEach(({ btn, color, container }) => {
  document.getElementById(btn).addEventListener("click", () => {
    const hexColor = generateHexColor();
    document.querySelector(`.${color}`).textContent = hexColor;
    document.getElementById(container).style.backgroundColor = hexColor;
  });
});

document.getElementById("btn4").addEventListener("click", () => {
  buttons.forEach(({ color, container }) => {
    const hexColor = generateHexColor();
    document.querySelector(`.${color}`).textContent = hexColor;
    document.getElementById(container).style.backgroundColor = hexColor;
  });
});

function generateHexColor() {
  return "#" + Array.from({ length: 6 }, () => hex[getRandomNumber()]).join("");
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
