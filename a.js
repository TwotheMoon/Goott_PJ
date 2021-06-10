const btn = document.querySelector('P');

btn.addEventListener("click", updateSign);

function updateSign() {
  let Sign = prompt("your name is...");
  btn.textContent = "Don't touch me! " + Sign + "!!";
}