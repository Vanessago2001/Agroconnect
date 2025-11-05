// Al hacer clic en el área de subida
const uploadBox = document.querySelector(".upload-box");
const inputFile = document.getElementById("imagenCultivo");

uploadBox.addEventListener("click", () => {
  inputFile.click();
});

// Mostrar alerta al guardar
document.getElementById("btnGuardar").addEventListener("click", () => {
  alert("✅ Datos del cultivo guardados correctamente.");
});
