const d= document,
    n=navigator;

export default function webCam(id){
    const $video = d.getElementById(id);
    
    if(n.mediaDevices.getUserMedia){
        //está API es una promesa
        n.mediaDevices.getUserMedia({video: true , audio:true})
        .then((stream) => {
            console.log(stream);
            $video.srcObject = stream;
            //para que sea un video continuo
            $video.play();
        })
        //si no se puede conectar cámara debe saltar error en consola
        .catch((err) =>{
            //en caso de que no se encuentre la webcam conectada saldrá error en pantalla y consola.
            $video.insertAdjacentHTML("afterend", `<p><mark>${err}</mark></p>`);
            console.log(`Sucedió el siguiente error!: ${err}`);
        });
    }
}