// 1. 배너 슬라이더
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 800
  });

  // 4컷 슬라이드

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 하위메뉴
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
  
  // 검색어 
  function searchID(){
    var objId = 'search_id';
    var obj = document.querySelector('#'+objId);
    // var obj = document.getElementById(objId);
    var val = obj.value;
    
    if (val.length > 0) {
        //표시 
        document.querySelector('#search_x').style.display = "";
    } else {
        //비표시
        document.querySelector('#search_x').style.display = "none";
    }
  }

  function searchClear() {
    //x 표시 눌렀을 때 지워
    var objId = 'search_id';
    var obj = document.querySelector('#'+objId);
    //var obj = document.getElementById(objId);
    obj.value = "";
    obj.onkeyup();
  }

  // 상단페이지이동
  function movetop() {
    console.log(1);
    window.scrollTo(0, 0);
  }

  // a태그 주소 경고창 띄우기
  function alert_mag() {
    alert("준비중입니다");
  }

  // 스크롤 이동시 따라가는 이미지 
  var stmnLEFT = 10; // 오른쪽여백
  var stmnGAP1 = 0; // 위쪽여백
  var stmnGAP2 = 540; //스크롤시 브라우저 위쪽과 떨어지는 거리
  var stmnBASE = 150; //스크롤 시작위치
  var stmnActivateSpeed = 10; // 스크롤을 인식하는 딜레이( 숫자가 클수록 느리게 인식)
  var stmnScrollSpeed = 10; // 스크롤 속도 (클수록 느림)
  var stmnTimer;

  function RefreshStaticMenu(){
    var stmnStartPoint, stmnEndPoint;
    stmnStartPoint = parseInt(document.getElementById('STATICMENU').style.top,10);
    stmnEndPoint = Math.max(document.documentElement.scrollTop,document.body.scrollTop) + stmnGAP2;
    if (stmnEndPoint < stmnGAP1) stmnEndPoint = stmnGAP1;
    if (stmnStartPoint != stmnEndPoint) {
      stmnScrollAmount = Math.ceil(Math.abs(stmnEndPoint - stmnStartPoint) / 15);
      document.getElementById('STATICMENU').style.top = 
      parseInt(document.getElementById('STATICMENU').style.top, 10) + ((stmnEndPoint < stmnStartPoint) ? -
      stmnScrollAmount : stmnScrollAmount) + 'px';
      stmnRefreshTimer = stmnScrollSpeed;
    }

    document.getElementById('STATICMENU').style.right = stmnLEFT + (-1 * document.documentElement.scrollLeft) + 'px'; //처음에 오른쪽에 위치
    stmnTimer = setTimeout("RefreshStaticMenu();", stmnActivateSpeed);
  }

  function InitializeStaticMenu(){
    document.getElementById('STATICMENU').style.right = stmnLEFT + 'px'; //처음에 오른쪽에 위치
    document.getElementById('STATICMENU').style.top = document.body.scrollTop + stmnBASE +'px';
    RefreshStaticMenu();
  }