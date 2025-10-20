// const emailForm = document.getElementById("email")
// const passwordForm = document.getElementById("password")

// const showEmail = document.getElementById("show_email")
// const showPassword = document.getElementById("show_password")
// const coutElm = document.getElementById("cout")

// const preBtn = document.getElementById("pre")
// const nextBtn = document.getElementById("next")

// let coutNumber = 0;

// coutElm.textContent = coutNumber

// preBtn.addEventListener("click", function () {
//     coutNumber--
//     coutElm.textContent = coutNumber
// })

// nextBtn.addEventListener("click", function () {
//     coutNumber++
//     coutElm.textContent = coutNumber
// })

// submitForm.addEventListener("click", function () {
//     // console.log("Email: ", emailForm.value)
//     // console.log("Password: ", passwordForm.value)
//     showEmail.textContent = `Email đã nhập là: ` + emailForm.value
//     showPassword.textContent = "Password đã nhập là: " + passwordForm.value
// })

// const param = document.getElementById("param")
// param.textContent = "Front-end"
// param.innerHTML = "<strong>Front end</strong>"

// const btn = document.getElementById("btn")

// Cach 1:
// btn.onclick = function () {
//     console.log("Da click")
// }

// Cach 2:

// const pElm = document.getElementById("param")
// pElm.style.color = "#ff0000"
// pElm.style.fontSize = "30px"

// const aboutLink = document.getElementById("about")

/*
    classList:
        + add: Thêm 1 class
        + remove: Xóa 1 class
        + toggle: Bật/tắt class\
        + contains: Kiểm tra xem phần tử có chứa class đó hay không
            => boolean (true/false)
*/

// btn.addEventListener("click", function () {
//     console.log(aboutLink.classList.contains("text-red"))
// })

// const statusContent = document.getElementById("status")

// const btn_success = document.getElementById("btn_success")
// const btn_warning = document.getElementById("btn_warning")
// const btn_error = document.getElementById("btn_error")

// function sttSuccess() {
//     statusContent.classList.remove("warning")
//     statusContent.classList.remove("error")
//     statusContent.classList.add("success")
// }

// function sttWarning() {
//     statusContent.classList.remove("success")
//     statusContent.classList.remove("error")
//     statusContent.classList.add("warning")
// }

// function sttError() {
//     statusContent.classList.remove("success")
//     statusContent.classList.remove("warning")
//     statusContent.classList.add("error")
// }

// // DOM Listen
// btn_success.addEventListener("click", sttSuccess)
// btn_warning.addEventListener("click", sttWarning)
// btn_error.addEventListener("click", sttError)

// // DOM Event
// btn_error.onclick = function () {
//     // xử lý code khi client click
// }
// const body = document.getElementsByTagName("body")[0]
// const btn = document.createElement("button")
// const helloElm = document.getElementById("hello")
// const fullhouseElm = document.getElementById("fullhouse")

// btn.textContent = "Submit"
// btn.classList.add("btn")
// btn.setAttribute('type', 'button')

// body.appendChild(btn)    // btn sẽ là phần tử con cuối cùng của body
// body.prepend(btn)        // btn sẽ là phần tử con đầu tiên của body
// fullhouseElm.after(btn)  // btn sẽ được thêm vào sau phần tử fullhouseElm
// fullhouseElm.before(btn) // btn sẽ được thêm vào trước phần tử fullhouseElm

// helloElm.remove()

// dart => flutter
// js => react native

const btnSubmit = document.getElementById("submit")
const inputForm = document.getElementById("work")
const todoList = document.getElementById("todoList")

btnSubmit.onclick = function () {
    const valueInput = inputForm.value.trim()

    if (!valueInput) alert("Hãy nhập gì đó !!!")
    else {
        const listWork = localStorage.getItem("listWork")

        // Tạo element html
        const liElm = document.createElement("li")
        const divElm = document.createElement("div")
        const spanElm = document.createElement("span")
        const btnElm = document.createElement("button")

        // Thêm span, button vào thẻ div
        divElm.appendChild(spanElm)
        divElm.appendChild(btnElm)

        // Thêm class "workItem" vào thẻ div
        divElm.classList.add("workItem")

        // Thêm thẻ div vào thẻ li
        liElm.appendChild(divElm)

        // Gán content vào thẻ span và thẻ button
        spanElm.textContent = valueInput
        btnElm.textContent = "Xóa"

        // Gán index vào span
        liElm.setAttribute("data-index", listWork.length ? 0 : listWork.length)

        // Add thẻ li (công việc) vào thẻ ul (list công việc)
        todoList.appendChild(liElm)

        localStorage.setItem("listWork", [...arguments, valueInput])

        // Reset form
        inputForm.value = ""
        inputForm.focus()

        // Xóa thẻ li (công việc)
        btnElm.addEventListener("click", function () {
            liElm.remove()
        })
    }
}