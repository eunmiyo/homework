function dispToggle(objId) {
    var obj = document.getElementById(objId);
        
    if (obj.style.display == "none") {
      obj.style.display = "block";
    } else {
      obj.style.display = "none";
    }
  }
  function dispShow(objId) {
    var obj = document.getElementById(objId);
    
    obj.style.display = "block";
  }
  function dispHidden(objId) {
    var obj = document.getElementById(objId);
    
    obj.style.display = "none";
  }
  
  function seachID(){
    var objId = 'search_id';
    var obj = document.querySelector('#'+objId);
    //var obj = document.getElementById(objId);
    var val = obj.value;
    
    if (val.length > 0) {
        //표시 
        document.querySelector('#search_x').style.display ="block";
    } else {
        //비표시
        document.querySelector('#search_x').style.display ="none";
    }
  }

  function searchClear() {
    //x 표시 눌렀을 때 지워줘
    var objId = 'search_id';
    var obj = document.querySelector('#'+objId);
    //var obj = document.getElementById(objId);
    obj.value = "";
    obj.onkeypress();
  }

  function movetop() {
    window.scrollTo(0, 0);
  }
