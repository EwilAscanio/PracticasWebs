const userName = document.querySelector('.nombre_usuario');
const rolUser = document.querySelector('.rol_usuario');
const logoutSesion = document.querySelector('.link-logout')
const helloUsers = document.querySelector('.content_main_title')
const deleteBd = document.querySelector('.content_container_delete')

let listUsers = localStorage.getItem('login')
let users = JSON.parse(listUsers)

users.forEach((element, index) => {
    userName.textContent = element.name;
    rolUser.textContent = element.rol;
    helloUsers.innerHTML = `Bienvenido, ${element.name}`;
})

async function logout(){
    await Swal.fire({
        title: 'Cierre de Sesion!',
        text: 'Hasta Luego',
        icon: 'success',
        confirmButtonColor: '#4880FF',
      })
      window.location.href = 'login.html';
}

async function clearBd(){
    await Swal.fire({
        title: 'Eliminar la Base de Datos',
        text: 'Debe crear un nuevo usuario',
        icon: 'success',
        confirmButtonColor: '#4880FF',
      })
      
      localStorage.clear();
      window.location.href = 'create_user.html';
}

logoutSesion.addEventListener('click', e=>{
    logout();
})

deleteBd.addEventListener('click', e=>{
    clearBd();
})