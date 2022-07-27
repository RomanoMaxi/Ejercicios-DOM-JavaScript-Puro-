const d= document,
    ls = localStorage;

//para llamar los elementos, llamo el boton que cambia los temas
//y también si tengo que cambiar el theme a varios elementos, uso un data atributte así
//no llamo uno por uno de los elementos a cambiar
export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
        //para agarrar todos los elementos con el data-dark, uso propiedades de css
        //y lo pongo entre corchetes
        $selectors = d.querySelectorAll("[data-dark]");
    console.log($selectors);
//como los emojis con cadenas de texto, puedo guardarlos como funciones
    let moon="🌙",
        sun = "🔆";
    //creo las funciones para cada modo para después solo invocarlas
    const lightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","light");
    }
    const darkMode = () => {
        $selectors.forEach( (el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark");
    }


    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            
            if($themeBtn.textContent === moon){
                //entoncess uso el forEach para recorrer cada elemento del HTMl y agregarle la class Dark mode
                darkMode();
            }else{
                lightMode();
            }
        }
    });
//hay que recordar que ya estoy usando DOMContentLoaded en el principal, así que no lo
//puedo usar en otra función dentro de ese DOMContentLoaded
    d.addEventListener("DOMContentLoaded", (e) => {
        //entonces para que guarde las preferencias accedo al local Storage
        //cuando carge por primera vez el valor es nulo
        if(ls.getItem("theme") === null) {
            ls.setItem("theme","light");
        }
        //después ya no entra en el primer if, si no que conserva los cambios dependiendo la variable llamada
        if(ls.getItem("theme") === "light"){
            lightMode();
        }
        if(ls.getItem("theme") === "dark"){
            darkMode();
        }
    });
}