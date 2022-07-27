const d = document,
    w= window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);

    //uso el window para que el boton aparezca en el scroll
    w.addEventListener("scroll", (e) => {
        //creo el evento para cuando hago el scroll
        let scrollTop = w.scrollY || d.documentElement.scrollTop;

        if (scrollTop > 400){
            //cuando descienda m´+as de 600px quiero que se active el boton
            $scrollBtn.classList.remove("hidden");
            }else{
                $scrollBtn.classList.add("hidden");
            }
        
    });
    //ahora para hacer que vuelva a posición superior uso el document
    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            //uso scrollTo para desplazarme a un punto específico (top = 0)
            w.scrollTo({
                behavior: "smooth",
                top: 0,
                })
        }
    })
}