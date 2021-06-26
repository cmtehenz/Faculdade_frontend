

function handleShadow(){
  var texto = document.getElementById("boxText").value
  var txt = texto
      .replace(/i/gi, "inis")
      .replace(/a/gi, "ais")
      .replace(/e/gi, "enter")
      .replace(/o/gi, "omber")
      .replace(/u/gi, "ufter")
  console.log(txt);
  
}


