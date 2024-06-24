function validatePassword() {
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    if (password !== confirm_password) {
        alert("Los passwords no coinciden");
        document.getElementById('error-message').style.display = 'block';
    } else {
        // coinciden
        document.getElementById('error-message').style.display = 'none';
    }
}

// Agregar el evento 'submit' al formulario para prevenir el envío si las contraseñas no coinciden
document.getElementById('registrar').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    if (password !== confirm_password) {
        event.preventDefault();
    }
});