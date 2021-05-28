window.onload=()=>{
    dataHora();
    proximoEtapa1();
}

dataHora=()=>{
    let dataRetirada = document.getElementById('dataRetirada');
    let horarioRetirada = document.getElementById('horarioRetirada');
    let dataDevolucao = document.getElementById('dataDevolucao');
    let horarioDevolucao = document.getElementById('horarioDevolucao');
    dataRet = false;
    horaRet = false;
    dataDev = false;
    horaDev = false;

    dataRetirada.onblur=()=>{
        let d = new Date();
        ano_atual = d.getFullYear();
        mes_atual = d.getMonth()+1;
        dia_atual = d.getDay()+9;
        let posicao= dataRetirada.value.split('-');
        anoRet = posicao[0];
        mesRet = posicao [1];
        diaRet = posicao[2];
        if(anoRet > ano_atual){
            dataRet=true;
            dataRetirada.style.border = 'none';
        }else if(anoRet==ano_atual){
            if(mesRet > mes_atual){
                dataRet=true;
                dataRetirada.style.border = 'none';
            }else if(mesRet== mes_atual){
                if(diaRet>= dia_atual){
                    dataRet=true;
                    dataRetirada.style.border = 'none';
                }else{
                    dataRet=false;
                    dataRetirada.style.border = 'red solid';
                }
            }else{
                dataRet=false;
                dataRetirada.style.border = 'red solid';
            }
        }else{
            dataRet=false;
            dataRetirada.style.border = 'red solid';
        }
    }
    
    horarioRetirada.onblur=()=>{
        let d = new Date();
        let min_atual = d.getMinutes();
        let hr_atual = d.getHours();
        let posicao = horarioRetirada.value.split(':');
        hrRet = posicao[0];
        minRet = posicao[1]; 

        if(diaRet==dia_atual && mesRet==mes_atual && anoRet==ano_atual){
            if(hrRet>hr_atual){
                horaRet=true;
                horarioRetirada.style.border = 'none';
            }else if(hrRet == hr_atual){
                if(minRet > min_atual){
                    horaRet = true;
                    horarioRetirada.style.border = 'none';
                }else{
                    horaRet=false;
                    horarioRetirada.style.border = 'red solid';
                }
            }else{
                horaRet = false;
                horarioRetirada.style.border = 'red solid';
            } 
        }else if(dataRetirada.value==""){
            horaRet = false;
                horarioRetirada.style.border = 'red solid';
        }else{
            horaRet=true;
            horarioRetirada.style.border = 'none';
        }
    }

    dataDevolucao.onblur=()=>{
        let posicao= dataDevolucao.value.split('-');
        anoDev= posicao[0];
        mesDev = posicao [1];
        diaDev = posicao[2];
        if(anoDev > anoRet){
            dataDev=true;
            dataDevolucao.style.border = 'none';
        }else if(anoDev==anoRet){
            if(mesDev > mesRet){
                dataDev=true;
                dataDevolucao.style.border = 'none';
            }else if(mesDev==mesRet){
                if(diaDev >=diaRet){
                    dataDev =true;
                    dataDevolucao.style.border = 'none';
                }else{
                    dataDev = false;
                    dataDevolucao.style.border = 'red solid';
                }
            }else{
                dataDev = false;
                dataDevolucao.style.border = 'red solid';
            }
        }else{
            dataDev = false;
            dataDevolucao.style.border = 'red solid';
        }
    }

    horarioDevolucao.onblur=()=>{
        let posicao = horarioDevolucao.value.split(':');
        let hrDev = posicao[0];
        let minDev = posicao[1];  
        if(diaRet==diaDev && mesRet==mesDev && anoRet==anoDev){
            if(hrDev>hrRet){
                horaDev=true;
                horarioDevolucao.style.border = 'none';
            }else if(hrDev==hrRet){
                if(minDev>minRet){
                    horaDev = true;
                    horarioDevolucao.style.border = 'none';
                }else{
                    horaDev=false;
                    horarioDevolucao.style.border = 'red solid';
                }
            }else{
                horaDev=false;
                horarioDevolucao.style.border = 'red solid';
            }
        }else{
            horaDev=true;
            horarioDevolucao.style.border = 'none';
        }
    }
}

proximoEtapa1 =()=>{
    let btn_ProximoEtapa1 = document.getElementById('btn_ProximoEtapa1');
    
    btn_ProximoEtapa1.onclick=()=>{
        if(dataRet && horaRet && dataDev && horaDev){
            categorias();
        }else{
            event.preventDefault(btn_ProximoEtapa1);
            alert('Preencha os campos corretamente');
        }
    }
}

