const d = document,
    w = window;

export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select"),
        $speechTextarea = d.getElementById("speech-text"),
        $speechBtn = d.getElementById("speech-btn"),
        //llamo la API que va a leer el mensaje
        speechMessage = new SpeechSynthesisUtterance();

        // console.log(speechMessage);
        //ahora tengo que llamar las voces que van a leer, están dentro de otra API
        let voices = [];
        //le doy su propio DOM Content Loaded
        d.addEventListener("DOMContentLoaded", (e) => {
            //console.log(w.speechSynthesis.getVoices());
            w.speechSynthesis.addEventListener("voiceschanged", (e) => {
                //console.log(e);
                voices = w.speechSynthesis.getVoices();
                //console.log(voices);
                voices.forEach((voice) => {
                    const $option = d.createElement("option");
                    $option.value = voice.name;
                    $option.textContent = `${voice.name} *** ${voice.lang}`;

                    $speechSelect.appendChild($option);
                })
            });
        });

        d.addEventListener("change", (e) => {
            //le asigno la voz al mensaje, que su propiedad "voice" viene originalmente null
            if (e.target === $speechSelect){
                //busco el nombre de la voz que haga el e.target
                speechMessage.voice = voices.find(voice => voice.name === e.target.value);
            }
            
        });
        d.addEventListener("click", (e) => {
            if(e.target === $speechBtn){
                //al presionar boton, la variable speachMessage guarda en texto lo que esté en el textarea 
                speechMessage.text = $speechTextarea.value;
                //uso el window, y pido a la API que hable lo que está en el speechMessage
                w.speechSynthesis.speak(speechMessage);
            }
        });
    }
