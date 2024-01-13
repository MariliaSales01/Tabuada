const valor = document.querySelector("section.container input")
const tabuada = document.querySelector("section.container div.tabuada")
const calcular = document.querySelector("section.container button")

calcular.addEventListener("click", () =>{
    if(Number(valor.value) <1 || Number(valor.value) > 7){
        tabuada.innerHTML = "Insira um valor entre 1 a 7"
    }
    else{

        for(i = 1; i <=10; i++){
            
            const calc = String(i) + " x " + valor.value + " = " + i * Number(valor.value)
            const resultado = document.createElement("p")
    
            resultado.innerText = calc
    
            tabuada.appendChild(resultado)
        }

    }
})