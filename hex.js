const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");

btn1.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color1.textContent = hexColor;
  document.getElementById("cont-1").style.backgroundColor = hexColor;
});

btn2.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color2.textContent = hexColor;
  document.getElementById("cont-2").style.backgroundColor = hexColor;
});

btn3.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color3.textContent = hexColor;
  document.getElementById("cont-3").style.backgroundColor = hexColor;
});

btn4.addEventListener("click", function () {
    let hexColor1 = "#";
    for (let i = 0; i < 6; i++) {
      hexColor1 += hex[getRandomNumber()];
    }

    let hexColor2 = "#";
    for (let i = 0; i < 6; i++) {
      hexColor2 += hex[getRandomNumber()];
    }

    let hexColor3 = "#";
    for (let i = 0; i < 6; i++) {
      hexColor3 += hex[getRandomNumber()];
    }
  
    color1.textContent = hexColor1;
    color2.textContent = hexColor2;
    color3.textContent = hexColor3;
    document.getElementById("cont-1").style.backgroundColor = hexColor1;
    document.getElementById("cont-2").style.backgroundColor = hexColor2;
    document.getElementById("cont-3").style.backgroundColor = hexColor3;
  });

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
