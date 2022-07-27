//importo las funciones de los archivos
//cuando declaro las funciones en addEventListener importa automatica 
//las funciones
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import {moveBall, shorcuts} from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import netWorkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_form.js";
import speechReader from "./narrador.js";



const d = document;
//uso método Content Loaded para mejor carga
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown","Nov 25, 2022 23:00:00", "Feliz Cumpleaños bro😁😎😜");
    scrollTopButton(".scroll-top-btn");
    //para el responsive JSvoy a tomar como parametro la media query de 1024px
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=92&ab_channel=jonmircha" target="_blank"> Ver video </a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/2HaoSmpzGntRiiBf6" target="_blank"> Ver mapa </a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.754729357412!2d-58.367533284193065!3d-34.635637966695974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33516c87dd6af%3A0xce23d91e2fd7aa51!2sBombonera!5e0!3m2!1ses-419!2sar!4v1656104654807!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webCam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    //no le paso parámetros pero se deben respetar selectores
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();

    
});

//llamo las funciones para el movimiento de la pelota, es es cuando se aprietan las teclas
//no hace falta cargarlo, entonces es un evento.
d.addEventListener("keydown", (e) =>{
    shorcuts(e);
    moveBall(e,".ball",".stage");
});
//esta función tiene su propio DOMCOntentLoaded así que tengo que invocarla aparte
darkTheme(".dark-theme-btn","dark-mode"); 

//esta función no necesita cargarse con el documento,si no cuando detecte que no hay internet
netWorkStatus();
//esta función tiene su propio DOMCOntentLoaded así que tengo que invocarla aparte
speechReader();