// function dispToggle(objId) {
//     var obj = document.getElementById(objId);
        
//     if (obj.style.display == "none") {
//       obj.style.display = "block";
//     } else {
//       obj.style.display = "none";
//     }
//   }
//   function dispShow(objId) {
//     var obj = document.getElementById(objId);
    
//     obj.style.display = "block";
//   }
//   function dispHidden(objId) {
//     var obj = document.getElementById(objId);
    
//     obj.style.display = "none";
//   }
  
//   function searchID(){
//     var objId = 'search_id';
//     var obj = document.querySelector('#'+objId);
//     // var obj = document.getElementById(objId);
//     var val = obj.value;
    
//     if (val.length > 0) {
//         //표시 
//         document.querySelector('#search_x').style.display = "";
//     } else {
//         //비표시
//         document.querySelector('#search_x').style.display = "none";
//     }
//   }

//   function searchClear() {
//     //x 표시 눌렀을 때 지워
//     var objId = 'search_id';
//     var obj = document.querySelector('#'+objId);
//     //var obj = document.getElementById(objId);
//     obj.value = "";
//     obj.onkeyup();
//   }

//   function movetop() {
//     console.log(1);
//     window.scrollTo(0, 0);
//   }

//   function alert_mag() {
//     alert("준비중입니다");
//   }

//   var stmnLEFT = 10; // 오른쪽여백
//   var stmnGAP1 = 0; // 위쪽여백
//   var stmnGAP2 = 540; //스크롤시 브라우저 위쪽과 떨어지는 거리
//   var stmnBASE = 150; //스크롤 시작위치
//   var stmnActivateSpeed = 10; // 스크롤을 인식하는 딜레이( 숫자가 클수록 느리게 인식)
//   var stmnScrollSpeed = 10; // 스크롤 속도 (클수록 느림)
//   var stmnTimer;

//   function RefreshStaticMenu(){
//     var stmnStartPoint, stmnEndPoint;
//     stmnStartPoint = parseInt(document.getElementById('STATICMENU').style.top,10);
//     stmnEndPoint = Math.max(document.documentElement.scrollTop,document.body.scrollTop) + stmnGAP2;
//     if (stmnEndPoint < stmnGAP1) stmnEndPoint = stmnGAP1;
//     if (stmnStartPoint != stmnEndPoint) {
//       stmnScrollAmount = Math.ceil(Math.abs(stmnEndPoint - stmnStartPoint) / 15);
//       document.getElementById('STATICMENU').style.top = 
//       parseInt(document.getElementById('STATICMENU').style.top, 10) + ((stmnEndPoint < stmnStartPoint) ? -
//       stmnScrollAmount : stmnScrollAmount) + 'px';
//       stmnRefreshTimer = stmnScrollSpeed;
//     }

//     document.getElementById('STATICMENU').style.right = stmnLEFT + (-1 * document.documentElement.scrollLeft) + 'px'; //처음에 오른쪽에 위치
//     stmnTimer = setTimeout("RefreshStaticMenu();", stmnActivateSpeed);
//   }

//   function InitializeStaticMenu(){
//     document.getElementById('STATICMENU').style.right = stmnLEFT + 'px'; //처음에 오른쪽에 위치
//     document.getElementById('STATICMENU').style.top = document.body.scrollTop + stmnBASE +'px';
//     RefreshStaticMenu();
//   }

//  멀티슬라이드 만들기 참고 https://www.youtube.com/watch?v=ZRCYz0VkNn4
// var slides = document.querySelector('.slides'),
//   slide = document.querySelectorAll('.slides li'),
//   currentIdx = 0,
//   slideCount = slide.length,
//   prevBtn = document.querySelector('.prev'),
//   slideWidth = 200,
//   slideMargin = 10,
//   nextBtn = document.querySelector('.next');

//   slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

//   function moveSlide(num){
//     slides.style.left = -num * 210 + 'px';
//     currentIdx = num;
//   }
  
//   nextBtn.addEventListener('click', function(){
//     if(currentIdx < slideCount - 4){
//       moveSlide(currentIdx + 1);
//     }
//   });

//   prevBtn.addEventListener('click', function(){
//     if(currentIdx > 0){
//       moveSlide(currentIdx - 1);
//     } else {
//       moveSlide(currentIdx - 4);
//     }
//   });
