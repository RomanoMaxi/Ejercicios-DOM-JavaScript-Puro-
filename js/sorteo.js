const d = document;
//necesito el boton y el selector del elemento que gane
export default function draw(btn, selector){
    //agarro todos los elementos, y realizo función para obtener valor random
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];

        console.log ($players,random,winner);
        return `El ganador es: ${winner.textContent}`;
    }
    //agrego el evento para cuando clickeo el boton
    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    });
}

const getWinnerComment = (selector) => {
    const $players = d.q
}