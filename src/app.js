import "bootstrap";
import "./style.css";

window.onload = function() {
  const frase = [
    ["mi amigo ", "mi abuela ", "mi padre ", "mi novia "],
    ["cayo ", "volo ", "esfumo ", "meo "],
    ["en la cama ", "en mi comida ", "en la sala ", "en la iglesia "],
    ["por la tarde ", "hace un dia ", "en toda la semana ", "mientras estaba en mentoria "]
  ];
  const randoms = (fcombinadas) =>{
    return fcombinadas[Math.floor(Math.random() * fcombinadas.length)];
  }; 
  let excusas = "";
  for (const partes of frase) {
    excusas += randoms (partes);
  };
  
  document.querySelector("#excusa").innerHTML=excusas; 
};
