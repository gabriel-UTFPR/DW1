function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    // Login fixo (exemplo)
    if (email === "admin@email.com" && senha === "1234") {
        window.location.href = "menu.html";
    } else {
        document.getElementById("erro").innerText = "Email ou senha incorretos!";
    }
}

function calcular() {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let total = 0;

    checkboxes.forEach(item => {
        if (item.checked) {
            total += parseFloat(item.value);
        }
    });

    document.getElementById("total").innerText = total.toFixed(2);
}