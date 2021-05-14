window.onload = () => {
    nomeCompleto();
    email();
    idade();
    cnh();
    genero();
    cpf();
    senha();
    confirmarSenha();
    cadastrar();
};

//ok
nomeCompleto = () => {
    let campoNome = document.getElementById('username');
    let expressaoApenasLetras = new RegExp(/[^a-zA-Z' ]/s);
    validaNome = false;
    campoNome.oninput = () => {
        if(expressaoApenasLetras.test(campoNome.value)){
            campoNome.value = campoNome.value.substr(0, campoNome.value.length - 1);
        }
    }
    campoNome.onblur = () => {
        if(campoNome.value == '' || campoNome.value.length < 10){
            campoNome.style.border = 'red solid';
            document.getElementById('msgNome').innerHTML="Insira o nome completo";
            validaNome = false;
        }else{
            validaNome=true;
            campoNome.style.border = 'none';
            document.getElementById('msgNome').innerHTML="";
        }
    }
}
//ok
email = () => {
    let email = document.getElementById('email');
    validaEmail = false;
    email.onblur = () => {
        validaEmail = true;
        let regexpEmail = new RegExp(/\S+@\S+\.\S+/);
        if(regexpEmail.test(email.value)){
            validaEmail = true;
            email.style.border = 'none';
            document.getElementById('msgEmail').innerHTML="";
        }else{
            validaEmail= false;
            email.style.border = 'red solid';
            document.getElementById('msgEmail').innerHTML="Email incorreto";
        }
    }
}
//ok
genero =()=>{
    let gender = document.getElementById('gender');
    validaGenero = false;
    gender.onchange=()=> {
        if(gender.value != "Selecione"){
            validaGenero = true;
            gender.style.border = 'none';
            document.getElementById('msgGender').innerHTML="";
        }else{
            gender.style.border = 'red solid'
            document.getElementById('msgGender').innerHTML="Escolha uma opcão.";

        }
    }
}
//ok
idade = () => {
    let data = document.getElementById('birth');
    validaIdade=false;

    data.onblur = () => {
        let d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth()+1,
        dia_atual = d.getDay()+10
        posicao= data.value.split('-');
        ano_bday= posicao[0];
        mes_bday = posicao [1];
        dia_bday = posicao[2];
        idade = ano_atual - ano_bday;
        
        if (mes_atual < mes_bday || mes_atual == mes_bday && dia_atual < dia_bday){
            idade--;
        }
        if(idade<21){
            validaIdade=false;
            data.style.border = 'red solid';
            document.getElementById('msgNiver').innerHTML="Idade miníma obrigatória de 21 anos";

        } else {
            validaIdade = true;
            data.style.border = 'none';
            document.getElementById('msgNiver').innerHTML="";
        }
    }
}
//ok
cpf = () => {
    let expApenasNumeros = new RegExp(/[^0-9]/i);
    let cpf = document.getElementById("cpf");
    validaCPF = false;
    cpf.oninput = () =>{
        if(expApenasNumeros.test(cpf.value)){
            cpf.value = cpf.value.substr(0, cpf.value.length - 1);
            cpf.style.border = ' red solid';
            document.getElementById('msgCPF').innerHTML="Digite apenas números";
        }else{
            document.getElementById('msgCPF').innerHTML="";
            cpf.style.border = 'none';
        }
    }

    cpf.onblur =() =>{
        let cont = 0;
        validaCPF = true;

        if(cpf.value.length != 11 ) {
            validaCPF = false;
            cpf.style.border = ' red solid';
            document.getElementById('msgCPF').innerHTML="CPF inválido"
        }
        for (let i = 0; i<3 ;i++) {
            if(cpf.value.charAt(i)==cpf.value.charAt(3+i)) {
                cont ++;
            }
        }
        if(cont>=3) {
            validaCPF = false;
            cpf.style.border = ' red solid';
            document.getElementById('msgCPF').innerHTML="CPF inválido"
        }

        if(validaCPF){
            document.getElementById('msgSenha').innerHTML="";
            cpf.style.border = 'none';
        }
    }
    
}
//ok
cnh = () =>{
    let expApenasNumeros = new RegExp(/[^0-9]/i);
    let cnh = document.getElementById("cnh");
    validaCNH = false;
    cnh.oninput = () =>{
        if(expApenasNumeros.test(cnh.value)){
            cnh.value = cnh.value.substr(0, cnh.value.length - 1);
            cnh.style.border = ' red solid';
            document.getElementById('msgCNH').innerHTML="Digite apenas números";
        }else{
            document.getElementById('msgCNH').innerHTML="";
            cnh.style.border = 'none';
        }
    }

    cnh.onblur =() =>{
        let cont = 0;
        validaCNH = true;
        
        if(cnh.value.length != 11 ) {
            validaCNH = false;
            cnh.style.border = ' red solid';
            document.getElementById('msgCNH').innerHTML="CNH inválida";
        }
        for (let i = 0; i<3 ;i++) {
            if(cnh.value.charAt(i)==cnh.value.charAt(3+i)) {
                cont ++;
            }
        }
        if(cont>=3) {
            validaCNH = false;
            cnh.style.border = ' red solid';
            document.getElementById('msgCNH').innerHTML="CNH inválida";
        }
        if(validaCNH){
            cnh.style.border = ' none';
            document.getElementById('msgCNH').innerHTML="";
        }
    }

}
//ok
senha = () => {
    let senha = document.getElementById('password');
    validaSenha = false;
    senha.onblur = () => {
        if(senha.value == "" || senha.value.length < 4){
            senha.style.border = ' red solid';
            document.getElementById('msgSenha').innerHTML="Senha inválida";
            validaSenha = false;
        } else {
            document.getElementById('msgSenha').innerHTML="";
            senha.style.border = 'none';
            validaSenha = true;
        }
    }
}
//ok
confirmarSenha = () => {
    let senha = document.getElementById('password');
    let confirmarSenha = document.querySelector('#confirmPassword');
    validaConfirmarSenha = false;
    confirmarSenha.onblur = () => {
        if(confirmarSenha.value === senha.value){
            validaConfirmarSenha = true;
            confirmarSenha.style.border = 'none';
            document.getElementById('msgConfirmarSenha').innerHTML="";

        } else {
            confirmarSenha.style.border = 'red solid';
            document.getElementById('msgConfirmarSenha').innerHTML="Senha divergente";
            validaConfirmarSenha = false;
        }
    }
}
//ok
cadastrar = () =>{
    let cadastrar = document.getElementById('btn-sub');
    event.preventDefault(cadastrar);
    cadastrar.onclick = ()=>{
        if(validaNome && validaEmail && validaGenero && validaIdade && validaCPF && validaCNH && validaSenha && validaConfirmarSenha){
            
        }else{
            event.preventDefault(cadastrar);
            alert("Preencha os campos corretamente.");
        }
    }
}

