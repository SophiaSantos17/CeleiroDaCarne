const button01 = document.getElementById('button-entrada');
const button02 = document.getElementById('button-americanbbq');
const button03 = document.getElementById('button-parrilla');

const box01 = document.getElementById('box-option-01');
const box02 = document.getElementById('box-option-02');
const box03 = document.getElementById('box-option-03');

button01.addEventListener('click', function() {
    box01.classList.remove('hidden');
    box02.classList.add('hidden');
    box03.classList.add('hidden');

    button01.classList.add('active');
    button02.classList.remove('active');
    button03.classList.remove('active');
});

button02.addEventListener('click', function() {
    box01.classList.add('hidden');
    box02.classList.remove('hidden');
    box03.classList.add('hidden');

    button01.classList.remove('active');
    button02.classList.add('active');
    button03.classList.remove('active');
});

button03.addEventListener('click', function() {
    box01.classList.add('hidden');
    box02.classList.add('hidden');
    box03.classList.remove('hidden');

    button01.classList.remove('active');
    button02.classList.remove('active');
    button03.classList.add('active');
});