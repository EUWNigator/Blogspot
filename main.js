console.log('qwerty');

ScrollReveal().reveal('.principal', { delay: 300 });
ScrollReveal().reveal('.lateral', { delay: 200 });
ScrollReveal().reveal('.footer', { delay: 200 });
ScrollReveal().reveal('.presentacion', { delay: 200 });
ScrollReveal().reveal('.footer2', { delay: 200 });
ScrollReveal().reveal('.btn-section', { delay: 200 });

document.querySelector('.boton').addEventListener('click', () => {
    document.querySelector(".footer2").innerHTML = "<h2>Pie de pagina</h2>";
});

document.querySelector('.boton2').addEventListener('click', () => {
    document.querySelector(".footer2").innerHTML = "<h2>Footer N°2</h2>";
});

document.querySelector('.boton3').addEventListener('click', () => {
    document.querySelector(".footer2").innerHTML = "<h1>DORIME</h1><br><h2>INTERINO ADAMARE DORIME</h2><br><br><p>lorem ipsum</p>";
});

document.querySelector('.boton4').addEventListener('click', () => {
    document.querySelector('.footer2').style.backgroundColor = 'black'
});

document.querySelector('.boton5').addEventListener('click', () => {
    document.querySelector('.footer2').style.backgroundColor = 'inherit'
});
