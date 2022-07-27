const d= document,
    n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        //le doy la mejor presición
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge:0,
    }; //objeto

    //la función de geolocalización necesita tres parámetros. Una función en caso de que funcione,
    //una en caso de error y otra de opciones
    const success = (position) => {
        let coords = position.coords;
        
        const latLon = `${position.coords.latitude},${position.coords.longitude}`;

        $id.innerHTML =`
            <p> Tu posición actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy}</b> metros</li>
            </ul>
            <a href="https://www.google.com/maps/@${latLon},15z"
             target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
    };
    const error = (err) => {
        //el mensaje de error va a ser el siguiente:
        $id.innerHTML=`<p> <mark> Error ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);
    };
    //le doy los tres parámetros
    n.geolocation.getCurrentPosition(success,error,options);
    //con watchPosition podría ver la geolocalización en tiempo real, si es que el usuario se esta moviendo (como mapa de uber)
    
}