var font = "14px sans-serif",
  hasInput = false;

class insertText extends PaintFunction {
  constructor(canvasReal) {
    super()
    this.canvasReal = canvasReal;
  }

  onMouseDown(coord, event) {
    if (hasInput) return;
    addInput(event.clientX, event.clientY);
  }
  
  onMouseUp(coord, event) {
    console.log("123")
  }
}

//Function to dynamically add an input box:
function addInput(x, y) {
  var input = document.createElement("input");

  input.type = "text";
  input.style.position = "fixed";
  input.style.left = x - 4 + "px";
  input.style.top = y - 4 + "px";

  input.onkeydown = handleEnter;

  document.body.appendChild(input);

  input.focus();

  hasInput = true;
}

//Key handler for input box:
function handleEnter(e) {
  var keyCode = e.keyCode;
  if (keyCode === 13) {
    drawText(
      this.value,
      parseInt(this.style.left, 10),
      parseInt(this.style.top, 10)
    );
    document.body.removeChild(this);
    hasInput = false;
  }
}

//Draw the text onto canvas:
function drawText(txt, x, y) {
  contextReal.textBaseline = "top";
  contextReal.textAlign = "left";
  contextReal.font = font;
  contextReal.fillText(txt, x - 4, y - 4);
}
