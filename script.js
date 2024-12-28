const display = document.getElementById("calc-display");

function appendTodisplay(input) {
    if (display.value === "Invalid") {
        clearDisplay();
    }
    display.value += input;
}

function removeFromdisplay() {
    if (display.value === "Invalid") {
        clearDisplay();
    } else {
        display.value = display.value.slice(0, -1); 
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = (eval(display.value)).toFixed(6);
    } catch(error) {
        display.value = "Invalid";
    }
}
