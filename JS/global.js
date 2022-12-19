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

const canvasContainer = document.querySelector(".canvas-container")
const canvasReal = document.querySelector("#canvas-real");
const canvasDraft = document.querySelector("#canvas-draft");
const ctxReal = canvasReal.getContext("2d");
const ctxDraft = canvasDraft.getContext("2d");


// --- Sizing ---

const fullWidth = window.innerWidth;

canvasReal.width = vw(95);
canvasReal.height = window.innerHeight;
canvasDraft.width = vw(95);
canvasDraft.height = window.innerHeight;
canvasContainer.style.width = `${canvasReal.width}px`;
canvasContainer.style.height = `${canvasReal.height}px`;
canvasContainer.style.marginLeft = `${fullWidth - canvasReal.width}px`;


// --- Layout ---

{
  let sideBar = document.querySelector(".side-bar");
  let arrowCollapse = document.querySelector("#logo-name__icon");
  sideBar.onclick = () => {
    sideBar.classList.toggle("collapse");
    arrowCollapse.classList.toggle("collapse");
    if (arrowCollapse.classList.contains("collapse")) {
      arrowCollapse.classList =
        "bx bx-arrow-from-left logo-name__icon collapse";
    } else {
      arrowCollapse.classList = "bx bx-arrow-from-right logo-name__icon";
    }
    if (sideBar.classList.contains("collapse")) {
      sideBar.style.width = `${fullWidth - canvasReal.width}px`;
    } else {
      sideBar.style.width = "350px";
    }
  };
}




