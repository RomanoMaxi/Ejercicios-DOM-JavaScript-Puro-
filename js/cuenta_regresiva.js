const d = document;

export default function countdown(id, limitDate, finalMessage){
    //obtengo la fecha y y el div
    const $countdown = d.getElementById(id),
    countdownDate = new Date (limitDate).getTime();

    let countdownTempo = setInterval(() => {
        //variable que va a ver que día es ahora
        let now = new Date().getTime(),
        //creo variable para conversión de datos, porque JS los calcula en milisegundos
        //uso el Math.floor para redondear los resultados
        //uso la función módulo para operar con los restos
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000*60*60*24)),
        //para que aparezca "02", agrego el 0 y lo concateno, uso slice para que solo me queden 2 cifras
        //es decir, para que no quede 011 etc
        hours = ("0" + Math.floor((limitTime % (1000*60*60*24)) / (1000*60*60))).slice(-2),
        minutes =  ("0" + Math.floor((limitTime % (1000*60*60)) / (1000*60))).slice(-2),
        seconds = ("0" + Math.floor((limitTime % (1000*60)) / (1000))).slice(-2);
        //declaro el argumento HTML para que aparezca cuenta regresiva
        $countdown.innerHTML = `<h3> Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos </h3>`

        //por último pongo condición para cuando el contador llegue a cero
        if(limitTime < 0 ){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3> ${finalMessage} </h3>`
        }

    },1000);

}