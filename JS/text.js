var currentTextSize = 16;
var hasInput = false;

class insertText extends PaintFunction {
  constructor(canvasReal) {
    super();
    this.canvasReal = canvasReal;
  }

  onMouseDown(coord, event) {
    if (hasInput) return;
    addInput(event.offsetX, event.offsetY);
    console.log(event.offsetY, event.clientY);
  }

  onMouseUp(coord, event) {}
}

//Function to dynamically add an input box:
function addInput(x, y) {
  var input = document.createElement("input");
  input.type = "text";
  input.style.position = "fixed";
  input.style.left = x + 74 + "px";
  input.style.top = y - 10 + "px";
  input.style.border = "1px solid orange";
  input.style.fontSize = `${currentTextSize}px`;
  input.style.fontFamily = `san-serif`;
  input.style.color = currentColor;

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
  contextReal.font = `${currentTextSize}px san-serif`;
  contextReal.fillStyle = currentColor;
  contextReal.fillText(txt, x - 74, y + 5);
  saveCurrent();
}
