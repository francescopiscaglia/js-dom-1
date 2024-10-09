// => Preparazione

// seleziono la lampadina spenta tramite id dalla DOM
const off_lamp_el = document.getElementById("off-lamp");

// seleziono la lampadina accesa tramite id dalla DOM
const on_lamp_el = document.getElementById("on-lamp");

// seleziono il bottone tramite id dalla DOM
const switch_el = document.getElementById("switch");

// stampo in console per controllare se è corretto
// console.log(on_lamp_el, off_lamp_el, switch_el);


// => Elaborazione del codice

// tramite la proprietà style posso cambiare il display e non farla vedere in pagina
on_lamp_el.style.display = "none";

// tramite un event listener posso cambiare la proprietà display delle lampadine
// switch_el.addEventListener("click", () => {

//     // far sparire la lampadina spenta
//     off_lamp_el.style.display = "none";

//     // far comparire la lampadina accesa
//     on_lamp_el.style.display = "inline-block";

//     // cambio la scritta del button
//     switch_el.innerHTML = "Spegni";
// })

// bonus
switch_el.addEventListener("click", function () {

    // creo una variabile di appoggio per vedere se è presente "Accendi"
    const is_on = this.textContent === "Accendi"; // true/false

    // devo verificare se è spenta
    if (is_on) {

        // far sparire la lampadina spenta
        off_lamp_el.style.display = "none";

        // far comparire la lampadina accesa
        on_lamp_el.style.display = "inline-block";

        // cabmbiare la scritta del button
        this.textContent = "Spegni";

    } else { // se è accesa

        // far sparire la lampadina spenta
        off_lamp_el.style.display = "inline-block";

        // far comparire la lampadina accesa
        on_lamp_el.style.display = "none";

        // cambiare la scritta del button
        this.textContent = "Accendi";
    };
});




