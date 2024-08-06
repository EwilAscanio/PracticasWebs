const inputName = document.querySelector('.login__input_name');
const email = document.querySelector('#email');
const inputPassword = document.querySelector('.login__input_password');
const rol = document.getElementById('rol').value;
const buttonCreate = document.querySelector('.container_form_login');

// const userName = inputName.value;
// let user = inputUser.value;
// const password = inputPassword.value;
let idUser;
let listUsers;



function createUsers(){
    if (localStorage.length == 0) {
        idUser = 1;
    }

    localStorage.setItem('login', JSON.stringify({
        id: idUser,
        name: inputName.value,
        user: email.value,
        password: inputPassword.value,
        rol: rol
    })); 
idUser++;

}



buttonCreate.addEventListener('click', e=>{
    createUsers();
} )

let data = localStorage.getItem('login')
data = JSON.parse(data)

console.log(localStorage)























// buttonCreate.addEventListener('click', e =>{
//     e.preventDefault();
//     const data = localStorage.getItem('login') || [];
//     const isUserRegistered = data.find(user => user.email === email);

// if(isUserRegistered){
//     alert('El usuario ya esta registado!')
// }

// data.push({name: inputName, email: email, password: inputPassword, rol: rol})
// localStorage.setItem('login', JSON.stringify(data))
// alert('Registro Exitoso!')

// })














// window.location.href = 'login.html'

// if(data){
//     listUsers = JSON.parse(data);
//     id = listUsers.length
//     loadTaskList(list_task)
// }else{
//     list_task = []
//     id = 0
// }

// function loadTaskList(data){
//     data.forEach(task => {
//         taskAdd(task.id, task.taskValue, task.realized, task.removed)
//     });
// }

// buttonCreate.addEventListener('click', event  => {
//     event.preventDefault();

//     let data = localStorage.getItem('login')
//     data = JSON.parse(data)
//     // console.log(data.id)
//     // console.log(idUser)

//     if (inputUser.value == data.user) {
//         alert('Usuario Registrado')
//     }else{
//         localStorage.setItem('login', JSON.stringify({
//             id: idUser,
//             name: inputName.value,
//             user: inputUser.value,
//             password: inputPassword.value,
//             rol: rol
//         }));

//     }
//     //     idUser++
//     //     alert("Prueba")
//     //     console.log(idUser);

//         // window.location.href = 'login.html';
//         //id++;
        
// })

// // const signupForm = document.querySelector('#signupForm')
// // signupForm.addEventListener('submit', (e)=>{
// //     e.preventDefault()
// //     const name = document.querySelector('#name').value
// //     const email = document.querySelector('#email').value
// //     const password = document.querySelector('#password').value

// //     const Users = JSON.parse(localStorage.getItem('users')) || []
// //     const isUserRegistered = Users.find(user => user.email === email)
// //     if(isUserRegistered){
// //         return alert('El usuario ya esta registado!')
// //     }

// //     Users.push({name: name, email: email, password: password})
// //     localStorage.setItem('users', JSON.stringify(Users))
// //     alert('Registro Exitoso!')
// //     window.location.href = 'login.html'

// // })




    

       
