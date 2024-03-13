let displayValue = "";

function appendToDisplay(value) {
    document.querySelectorAll('button').forEach(button => {
        button.classList.remove("clicked");
    });

    displayValue += value;
    document.getElementById("display").value = displayValue;

    event.target.classList.add("clicked");
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";

    document.querySelectorAll('button').forEach(button => {
        button.classList.remove("clicked");
    });
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;

    } catch (error) {
        document.getElementById("display").value = "Error";
    } finally {
        document.querySelectorAll('button').forEach(button => {
            button.classList.remove("clicked");
        });
    }
}
