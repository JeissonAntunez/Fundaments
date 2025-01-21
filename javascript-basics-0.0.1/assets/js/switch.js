const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1


const foo1 = 5;
switch (foo1) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}


const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}

const foo3 = 1;
let output = "Output: ";
switch (foo3) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}

// switch (true) {
//     case "fetch" in globalThis:
//       // Fetch a resource with fetch
//       break;
//     case "XMLHttpRequest" in globalThis:
//       // Fetch a resource with XMLHttpRequest
//       break;
//     default:
//       // Fetch a resource with some custom AJAX logic
//       break;
//   }
  
function isSquare(shape) {
    // Lógica para determinar si la forma es un cuadrado
    return shape.type === 'square';
  }
  
  function isRectangle(shape) {
    // Lógica para determinar si la forma es un rectángulo
    return shape.type === 'rectangle';
  }
  
  function isQuadrilateral(shape) {
    // Lógica para determinar si la forma es un cuadrilátero
    return shape.type === 'quadrilateral';
  }
  
  function isCircle(shape) {
    // Lógica para determinar si la forma es un círculo
    return shape.type === 'circle';
  }
  
  const shape = { type: 'square' }; // Ejemplo de objeto shape
  
  switch (true) {
    case isSquare(shape):
      console.log("This shape is a square.");
    // Fall-through, since a square is a rectangle as well!
    case isRectangle(shape):
      console.log("This shape is a rectangle.");
    case isQuadrilateral(shape):
      console.log("This shape is a quadrilateral.");
      break;
    case isCircle(shape):
      console.log("This shape is a circle.");
      break;
  }

  
  