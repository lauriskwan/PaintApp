var currentColor = "#000000";
const colorCode = document.querySelector(`input[type=color]`);

colorCode.addEventListener("change", function () {
  console.log(colorCode.value);
  currentColor = `${colorCode.value}`;
});
