let noClickCount = 0; // Contador de clics en el botón "No"
const noButton = document.getElementById('noButton');

// Función para manejar los clics en "No"
function handleNoClick() {
    noClickCount++; // Incrementa el contador de clics

    // Si se ha clicado menos de 5 veces, mover el botón a una posición aleatoria
    if (noClickCount < 10) {
        moveNoButton();
    } else {
        // En el quinto clic, redirigir al enlace
        window.location.href = 'FLORES.html';
    }
}

// Función para mover el botón a una nueva posición
function moveNoButton() {
    const container = document.querySelector('.container');
    
    // Obtener el tamaño del contenedor y del botón
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Limitar las posiciones aleatorias para que no se salga del contenedor
    const maxX = containerWidth / 2 - buttonWidth;
    const maxY = containerHeight / 2 - buttonHeight;
    
    // Valores aleatorios para mover dentro del rango permitido
    const randomX = Math.floor(Math.random() * (maxX * 14)) - maxX;
    const randomY = Math.floor(Math.random() * (maxY * 14)) - maxY;

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`; // Mueve el botón
}
