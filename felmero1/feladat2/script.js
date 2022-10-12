function szamit() {
    const szel =+ document.querySelector("#szel").value
    const mag =+ document.querySelector("#mag").value

    document.querySelector(".eredmeny").innerHTML = `Kerület: ${2 * szel + 2 * mag}<br>Terület: ${szel * mag}`
}