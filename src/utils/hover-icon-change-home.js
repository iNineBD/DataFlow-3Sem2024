// Evento para mudar a cor do icon perfil na tela home

document.getElementById('profileIcon').addEventListener('mouseover', function() {
    this.src = '../src/assets/images/foto-perfil-azul.png';
});

document.getElementById('profileIcon').addEventListener('mouseout', function() {
    this.src = '../src/assets/images/foto-perfil-branco.png';
});
