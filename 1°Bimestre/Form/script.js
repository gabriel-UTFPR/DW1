window.onload= function(){
    
    const urlParams = new URLSearchParams(window.location.search);
    
    let cpf = urlParams.get('cpf');
    let nomeAtleta = urlParams.get('nomeAtleta');
    let idade = urlParams.get('idade');
    let nomeResponsavel = urlParams.get('nomeResponsavel');
    let cidadeOrigem = urlParams.get('cidadeOrigem');
    let cidadeDestino = urlParams.get('cidadeDestino');
    let modalidade = urlParams.get('modalidade');

    let categoria = "";
    if (idade <= 11) {
        categoria = "Infantil";
    } else if (idade <= 13) {
        categoria = "Pré-adolescente";
    } else if (idade <= 18) {
        categoria = "Adolescente";
    }

    //saidas
    document.getElementById("saidaResponsavel").innerHTML=nomeResponsavel;
    document.getElementById("saidaCpf").innerHTML=cpf;
    document.getElementById("saidaAtleta").innerHTML=nomeAtleta;
    document.getElementById("saidaOrigem").innerHTML=cidadeOrigem;
    document.getElementById("saidaDestino").innerHTML=cidadeDestino;
    document.getElementById("saidaModalidade").innerHTML=modalidade;
    document.getElementById("saidaCategoria").innerHTML=categoria;

}

function VerificarCPF() {
    
    let inputcpf= document.getElementById("cpf");
    let cpf= inputcpf.value;
    
    if (cpf.length!=11) {
        alert("Erro no CPF");
        return inputcpf.value="";
        inputcpf.focus();
    }

}   

function VerificarNomeA() {
    
    let inputAtleta= document.getElementById("nomeAtleta");
    let Atleta= inputAtleta.value;
    
    if (Atleta.length<3) {
        alert("Erro no nome do atleta");
        inputAtleta.focus();
        return;
    }
    
    let AtletaSplit= Atleta.split(" ");
    if (AtletaSplit.length<2) {
        alert("Erro: É preciso sobrenome");
        inputAtleta.focus();
    }
} 

function VerificarNomeR() {
    
    let inputResponsavel= document.getElementById("nomeResponsavel");
    let Responsavel= inputResponsavel.value;
    
    if (Responsavel.length<3) {
        alert("Erro no nome do Responsavel");
        return inputResponsavel.value="";
        inputResponsavel.focus();
        return
    }

    let ResponsavelSplit= Responsavel.split(" ");
    if (ResponsavelSplit.length<2) {
        alert("Erro: É preciso sobrenome");
        inputResponsavel.focus();
    }
} 

function VerificarNomeO() {
    
    let inputOrigem= document.getElementById("cidadeOrigem");
    let Origem= inputOrigem.value;
    
    if (Origem.length<4) {
        alert("Erro no nome da cidade de origem");
        return inputOrigem.value="";
        inputOrigem.focus();
    }
}

function VerificarNomeD() {
    
    let inputDestino= document.getElementById("cidadeDestino");
    let Destino= inputDestino.value;
    
    if (Destino.length<4) {
        alert("Erro no nome da cidade de destino");
        inputDestino.focus();
    }
}
  
function VerificarModalidade() {
    
    let inputmodalidade= document.getElementById("modalidade");
    let modalidade= inputmodalidade.value;
    
    if (modalidade==="") {
        alert("Erro na modalidade");
        inputmodalidade.focus();
    }
}

function VerificarIdade() {
    let inputIdade= document.getElementById("idade");
    let idade= parseInt(inputIdade.value);

    if (idade<7||idade>18) {
        alert("Inscrição somente para a faixa de 7-18 anos")
        inputIdade.focus();
        return inputIdade.value="";
    }
}

function imprimir() {
    window.print();
}

function voltar() {
    window.location.href = "Origem.html";
}