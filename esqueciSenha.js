document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("forgotPasswordForm");
    const emailInput = document.getElementById("email");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio do formulário padrão
  
      const email = emailInput.value.trim();
  
      if (!isValidEmail(email)) {
        alert("Por favor, insira um email válido.");
        return;
      }
    });
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });

document.addEventListener("DOMContentLoaded", function () {
    const cookieMessage = document.querySelector(".cookie-message");
    const aceitarCookiesButton = document.getElementById("aceitarCookies");

    aceitarCookiesButton.addEventListener("click", function () {
        cookieMessage.style.display = "none";
    });

    // Verifica se já aceitou os cookies (por exemplo, por meio de cookies ou armazenamento local)
    // Se não tiver aceitado, exibe a mensagem
    if (!localStorage.getItem("cookiesAceitos")) {
        cookieMessage.style.display = "block";
    }
});
