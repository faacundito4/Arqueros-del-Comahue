function switchTheme(){
    actualMode = document.body.getAttribute("data-bs-theme")

    mode = actualMode === "light" ? "dark" : "light"
    document.body.setAttribute("data-bs-theme", mode)

    localStorage.setItem("modo", mode)
}

window.addEventListener("load", () => {
    console.log("pagina cargada")
    mode = localStorage.getItem("modo")
    document.body.setAttribute("data-bs-theme", mode)
})