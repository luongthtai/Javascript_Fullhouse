// console.log("2" == 2) // => JS (2 == 2)

// console.log("2" === 2) // false <=> string !== number
// console.log(2 < 3)

// console.log("2" != 2) // false

// console.log((25 < 30) && ("Tai" === "Tai")) // true
// console.log((25 < 30) || ("Tai" === "Tai")) //  true

// console.log(!(30 < 21)) // true

// let age = 80;

// if (age >= 18 && age < 80) {
//     console.log("Bạn đã đủ điều kiện ....")
// }
// else if (age >= 80) {
//     console.log("Thôi thôi thôi !!!")
// }
// else {
//     console.log("Về nhà ăn uống cho lớn đi !!!")
// }


// BMI (Body mass index): chỉ số về tình trạng cân nặng
// BMI = cân nặng (kg) / (chiều cao (m) * chiều cao (m))

let canNang = prompt("Hãy nhập cân nặng của bạn: ")
let chieuCao = prompt("Hãy nhập chiều cao của bạn: ")

let BMI = canNang / (chieuCao * chieuCao)

alert("Chỉ số BMI của bạn là: " + BMI)
console.log("Chỉ số BMI của bạn là: ", BMI)