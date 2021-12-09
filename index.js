const hex = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const reset = document.getElementById("reset");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}

reset.addEventListener("click", function () {
  document.body.style.backgroundColor = "#FFFFFF";
  color.innerText = "#FFFFFF";
});
