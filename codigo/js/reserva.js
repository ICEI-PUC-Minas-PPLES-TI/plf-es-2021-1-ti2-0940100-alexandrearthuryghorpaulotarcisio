window.onload=()=>{
    confirmar();
}

confirmar=()=>{
    let btnConfirmar = document.getElementById('btnConfirmar');
    btnConfirmar.onclick=()=>{
        let MAIN = document.getElementById('MAIN');
        MAIN.innerHTML = 
        `
            <div class="fimTitulo" id="fim">
                <label for="">
                    <p id="tituloEtapa1" >Obrigado!</p> 
                    <a id="voltarLink" class="nav-link active" href="../html/home.html"> Voltar para página principal</a>
                </label>
            </div>
        `;
    }
}