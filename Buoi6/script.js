const values = [1, 'the tai', true, { name: "tai", age: 20 }]
const values2 = new Array(1, true, 3, { name: "tai", age: 20 }, 6)

console.log("Mảng ban đầu: ", values)
values.push("fullhouse")

console.log("Mảng sau khi push: ", values)

values.shift()
console.log("Mảng sau khi shift: ", values)

// Tương tác vào cây DOM