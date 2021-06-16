window.onload=()=>{
    autenticado();
    escolherCarro();
    sairSistema();
}

autenticado=()=>{
    let loginLoggout = document.getElementById('login-loggout');
    if(sessionStorage.hasOwnProperty("user")){
        var userInfos = JSON.parse(sessionStorage.getItem("user"));
        $.post("../php/autenticacao.php", {
            email : userInfos[0].email, 
            senha : userInfos[1].password 
        }, function(response){
            if(response == "true") {
                loginLoggout.innerHTML = "Sair";
                loginLoggout.href="../html/login.html";
                userInfos[2] = {logado: true};
                sessionStorage.setItem("user", JSON.stringify(userInfos));
            } else {
                loginLoggout.innerHTML = "Entrar";
                userInfos[2] = {logado: false};
                sessionStorage.setItem("user", JSON.stringify(userInfos));
                loginLoggout.href="../html/login.html";
            }
        });
    } else {
        loginLoggout.innerHTML = "Entrar";
        if(sessionStorage.hasOwnProperty("user")){
            userInfos[2] = {logado: false};
        }
        loginLoggout.href="../html/login.html";
    }
}

escolherCarro=()=>{
    let escolherCarroHtml = document.getElementById('escolherCarro');
    escolherCarroHtml.onclick=()=>{
        if(sessionStorage.hasOwnProperty("user")){
            var userInfos = JSON.parse(sessionStorage.getItem("user"));
            if(userInfos[2].logado == true){
                escolherCarroHtml.href="../html/escolherCarro.html";
            } else {
                escolherCarroHtml.href="../html/login.html";
            }
        } else {
            escolherCarroHtml.href="../html/login.html";
        }
    }
}

sairSistema=()=>{
    let loginLoggout = document.getElementById('login-loggout');
    loginLoggout.onclick=()=>{
        if(sessionStorage.hasOwnProperty("user")){
            let userInfos = JSON.parse(sessionStorage.getItem("user"));
            userInfos = [];
            sessionStorage.removeItem("user");
        }
    }
}