const d = document,
    w = window;
export default function smartVideo(){
    const $video = d.querySelectorAll("video[data-smart-video]");
    //creo el observador para realizar al tarea
    const cb = (entries) =>{
        entries.forEach(entry => {
            //realizo la pausa cuando el usuario deje de ver el video
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }
            //aplico que cuando cambio de pestaña el video se pause
            w.addEventListener("visibilitychange", (e) =>
                d.visibilityState === "visible"
                ? entry.target.play()
                : entry.target.pause()
            );
        });
    }
    //lamo a la variable callback y establexco el parámetro para que reproduza o no el video
    const observer = new IntersectionObserver(cb, {threshold: 0.5});
    //ahora le asigno el observador al elemento del video
    //cuando se ve el 50% del video se para 
    $video.forEach((el) => observer.observe(el));
}