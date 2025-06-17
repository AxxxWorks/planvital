// --- NUEVO ARCHIVO login.js CON FIREBASE ---
document.addEventListener('DOMContentLoaded', function () {
    // --- PUNTO CLAVE 1 ---
    // Pega aquí la configuración de Firebase que copiaste de la consola.
    // ¡ASEGÚRATE DE RELLENAR ESTO CON TUS CLAVES REALES!
   var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "PROJECT_ID",
  // The value of `storageBucket` depends on when you provisioned your default bucket (learn more)
  storageBucket: "PROJECT_ID.firebasestorage.app",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};

   // Inicializar Firebase (de forma segura)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
