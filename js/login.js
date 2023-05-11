
//1- VARIABLES GLOBALES
const loginForm = document.getElementById('loginForm');
const userNameInput = document.getElementById("username")
const passInput = document.getElementById("password")

let usuarios = []


// function handleSubmit() {
//     if (userNameInput.value == "juanperez@hotmail.com" && passInput.value == "juan111") {
//         alert("Puedes entrar")
//         window.location.href = "http://www.google.com"
//     }else{
//         alert("el usuario ó la contraseña ingresados no coinciden")
//     }

//     if (userNameInput.value == "admin" && passInput.value == "admin") {
//         alert("redirigir a pagina del administrador")
//         window.location.href = "http://www.google.com"
//         // alert("Puedes entrar")
//     }else{
//         alert("el usuario ó la contraseña ingresados no coinciden")
//     }

// }

function handleSubmit(e) {
    if (userNameInput.value == "admin" && passInput.value == "admin") {
        e.preventDefault()
        // alert("Puedes entrar")
        window.location.href = "../html/admin.html"

    } else if (userNameInput.value == "juanperez@hotmail.com" && passInput.value == "juan123"){
        // alert("Puedes entrar")
        e.preventDefault()
        window.location.href = "../index.html"
    } else {
        alert("el usuario ó la contraseña ingresados no coinciden")
    }
}

 


loginForm.addEventListener('submit', handleSubmit)
