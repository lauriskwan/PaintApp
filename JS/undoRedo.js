let currentDataArray = []; // for storing whatever is inside the canvas when data is pushed
let arrayForRedo = [];


let canvasObject = new Image();

function saveCurrent() {
  let currentData = canvasReal.toDataURL("image/png");
  currentDataArray.push(currentData);
}

function undo() {
  if (currentDataArray.length === 0) {
    return;
  }
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  removedData = currentDataArray.pop();
  arrayForRedo.push(removedData);

  for (var i = 0; i < currentDataArray.length; i++) {
    canvasObject.onload = function () {
      contextReal.drawImage(canvasObject, 0, 0);
    };
    canvasObject.src = currentDataArray[i]; // the reference path of the Object for drawing
  }
  console.log(
    "undo - arrayForRedo: " +
      arrayForRedo.length +
      ", currentDataArray: " +
      currentDataArray.length
  );
}

function redo() {
  if (arrayForRedo.length === 0) {
    return;
  }

  let redoFinishedData = arrayForRedo.pop();
  currentDataArray.push(redoFinishedData);
  canvasObject.src = redoFinishedData;
  canvasObject.onload = function () {
    contextReal.drawImage(canvasObject, 0, 0);
  };
  console.log(
    "redo - currentDataArray: " +
      arrayForRedo.length +
      ", arrayForRedo: " +
      currentDataArray.length
  );
}
