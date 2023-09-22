function validarLogin(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var lembrarSenha = document.getElementById("lembrarSenha").checked;

    if(email === ""){
        alert("Por favor, preencha seu email para prosseguir");
        return false;
    } else if (senha === "") {
        alert("Por favor, preencha sua senha para prosseguir");
        return false;
    } else{
        alert("Formulário válido. Você pode enviar");
        return true;
    }
}
document.getElementById("loginForm").addEventListener("submit", validarLogin);