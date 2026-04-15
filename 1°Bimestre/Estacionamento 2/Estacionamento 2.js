function Calcular() {
    let tipo = document.getElementById("inputTipo").checked;
    let frequencia= document.getElementById("inputCliente").checked;
    
    let entrada= document.getElementById("inputin").value; debugger
    
    let saida=document.getElementById("inputout").value;
    let dataEntrada = new Date(entrada);
    let dataSaida = new Date(saida);


    let tempo = (dataSaida - dataEntrada) / (1000 * 60 * 60);
    
    let tarifa=0;
    let dias=parseInt(tempo/24);
    let horas=tempo%24;

    let aviso= document.getElementById("avisoErro");
    aviso.style.display = "none";
    aviso.innerHTML = "";

    if (tempo <= 0 || isNaN(tempo)) {
        aviso.innerHTML = "Insira um tempo válido maior que zero!";
        aviso.style.display = "block";
        return;
    }

    if (dias<1) {
        debugger
        if(horas==1){
            tarifa= 5;
        }else{
            tarifa= 5+(horas-1)*2.5;
        }
    
    }else{
        if(horas==0){
            tarifa=dias*60;
        }else if(horas==1){
            tarifa= 5+ dias*60;
        }else{
            tarifa=5+dias*60+(horas-1)*2.5;
        }        
    }
    
    if (tipo) {
        tarifa= tarifa*1.25;
    }
    if (frequencia) {   
        tarifa= tarifa*0.95;
    }
    
    document.getElementById("saidavalor").innerHTML="R$"+tarifa.toFixed(2);
    document.getElementById("saidahr").innerHTML=tempo;

}
