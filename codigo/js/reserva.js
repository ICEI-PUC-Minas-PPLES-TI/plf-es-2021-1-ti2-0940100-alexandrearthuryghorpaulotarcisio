window.onload=()=>{
    loadData();
    confirmar();
}

loadData=()=>{
    let valor = 300.00;
    if(sessionStorage.hasOwnProperty("reservaInfo")){
        let retirada = document.getElementById('retirada');
        let devolucao = document.getElementById('devolucao');
        retiradaInfos = JSON.parse(sessionStorage.getItem("reservaInfo"));
        retirada.innerHTML = `Retirada ${retiradaInfos[0].dataRetirada} <br> ${retiradaInfos[1].horaRetirada}`;
        devolucao.innerHTML = `Devolução ${retiradaInfos[2].dataDevolucao} <br> ${retiradaInfos[3].horarioDevolucao}`;
    }
    if(sessionStorage.hasOwnProperty("acessorioInfo")){
        acessorioInfos = JSON.parse(sessionStorage.getItem("acessorioInfo"));
        let GPS = document.getElementById('GPS');
        let cadeirinha = document.getElementById('Cadeirinha');
        let bagageiro = document.getElementById('Bagageiro');
        if(acessorioInfos[0]){
            cadeirinha.innerHTML = `Cadeirinha <br> Sim QTD: ${acessorioInfos[0].qtdeCadeirinha}`;
            valor += acessorioInfos[0].cadeirinhaPreco * acessorioInfos[0].qtdeCadeirinha;
        } else {
            cadeirinha.innerHTML = `Cadeirinha <br> Não`;
        }
        if(acessorioInfos[1]){
            GPS.innerHTML = `GPS <br> Sim`;
            valor += acessorioInfos[1].GPSPreco;
        } else {
            GPS.innerHTML = `GPS <br> Não`;
        }
        if(acessorioInfos[2]){
            bagageiro.innerHTML = `Bagageiro <br> Sim`;
            valor += acessorioInfos[2].bagageiroPreco;
        } else {
            bagageiro.innerHTML = `Bagageiro <br> Não`;
        }
    }
    if(sessionStorage.hasOwnProperty("seguroInfo")){
        seguroInfos = JSON.parse(sessionStorage.getItem("seguroInfo"));
        let seguroinformacao = document.getElementById('seguroinf');
        if(seguroInfos[0] && seguroInfos[1] && seguroInfos[2]){
            seguroinformacao.innerHTML = `Seguro <br> Básico + Completo + Super`;
            valor+= seguroInfos[0].ssegCompPreco + seguroInfos[1].segBasPreco + seguroInfos[2].segSuperPreco;
        }else if(seguroInfos[0] && seguroInfos[1]){
            seguroinformacao.innerHTML = `Seguro <br> Básico + Completo`;
            valor+= seguroInfos[0].ssegCompPreco + seguroInfos[1].segBasPreco;
        }else if(seguroInfos[0] && seguroInfos[2]){
            seguroinformacao.innerHTML = `Seguro <br> Completo + Super`;
            valor+= seguroInfos[0].ssegCompPreco + seguroInfos[2].segSuperPreco;
        }else if(seguroInfos[1] && seguroInfos[2]){
            seguroinformacao.innerHTML = `Seguro <br> Básico + Super`;
            valor+= seguroInfos[1].segBasPreco + seguroInfos[1].segSuperPreco;
        }else if(seguroInfos[0]){
            seguroinformacao.innerHTML = `Seguro <br> Básico`;
            valor+= seguroInfos[0].ssegCompPreco;;
        }
        else if(seguroInfos[1]){
            seguroinformacao.innerHTML = `Seguro <br> Completo`;
            valor+= seguroInfos[1].segBasPreco;
        }
        else if(seguroInfos[2]){
            seguroinformacao.innerHTML = `Seguro <br> Super`;
            valor+= seguroInfos[2].segSuperPreco;
        }
    }
    let preco = document.getElementById('precoFinal');
    preco.innerHTML = `Valor: R$ ${valor}`;
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