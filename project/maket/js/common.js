function dispToggle(Menus) {
    var obj = document.getElementById('#Menus');
        
    if (obj.style.display == "none") {
      obj.style.display = "block";
    } else {
      obj.style.display = "none";
    }
  }
  function dispShow(Submenu) {
    var obj = document.getElementById('#Submenu');
    
    obj.style.display = "block";
  }
  function dispHidden(Submenu) {
    var obj = document.getElementById('#Submenu');
    
    obj.style.display = "none";
  }


