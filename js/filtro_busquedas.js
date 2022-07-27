const d = document;

//necesita dos parámetros, el input de la imagene y el texto de ela
export default function searchFilters(input,selector){
    d.addEventListener("keyup", (e) => {
        if(e.target.matches(input)){
            //cuando presiono Escape borro lo escrito
            if(e.key === "Escape") e.target.value = "";
        
            //para bvuscar, le digo que se fije en todos los elementos card, 
            //y que compare cada caracter (forEach)
            d.querySelectorAll(selector).forEach( (el) => 
            //le digo que el texto ingresado lo pase a minúscula y lo compare con el valor que tiene el target  
                el.textContent.toLowerCase().includes(e.target.value)
                    ? el.classList.remove("filter")
                    : el.classList.add("filter")
            );   
                      
            }
        });        
    }
