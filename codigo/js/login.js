window.onload = () => {
    var user = new Array();
    campoEmail(user);
    campoSenha(user);
};

campoEmail = (user) => {
    let fieldEmail = document.getElementById('username');
    fieldEmail.onchange = () => {
        user[0] = {
            email: fieldEmail.value
        };
        sessionStorage.setItem("user", JSON.stringify(user));
    }
}

campoSenha = (user) => {
    let fieldSenha = document.getElementById('password');
    fieldSenha.onchange = () => {
        user[1] = {
            password: fieldSenha.value
        };
        sessionStorage.setItem("user", JSON.stringify(user));
    }
}