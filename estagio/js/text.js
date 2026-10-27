function password() {
    let senha = prompt("Digite a senha:");
    if (senha === "barcelona") {
        alert("Senha correta! Acesso permitido.");
    } else {
        alert("Senha incorreta! Acesso negado.");
    }
}
password()
