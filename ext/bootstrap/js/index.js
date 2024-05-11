
// Obtén los elementos del DOM
var navbar = document.getElementById('navbar');
var toggleButton = document.getElementById('toggleButton');
var services = document.getElementById('Servicios'); // Asegúrate de tener un elemento con este id en tu HTML

// Añade un evento de click al botón
toggleButton.addEventListener('click', function() {
  // Comprueba si el navbar y el índice de servicios están actualmente visibles
  var isNavbarDisplayed = navbar.style.display === 'block';
  var isServicesDisplayed = services.style.display === 'block';

  // Muestra u oculta el navbar y el índice de servicios dependiendo de su estado actual
  navbar.style.display = isNavbarDisplayed ? 'none' : 'block';
  services.style.display = isServicesDisplayed ? 'none' : 'block';
});