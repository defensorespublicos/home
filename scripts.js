document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Aqui você faria a lógica de autenticação - exemplo básico
  if (username === "defensor" && password === "publico") {
    // Redirecionar se as credenciais estiverem corretas
    window.location.href = "sobre.html";
  } else {
    document.getElementById("login-message").innerText = "Credenciais inválidas. Tente novamente.";
  }
});