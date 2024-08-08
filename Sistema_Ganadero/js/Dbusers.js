const inputName = document.querySelector('.login__input_name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('.login__input_password');
const rol = document.getElementById('rol').value;
const buttonCreate = document.querySelector('.container_form_login');

// const userName = inputName.value;
// const email = inputEmail.value;
// const password = inputPassword.value;

let idUser;
let listUsers;
let userEncontrado;


let dataUsers = localStorage.getItem('login'); //Obtener datos de localStorage

dataUsers = JSON.parse(dataUsers) || []; // Covertir a objeto

if (dataUsers === null){ // Si no existe, creamos un array vacio.
    idUser = 1;
} 


function createUsers () {

    dataUsers.push({
    id: idUser,
    name: inputName.value,
    user: inputEmail.value,
    password: inputPassword.value,
    rol: rol
    })
    idUser++;
    
    localStorage.setItem('login', JSON.stringify(dataUsers));
}

buttonCreate.addEventListener('click', e=>{
    
    if ((inputName.value == "") || (inputEmail.value == "") || (inputPassword.value == "")) {
        return Swal.fire({
            title: 'Error!',
            text: 'Introduzca una Informacion Valida',
            icon: 'error',
          })
    }


    const isUserRegistered = dataUsers.find(i => i.user === inputEmail.value)
    if(isUserRegistered){ 
        inputName.value = "";
        inputEmail.value = "";
        inputPassword.value = "";
    return Swal.fire({
        title: 'Error!',
        text: 'El Usuario ya esta registrado',
        icon: 'error',
      })
    }
    
    createUsers();
    exito();
} )

async function exito(){
    await Swal.fire({
        title: 'Correcto!',
        text: 'Usuario creado con Exito!!!',
        icon: 'success',
        confirmButtonColor: '#4880FF',
    })
      window.location.href = 'login.html';
}
