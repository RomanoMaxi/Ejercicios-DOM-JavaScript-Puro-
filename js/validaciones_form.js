const d = document;

export default function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
    //pido que traiga todos los inputs con atributos required, tener en cuenta el espacio
    $inputs = d.querySelectorAll(".contact-form [required]");

    // console.log($inputs);

    $inputs.forEach((input) => {
        //creo el span para cada input requerido cuando se detecte error
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        //agrego la clase de error y "none"
        $span.classList.add("contact-form-error","none");
        //ahora lo inserto después del input
        input.insertAdjacentElement("afterend",$span);
    });
    //las validaciones pueden hacerse cuando se procese el formulario, o al momento de llenarlo
    //se hará la validación durante el usuario lo llene
    d.addEventListener("keyup", (e) => {
        //cuando el input required haga el evento
        if(e.target.matches(".contact-form [required]")){
            let $input =e.target,
            //ahora lo que hago es usar atributo pattern (patrones), pero para el text area esto va a ser nulo
            //uso operador corto circuito para indicar que si el pinput no tiene pattern, tiene un data atribute
            //que se guarda en data set y manda la variable pattern
            pattern = $input.pattern || $input.dataset.pattern;

            // console.log($input, pattern);
        //ahora realizo validaciones en dos casos, cuando tiene atributo patrón y cuando no
        //y que haga la validación cuando el usuario escriba y no cuando esté vacio    
        if (pattern && $input.value !== ""){
                // console.log("input tiene patron");
                //guardo si tiene patron en expresión regular
                let regex = new RegExp(pattern);
                //entonces, si el valor del input no cumple la expresión regular:
                return !regex.exec($input.value)
                    //agrego o saco la clase is-active para que se vea el span
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
            }
            if(!pattern){
                // console.log("input NO tiene patron");
                return $input.value ===""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
            }
            }
               
    });

    d.addEventListener("submit", (e) => {
        //primero paro el comportamiento por default
        // e.preventDefault(); //esto lo comenté porque no deja enviar el formulario con form.submit
        alert ("enviando form");
        //muestro el svg loader
        const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");
    
        $loader.classList.remove("none");
        
        //este setTimeout es cuando no uso Ajax,PHP o algún servidor,
        //si no solo uso la confirmación
        setTimeout( () => {
            //muestro el loader por 3s
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();
            //a los 3s dejo de mostrar el mensaje de confirmación
            setTimeout(() => $response.classList.add("none"),3000);
        },3000);
    });

      
}