var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=1c9b853fa87915953deaa391681d4b13"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

// 현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city) {
    var dataObj
    var openWeatherAPI = url

    $.ajax({
        type: "GET", /* 서버에 get방식으로 요청을 함 */
        url: openWeatherAPI += city,
        dataType: "json", /* 받아올 데이터 타입 */
        async: false, /* async(비동기)가 디폴트지만 false를 줘서 동기로 변경(결과 데이터를 리턴시키기 위해)  */
        success: function(data) { /* API call 성공할 때 */
            // console.log(data.wind.speed)
            // console.log(data.dt)
            // console.log(data.weather[0].icon)
            // console.log(data);
            // 정상 응답시 처리작업
            dataObj = data;
        },
        error: function(requset, status, error) { /* API call 실패할 때 */
            //응답 에러시 처리 작업    
            // console.log(request, status, error);
        },
    })
    return dataObj;    
}

// 지역별 현재 온도 얻어오기
function getCurrentTemp(city) {
    var temp = {};
    var openWeatherAPI = url;
    $.ajax({
        type: "GET", 
        url: openWeatherAPI += city,
        dataType: "json", 
        async: false, 
        success: function(data) { 
            temp.celsius = (data.main.temp).toFixed(0); /* 온도 */
            temp.icon = data.weather[0].icon; /* 아이콘 */      
        },
        error: function(requset, status, error) { 
            // console.log(request, status, error);
        },
    })
    console.log(temp);
    return temp;
}
getCurrentTemp();

