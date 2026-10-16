document.addEventListener('DOMContentLoaded', () => {
    const primaryButton = document.querySelector('.cta');

    if (primaryButton) {
        primaryButton.addEventListener('click', () => {
            const message = 'A versão inicial do projeto está em desenvolvimento. Em seguida, refinaremos a identidade visual e a conversão.';
            alert(message);
        });
    }
});
