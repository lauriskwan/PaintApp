$(document).ready(function () {
  setTimeout(function () {
    $(".loader").css("opacity", "0");
  }, 1200);
  setTimeout(function () {
    $(".loader").css("display", "none");
  }, 1800);
});

penRange.addEventListener("change", function () {  // without this, penWidth cannot be changed when canvas first being initiated
  currentPenLineWidth = penRange.value;
});
