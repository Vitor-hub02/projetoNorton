//função para validação de dados
function validarFormulario(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var senhaConfirmacao = document.getElementById("senhaConfirmacao").value;
    var concordo = document.getElementById("concordo").checked;

    if(nome === ""){
        alert("Por favor, preencha seu nome para prosseguir.");
        return false;
    } else if (email === ""){
        alert("Por favor, preencha seu email para prosseguir.");
        return false;
    } else if (senha === ""){
        alert("Por favor, preencha sua senha para prosseguir.");
        return false;
    }else if (senha !== senhaConfirmacao){
        alert("As senhas não coincidem.");
        return false;
    }else if(!concordo){
        alert("As senhas digitadas não são iguais");
        return false;
    }
    //todas as validações estão válidas, prosseguir
    alert("Formulário válido. Você pode enviar");
    return true;
}
document.getElementById("botaoCadastrar").addEventListener("click", validarFormulario);