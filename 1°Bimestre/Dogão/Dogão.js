
function Total() {
    debugger
    let total=0;
    
    let inputp1= document.getElementById("produto1");
    let inputp2= document.getElementById("produto2");
    let inputp3= document.getElementById("produto3");
    let inputp4= document.getElementById("produto4");
    let inputp5= document.getElementById("produto5");
    
    let produto1= parseInt(inputp1.value);
    let produto2= parseInt(inputp2.value);
    let produto3= parseInt(inputp3.value);
    let produto4= parseInt(inputp4.value);
    let produto5= parseInt(inputp5.value);

    let valor1=produto1*22;
    let valor2=produto2*26;
    let valor3=produto3*29;
    let valor4=produto4*5;
    let valor5=produto5*8;

    total=valor1+valor2+valor3+valor4+valor5;
    
    document.getElementById("saida").innerHTML= "R$"+total.toFixed(2);
}

function Verificador() {
    
    let inputp1= document.getElementById("produto1");
    let inputp2= document.getElementById("produto2");
    let inputp3= document.getElementById("produto3");
    let inputp4= document.getElementById("produto4");
    let inputp5= document.getElementById("produto5");
    
    let produto1= parseInt(inputp1.value);
    if (isNaN(produto1)|| produto1<0) {
        alert("Quantidade invalida");
        inputp1.focus();
        return inputp1.value="0";
    }
    
    let produto2= parseInt(inputp2.value);
    if (isNaN(produto2)|| produto2<0) {
        alert("Quantidade invalida");
        inputp2.focus();
        return inputp2.value="0";
    }
    
    let produto3= parseInt(inputp3.value);
    if (isNaN(produto3)|| produto3<0) {
        alert("Quantidade invalida");
        inputp3.focus();
        return inputp3.value="0";
    }
    
    let produto4= parseInt(inputp4.value);
    if (isNaN(produto4)|| produto4<0) {
        alert("Quantidade invalida");
        inputp4.focus();
        return inputp4.value="0";
    }
    
    let produto5= parseInt(inputp5.value);
    if (isNaN(produto5)|| produto5<0) {
        alert("Quantidade invalida");
        inputp5.focus();
        return inputp5.value="0";
    }
}