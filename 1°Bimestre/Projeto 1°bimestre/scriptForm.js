window.onload=function () {
    const params= new URLSearchParams(window.location.search);

    let cliente= params.get('cliente');
    let burguer= parseInt(params.get('X-Burguer'));
    let salada= parseInt(params.get('X-Salada'));
    let refrigerante= parseInt(params.get('Refrigerante'));
    let batata= parseInt(params.get('Batata Frita'));

    if (burguer==0&&salada==0&&refrigerante==0&&batata==0) {
        alert('selecione pelo menos 1 coisa, redirecionando...')
        window.location.href="pedido.html"
    }
    
    let total= burguer*15+ salada*18+ refrigerante*6+ batata*10;

    document.getElementById('saidacliente').innerHTML=cliente;
    document.getElementById('saidaX-Burguer').innerHTML=burguer+" un";
    document.getElementById('saidaX-Salada').innerHTML=salada+" un";
    document.getElementById('saidaRefrigerante').innerHTML=refrigerante+" un";
    document.getElementById('saidaBatata').innerHTML=batata+" un";
    document.getElementById('saidatotal').innerHTML="R$ "+total.toFixed(2);

}