document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Por favor completa todos los campos.");
        return;
      }

     
      if (email === "admin@gmail.com" && password === "12345") {
        alert("Inicio de sesión exitoso. ¡Bienvenido a AgroConnect!");
      } else {
        alert("Correo o contraseña incorrectos.");
      }
    });
  }
});

