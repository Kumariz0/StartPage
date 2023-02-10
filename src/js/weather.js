// Weather ⛅
// Read the documentation for setting the weather API key
function weather() {
    
    const apiKey = "48d85e8017df528d1e1f46d9cf1e578b";
    const lat = getCookie("lat");
    const lon = getCookie("long");
    const units = "metric";
    
    // ----- DON'T TOUCH ANYTHING BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING
    {
        var weatherEl = document.getElementById("weatherDesc");
        var tempEl = document.getElementById("temp");
    
        var apiLink =
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lat +
            "&lon=" +
            lon +
            "&units=" +
            units +
            "&appid=" +
            apiKey;
        console.log(apiLink);
        // grabs json data from url, thanks https://stackoverflow.com/a/35970894
        var getJSON = function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "json";
            xhr.onload = function () {
                var status = xhr.status;
                if (status === 200) {
                    callback(null, xhr.response);
                } else {
                    callback(status, xhr.response);
                }
            };
            xhr.send();
        };
    
        // gets city name from weather api
        getJSON(apiLink, function (err, data) {
            if (err !== null) {
                weatherEl.innerText = "";
                tempEl.innerText = "";
            } else {
                var city = data.name;
                var temp = data.main.temp;
                var hiTemp = data.main.temp_max;
                var loTemp = data.main.temp_min;
                var weatherDesc = data.weather[0].description;
                weatherEl.innerHTML = weatherDesc + " in " + city;
                tempEl.innerHTML =
                    "h: " + hiTemp + "°C / c: " + temp + "°C / l: " + loTemp + "°C";
            }
        });
    }
    
}