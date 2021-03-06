window.onload=()=>{
    acessorios();
}  
 
acessorios =()=>{
    let MAIN = document.getElementById('MAIN');
    MAIN.innerHTML = 
    `
        <div id="acessorios" class="container-fluid mt-3 mb-4">
        
            <div class="col-lg-8">
            <label id="tituloEtapa1" for=""><p class="titulo_Etapa1">3º Etapa</p> </label>
                <div class="row">
                    <div class="col-lg-12 px-0 pr-lg-2 mb-2 mb-lg-0">
                        <div class="card border-light bg-white card proviewcard shadow-sm">
                            <div class="card-header">Acessórios</div>
                            <div id="" class="card-body">
                                <div class="col-lg-12 p-3 cardlist">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div id="ver" class="col-lg-12">
                                                <div class="row">
                                                    <div class="col-4 col-lg-3 col-xl-2">
                                                        <div class="row">
                                                            <a href="#" class="w-100">
                                                                <img src="..//images/Acessorios/cadeira.jpg" class="mx-auto d-block mb-1 addcartimg">
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-6 col-lg-6 col-xl-8">
                                                        <div class="d-block text-truncate mb-1">
                                                            <a href="#" class="cartproname nav-link">Cadeira para criança</a>
                                                        </div>
                                                        <div class="cartviewprice d-block">
                                                            <span class="amt">R$ 21,86</span>
                                                        </div>
                                                    </div>
                                                    <div id="checkBox" class="col-2 col-lg-3 col-xl-2">
                                                        <input type="checkbox" name="" id="cadeirinha" value="false">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4 col-lg-3 col-xl-2 p-0 qty">
                                                        <div class="input-group">
                                                            <div class="btnQtd">
                                                                <button id="qtdMenos" type="button" class="btn btn-sm btn-qty"><i class="fa fa-minus"></i></button>
                                                            </div>
                                                            <input type="text" class="form-control form-control-sm text-center" id="caixaQtd" value="0" >
                                                            <div class="btnQtd">
                                                                <button id="qtdMais" type="button" class="btn btn-sm btn-qty"><i class="fa fa-plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="" class="card-body">
                                <div class="col-lg-12 p-3 cardlist">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div id="ver" class="col-lg-12">
                                                <div class="row">
                                                    <div class="col-4 col-lg-3 col-xl-2">
                                                        <div class="row">
                                                            <a href="#" class="w-100">
                                                                <img src="..//images/Acessorios/gps.jpg" class="mx-auto d-block mb-1 addcartimg">
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-6 col-lg-6 col-xl-8">
                                                        <div class="d-block text-truncate mb-1">
                                                            <a href="#" class="cartproname nav-link">Sistema de Posicionamento Global - GPS</a>
                                                        </div>
                                                        <div class="cartviewprice d-block">
                                                            <span class="amt">R$ 13,50</span>
                                                        </div>
                                                    </div>
                                                    <div id="checkBox" class="col-2 col-lg-3 col-xl-2">
                                                        <input type="checkbox" name="" id="selecionarGPS" value="false">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4 col-lg-3 col-xl-2 p-0 qty">
                                                        <div class="input-group">
                                                            <div class="btnQtd">
                                                                <button id="qtdMenos1" disabled type="button" class="btn btn-sm btn-qty"><i class="fa fa-minus"></i></button>
                                                            </div>
                                                            <input type="text" class="form-control form-control-sm text-center" readonly id="caixaQtd1"  value="1" >
                                                            <div class="btnQtd">
                                                                <button id="qtdMais1" disabled type="button" class="btn btn-sm btn-qty"><i class="fa fa-plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="" class="card-body">
                                <div class="col-lg-12 p-3 cardlist">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div id="ver" class="col-lg-12">
                                                <div class="row">
                                                    <div class="col-4 col-lg-3 col-xl-2">
                                                        <div class="row">
                                                            <a href="#" class="w-100">
                                                                <img src="..//images/Acessorios/bageiro.png" class="mx-auto d-block mb-1 addcartimg">
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-6 col-lg-6 col-xl-8">
                                                        <div class="d-block text-truncate mb-1">
                                                            <a href="#" class="cartproname nav-link">Bagageiro</a>
                                                        </div>
                                                        <div class="cartviewprice d-block">
                                                            <span class="amt">R$ 112,80</span>
                                                        </div>
                                                    </div>
                                                    <div id="checkBox" class="col-2 col-lg-3 col-xl-2">
                                                        <input type="checkbox" name="" id="selecionarBAG" value="false">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4 col-lg-3 col-xl-2 p-0 qty">
                                                        <div class="input-group">
                                                            <div class="btnQtd">
                                                                <button id="qtdMenos2" disabled type="button" class="btn btn-sm btn-qty"><i class="fa fa-minus"></i></button>
                                                            </div>
                                                            <input type="text" class="form-control form-control-sm text-center" id="caixaQtd2" readonly value="1" >
                                                            <div class="btnQtd">
                                                                <button id="qtdMais2" disabled type="button" class="btn btn-sm btn-qty"><i class="fa fa-plus"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="btnProximo" class=" container-fluid mt-3 mb-4 row">
                                <div class="col-md-8">
                                    <a id="btn_ProximoEtapa1" href="#" class="btn btn-primary">Próximo</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    qtdCard();
    btnMais();
    btnMenos();
    proximo1();
} 

setSession=()=>{
    var acessorioInfo = new Array();
    let checkboxCadeirinha = document.getElementById('cadeirinha');
    let checkboxGPS = document.getElementById('selecionarGPS');
    let checkboxBagageiro = document.getElementById('selecionarBAG');
    if(checkboxCadeirinha.checked){
        let fieldCadeirinha = document.getElementById('caixaQtd');
        let numCadeirinha = parseInt(fieldCadeirinha.value)
        if(numCadeirinha > 0){
            acessorioInfo[0] = {
                qtdeCadeirinha: numCadeirinha,
                cadeirinhaPreco: 21.86
            };
            sessionStorage.setItem("acessorioInfo", JSON.stringify(acessorioInfo));
        }
    }
    if(checkboxGPS.checked){
        acessorioInfo[1] = {GPSPreco: 13.50};
        sessionStorage.setItem("acessorioInfo", JSON.stringify(acessorioInfo));
    }
    if(checkboxBagageiro.checked){
        acessorioInfo[2] = {bagageiroPreco: 112.80};
        sessionStorage.setItem("acessorioInfo", JSON.stringify(acessorioInfo));
    }
    sessionStorage.setItem("acessorioInfo", JSON.stringify(acessorioInfo));
}

qtdCard=()=>{
    let caixaQtd= document.getElementById('caixaQtd');
    let expApenasNumeros = new RegExp(/[^0-9]/i);
    caixaQtd.oninput=()=>{
        if(expApenasNumeros.test(caixaQtd.value)){
           caixaQtd.value =caixaQtd.value.substr(0,caixaQtd.value.length - 1);
        }
        if(caixaQtd.value>3){
            caixaQtd.value=3;
        }
    }
}

btnMais=()=>{
    let qtdMais= document.getElementById('qtdMais');
    let caixaQtd= document.getElementById('caixaQtd');
    qtdMais.onclick=()=>{
        if(parseInt(caixaQtd.value) < 3)
            caixaQtd.value = parseInt(caixaQtd.value) + 1;
    }
}

btnMenos=()=>{
    let qtdMenos= document.getElementById('qtdMenos');
    let caixaQtd= document.getElementById('caixaQtd');
    qtdMenos.onclick=()=>{
        if(parseInt(caixaQtd.value) > 0)
            caixaQtd.value = parseInt(caixaQtd.value) - 1;
    }
}

proximo1=()=>{
    let btnProximo1= document.getElementById('btn_ProximoEtapa1');
    btnProximo1.onclick=()=>{
        setSession();
        seguros();
    }
}

seguros=()=>{
    let MAIN = document.getElementById('MAIN');
    MAIN.innerHTML = 
    `
        <label id="tituloEtapa1" for=""><p class="titulo_Etapa1"> 4º Etapa</p> </label>
        <section id="plans" class="card">
            <div class="container">
                <div class="row">
                    <div id="cardSeguros" class="col-md-4 text-center">
                        <div class="panel panel-danger panel-pricing">
                            <div class="panel-heading">
                                <i class="">
                                    <img id="imgSeguros" src="../images/Icon/capture-20210518-202714.png" alt="">
                                </i>
                                <h3>Proteção dos vidros</h3>
                            </div>
                            <div class="panel-body text-center">
                                <p><strong>R$9,00</strong></p>
                            </div>
                            <ul class="list-group text-center">
                                <li class="list-group-item"><i class="fa fa-check"></i> Proteção dos retrovisores e vidros</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Protecção contra furto, roubo, perda total</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Danos e/ou avarias causados exclusivamente ao vidros veículo</li>
                            </ul>
                            <div class="panel-footer">
                                <input id="selecionarSegBas" type="checkbox" value="false">
                            </div>
                        </div>
                    </div>

                    <div id="cardSeguros" class="col-md-4 text-center">
                        <div class="panel panel-warning panel-pricing">
                            <div class="panel-heading">
                                <i class="">
                                    <img id="imgSeguros" src="../images/Icon/capture-20210518-202635.png" alt="">
                                </i>
                                <h3>Proteção da lataria</h3>
                            </div>
                            <div class="panel-body text-center">
                                <p><strong>R$24,00</strong></p>
                            </div>
                            <ul class="list-group text-center">
                                <li class="list-group-item"><i class="fa fa-check"></i> Proteção da lataria total do veículo</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Proteção contra arranhões e danos leves</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Inclui portas, teto, capô, etc</li>
                            </ul>
                            <div class="panel-footer">
                                <input id="selecionarSegComp" type="checkbox" value="false">
                            </div>
                        </div>
                    </div>

                    <div id="cardSeguros" class="col-md-4 text-center">
                        <div class="panel panel-success panel-pricing">
                            <div class="panel-heading">
                                <i class="">
                                    <img id="imgSeguros" src="../images/Icon/capture-20210518-202734.png" alt="">
                                </i>
                                <h3>Proteção parte mecânica</h3>
                            </div>
                            <div class="panel-body text-center">
                                <p><strong>R$44,00</strong></p>
                            </div>
                            <ul class="list-group text-center">
                                <li class="list-group-item"><i class="fa fa-check"></i> Proteção do motor do veículo</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Cobre danos leves, não críticos</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Inclui reposição de peças</li>
                            </ul>
                            <div class="panel-footer">
                                <input id="selecionarSegSuper" type="checkbox" value="false">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="btnProximo" class=" container-fluid mt-3 mb-4 row">
                <div class="col-md-8">
                    <a id="btn_ProximoEtapa2" href="../html/reserva.html" class="btn btn-primary">Próximo</a>
                </div>
            </div>
        </section>
    `;
    
    selecionarSegBas1();
    selecionarSegComp1();
    selecionarSegSuper1();
    proximo2();
    voltar(acessorios);
}

selecionarSegBas1=()=>{
    segBas=false;
    selecionarSegBas = document.getElementById('selecionarSegBas');
    selecionarSegBas.onclick=()=>{
        if(selecionarSegBas.checked){
            segBas=true;
        }else{
            segBas=false;
        }
    }
}

selecionarSegComp1=()=>{
    segComp = false;
    selecionarSegComp = document.getElementById('selecionarSegComp');
    selecionarSegComp.onclick=()=>{
        if(selecionarSegComp.checked){
            segComp = true;
        }else{
            segComp = false;
        }
    }
}

selecionarSegSuper1=()=>{
    segSuper = false;
    selecionarSegSuper = document.getElementById('selecionarSegSuper');
    selecionarSegSuper.onclick=()=>{
        if(selecionarSegSuper.checked){
            segSuper= true;
        }else{
            segSuper= false;
        }
    }
}

proximo2=()=>{
    seguroInfo = new Array();
    let btnProximo2= document.getElementById('btn_ProximoEtapa2');
    btnProximo2.onclick=()=>{
        if( segSuper || segComp || segBas ){
            if(segBas){
                seguroInfo[0] = {
                    segBas: true,
                    ssegCompPreco: 9.00
                };
                sessionStorage.setItem("seguroInfo", JSON.stringify(seguroInfo));
            }
            if(segComp){
                seguroInfo[1] = {
                    segComp: true,
                    segBasPreco: 24.00
                };
                sessionStorage.setItem("seguroInfo", JSON.stringify(seguroInfo));
            }
            if(segSuper){
                seguroInfo[2] = {
                    segSuper: true,
                    segSuperPreco: 44.00
                };
                sessionStorage.setItem("seguroInfo", JSON.stringify(seguroInfo));
            }
        }else{
            sessionStorage.setItem("seguroInfo", JSON.stringify(seguroInfo));
            event.preventDefault();
            alert('Selecione no minímo uma proteção');
        }
    }
}

voltar=(funcao)=>{
    let btnVoltar = document.getElementById('voltar');
    btnVoltar.onclick=()=>{
        funcao();
    }
}

