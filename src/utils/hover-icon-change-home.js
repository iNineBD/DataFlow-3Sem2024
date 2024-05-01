// Evento para mudar a cor do icon perfil na tela home

document.getElementById('fotoPerfilIcon').addEventListener('mouseover', function() {
    this.src = '../assets/images/foto-perfil-azul.png';
});

document.getElementById('fotoPerfilIcon').addEventListener('mouseout', function() {
    this.src = '../assets/images/foto-perfil-branco.png';
});

