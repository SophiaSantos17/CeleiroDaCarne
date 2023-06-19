const button_comida01 = document.getElementById('button-entrada');
const button_comida02 = document.getElementById('button-americanbbq');
const button_comida03 = document.getElementById('button-parrilla');

const box_comida01 = document.getElementById('box-option-comidas-01');
const box_comida02 = document.getElementById('box-option-comidas-02');
const box_comida03 = document.getElementById('box-option-comidas-03');

button_comida01.addEventListener('click', function() {
    box_comida01.classList.remove('hidden');
    box_comida02.classList.add('hidden');
    box_comida03.classList.add('hidden');

    button_comida01.classList.add('active');
    button_comida02.classList.remove('active');
    button_comida03.classList.remove('active');
});

button_comida02.addEventListener('click', function() {
    box_comida01.classList.add('hidden');
    box_comida02.classList.remove('hidden');
    box_comida03.classList.add('hidden');

    button_comida01.classList.remove('active');
    button_comida02.classList.add('active');
    button_comida03.classList.remove('active');
});

button_comida03.addEventListener('click', function() {
    box_comida01.classList.add('hidden');
    box_comida02.classList.add('hidden');
    box_comida03.classList.remove('hidden');

    button_comida01.classList.remove('active');
    button_comida02.classList.remove('active');
    button_comida03.classList.add('active');
});


const button_bebida01 = document.getElementById('button-bebidas');
const button_bebida02 = document.getElementById('button-sucos');
const button_bebida03 = document.getElementById('button-caipirinha');


const box01_bebida = document.getElementById('box-option-bebidas-01');
const box02_bebida = document.getElementById('box-option-bebidas-02');
const box03_bebida = document.getElementById('box-option-bebidas-03');


button_bebida01.addEventListener('click', function() {
    box01_bebida.classList.remove('hidden');
    box02_bebida.classList.add('hidden');
    box03_bebida.classList.add('hidden');

    button_bebida01.classList.add('active');
    button_bebida02.classList.remove('active');
    button_bebida03.classList.remove('active');
});
button_bebida02.addEventListener('click', function() {
    box01_bebida.classList.add('hidden');
    box02_bebida.classList.remove('hidden');
    box03_bebida.classList.add('hidden');

    button_bebida01.classList.remove('active');
    button_bebida02.classList.add('active');
    button_bebida03.classList.remove('active');
});
button_bebida03.addEventListener('click', function() {
    box01_bebida.classList.add('hidden');
    box02_bebida.classList.add('hidden');
    box03_bebida.classList.remove('hidden');

    button_bebida01.classList.remove('active');
    button_bebida02.classList.remove('active');
    button_bebida03.classList.add('active');
});
