const buttons = document.querySelectorAll('.card .btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const originalText = button.textContent;
        
        button.textContent = 'Выполняю... 🛸';
        button.style.background = '#00f5d4';
        button.style.color = '#0b132b';
        
        setTimeout(() => {
            button.textContent = originalText;
            alert('Стич успешно выполнил команду! 🚀');
        }, 1500);
    });
});

