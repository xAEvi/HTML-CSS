function checkObj(obj, checkProp) {
    // Cambia solo el código debajo de esta línea
    return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";


  
    return "Change Me!";
    // Cambia solo el código encima de esta línea
  }

  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, 
  "gift"));