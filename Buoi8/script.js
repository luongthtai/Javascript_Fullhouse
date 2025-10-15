// const emailForm = document.getElementById("email")
// const passwordForm = document.getElementById("password")

// const showEmail = document.getElementById("show_email")
// const showPassword = document.getElementById("show_password")
const coutElm = document.getElementById("cout")

const preBtn = document.getElementById("pre")
const nextBtn = document.getElementById("next")

let coutNumber = 0;

coutElm.textContent = coutNumber

preBtn.addEventListener("click", function () {
    coutNumber--
    coutElm.textContent = coutNumber
})

nextBtn.addEventListener("click", function () {
    coutNumber++
    coutElm.textContent = coutNumber
})

// submitForm.addEventListener("click", function () {
//     // console.log("Email: ", emailForm.value)
//     // console.log("Password: ", passwordForm.value)
//     showEmail.textContent = `Email đã nhập là: ` + emailForm.value
//     showPassword.textContent = "Password đã nhập là: " + passwordForm.value
// })


