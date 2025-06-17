document.addEventListener('DOMContentLoaded', function () {
    
    // --- PUNTO CLAVE ---
    // Aquí defines el usuario y la contraseña correctos.
    // Puedes cambiarlos por los que desees.
    const USUARIO_CORRECTO = 'axxxworks';
    const CONTRASENA_CORRECTA = 'Bucefalo21';

    // Obtener los elementos del formulario
    const loginForm = document.getElementById('loginForm');
    const userInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Escuchar el evento de envío del formulario
    loginForm.addEventListener('submit', function (event) {
        // Prevenir el envío real del formulario, que recargaría la página
        event.preventDefault();

        // Obtener los valores ingresados por el usuario
        const username = userInput.value.trim();
        const password = passwordInput.value;

        // Validar las credenciales
        if (username === USUARIO_CORRECTO && password === CONTRASENA_CORRECTA) {
            // Si son correctas, redirigir a la página del planificador
            console.log('Acceso concedido. Redirigiendo...');
            window.location.href = 'planner.html'; // Asegúrate que tu archivo principal se llame así
        } else {
            // Si son incorrectas, mostrar un mensaje de error
            errorMessage.textContent = 'Usuario o contraseña incorrectos.';
            errorMessage.style.display = 'block';

            // Opcional: limpiar el campo de contraseña para mayor seguridad
            passwordInput.value = '';
        }
    });
});