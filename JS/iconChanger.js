// --- Changing paint tool icon

let currentPaintIcon = "fa-solid fa-pen";
let currentLSIcon = "fa-solid fa-shapes";

$("#pen").click(function () {
  $("#paintTool").removeClass(currentPaintIcon);
  currentPaintIcon = "fa-solid fa-pen";
  $("#paintTool").addClass(currentPaintIcon);
  $("#LS").removeClass(currentLSIcon);
  currentLSIcon = "fa-solid fa-shapes";
  $("#LS").addClass(currentLSIcon);
});

$("#brush").click(function () {
  $("#paintTool").removeClass(currentPaintIcon);
  currentPaintIcon = "fa-solid fa-paintbrush";
  $("#paintTool").addClass(currentPaintIcon);
  $("#LS").removeClass(currentLSIcon);
  currentLSIcon = "fa-solid fa-shapes";
  $("#LS").addClass(currentLSIcon);
});

$("#spray").click(function () {
  $("#paintTool").removeClass(currentPaintIcon);
  currentPaintIcon = "fa-solid fa-spray-can";
  $("#paintTool").addClass(currentPaintIcon);
  $("#LS").removeClass(currentLSIcon);
  currentLSIcon = "fa-solid fa-shapes";
  $("#LS").addClass(currentLSIcon);
});

// --- Changing lines and shapes icon

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

$("#ellipse").click(function () {
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


// ---

$("#eraser").click(function () {
  $("#LS").removeClass(currentLSIcon);
  currentLSIcon = "fa-solid fa-shapes";
  $("#LS").addClass(currentLSIcon);
});

$("#insertText").click(function () {
  $("#LS").removeClass(currentLSIcon);
  currentLSIcon = "fa-solid fa-shapes";
  $("#LS").addClass(currentLSIcon);
});