let b = 20

function dienTichHinhChuNhat(width, height) {
    return width * height;
}

console.log("global scope: ", a);

let area1 = dienTichHinhChuNhat(10, 5);

console.log(area1);

var a = 10;