function abrirUrl() {
    // 1. Obter o valor da textarea.
    let url = document.getElementById('entrada-url').value.trim();

    // 2. Validar se a URL está vazia.
    if (!url) {
        alert('Por favor, digite uma URL válida.');
        return;
    }

    //2 verificações básicas para ver se o site existe.
    if (url.includes(' ') || !url.includes('.')) {
        alert('Endereço inválido.');
        return;
    }

    // 3. Se o usuário não digitou http ou https
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
        url = 'https://' + url;
    }

    // 4. Abrir a URL em uma nova aba.
    // O método window.open(url, '_blank') abre a URL em outra aba.
    window.open(url, '_blank');
}