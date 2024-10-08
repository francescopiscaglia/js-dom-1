// seleziono la lampadina accesa tramite id
const on_lamp_el = document.getElementById("on-lamp");

// seleziono la lampadina spenta tramite id
const off_lamp_el = document.getElementById("on-lamp");

// seleziono il bottone tramite id
const switch_el = document.getElementById("switch");

// stampo in console per controllare se è corretto
console.log(on_lamp_el, off_lamp_el, switch_el);

// tramite la proprietà style posso cambiare il display e non farla vedere in pagina
on_lamp_el.style.display = "none";


