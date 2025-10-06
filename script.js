const displayTxt = document.querySelector("#display")
const numberBtn = document.querySelectorAll(".number")
const operatorBtn = document.querySelectorAll(".operator")
const functionBtn = document.querySelector(".operator")



numberBtn.forEach((numBtn) => {
    numBtn.addEventListener("click", function () {
        // let selectedNumber = numBtn.value
        numBtn.value
        console.log(numBtn.textContent)
        displayTxt.textContent += numBtn.textContent
        // console.log(numBtn.textContent)
    })
})
