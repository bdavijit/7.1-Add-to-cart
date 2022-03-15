
var InputField = document.getElementById("InputField");
var button = document.getElementById("button-addon2");

// Execute a function when the user releases a key on the keyboard
InputField.addEventListener("keyup", function(event) {
    // console.log(event.key);
  
  // Number 13 is the "Enter" key on the keyboard
  if (event.key === "Enter") {
 
    // Trigger the button element with a click
    button.click();
  }
});