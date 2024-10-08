// seleziono la lampadina spenda tramite id
const on_lamp_el = document.getElementById("on-lamp");
// stampo in console per controllare se è corretto
console.log(on_lamp_el);

// tramite la proprietà style posso cambiare il display e non farla vedere in pagina
on_lamp_el.style.display = "none";