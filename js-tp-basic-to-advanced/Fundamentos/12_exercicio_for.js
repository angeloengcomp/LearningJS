const paragrafos = document.querySelector('#paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.querySelector('body'));
const estiloH1 = getComputedStyle(document.querySelector('h1'))

const backgroundColorBody = estiloBody.backgroundColor;
const colorFontH1 = estiloH1.color;


for (let p of ps){

    p.style.backgroundColor = backgroundColorBody;
    p.style.color = colorFontH1;
    
}