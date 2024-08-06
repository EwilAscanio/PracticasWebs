let inputUser = document.getElementById('inputUser');
const inputPassword = document.getElementById('inputPassword');
const buttonLogin = document.getElementById('buttonLogin')

let listUsers = localStorage.getItem('login')
let users = JSON.parse(listUsers)


// Preguntar a Jesus
// let user = inputUser.value;
// const password = inputPassword.value;


 
buttonLogin.addEventListener('click', ()  => {

    users.forEach((element, index) => {
        let userValid = element.user;
        let passwordValid = element.password;
        
        if ((inputUser.value == element.user) && (inputPassword.value == element.password)) {
            alert('Usuario Registrado')
            window.location.href = 'index.html';
        }else{
            alert('Datos Erroneos')
        }
    }
    )




    // console.log(inputUser.value);
    // console.log(inputPassword.value)
    
    // if((inputUser.value == data.user) && (inputPassword.value == data.password)){
    //     window.location.href = 'index.html';
    // }else{
    //     //console.log(user)
    //     //console.log(inputUser.value)
    //     alert('Datos Erroneos')
    // }
    
})

// if(user == data.user){
//     alert('Usuario Registrado')
// }else{
//     let password = prompt("Ingresar Contrasena");
// }
// localStorage.setItem('login', JSON.stringify({
//     id: 1,
//     user: user,
//     //password: password
// }))

// let data = localStorage.getItem('login')
// data = JSON.parse(data)
// console.log(data.user);
// console.log(localStorage);


/*



const date = document.querySelector('.date');
const list = document.querySelector('.list');
const btnAddTask = document.querySelector('.btnAddTask');
const input = document.querySelector('.login__input');

const check = 'fa-check-circle';
const uncheck = 'fa-circle'
const lineThrough  = 'line-through';

let id;
let list_task;

// Crear e insertar fecha
const DATE = new Date();
date.textContent = DATE.toLocaleDateString('es-VE', {
    weekday: 'long',
    month:'long',
    day:"numeric"
});


//insert y obtener datos en el localStorage
const name = document.querySelector('.name');

localStorage.setItem('taskApp', JSON.stringify({
    id: 1,
    name: 'Jesus Adrian',
    email: 'jesus@gmail.com'
}))


let data = localStorage.getItem('taskApp')
data = JSON.parse(data)
console.log(data.name);
console.log(localStorage);


// Pedir Nombre
let userName = localStorage.getItem('taskAppUser');
const name = document.querySelector('.name');

if(userName && userName != 'null' && userName != null){
    name.textContent = `¡Hola ${userName}, feliz ${DATE.toLocaleDateString('es-VE', {
        weekday: 'long',
    })}!`
}else{
    let newName = prompt("Ingresar Nombre");

    name.textContent = `¡Hola ${userName}, feliz ${DATE.toLocaleDateString('es-VE', {
        weekday: 'long',
    })}!`;
    localStorage.setItem('taskAppUser', newName)
}

*/