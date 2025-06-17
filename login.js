document.addEventListener('DOMContentLoaded', function () {
    // 1. Pega aquí tu configuración REAL de Firebase
    // ¡¡¡ASEGÚRATE DE QUE ESTAS SEAN TUS LLAVES REALES!!!
    const firebaseConfig = {
        apiKey: "AIzaSy...", // <-- Tus llaves reales van aquí
        authDomain: "tu-proyecto.firebaseapp.com",
        projectId: "tu-proyecto",
        storageBucket: "tu-proyecto.appspot.com",
        messagingSenderId: "123456789",
        appId: "1:123456789:web:abcdef"
    };

    // 2. Inicializar Firebase de forma segura
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // 3. ¡¡¡AQUÍ ESTÁ LA LÍNEA CLAVE!!! Contratamos al experto en autenticación.
    const auth = firebase.auth();

    // 4. Obtener los elementos del formulario
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    // 5. Escuchar el evento de envío del formulario
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // 6. Darle la orden al experto en autenticación
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
