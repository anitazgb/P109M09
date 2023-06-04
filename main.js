var mybutton = document.getElementById("clearButton");
mybutton.addEventListener("click", function (event) {
    var element = document.getElementsByClassName("dot");
    while (element.length > 0) {
        element[0].parentNode.removeChild(element[0]);
    }

    // Let us stop the propagation of events
    event.stopPropagation();
});

var colorInput = document.getElementById("color");
var sizeInput = document.getElementById("size");

// Event listener for the color dropdown change event
colorInput.addEventListener("change", function (event) {
    event.stopPropagation();
});

// Event listener for the size dropdown change event
sizeInput.addEventListener("change", function (event) {
    event.stopPropagation();
});

// Event listener for the document click event to draw dots
document.addEventListener("click", function (event) {
    // Check if the target is the color or size dropdowns
    if (event.target === colorInput || event.target === sizeInput) {
        return;
    }

    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.backgroundColor = colorInput.value;
    dot.style.width = sizeInput.value + "px";
    dot.style.height = sizeInput.value + "px";
    dot.style.left = (event.pageX - sizeInput.value / 2) + "px";
    dot.style.top = (event.pageY - sizeInput.value / 2) + "px";
    document.body.appendChild(dot);
});
