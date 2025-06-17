document.addEventListener('DOMContentLoaded', function () {
    // 1. TU CONFIGURACIÓN REAL DE FIREBASE
    const firebaseConfig = {
        apiKey: "...", // TUS LLAVES REALES DEBEN ESTAR AQUÍ
        authDomain: "...",
        projectId: "...",
        storageBucket: "...",
        messagingSenderId: "...",
        appId: "..."
    };

    // 2. INICIALIZACIÓN SEGURA DE FIREBASE
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // 3. DEFINICIÓN CLAVE DEL MÓDULO DE AUTENTICACIÓN
    const auth = firebase.auth();

    // 4. OBTENER ELEMENTOS DEL FORMULARIO
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    // 5. LISTENER DEL FORMULARIO
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // 6. INTENTO DE LOGIN CON FIREBASE
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('¡ACCESO CONCEDIDO! Redirigiendo...');
                window.location.href = 'planner.html';
            })
            .catch((error) => {
                errorMessage.textContent = 'Email o contraseña incorrectos.';
                errorMessage.style.display = 'block';
                console.error('Error de inicio de sesión:', error.message);
                passwordInput.value = '';
            });
    });
});
