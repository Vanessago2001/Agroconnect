// Hacer clic en el cuadro para subir imagen
const uploadBox = document.querySelector(".upload-box");
const inputFile = document.getElementById("imagenAnimal");

uploadBox.addEventListener("click", () => {
  inputFile.click();
});

// Confirmar guardado
document.getElementById("btnGuardar").addEventListener("click", () => {
  alert("✅ Datos del animal guardados correctamente.");
});
