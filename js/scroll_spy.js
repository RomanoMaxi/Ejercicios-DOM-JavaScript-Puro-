const d = document;

//creo funcion para cuando haga scroll se marque la sección en donde estoy
export default function scrollSpy(){
    //a los elementos del menú y a las seccion hay que agregarle eel data atributte
    const $sections = d.querySelectorAll("section[data-scroll-spy");

    const cb = (entries) => {
        // console.log("entries", entries);

        entries.forEach((entry) => {
            // console.log("entry", entry);
            //accedo a los id de los seccion
            const id = entry.target.getAttribute("id");
            // console.log(id);

            if(entry.isIntersecting){
                //en caso de que sea verdadero agrego la clase active para que se ilumine
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.add("active");
            }else{
                //en caso de que sea falso le saco la clase
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove("active");
            }
        })
    };
    //la siguiente variable va a detectar cuando se activa el agregado y remoción de clases, y despues hasta que porcentaje de la sección se activa el menú
    const observer = new IntersectionObserver(cb, {
        //con el coido anterior funciona el scroll pero marcan las dos secciones a la vez porque estan pegadas
        //entonces necesito un elemento base para ir midiendo el scroll
        //con rootMargin en negativo reduzco los margenes de interacción de las secciones
        //si esto fuera positivo se agrandan entonces marcan más elementos a la vez, por ejemplo {rootMargin: "-250 px"}, la desventaja de esto es hay que darle medidas. Y varia de cada minitor
        //también tengo el elemento "threshold", que puedo decir que se active cuando el elemento empiece a visulizarse, y puedo variar el porcentaje de cuando se active, por ejemplo que cuando esté al 50% deje de activarse
        threshold: [0.5, 0.75],
    });
    // console.log("observer", observer);
    
    //aplico el observer a cada section
    $sections.forEach( el => observer.observe(el))
} 