// Definicion de la funcion principal llamada 'mostrar'
function mostrar() {
  // Obtener el valor del elemento con el id 'nombre'
  nombre = document.getElementById('nombre').value;

  // Definicion de la funcion interna llamada 'residuo'
  function residuo() {
      // Solicitar al usuario dos números y calcular el residuo
      n1 = parseInt(prompt('Digite un numero'));
      n2 = parseInt(prompt('Digite otro numero'));
      resultado = n1 % n2;
      // Mostrar el resultado en el documento
      document.write(`El residuo de los numeros es ${resultado}`);
  }

  // Definicion de la funcion interna llamada 'porcentaje'
  function porcentaje() {
      // Solicitar al usuario un numero y calcular el 5% de ese numero
      n1 = parseInt(prompt('Digite un numero'));
      resultado = n1 * 0.05;
      // Mostrar el resultado en el documento
      document.write(`El porcentaje del numero es ${resultado}`);
  }

  // Solicitar al usuario un numero para determinar la accion a realizar
  act = parseInt(prompt('Digite un numero'));

  // Utilizar un switch para determinar que funcion llamar segun la entrada del usuario
  switch (act) {
      case 1:
          residuo(); // Llamar a la funcion 'residuo' si el usuario ingresa 1
          break;
      case 2:
          porcentaje(); // Llamar a la funcion 'porcentaje' si el usuario ingresa 2
          break;
      default:
          alert('La opcion no es valida'); // Mostrar una alerta si la entrada no es 1 ni 2
  }
}

