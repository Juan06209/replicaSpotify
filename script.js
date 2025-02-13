document.addEventListener("DOMContentLoaded", () => {
    // Botón de descarga
    const downloadBtn = document.querySelector(".download-btn");
    
    downloadBtn.addEventListener("click", () => {
        alert("¡Descargando Spotify!");
    });

    // Botón de login
    const loginBtn = document.getElementById("login");
    
    loginBtn.addEventListener("click", () => {
        alert("Redirigiendo a la página de inicio de sesión...");
    });

    // Botón de registro
    const signupBtn = document.getElementById("signup");
    
    signupBtn.addEventListener("click", () => {
        alert("Redirigiendo a la página de registro...");
    });
});
