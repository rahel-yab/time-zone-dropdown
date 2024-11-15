function alertColor(event) {
  if (event.target.value == "red") {
    alert("❤️");
  } else if (event.target.value == "yellow") {
    alert("💛");
  } else if (event.target.value == "blue") {
    alert("💙");
  }
}
let color = document.querySelector("#colors");
color.addEventListener("change", alertColor);
