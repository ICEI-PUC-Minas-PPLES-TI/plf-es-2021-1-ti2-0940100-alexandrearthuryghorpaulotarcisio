//import {users} from '../js/cadastro.js'

//users = [];

let submit = document.getElementById('btn-submit');

submit.addEventListener('click', event => {
    event.preventDefault()
    if((document.querySelector('#username').value == "yghor@email.com") && 
    (document.querySelector('#password').value == "123456")) {
        location.replace("http://127.0.0.1:5500/codigo/html/home.html?");
    } else {
        console.log("Senha e usuário inválido");
    }
})

