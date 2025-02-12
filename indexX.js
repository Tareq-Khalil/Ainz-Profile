// AINZ HIMSELF 
//The Overlord of Death!
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("infoForm");
    const popup = document.getElementById("smallPopup");
    const closePopup = document.querySelector(".close-popup");
  
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        popup.style.display = "block"; 
    });
  
    closePopup.addEventListener("click", function() {
        popup.style.display = "none"; 
    });
  
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none"; 
        }
    });
  });