document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("change");
  
    button.addEventListener("click", function() {
      var currentColor = button.style.backgroundColor;
      if (currentColor === "red") {
        button.style.backgroundColor = ""; 
      } else { 
        button.style.backgroundColor = "red";
      }
    });
  });
  

