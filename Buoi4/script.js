// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

/*
   B1. Khai báo biến i và gán giá trị là 1
   B2. Kiểm tra 6 <= 5 => if (true) {B3} ----- else {kết thúc vòng lặp}
   B3. Thực thi console.log(i)
   B4. Thực hiện bước nhảy i++ (cộng thêm 1 đơn vị) => i =
   B5. quay lại B2
*/

// for (let i = 10; i >= 0; i--) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

let a = 9; // 0 <= a <= 10
let b = null;

while (b != a) {
    b = prompt("Nhập số từ 0 đến 10") // string 

    if (b != a) {
        alert("Số này sai rồi")
    }
}

alert("Chính xác là nó")
