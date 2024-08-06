const inputName = document.querySelector('.login__input_name');
const email = document.querySelector('#email');
const inputPassword = document.querySelector('.login__input_password');
const rol = document.getElementById('rol').value;
const buttonCreate = document.querySelector('.container_form_login');

// const userName = inputName.value;
// let user = inputUser.value;
// const password = inputPassword.value;
let idUser;
let listUsers =[];


let dataUsers = localStorage.getItem('login'); //Obtener datos de localStorage

dataUsers = JSON.parse(dataUsers); // Covertir a objeto

if (dataUsers === null){ // Si no existe, creamos un array vacio.
    dataUsers = [];
    idUser = 1;
} 

function createUsers () {
    
     listUsers.push({
         id: idUser,
         name: inputName.value,
         user: email.value,
         password: inputPassword.value,
         rol: rol
     })

     localStorage.setItem('login', JSON.stringify(listUsers));

    // esta opcion funciona pero luego no puedo obtener los datos de varios usuarios

//      const info_users = JSON.stringify({
//            id: idUser,
//            name: inputName.value,
//            user: email.value,
//           password: inputPassword.value,
//            rol: rol
//     });

//      dataUsers.push(info_users); // Guardar datos en el array definido
//      localStorage.setItem("login2", JSON.stringify(dataUsers));
  }

buttonCreate.addEventListener('click', e=>{
    
    if ((inputName.value =="") || (email.value == "") || (inputPassword.value == "")) {
        alert("Introduzca una Informacion")
        inputName.value = "";
        inputPassword.value = "";
        email.value = "";
    }else{
        createUsers();
        window.location.href = 'login.html';
    }
} )


