// --- Changing paint tool icon

let currentPaintIcon = "fa-solid fa-pen";

$("#pen").click(function () {
  $("#paintTool").removeClass(currentPaintIcon);
  currentPaintIcon = "fa-solid fa-pen";
  $("#paintTool").addClass(currentPaintIcon);
});

$("#brush").click(function () {
  $("#paintTool").removeClass(currentPaintIcon);
  currentPaintIcon = "fa-solid fa-paintbrush";
  $("#paintTool").addClass(currentPaintIcon);
});

$("#spray").click(function () {
  $("#paintTool").removeClass(currentPaintIcon);
  currentPaintIcon = "fa-solid fa-spray-can";
  $("#paintTool").addClass(currentPaintIcon);
});



// --- Changing lines and shapes icon

let currentLSIcon = "fa-solid fa-shapes";

$("#line").click(function () {
  $("#LS").removeClass(currentLSIcon);
  currentLSIcon = "fa-solid fa-minus";
  $("#LS").addClass(currentLSIcon);
});

$("#bezierCurve").click(function () {
  $("#LS").removeClass(currentLSIcon);
  currentLSIcon = "fa-solid fa-bezier-curve";
  $("#LS").addClass(currentLSIcon);
});

$("#circle").click(function () {
  $("#LS").removeClass(currentLSIcon);
  currentLSIcon = "fa-solid fa-circle";
  $("#LS").addClass(currentLSIcon);
});

$("#rectangle").click(function () {
  $("#LS").removeClass(currentLSIcon);
  currentLSIcon = "fa-solid fa-square";
  $("#LS").addClass(currentLSIcon);
});

$("#triangle").click(function () {
  $("#LS").removeClass(currentLSIcon);
  currentLSIcon = "fa-solid fa-play";
  $("#LS").addClass(currentLSIcon);
});

