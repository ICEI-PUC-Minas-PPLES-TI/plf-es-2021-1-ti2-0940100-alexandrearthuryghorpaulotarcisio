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
        retirada.innerHTML = ` ${retiradaInfos[0].dataRetirada} <br> ${retiradaInfos[1].horaRetirada}`;
        devolucao.innerHTML = ` ${retiradaInfos[2].dataDevolucao} <br> ${retiradaInfos[3].horarioDevolucao}`;
    }
    if(sessionStorage.hasOwnProperty("acessorioInfo")){
        acessorioInfos = JSON.parse(sessionStorage.getItem("acessorioInfo"));
        let GPS = document.getElementById('GPS');
        let cadeirinha = document.getElementById('Cadeirinha');
        let bagageiro = document.getElementById('Bagageiro');
        if(acessorioInfos[0]){
            cadeirinha.innerHTML = ` Sim QTD: ${acessorioInfos[0].qtdeCadeirinha}`;
            valor += acessorioInfos[0].cadeirinhaPreco * acessorioInfos[0].qtdeCadeirinha;
        } else {
            cadeirinha.innerHTML = `  Não`;
        }
        if(acessorioInfos[1]){
            GPS.innerHTML = `  Sim`;
            valor += acessorioInfos[1].GPSPreco;
        } else {
            GPS.innerHTML = `  Não`;
        }
        if(acessorioInfos[2]){
            bagageiro.innerHTML = `  Sim`;
            valor += acessorioInfos[2].bagageiroPreco;
        } else {
            bagageiro.innerHTML = `  Não`;
        }
    }
    if(sessionStorage.hasOwnProperty("seguroInfo")){
        seguroInfos = JSON.parse(sessionStorage.getItem("seguroInfo"));
        let seguroinformacao = document.getElementById('seguroinf');
        if(seguroInfos[0] && seguroInfos[1] && seguroInfos[2]){
            seguroinformacao.innerHTML = ` Vidros + Lataria + Mecânica`;
            valor+= seguroInfos[0].ssegCompPreco + seguroInfos[1].segBasPreco + seguroInfos[2].segSuperPreco;
        }else if(seguroInfos[0] && seguroInfos[1]){
            seguroinformacao.innerHTML = ` Vidros + Lataria`;
            valor+= seguroInfos[0].ssegCompPreco + seguroInfos[1].segBasPreco;
        }else if(seguroInfos[0] && seguroInfos[2]){
            seguroinformacao.innerHTML = ` Lataria + Mecânica`;
            valor+= seguroInfos[0].ssegCompPreco + seguroInfos[2].segSuperPreco;
        }else if(seguroInfos[1] && seguroInfos[2]){
            seguroinformacao.innerHTML = ` Vidros + Mecênica`;
            valor+= seguroInfos[1].segBasPreco + seguroInfos[1].segSuperPreco;
        }else if(seguroInfos[0]){
            seguroinformacao.innerHTML = ` Vidros`;
            valor+= seguroInfos[0].ssegCompPreco;;
        }
        else if(seguroInfos[1]){
            seguroinformacao.innerHTML = ` Lataria`;
            valor+= seguroInfos[1].segBasPreco;
        }
        else if(seguroInfos[2]){
            seguroinformacao.innerHTML = ` Mecânica`;
            valor+= seguroInfos[2].segSuperPreco;
        }
    }
    if(sessionStorage.hasOwnProperty("carInfo")){
        carInfos = JSON.parse(sessionStorage.getItem("carInfo"));
        let imagem = document.getElementById('imagemCarro');
        imagem.src = carInfos.imagemCarro;
        let modelo = document.getElementById('modeloCarro');
        modelo.innerHTML = carInfos.modeloCarro;
        let cambio = document.getElementById('cambioCarro');
        cambio.innerHTML = carInfos.cambioCarro;
        cambio.innerHTML = cambio.innerHTML.includes("Manual") ? "Manual" : "Automático";
        let ano = document.getElementById('anoCarro');
        ano.innerHTML = carInfos.anoCarro;
        let capacidade = document.getElementById('capacidadeCarro');
        capacidade.innerHTML = carInfos.capacidadeCarro + " pessoas";
    }
    let preco = document.getElementById('precoFinal');
    preco.innerHTML = `${valor}`;
}

confirmar=()=>{
    let btnConfirmar = document.getElementById('btnConfirmar');
    btnConfirmar.onclick=()=>{
        let valorAluguel = document.getElementById('precoFinal');
        sessionStorage.setItem("aluguelPrecoInfo", valorAluguel.innerHTML);
        let MAIN = document.getElementById('MAIN');
        MAIN.innerHTML = 
        `
            <div class="fimTitulo" id="fim">
                <label for="">
                    <p id="tituloEtapa1" >Obrigado!</p>
                    <div class="avaliacao">
                        <p>Nos ajude a melhorar sua experiência. Dê uma nota de 1 a 5, para avaliar nosso sistema.</p>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1">
                            <label class="form-check-label" for="inlineRadio1">1</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2">
                            <label class="form-check-label" for="inlineRadio2">2</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3">
                            <label class="form-check-label" for="inlineRadio2">3</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4">
                            <label class="form-check-label" for="inlineRadio2">4</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5">
                            <label class="form-check-label" for="inlineRadio2">5</label>
                        </div>
                    </div>

                    <a id="voltarLink" class="nav-link active" href="#"> Voltar para página principal</a>

                </label>
            </div>
        `;
        voltarHome();
    }
}

voltarHome=()=>{
    let voltar = document.getElementById('voltarLink');
    function alerta() {alert("Selecione uma nota!")};
    voltar.onclick=()=>{
        let nota = document.querySelector('input[name="inlineRadioOptions"]:checked') && document.querySelector('input[name="inlineRadioOptions"]:checked').value ? document.querySelector('input[name="inlineRadioOptions"]:checked').value : null;
        
        if(nota != null){
            let retiradaInfos = JSON.parse(sessionStorage.getItem("reservaInfo"));
            let dataRetirada = retiradaInfos[0].dataRetirada;
            let horaRetirada = retiradaInfos[1].horaRetirada;
            let dataDevolucao = retiradaInfos[2].dataDevolucao;
            let horaDevolucao = retiradaInfos[3].horarioDevolucao;
            let aluguelPrecoInfo = JSON.parse(sessionStorage.getItem("aluguelPrecoInfo"));
            let user = JSON.parse(sessionStorage.getItem("user"));
            let carInfo = JSON.parse(sessionStorage.getItem("carInfo"));

            $.post("../php/efetuaAluguel.php", {
                dataRetirada : dataRetirada, 
                horaRetirada : horaRetirada, 
                dataDevolucao : dataDevolucao, 
                horaDevolucao : horaDevolucao,
                nota : parseInt(nota),
                valorAluguel : parseFloat(aluguelPrecoInfo),
                usuario : user[0].email,
                modelo : carInfo.modeloCarro
            }, function(msg){
            });
            voltar.href = "../html/home.html";
        }else{
            alerta();
        }
    }
}

