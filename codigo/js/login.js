window.onload = () => {
    var user = new Array();
    campoEmail(user);
    campoSenha(user);
};

campoEmail = (user) => {
    let fieldEmail = document.getElementById('username');
    fieldEmail.onchange = () => {
        user.push({
            email: fieldEmail.value
        });
        sessionStorage.setItem("user", JSON.stringify(user));
    }
}

campoSenha = (user) => {
    let fieldSenha = document.getElementById('password');
    fieldSenha.onchange = () => {
        user.push({
            password: fieldSenha.value
        });
        sessionStorage.setItem("user", JSON.stringify(user));
    }
}