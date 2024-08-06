const userName = document.querySelector('.nombre_usuario');
const rolUser = document.querySelector('.rol_usuario');

let listUsers = localStorage.getItem('login')
let users = JSON.parse(listUsers)

users.forEach((element, index) => {
    userName.textContent = element.name;
    rolUser.textContent = element.rol;
})