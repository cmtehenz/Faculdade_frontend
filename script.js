
function handleShadow(){
  
  var texto = document.getElementById("boxText").value
  var txtLow = texto.toLowerCase();
  var txt = txtLow
      .replace(/i/gi, "inis")
      .replace(/a/gi, "ais")
      .replace(/e/gi, "enter")
      .replace(/o/gi, "omber")
      .replace(/u/gi, "ufter")
  
  document.getElementById("boxResult").innerHTML = txt;
}

function Desofuscar(){
  var texto = document.getElementById("boxResult").value
  var txtLow = texto.toLowerCase();
  var txt = txtLow
      .replace(/inis/gi,  "i")
      .replace(/ais/gi,   "a")
      .replace(/enter/gi, "e")
      .replace(/omber/gi, "o")
      .replace(/ufter/gi, "u")
  
  document.getElementById("boxText").innerHTML = txt;

}


