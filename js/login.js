//1- VARIABLES GLOBALES
const loginForm = document.getElementById('loginForm');

const userNameInput = document.getElementById("username")
const passInput = document.getElementById("password")

const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados-LS')) || [];


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

// function handleSubmit(e) {
    
//         if (userNameInput.value == "admin" && passInput.value == "admin") {
//             e.preventDefault()
//             // alert("Puedes entrar")
//             window.location.href = "../html/admin.html"
    
//         }
//         else if (usuariosRegistrados[i].user === userNameInput.value) {
//             e.preventDefault()
//             window.location.href = "../index.html"
//         }



//         else {
//         alert("el usuario ó la contraseña ingresados no coinciden")
//     }
// }

// openAI:

function handleSubmit(e) {
    for (let i = 0; i < usuariosRegistrados.length; i++) {
      if (userNameInput.value === "admin" && passInput.value === "admin") {
        e.preventDefault();
        window.location.href = "../html/admin.html";
        return;
      } else if (usuariosRegistrados[i].user === userNameInput.value) {
        if (usuariosRegistrados[i].pass === passInput.value) {
          e.preventDefault();
          window.location.href = "../index.html";
          return;
        }
      }
    }
    alert("El usuario o la contraseña ingresados no coinciden");
    e.preventDefault();
    window.location.href = "../html/registro.html";
  }
  



loginForm.addEventListener('submit', handleSubmit)
