const d = document;
//defino x e y paradecirle que el centro es el (0;0)
//y se mueve respecto a estos
let x= 0,
    y = 0;

//funcion para el movimiento de la pelota
export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),

    //llamo al método que devuelve el tamaño de un elemento
    //esto lo uso para tener de referencia los límites de la pelota y bordes
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

    //con estos consolo puedo ver lo límites y propieades con esto
    // console.log(e.keyCode);
    // console.log(e.key);
    // console.log(limitsBall, limitsStage);

    
    //cancelo comportamiento por defectos con este comando, pero solo 
    //quiero que se cancele lo que hacen por defecto, lo uso con las flechas
    //esto es para que no haga scroll
                        //e.preventDefault();
    //asigno el swtich para las flechas del teclado y su movimiento restandole o sumando
    switch (e.keyCode) {
        //izq
        case 37:
            e.preventDefault();
            //defino que se mueve hasta los límites del div
            if (limitsBall.left > limitsStage.left) x--;
            //move("left");
            break;
        case 38:
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            };
            //move("up");
            break;
        case 39:
           
            e.preventDefault();
            if (limitsBall.right < limitsStage.right) x++;
            //move("right");
            break;
        case 40:
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            };
            //move("down");
            break;
    
        default:
            break;
    }
    //le asigno el valor para poder desplazar en x  y y, multiplico por 10 para que sea mas evidente
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}


//las teclas tienen eventos para cuando son presionadas y levantadas, 
//son keydowon, keyup, keypress. 
//Cada tecla del teclado tiene varios parámetros como código y número
//las teclas especiales como ctrl y shif tienen llaves especiales que devuelven booleano al presionarlas
export function shorcuts(e){
    //creo los shortcuts
    // console.log(e);
    // console.log(e.type);
    
    // console.log(`ctrl: ${e.ctrlKey}`);
    // console.log(`alt: ${e.altKey}`);
    // console.log(`shift: ${e.shiftKey}`);
    // console.log(e);

    //si presiono alt y tecla "a", se lanza alerta
    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }
    //lanzo confirmación
    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmación con el teclado")
    }
    //lanzo un cuadro
    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }

}