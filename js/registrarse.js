document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const password = document.getElementById("password").value;
      const confirmar = document.getElementById("confirmar").value;

      if (password !== confirmar) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      window.location.href = "index.html"; 
    });
  }
});
