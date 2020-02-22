// Open the full screen search box 
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  // Close the full screen search box 
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
    
  }

  function sendMessage() {
    document.getElementById("myOverlayMessage").style.display = "block";
  }

  function closeMessage() {
    document.getElementById("myOverlayMessage").style.display = "none";
  }

  function sendMail() {
    var link = "mailto:grujic.nikola91@gmail.com"
             + "?cc="
             + "&subject=" + escape("Blog message")
             + "&body=" + escape(document.getElementById('message').value);

    window.location.href = link;
}