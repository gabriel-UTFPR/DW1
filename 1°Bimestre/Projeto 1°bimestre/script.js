function Login() {
    let inputUser= document.getElementById("email");
    let inputSenha= document.getElementById("senha");

    let User = inputUser.value;
    let senha = inputSenha.value;

    if (User==='admin@email.com' && senha==='1234') {
        window.location.href="pedido.html";
    }else{
        alert("Usuário ou Senha inválido");
        inputSenha.value="";
        inputUser.value="";
        return
    }
}
