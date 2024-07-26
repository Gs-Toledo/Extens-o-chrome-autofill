function fillInputs() {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(input => {
        switch(input.type) {
            case 'text':
                input.value = 'Lorem Ipsum';
                break;
            case 'email':
                input.value = 'lorem@ipsum.com';
                break;
            case 'number':
                input.value = '12345';
                break;
            // Adicione outros tipos de input conforme necessário
        }
    });

    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.value = 'Lorem Ipsum';
    });
}