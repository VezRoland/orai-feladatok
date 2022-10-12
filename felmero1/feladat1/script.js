const imgs = ["img1", "img2"]

function changeImage() {
    const img = document.querySelector("img")
    let imgSrc = img.src.split("/").pop().replace(".jpg", "")

    if (imgs.indexOf(imgSrc) + 1 === imgs.length) imgSrc = imgs[0]
    else imgSrc = imgs[imgs.indexOf(imgSrc) + 1]

    img.src = `${imgSrc}.jpg`
}