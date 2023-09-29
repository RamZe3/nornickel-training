let a = Math.floor(Math.random() * 100);
let result;

result = (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

console.log("Основное выражение: " + result);

if (a > 10) {
    result = (2 * a) + 1;
} else {
    if (a < 3) {
        result = 1;
    } else {
        if ((a - 2) > 4) {
            result = 5;
        } else {
            if (a % 2 == 0) {
                result = 6;
            } else {
                result = 7;
            }
        }
    }
}

console.log("Использование if else: " + result);

switch (true) {
    case (a > 10):
        result = (2 * a) + 1;
        break;
    case (a < 3):
        result = 1;
        break;
    case ((a - 2) > 4):
        result = 5;
        break;
    case (a % 2 == 0):
        result = 6;
        break;
    default:
        result = 7;
}

console.log("Использование swich case: " + result);