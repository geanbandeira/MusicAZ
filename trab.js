    document.addEventListener("DOMContentLoaded", function () {
        const signupForm = document.getElementById("signupForm");
        const signupEmail = document.getElementById("signupEmail");
        const signupPassword = document.getElementById("signupPassword");
    
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const userEmail = signupEmail.value;
            const userPassword = signupPassword.value;
    
            // Simule o cadastro, armazene o email e a senha no armazenamento local
            localStorage.setItem(userEmail, JSON.stringify({ password: userPassword }));
            console.log("Cadastro bem-sucedido!");
    
            // Redirecionar para a tela de login
            window.location.href = "login.html";
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const loginForm = document.getElementById("loginForm");
        const loginEmail = document.getElementById("loginEmail");
        const loginPassword = document.getElementById("loginPassword");
    
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const userEmail = loginEmail.value;
            const userPassword = loginPassword.value;
    
            // Simule a autenticação, verifique o email e a senha no armazenamento local
            const userData = JSON.parse(localStorage.getItem(userEmail));
            if (userData && userData.password === userPassword) {
                console.log("Login bem-sucedido!");
    
                // Redirecionar para a página inicial após o login
                window.location.href = "trab.html";
            } else {
                console.log("Falha no login. Verifique suas credenciais.");
            }
        });
    });
    
   // Selecionar o elemento de áudio e o elemento de título da música
const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');

// Definir o título inicial da música (pode ser atualizado)
songTitle.textContent = 'Alan Walker - Fade ';

// Adicionar event listeners aos botões
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const volumeSlider = document.getElementById('volumeSlider');

playButton.addEventListener('click', () => {
    audio.play();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// Atualizar o título da música quando o arquivo de áudio é carregado
audio.addEventListener('loadedmetadata', () => {
    songTitle.textContent = audio.currentSrc.split('/').pop(); // Exibe o nome do arquivo
});
