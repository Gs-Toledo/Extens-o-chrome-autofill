export function fillInputs() {
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

    const Alltextareas = document.querySelectorAll('textarea');
    Alltextareas.forEach(textarea => {
        textarea.value = 'Lorem Ipsum';
    });
}