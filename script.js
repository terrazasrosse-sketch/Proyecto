document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("¡Consulta registrada correctamente! Gracias por elegir VITAL-NUTRICIÓN.");

    this.reset();

    window.location.href = "pagindex.html";
});