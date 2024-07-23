'use strict';
const N = prompt("Введіть ціле число N:");
if (N !== null && N.trim() !== '' && !isNaN(N) && Number.isInteger(Number(N))) {
    let result = '';
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            result += i + ' ';
        }
    }
    console.log(result.trim());
} else {
    alert("Введено некоректне значення. Будь ласка, введіть ціле число.");
}
