function mostrar() {
    nombre = document.getElementById('nombre').value;
  
    function residuo() {
      n1 = parseInt(prompt('Digite un número'));
      n2 = parseInt(prompt('Digite un número'));
      resultado = n1 % n2;
      document.write(`El residuo de los números es ${resultado}`);
    }
  
    function porcentaje() {
      n1 = parseInt(prompt('Digite un número'));
      resultado = n1 * 0.05;
      document.write(`El porcentaje del número es ${resultado}`);
    }
  
    act = parseInt(prompt('Digite un número'));
    switch (act) {
      case 1:
        residuo();
        break;
      case 2:
        porcentaje();
        break;
      default:
        alert('La opción no es válida');
    }
  }
  
