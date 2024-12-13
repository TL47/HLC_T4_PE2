function ocultarChat() {
    document.getElementById('textarea').classList.add('oculto');
    const ocultar = document.getElementById('textarea');
}

function mostrarChat() {
    document.getElementById('textarea').classList.remove('oculto');
}

function enviar() {
    const textarea = document.getElementById('mensaje');
    const div = document.createElement('div');
    div.textContent = textarea.value;
    div.classList.add('texto');
    document.getElementById('mensaje').insertBefore(div, document.getElementById('mensaje').firstChild);
    textarea.value = '';
}