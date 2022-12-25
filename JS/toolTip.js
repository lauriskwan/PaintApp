$("#paintTool").mouseover(function () {
  $("#toolExplain").html(`Paint tool selector <br><br> Select a paint tool on the right.`);

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#pen").mouseover(function () {
  $("#toolExplain").html(`Pen tool <br><br> Use to draw thin and sharp line.`);

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#brush").mouseover(function () {
  $("#toolExplain").html(
    `Brush tool <br><br> Gently drag to draw a smooth brush stroke.`
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#spray").mouseover(function () {
  $("#toolExplain").html(
    `Spray tool <br><br> Spray continuously to fill the sprayed area.`
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#LS").mouseover(function () {
  $("#toolExplain").html(
    `Line & shape selector <br><br> Select a line or shape tool on the right.`
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#line").mouseover(function () {
  $("#toolExplain").html(
    `Straight line tool <br><br> Click and drag to draw a straight line.`
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#rectangle").mouseover(function () {
  $("#toolExplain").html(
    `Rectangle tool <br><br> Click to assign the starting point of a new rectangle and drag for its width and height.`
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#ellipse").mouseover(function () {
  $("#toolExplain").html(
    `Ellipse tool <br><br> Click to assign the center of a new ellipse and drag for its radius.`
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#triangle").mouseover(function () {
  $("#toolExplain").html(
    `Triangle tool <br><br> Click to assign the starting point of a new triangle and drag for its width and height.`
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#paletteIcon").mouseover(function () {
  $("#toolExplain").html(
    `Color picker <br><br> Click the circle button with the white border on the right to select color.`
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#colorPicker").mouseover(function () {
  $("#toolExplain").html(
    `Color picker <br><br> Click to select color.`
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#eraser").mouseover(function () {
  $("#toolExplain").html(`Eraser <br><br> Erase the unwanted work with a eraser brush.`);

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#insertText").mouseover(function () {
  $("#toolExplain").html(
    `Textbox <br><br> Click on a desired point to insert a textbox. <br>Press "Enter" to print input.`
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#fill").mouseover(function () {
  $("#toolExplain").html(
    "Coming soon..."
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#fill").mouseover(function () {
  $("#toolExplain").html("Coming soon...");

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#undo").mouseover(function () {
  $("#toolExplain").html("Undo <br><br> Made mistakes? We've got you covered. <br>Click to undo a step.");

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#redo").mouseover(function () {
  $("#toolExplain").html(
    "Redo <br><br> Made an undo mistake? <br>We've also got you covered. <br>Click to undo an undo."
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#clear").mouseover(function () {
  $("#toolExplain").html(
    "Clear <br><br>Click to dispose current work."
  );

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});

$("#save").mouseover(function () {
  $("#toolExplain").html("Save <br><br>Happy with your work? <br>Now save it in your device! <br>Click to download.");

  $(this).mouseleave(function () {
    $("#toolExplain").html("");
  });
});