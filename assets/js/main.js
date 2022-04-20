let age1 = document.getElementById("age1");
let age2 = document.getElementById("age2");
let result = document.getElementById("result");

function ageMix() {
    result.innerHTML = Math.abs(age1.value - age2.value);
}
