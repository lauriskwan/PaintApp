$(() => {
  currentFunction = new Pen(contextReal); // Default drawing tool
  $("#pen").click(() => {
    currentFunction = new Pen(contextReal);
    changePenWidth();
  });

  $("#brush").click(() => {
    currentFunction = new Brush(contextReal);
    changeBrushSize();
  });

  $("#spray").click(() => {
    currentFunction = new Spray(contextReal);
    changeSprayArea();
  });

  $("#line").click(() => {
    currentFunction = new DrawingLine(contextReal, contextDraft);
    changeLineWidth();
  });

  $("#bezierCurve").click(() => {
    currentFunction = new BezierCurve(contextReal, contextDraft);
    changeBCurveWidth();
  });

  $("#bezierCurve").mouseover(function () {
    $("#toolExplain").html(
      `Bézier curve tool <br><br> Click and drag to draw a straight line, then adjust the curve by dragging the circle at the middle of the line.`
    );

    $(this).mouseleave(function () {
      $("#toolExplain").html("");
    });
  });

  $("#rectangle").click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
    // hideSize();
  });

  $("#ellipse").click(() => {
    currentFunction = new DrawingEllipse(contextReal, contextDraft);
    // hideSize();
  });

  $("#triangle").click(() => {
    currentFunction = new DrawingTriangle(contextReal, contextDraft);
    // hideSize();
  });

  $("#eraser").click(() => {
    currentFunction = new Eraser(contextReal, contextDraft);
    changeEraserSize();
  });

  $("#insertText").click(function () {
    currentFunction = new insertText(contextReal, contextDraft);
    changeTextSize();
  });

  $("#undo").click(() => {
    undo();
  });

  $("#redo").click(() => {
    redo();
  });

  $("#clear").click(() => {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    saveCurrent();
  });

  $("#save").click(() => {
    var link = document.getElementById("link");
    link.setAttribute("download", "CanvasProject.png");
    link.setAttribute(
      "href",
      canvasReal
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    link.click();
  })
});
