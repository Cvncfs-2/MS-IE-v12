function abrirUrl() {
    // 1. Obter o valor da textarea.
    const url = document.getElementById('urlInput').value.trim();

    // 2. Validar se a URL está vazia.
    if (!url) {
        alert('Por favor, digite uma URL válida.');
        return;
    }

    // 3. Abrir a URL em uma nova aba.
    // O método window.open(url, '_current') ou window.open(url, '_self') abre a URL na mesma aba ou janela.
    window.open(url, '_current');
}