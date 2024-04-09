// Evento para mudar a cor do icon perfil na tela upload csv

document.getElementById('fotoPerfilIcon').addEventListener('mouseover', function() {
    this.src = '../assets/images/foto-perfil-azul.png';
});

document.getElementById('fotoPerfilIcon').addEventListener('mouseout', function() {
    this.src = '../assets/images/foto-perfil-branco.png';
});
