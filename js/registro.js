const formRegister = document.getElementById("formRegister")

const userName = document.getElementById("userName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confPassword = document.getElementById("confPassword")


const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados-LS')) || [];

let id = usuariosRegistrados.length;




// Registrar usuario
function registrarUsuarios(event){
    // Prevenir los eventos precargados
    event.preventDefault();
    // Agregar automáticamente un ID
    id++;
    // Crear usuario objeto
    const user = {
        id: id,
        user: userName.value,
        email: email.value,
        pass: password.value,
        confPassword: confPassword.value,
    }
    // validar que los campos no esten vacios
    if (
        userName.value === "" ||
        email.value === "" ||
        password.value === "" ||
        confPassword.value === ""
    )  {
        alert("Por favor llene todos los campos")
        
    }
    // validar que las contraseñas coincidan
    else if (password.value !== confPassword.value){
        alert("Las contraseñas ingresadas no coinciden")
        id = usuariosRegistrados.length;

    }
    // validar que el usuario no exista previamente
        /*anterior:
    else if (usuariosRegistrados.find(user => user.user === userName.value)){ */

    else if (usuariosRegistrados.find(user => user.email === email.value)){
        alert("El usuario ya existe");
        formRegister.reset()
        id = usuariosRegistrados.length;

    }
    // validar que el usuario no exista (??)
    else {
        // AGREGAR USUARIO
        usuariosRegistrados.push(user);
        // guardar array en localStorage: -----------------



        // Obtener los datos actuales almacenados en Local Storage
        // let existingData = JSON.parse(localStorage.getItem('usuariosRegistrados-LS')) || [];

        // Agregar los nuevos datos al objeto existente
        // existingData.newKey = 'Nuevo valor';

        // Guardar los datos actualizados en Local Storage
        // localStorage.setItem('myData', JSON.stringify(existingData));

        localStorage.setItem("usuariosRegistrados-LS", JSON.stringify(usuariosRegistrados));
        alert("Usuario registrado con éxito");

        /* ANT
        localStorage.setItem("user", JSON.stringify(usuariosRegistrados));
        alert("Usuario registrado con éxito");
        ANT */ 

        // Limpiar campos
        userName.value = "";
        email.value = "";
        password.value = "";
        confPassword.value = ""
    }

}

formRegister.addEventListener("submit", registrarUsuarios)


