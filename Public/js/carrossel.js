/*script que executa o rolamento dos 2 carrosseis, permitindo a visualização das imagens
*/
let btesq = document.getElementById("esquerda")
let btdir = document.getElementById("direita")
let rolo = document.getElementById("rolo")
let margin = 0;
btesq.onclick = () => {
let cont = 0;
let time = setInterval(() => {
margin-=5;
if (margin <= -900) {
margin = -900
}
if (margin > -900) {
btdir.style.visibility = "visible"
}
cont+=5;
rolo.style.marginLeft = margin + "px"
if (cont > 295) {
cont = 0;
clearInterval(time);
}
}, 1)
}
btdir.onclick = () => {
let cont = 0;
let time = setInterval(() => {
margin+=5;
if (margin >= 0) {
margin = 0
}
cont+=5;
rolo.style.marginLeft = margin + "px"
if (cont > 295) {
cont = 0
clearInterval(time);
}
}, 1)
}

/* carrossel 2*/
let bte = document.getElementById("esq")
let btd = document.getElementById("dir")
let rolar = document.getElementById("rolar")
let margem = 0

bte.onclick = () => {
    let contar = 0
    let tempo = setInterval(() => {
        margem -= 5
        if (margem <= -900) {
            margem = -900
        }
        if (margem > -900) {
            btd.style.visibility = "visible"
        }
        contar += 5
        rolar.style.marginLeft = margem + "px"
        if (contar > 225) {
            contar = 0
            clearInterval(tempo)
        }
    }, 1)
}

btd.onclick = () => {
    let contar = 0
    let tempo = setInterval(() => {
        margem += 5;
        if (margem >= 0) {
            margem = 0
        }
        contar += 5
        rolar.style.marginLeft = margem + "px"
        if (contar > 225) {
            contar = 0;
            clearInterval(tempo)
        }
    }, 1)
}

