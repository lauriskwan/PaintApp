function vw(percent) {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (percent * w) / 100;
}

function vh(percent) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (percent * h) / 100;
}
const nav = document.querySelector("nav");
const canvasContainer = document.querySelector(".canvas-container")
const canvasReal = document.querySelector("#canvas-real");
const canvasDraft = document.querySelector("#canvas-draft");
const ctxReal = canvasReal.getContext("2d");
const ctxDraft = canvasDraft.getContext("2d");


// --- Resize ---

canvasReal.width = vw(95);
canvasReal.height = window.innerHeight;
canvasDraft.width = vw(95);
canvasDraft.height = window.innerHeight;
canvasContainer.style.width = `${canvasReal.width}px`;
canvasContainer.style.height = `${canvasReal.height}px`;
nav.style.width = `${window.innerWidth - canvasDraft.width}px`;
nav.style.height = `${window.innerHeight}px`;



