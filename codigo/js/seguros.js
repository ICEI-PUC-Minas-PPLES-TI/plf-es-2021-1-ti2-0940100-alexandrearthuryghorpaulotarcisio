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
                                                        <input type="checkbox" name="" id="selecionar" value="false">
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
    `;
    selecionar();
    selecionarGPS();
    selecionarBAG();
    qtdCard();
    btnMais();
    btnMenos();
    proximo1();
} 

selecionar=()=>{
    selecionadoCad = false;
    let selecionar = document.getElementById('selecionar');
    selecionar.onclick=()=>{
        if(selecionar.checked){
            selecionarCad = true;
        }else{
            selecionarCad = false;
        }
    }
}

selecionarGPS=()=>{
    selecionadoGPS = false;
    let selecionarGPS = document.getElementById('selecionarGPS');
    if(selecionarGPS){
        selecionarGPS.onclick=()=>{
            if(selecionarGPS.checked){
                selecionadoGPS = true;
            }else{
                selecionadoGPS = false;
            }
        }
    }
}

selecionarBAG=()=>{
    selecionadoBAG = false;
    let selecionarBAG = document.getElementById('selecionarBAG');
    if(selecionarBAG) {
        selecionarBAG.onclick=()=>{
            if(selecionarBAG.checked){
                selecionadoBAG = true;
            }else{
                selecionadoBAG = false;
            }
        }
    }
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
                                <h3>Proteção Básica</h3>
                            </div>
                            <div class="panel-body text-center">
                                <p><strong>R$ 9,00 / Diária</strong></p>
                            </div>
                            <ul class="list-group text-center">
                                <li class="list-group-item"><i class="fa fa-check"></i> Proteção - LDW</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Protecção contra furto, roubo, perda total</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Danos e/ou avarias causados exclusivamente ao veículo</li>
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
                                <h3>Proteção Completa</h3>
                            </div>
                            <div class="panel-body text-center">
                                <p><strong>R$24,00 / Diária</strong></p>
                            </div>
                            <ul class="list-group text-center">
                                <li class="list-group-item"><i class="fa fa-check"></i> Proteção Básica-LDW</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Redução de Coparticipação</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Proteção contra terceiros e ocupantes ALI</li>
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
                                <h3>Proteção Super</h3>
                            </div>
                            <div class="panel-body text-center">
                                <p><strong>R$44,00 / Diária</strong></p>
                            </div>
                            <ul class="list-group text-center">
                                <li class="list-group-item"><i class="fa fa-check"></i> Proteção Completa-LDW</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Maior Redução de Coparticipação</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Proteção contra terceiros e ocupantes ALI+PAI</li>
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
    let btnProximo2= document.getElementById('btn_ProximoEtapa2');
    btnProximo2.onclick=()=>{
        if( segSuper || segComp || segBas ){

        }else{
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

