let inputUser = document.getElementById('inputUser');
const inputPassword = document.getElementById('inputPassword');
const buttonLogin = document.getElementById('buttonLogin')

let listUsers = localStorage.getItem('login')
let users = JSON.parse(listUsers)


// Preguntar a Jesus
// let user = inputUser.value;
// const password = inputPassword.value;

async function exito(){
    await Swal.fire({
        title: 'Correcto!',
        text: 'Bienvenido',
        icon: 'success',
        confirmButtonColor: '#4880FF',
      })
      window.location.href = 'index.html';
}
 
buttonLogin.addEventListener('click', ()  => {

    users.forEach((element, index) => {
        let userValid = element.user;
        let passwordValid = element.password;
        
        if ((inputUser.value == element.user) && (inputPassword.value == element.password)) {
            exito();
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Introduzca una Informacion Valida',
                icon: 'error',
                confirmButtonColor: '#4880FF',
              })
        }
    })
})

