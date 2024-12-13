function ocultarChat() {
    document.getElementById('chat').classList.add('oculto');
    const ocultar = document.getElementById('textarea');
}

function mostrarChat() {
    document.getElementById('chat').classList.remove('oculto');
}

function enviar() {
    const textarea = document.getElementById('mensaje');
    const div = document.createElement('div');
    div.textContent = textarea.value;
    div.classList.add('texto');
    document.getElementById('texto').insertBefore(div, document.getElementById('texto').firstChild);
    textarea.value = '';
}

function getRandomBotMessage() {
    const messages = [
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

    return messages[Math.floor(Math.random() * messages.length)];
}