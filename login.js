// --- NUEVO ARCHIVO login.js CON FIREBASE ---
document.addEventListener('DOMContentLoaded', function () {
    // --- PUNTO CLAVE 1 ---
    // Pega aquí la configuración de Firebase que copiaste de la consola.
    // ¡ASEGÚRATE DE RELLENAR ESTO CON TUS CLAVES REALES!
    const firebaseConfig = {
        apiKey: "TU_API_KEY",
        authDomain: "TU_AUTH_DOMAIN",
        projectId: "TU_PROJECT_ID",
        storageBucket: "TU_STORAGE_BUCKET",
        messagingSenderId: "TU_MESSAGING_SENDER_ID",
        appId: "TU_APP_ID"
    };

    // Inicializar Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Obtener los elementos del formulario
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('username'); // Asumimos que ya lo cambiaste a tipo email
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    // Escuchar el evento de envío del formulario
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // Iniciar sesión con Firebase
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // ¡Acceso correcto!
                console.log('Acceso concedido para:', userCredential.user.email);
                // Redirigimos a la página del planificador.
                window.location.href = 'planner.html';
            })
            .catch((error) => {
                // Si son incorrectas, mostrar un mensaje de error
                errorMessage.textContent = 'Email o contraseña incorrectos.';
                errorMessage.style.display = 'block';
                console.error('Error de inicio de sesión:', error.message);
                passwordInput.value = '';
            });
    });
});
