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

const fullWidth = window.innerWidth;
const canvasContainer = document.querySelector(".canvas-container");

canvasReal.width = vw(95);
canvasReal.height = window.innerHeight;
canvasDraft.width = vw(95);
canvasDraft.height = window.innerHeight;
canvasContainer.style.width = `${canvasReal.width}px`;
canvasContainer.style.height = `${canvasReal.height}px`;
canvasContainer.style.marginLeft = `${fullWidth - canvasReal.width}px`;

// --- Sizing the collapsed side bar ---

let sideBar = document.querySelector(".side-bar");
let triggerOpen = document.querySelectorAll(".triggerOpen");
let triggerCollapse = document.querySelectorAll(".triggerCollapse");
let arrowCollapse = document.querySelector("#title__icon");
let selectPalette = document.querySelector("#palette");

for (let i of triggerOpen) {
  i.onclick = () => {
    if (sideBar.classList.contains("collapse")) {
      sideBar.classList.remove("collapse");
      arrowCollapse.classList.remove("collapse");
      if (arrowCollapse.classList.contains("collapse")) {
        arrowCollapse.classList =
          "fa-solid fa-caret-right title__icon collapse";
      } else {
        arrowCollapse.classList = "fa-solid fa-caret-left title__icon";
      }
      if (sideBar.classList.contains("collapse")) {
        sideBar.style.width = `${fullWidth - canvasReal.width}px`;
      } else {
        sideBar.style.width = "350px";
      }

      $(".tooltip").css("display", "none");
      setTimeout(() => {
        $(".tooltip").css("display", "unset");
      }, 500);
    }
  };
}

for (let i of triggerCollapse) {
  i.onclick = () => {
    if (sideBar.classList.contains("collapse")) {
      return;
    } else {
      sideBar.classList.add("collapse");
      arrowCollapse.classList.add("collapse");
      if (arrowCollapse.classList.contains("collapse")) {
        arrowCollapse.classList =
          "fa-solid fa-caret-right title__icon collapse";
      } else {
        arrowCollapse.classList = "fa-solid fa-caret-left title__icon";
      }
      if (sideBar.classList.contains("collapse")) {
        sideBar.style.width = `${fullWidth - canvasReal.width}px`;
      } else {
        sideBar.style.width = "350px";
      }

      $(".tooltip").css("display", "none");
      setTimeout(() => {
        $(".tooltip").css("display", "unset");
      }, 500);
    }
  };
}

arrowCollapse.onclick = () => {
  $("#toolExplain").html("");
  setTimeout(() => {
    $(".title__name").html("<h3>HAVE FUN!</h3>");
  }, 500);
  sideBar.classList.toggle("collapse");
  arrowCollapse.classList.toggle("collapse");
  if (arrowCollapse.classList.contains("collapse")) {
    arrowCollapse.classList = "fa-solid fa-caret-right title__icon collapse";
  } else {
    arrowCollapse.classList = "fa-solid fa-caret-left title__icon";
  }
  if (sideBar.classList.contains("collapse")) {
    sideBar.style.width = `${fullWidth - canvasReal.width}px`;
  } else {
    sideBar.style.width = "350px";
  }

  $(".tooltip").css("display", "none");
  setTimeout(() => {
    $(".tooltip").css("display", "unset");
  }, 500);
};
