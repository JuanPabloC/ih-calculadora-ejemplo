console.log("hola mundo")

// 1. VARIABLES

const nombre = document.getElementById("capturar-nombre")
const btnSaludar = document.getElementById("btn-saludar")
const areaSaludo = document.getElementById("area-saludo")


// 2. FUNCIONES
const saludar = (val) => {
    const saludo = `Hola ${val}!!!`

    areaSaludo.innerHTML = saludo
}

// 3. EVENTOS

btnSaludar.addEventListener("click", () => {
    const nameValue = nombre.value
    saludar(nameValue)
})