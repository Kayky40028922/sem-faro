const texto = document.querySelector("h1");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const cor=(valor)=>{
    if(valor === 1){
        texto.style.display="flex"
        a.style.display="flex"
        texto.querySelector("p").textContent="Pare"
        b.style.display="none"
        c.style.display="none"
        texto.style.color="red"
    }
    else if(valor === 2){
        texto.style.display="flex"
        b.style.display="flex"
        texto.querySelector("p").textContent="Atenção"
        a.style.display="none"
        c.style.display="none"
        texto.style.color="gold"
    }
    else if(valor === 3){
        texto.style.display="flex"
        c.style.display="flex"
        texto.querySelector("p").textContent="Siga"
        a.style.display="none"
        b.style.display="none"
        texto.style.color="green"
    }
}