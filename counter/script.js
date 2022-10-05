const content = document.querySelector(".content")
const minNum = content.dataset.min
const maxNum = content.dataset.max

content.addEventListener("click", (event) => {
    const mode = event.target.dataset.mode
    const value = content.dataset.value;

    (mode == "+") ? content.dataset.value = Math.min(Number(value) + 1, maxNum) : content.dataset.value = Math.max(Number(value) - 1, minNum)
})