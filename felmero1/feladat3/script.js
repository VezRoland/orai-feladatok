function calculate(btn) {
    const num1 =+ document.querySelector("#inp1").value
    const num2 =+ document.querySelector("#inp2").value
    
    document.querySelector(".result").innerText = eval(`${num1}${btn.innerText}${num2}`)
}