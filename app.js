const weatherApi = {
    key: "aade08d19021b793d388e1208fb66246",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

var coverimg = document.getElementById('img1');
var body_weather = document.getElementById('whb');
var sug = document.getElementById('sugs');






searchInputBox.addEventListener('keypress', (event) => {

    if (event.key == 'Enter') {
        console.log(searchInputBox.value);
        getweatherReport(searchInputBox.value)

        coverimg.style.display = 'none';
        body_weather.style.display = 'block';
        sug.style.display = 'none';

    }

});

function getweatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport, convertIntoK)
}

var originalK = "abcd";
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;


    let minMaxtemp = document.getElementById('min-max');
    minMaxtemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
    const tempT = temperature.innerText;
    


    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('clear_1.jpg')";
    }

    if (weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('cloudy_1.jpg')";
    }

    if (weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('haze_2.jpg')";
    }

    if (weatherType.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('mist_1.jpg')";
    }

    if (weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('rain_1.jpg')";
    }

    if (weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('snow_1.jpg')";
    }
    defa()

    // else{
    //     document.body.style.backgroundImage = "url('bg_2.jpg')";
    // }
}


function defa (){
    let temperature = document.getElementById('temp');
    originalK = temperature.innerHTML;
}

var i = 1;
var k = 2;
var l = 4;

function convertIntoK() {
    let temperature = document.getElementById('temp');

    if (i == 1 && j==1) {
        var currentStr = temperature.innerText;
        var currentT = parseInt(currentStr);
        var Cvalue = currentT + 273.15;

        temperature.innerHTML = `${Math.round(Cvalue)}K`;
        i++;
        k++;
    }
}

var j = 1;

function convertIntoFar() {
    let temperature = document.getElementById('temp');

    if (j == 1 && i==1) {
        var currentStr = temperature.innerText;
        var currentT2 = parseInt(currentStr);
        var Cvalue2 = (currentT2) * 9 / 5 + 32;

        temperature.innerHTML = `${Math.round(Cvalue2)}&deg;F`;
        j++;
        l++;
    }
}

function backtoC() {
    
    let temperature = document.getElementById('temp');

    var nowK = parseInt(originalK);
    var backK = nowK +273.15;
    temperature.innerHTML = `${Math.round(nowK)}&deg;C`;
    if(i==2){
        i--;
    }
    if(j==2){
        j--;
    }
    // var nowStr = temperature.innerText;
    // var nowT = parseInt(nowStr);
    // var backK = nowT +273.15;
    // if(k==3){
    //     temperature.innerHTML = `${Math.round(backK)}K`;
    // }

    // var backF = (nowT - 32)*5/9 +273.15;

    // if(l==5){
    //     temperature.innerHTML = `${Math.round(backF)}K`;
    // }

}

















function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}











