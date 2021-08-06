const btn = document.getElementById("btn");
const inputText = document.getElementById("inputText");
const value = inputText.value;

function handelBtn() {
    console.log(value);
}

btn.addEventListener("click", handelBtn);