//
// HOVER EFFECT -------------------------
//

// $('.color-button').mouseover(function() {
//   $(`#${event.target.id}`).animate({width: '35px', height: '35px'}, 80, 'linear');
// })

// $('.color-button').mouseleave(function() {
//   $(`#${event.target.id}`).animate({width: '30px', height: '30px'}, 80, 'linear');
// })

//
// COLOR PICKER -------------------------
//

// $('#color-picker').mouseover(function() {
//   $('.fa-palette').slideUp()
//   $('.color-button').slideDown()
//   $('#color-picker').animate({height: "300px", width: "50px"}, 300)
//   $('#color-picker').css('box-shadow', '0px 0px 40px -15px rgba(0,0,0,0.20)')

// })

// $('#color-picker').mouseleave(function() {
//   $('.fa-palette').slideDown()
//   $('.color-button').slideUp()
//   $('#color-picker').animate({height: "50px", width: "50px"}, 300)
//   $('#color-picker').css('box-shadow', '0px 0px 40px -15px rgba(0,0,0,0.60)')
// })

//
// SELECTING COLOR -------------------------
//

var currentColor = "Black";

// var colorButtons = document.getElementsByClassName("color-button")

// var colorCodes = ["#DC143C", "#FF4500", "#3CB371", "#4169E1", "#8B008B"]

// for (var i = 0; i < colorButtons.length; i++) {
//   colorButtons[i].click(function() {
//     currentColor = colorCodes[i];
//     console.log(colorCodes[i])
//   })
// }

$("#color-button-red").click(function () {
  currentColor = "#DC143C";
  // $(this).css('border-style', 'double')
});

$("#color-button-orange").click(function () {
  currentColor = "#FF4500";
  // $(this).css('border-style', 'double')
});

$("#color-button-green").click(function () {
  currentColor = "#3CB371";
  // $(this).css('border-style', 'double')
});

$("#color-button-blue").click(function () {
  currentColor = "#4169E1";
  // $(this).css('border-style', 'double')
});

$("#color-button-purple").click(function () {
  currentColor = "#8B008B";
  // $(this).css('border-style', 'double')
});

$("#color-button-black").click(function () {
  currentColor = "#000";
  // $(this).css('border-style', 'double')
});

$("#color-button-yellow").click(function () {
  currentColor = "#FFFF00";
  // $(this).css('border-style', 'double')
});
