function validateForm() {
    console.log("Hola mundo");
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["Telefono"].value;
    let z = document.forms["myForm"]["Comentarios"].value;
    if ((x == "")||(y == "")||(z == "")) {

      alert("Existen campos vacíos");
      return false;
    }
   
  }