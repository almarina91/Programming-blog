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

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  li = div.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) 
  {
    var aLocal = li[i].getElementsByTagName("a");

    txtValue = aLocal[0].textContent || aLocal[0].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      aLocal[0].style.display = "";
    } else {
      li[i].style.display = "none";
      aLocal[0].style.display = "none";
    }
  }
}