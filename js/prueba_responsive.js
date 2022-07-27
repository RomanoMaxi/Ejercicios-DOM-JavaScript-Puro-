const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;
    //agrego evento para cuando pongo url y valores, se abre ventana accediendo a los valores
    //guardo estos resultados en la variable tester que esta vacía para después cerrarla.
    d.addEventListener("submit", (e) => {
        if (e.target === $form){
            e.preventDefault();
            tester = window.open(
                $form.direccion.value,
                 "tester",
                 `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
        }
    });
    //por ultimo le agrego evento al boton cerrar
    d.addEventListener("click", (e) => {
        if(e.target === $form.cerrar){
            tester.close();
        }
    })
}