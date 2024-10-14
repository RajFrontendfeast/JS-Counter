let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement")
let reset = document.getElementById("reset")
let result = document.getElementById("result")

let count = 0;

increment.onclick = function () {
    if (count === 10) {
        alert(`You reached the max value`)
    } else {
        count++
    }
    result.textContent = count;
}

decrement.onclick = function () {
    if (count === 0) {
        alert(`count is already Zero`)
    } else { count-- }
    result.textContent = count;
}

reset.onclick = function () {
    count = 0
    result.textContent = count;
}