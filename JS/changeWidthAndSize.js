const penRangeContainer = document.querySelector("#penRangeContainer");
const brushRangeContainer = document.querySelector("#brushRangeContainer");
const sprayRangeContainer = document.querySelector("#sprayRangeContainer");
const lineRangeContainer = document.querySelector("#lineRangeContainer");
const bCurveRangeContainer = document.querySelector("#bCurveRangeContainer");
const eraserRangeContainer = document.querySelector("#eraserRangeContainer");
const textRangeContainer = document.querySelector("#textRangeContainer");

const penRange = document.querySelector("#penRange");
const brushRange = document.querySelector("#brushRange");
const sprayRange = document.querySelector("#sprayRange");
const lineRange = document.querySelector("#lineRange");
const bCurveRange = document.querySelector("#bCurveRange");
const eraserRange = document.querySelector("#eraserRange");
const textRange = document.querySelector("#textRange");

function changePenWidth() {
  $(`#brushRangeContainer`).hide();
  $(`#sprayhRangeContainer`).hide();
  $(`#lineRangeContainer`).hide();
  $(`#bCurveRangeContainer`).hide();
  $(`#eraserRangeContainer`).hide();
  $(`#textRangeContainer`).hide();
  $(`#penRangeContainer`).show();
  $(`#penRangeContainer`).css("display", "flex"); // without css it returns display: block

  penRange.addEventListener("change", function () {
    currentPenLineWidth = penRange.value;
  });
}

function changeBrushSize() {
  $(`#brushRangeContainer`).hide();
  $(`#sprayRangeContainer`).hide();
  $(`#lineRangeContainer`).hide();
  $(`#bCurveRangeContainer`).hide();
  $(`#eraserRangeContainer`).hide();
  $(`#penRangeContainer`).hide();
  $(`#textRangeContainer`).hide();
  $(`#brushRangeContainer`).show();
  $(`#brushRangeContainer`).css("display", "flex");

  brushRange.addEventListener("change", function () {
    currentBrushSize = brushRange.value;
  });
}

function changeSprayArea() {
  $(`#brushRangeContainer`).hide();
  $(`#lineRangeContainer`).hide();
  $(`#bCurveRangeContainer`).hide();
  $(`#eraserRangeContainer`).hide();
  $(`#penRangeContainer`).hide();
  $(`#textRangeContainer`).hide();
  $(`#sprayRangeContainer`).show();
  $(`#sprayRangeContainer`).css("display", "flex");

  sprayRange.addEventListener("change", function () {
    currentSprayArea = sprayRange.value;
  });
}

function changeLineWidth() {
  $(`#brushRangeContainer`).hide();
  $(`#bCurveRangeContainer`).hide();
  $(`#eraserRangeContainer`).hide();
  $(`#penRangeContainer`).hide();
  $(`#sprayRangeContainer`).hide();
  $(`#textRangeContainer`).hide();
  $(`#lineRangeContainer`).show();
  $(`#lineRangeContainer`).css("display", "flex");

  lineRange.addEventListener("change", function () {
    currentLineWidth = lineRange.value;
  });
}

function changeBCurveWidth() {
  $(`#brushRangeContainer`).hide();
  $(`#eraserRangeContainer`).hide();
  $(`#penRangeContainer`).hide();
  $(`#sprayRangeContainer`).hide();
  $(`#lineRangeContainer`).hide();
  $(`#textRangeContainer`).hide();
  $(`#bCurveRangeContainer`).show();
  $(`#bCurveRangeContainer`).css("display", "flex");

  bCurveRange.addEventListener("change", function () {
    currentBCurveWidth = bCurveRange.value;
  });
}

function changeEraserSize() {
  $(`#brushRangeContainer`).hide();
  $(`#textRangeContainer`).hide();
  $(`#penRangeContainer`).hide();
  $(`#sprayRangeContainer`).hide();
  $(`#lineRangeContainer`).hide();
  $(`#bCurveRangeContainer`).hide();
  $(`#eraserRangeContainer`).show();
  $(`#eraserRangeContainer`).css("display", "flex");

  eraserRange.addEventListener("change", function () {
    currentEraserSize = eraserRange.value;
  });
}

function changeTextSize() {
  $(`#penRangeContainer`).hide();
  $(`#brushRangeContainer`).hide();
  $(`#sprayhRangeContainer`).hide();
  $(`#lineRangeContainer`).hide();
  $(`#bCurveRangeContainer`).hide();
  $(`#eraserRangeContainer`).hide();
  $(`#textRangeContainer`).show();
  $(`#textRangeContainer`).css("display", "flex"); // without css it returns display: block

  textRange.addEventListener("change", function () {
    currentTextSize = textRange.value;
    console.log(currentTextSize)
  });
}

function hideSize() {
  $(`#brushRangeContainer`).hide();
  $(`#eraseRangeContainer`).hide();
  $(`#penRangeContainer`).hide();
  $(`#sprayRangeContainer`).hide();
  $(`#lineRangeContainer`).hide();
  $(`#bCurveRangeContainer`).hide();
  $(`#eraserRangeContainer`).hide();
}
