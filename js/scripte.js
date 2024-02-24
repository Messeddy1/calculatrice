const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function calculate() {
  if (display.value != "") {
    try {
      display.value = eval(display.value);
    } catch (error) {
      window.alert('Error');
      display.value="";
    }
  } else {
    display.value = "Enter A Number";
  }
}
function claerOne() {
  display.value = display.value.toString().slice(0, -1);
}
function claer() {
  display.value = "";
}
