function funcaoMA() {
    debugger
    let conceito="";
    let aprovado= true;
    let Aprovamens="";

    let ra = document.getElementById("inputRA").value;
    if (ra.length<8) {
        alert("Erro no RA");
        inputRA.focus();
    }  

    let nome = document.getElementById("inputNome").value;
    if (nome=="") {
        alert("Erro no nome");
        inputNome.focus();
    }  

    let n1= parseFloat(document.getElementById("inputN1").value);
    if (isNaN(n1) || n1 < 0 || n1 > 10) {
        alert("Erro na nota 1");
        inputN1.focus();
    }
    
    let n2= parseFloat(document.getElementById("inputN2").value);
    if (isNaN(n2) || n2 < 0 || n2 > 10) {
        alert("Erro na nota 2");
        inputN2.focus();
    }
    
    let n3= parseFloat(document.getElementById("inputN3").value);
    if (isNaN(n3) || n3 < 0 || n3 > 10) {
        alert("Erro na nota 3");
        inputN3.focus();
    }
    
    let n4= parseFloat(document.getElementById("inputN4").value);
    if (isNaN(n4) || n4 < 0 || n4 > 10) {
        alert("Erro na nota 4");
        inputN4.focus();
    }
    
    let Me= parseFloat(document.getElementById("inputME").value);
    if (isNaN(Me) || Me < 0 || Me > 10) {
        alert("Erro na Média dos exercícios ");
        inputME.focus();
    }
    
    let MA = ((n1+n2*2+n3*3+n4*4+Me)/11).toFixed(2);
    
    if(MA>=9) {
        conceito='A';
    } else if(MA>=7.5) {
        conceito='B';
    }else if(MA>=6) {
        conceito='C';
    }else if(MA>=4) {
        conceito='D';
        aprovado= false;
    }else{
        conceito='E';
        aprovado= false;
    }

    if(aprovado){
        Aprovamens="Aprovado";
    }else{
        Aprovamens="Reprovado";
    }
    document.getElementById("respAluno").innerHTML= ra+" - "+nome;
    document.getElementById("respMA").innerHTML= MA;
    document.getElementById("respConceito").innerHTML= Aprovamens+" - "+conceito;
}