categorias =()=>{
    let MAIN = document.getElementById('MAIN');
    MAIN.innerHTML = 
    `
        <div class="container Categoria">
            <div id ="secaoCategoria" class="row">
            <label id="tituloEtapa1" for=""><p class="titulo_Etapa1">2º Etapa</p> </label>
            <div id="externo" class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" >
                        <div class="mainflip flip-0">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="../images/padronização-tamanho-carros_grupo-am_01-renault-kwid.png" alt="card image"></p>
                                        <h4 class="card-title">Econômico</h4>
                                        <p class="card-text">São carros menores, para no máximo 4 pessoas e poucas malas, mas que não decepcionam quando o assunto é desempenho. Carros que não gastam muito mas que satisfazem nossos clientes.</p>
                                        <a id="verMaisEconomico" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i>Ver mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" >
                        <div class="mainflip flip-0">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="../images/padronização-tamanho-carros_grupo-ca_01-vw-virtus.png" alt="card image"></p>
                                        <h4 class="card-title">Intermediário</h4>
                                        <p class="card-text">Os Veículos intermediários oferecem muito espaço para passageiros bem como para suas bagagens. Opção para quem procura um carro confortável com um preço acessível.</p>
                                        <a id="verMaisIntermediario" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i>Ver mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" col-xs-12 col-sm-6 col-md-4">
                    <div  class="image-flip" >
                        <div class=" mainflip flip-0">
                            <div  class=" frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="../images/branco-summit-novo-onix.png" alt="card image"></p>
                                        <h4 class="card-title">Executivo</h4>
                                        <p class="card-text">Os veículos executivos vem para suprir uma necessidade de maior conforto, segurança e beleza. Bastante espaçosos e oferecem assentos confortáveis em couro. Um carro executivo certamente é garantia de um serviço de primeira qualidade.</p>
                                        <a id="verMaisExecutivo" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> Ver mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    verMaisExecutivo();
    verMaisIntermediario();
    verMaisEconomico();   
}

verMaisExecutivo=()=>{
    let verMaisExecutivo = document.getElementById('verMaisExecutivo');
    verMaisExecutivo.onclick=()=>{
        var texto = "";
        $.ajax({
            url: '../php/escolherCarroLuxo.php',
            type: 'GET',
            dataType: 'json'
            }).done(function(result){
                for(var i=0; i<result.length; i++){
                    texto +=`<div class="row" id="ads">
                        <div id="cardCarro" class="col-md-4 col-lg-4">
                            <div class="card rounded">
                                <div class="card-image">
                                    <span class="card-notify-badge">
                                        <img class="img-fluid" id="iconCardCarro" src="../images/Icon/executivo.png" />Executivo
                                    </span>
                                    <span class="card-notify-year">${result[i].ano}</span>
                                    <img class="img-fluid" src=${result[i].urlimagem} alt="Alternate Text" />
                                </div>
                                <div class=" card-image-overlay ">
                                    <div class="row">   
                                        <div id="secaoCardCarro" class="col-md-6 col-sm-12">
                                            <img id="iconCardCarro" src="../images/Icon/cambio.png" />
                                            <span class="card-detail-badge">Transmissão ${result[i].cambio}</span>
                                        </div>
                                        <div id="secaoCardCarro" class="col-md-6">
                                            <img class="img-fluid" id="iconCardCarro" src="../images/Icon/porta.png" />
                                            <span class="card-detail-badge "> 5 Portas</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div id="secaoCardCarro" class="col-md-6">
                                            <img id="iconCardCarro" src="../images/Icon/capacidade.png" />
                                            <span class="card-detail-badge">${result[i].capacidade} pessoas</span>
                                        </div>
                                        <div id="secaoCardCarro" class="col-md-6" >
                                            <img id="iconCardCarro" src="../images/Icon/airbag.png" />
                                            <span class="card-detail-badge">Air bag</span>
                                        </div>
                                    </div>
                                    <div id="secaoCardCarro" >
                                        <img id="iconCardCarro" src="../images/Icon/ar.png" />
                                        <span class="card-detail-badge">Ar condicionado</span>
                                    </div>
                                </div>
                                <div class="card-body text-center">
                                    <div class="">
                                        <h5>${result[i].modelo}</h5>
                                    </div>
                                    <a id="botaoCard" class="btn btn-primary" href="../html/seguros.html">Selecionar</a>
                                </div>
                            </div>
                        </div>
                    </div>`;
                }
                $('#MAIN').html(texto);
            });
    }
}

verMaisIntermediario=()=>{
    let verMaisIntermediario = document.getElementById('verMaisIntermediario');
    verMaisIntermediario.onclick=()=>{
        var texto = "";
        $.ajax({
            url: '../php/escolherCarroIntermediario.php',
            type: 'GET',
            dataType: 'json'
            }).done(function(result){
                for(var i=0; i<result.length; i++){
                    texto+= `<div class="row" id="ads">
                        <div id="cardCarro" class="col-md-4 col-lg-4">
                            <div class="card rounded">
                                <div class="card-image">
                                    <span class="card-notify-badge">
                                        <img class="img-fluid" id="iconCardCarro" src="../images/Icon/intermediario.png" />Intermediário
                                    </span>
                                    <span class="card-notify-year">${result[i].ano}</span>
                                    <img class="img-fluid" src=${result[i].urlimagem} alt="Alternate Text" />
                                </div>
                                <div class="card-image-overlay">
                                    <div class="row">
                                        <div id="secaoCardCarro" class="col-md-6">
                                            <img id="iconCardCarro" src="../images/Icon/cambio.png" />
                                        <span class="card-detail-badge">Transmissão ${result[i].cambio}</span>
                                        </div>
                                        <div id="secaoCardCarro" class="col-md-6">
                                            <img class="img-fluid" id="iconCardCarro" src="../images/Icon/porta.png" />
                                            <span class="card-detail-badge "> 5 Portas</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div id="secaoCardCarro" class="col-md-6">
                                            <img id="iconCardCarro" src="../images/Icon/capacidade.png" />
                                            <span class="card-detail-badge">${result[i].capacidade} pessoas</span>
                                        </div>
                                        <div id="secaoCardCarro" class="col-md-6" >
                                            <img id="iconCardCarro" src="../images/Icon/airbag.png" />
                                            <span class="card-detail-badge">Air bag</span>
                                        </div>
                                    </div>
                                    <div id="secaoCardCarro">
                                        <img id="iconCardCarro" src="../images/Icon/ar.png" />
                                        <span class="card-detail-badge">Ar condicionado</span>
                                    </div>
                                </div>
                                <div class="card-body text-center">
                                    <div class="">
                                        <h5>${result[i].modelo}</h5>
                                    </div>
                                    <a id="botaoCard" class="btn btn-primary" href="../html/seguros.html">Selecionar</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>`;
                }
                $('#MAIN').html(texto);
            });
    }
}

verMaisEconomico=()=>{
    let verMaisEconomico = document.getElementById('verMaisEconomico');
    verMaisEconomico.onclick=()=>{
        var texto = "";
        $.ajax({
            url: '../php/escolherCarroEconomico.php',
            type: 'GET',
            dataType: 'json'
            }).done(function(result){
                for(var i=0; i<result.length; i++){
                        texto+=`<div class="row" id="ads">
                    <div id="cardCarro" class="col-lg-4 col-md-4   ">
                        <div class="card rounded">
                            <div class="card-image">
                                <span class="card-notify-badge">
                                    <img class="img-fluid" id="iconCardCarro" src="../images/Icon/economico.png" />Econômico
                                </span>
                                <span class="card-notify-year">${result[i].ano}</span>
                                <img class="img-fluid" src=${result[i].urlimagem} alt="Alternate Text" />
                            </div>
                            <div class="card-image-overlay ">
                                <div class="row">
                                    <div id="secaoCardCarro" class="col-md-6 col-sm-12">
                                        <img id="iconCardCarro" src="../images/Icon/cambio.png" />
                                        <span class="card-detail-badge">Transmissão ${result[i].cambio}</span>
                                    </div>
                                    <div id="secaoCardCarro" class="col-md-6">
                                        <img class="img-fluid" id="iconCardCarro" src="../images/Icon/porta.png" />
                                        <span class="card-detail-badge "> 5 Portas</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div id="secaoCardCarro" class="col-md-6">
                                        <img id="iconCardCarro" src="../images/Icon/capacidade.png" />
                                        <span class="card-detail-badge">${result[i].capacidade} pessoas</span>
                                    </div>
                                    <div id="secaoCardCarro" class="col-md-6" >
                                        <img id="iconCardCarro" src="../images/Icon/airbag.png" />
                                        <span class="card-detail-badge">Air bag</span>
                                    </div>
                                </div>
                                <div id="secaoCardCarro">
                                    <img id="iconCardCarro" src="../images/Icon/ar.png" />
                                    <span class="card-detail-badge">Ar condicionado</span>
                                </div>
                            </div>
                            <div class="card-body text-center">
                                <div class="">
                                    <h5>${result[i].modelo}</h5>
                                </div>
                                <a id="botaoCard" class="btn btn-primary" href="../html/seguros.html">Selecionar</a>
                            </div>
                        </div>
                    </div>`;
                }
                $('#MAIN').html(texto);
            });
    }
}
