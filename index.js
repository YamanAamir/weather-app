
function mainFun() {

    let city = document.getElementById("getCity").value
    // var cLat
    // var cLon
    // navigator.geolocation.getCurrentPosition((location) => {
    //     cLat = location.coords.latitude
    //     cLon = location.coords.longitude
    //     console.log(cLat, cLon)
    //     console.log(location)
    // })
    let weatherHead = document.getElementById("wHead")
    let div1 = document.getElementById("div1")
    let div2 = document.getElementById("div2")
    let div3 = document.getElementById("div3")
    let div4 = document.getElementById("div4")
    let div5 = document.getElementById("div5")
    let div6 = document.getElementById("div6")
    let div7 = document.getElementById("div7")
    let div8 = document.getElementById("div8")
    let div9 = document.getElementById("div9")
    let main = document.getElementById("main")
    let bgImg = document.getElementById("bg-wpic")
    let wPic = document.getElementById("wPic")
    let foot = document.getElementById("foot")

    async function getData(cLat, cLon) {
        try {

            document.getElementById("loader").style.display = "block"
            // bgImg.setAttribute("src", "assets/loader.gif")
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?&appid=232649f47ca799275342fab1ed4ca4b4&q=${city}&units=metric`
            )
            const data = await response.json()
            return data
        } catch (err) {
            console.log(err)
        }
    }
    getData()
            .then((data) => {
            console.log(data)

            if (data.cod === "404") {
                swal("Error!", "Invaild City Name", "error");
                setTimeout(() => {
                    document.location.reload();
                }, 1000);
            }

            document.getElementById("loader").style.display = "none"
            main.style.display = 'block'
            foot.style.display = 'block'
            document.getElementById("getCity").value = ''
            var des = data.weather[0].description
            var newDes = des.slice(0, 1).toUpperCase() + des.slice(1).toLowerCase()
            var sunRise = data.sys.sunrise;
            var sunSet = data.sys.sunset;
            var dateGet = new Date().toDateString();
            var timeGet = new Date().toLocaleTimeString()
            var temp = Math.round(data.main.temp);
            var wind_speed = data.wind.speed;
            var humidity = data.main.humidity;
            var tem_fr_con = Math.round((temp * 1.8) + 32)
            var visibility = data.visibility / 1000;
            var pressure = data.main.pressure;
            var wId = data.weather[0].id

            weatherHead.innerHTML = `<h1>${newDes}</h1>`
            div2.innerHTML = `<h1>${data.name}</h1><span><h5><i class="fa fa-calendar-o" aria-hidden="true"></i>&nbsp ${dateGet}</h5></span><span><h5><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp; ${timeGet}</h5></span>`
            div3.innerHTML = `<h1>Temperature in <sup>o</sup>C</h1> <span><h3><i class="fa-solid fa-temperature-three-quarters"></i> ${temp}<sup>o</sup>C</h3></span>`
            div4.innerHTML = `<h1> Wind Speed</br></h1><h3><i class="fa fa-wind" aria-hidden="true"></i> &nbsp${wind_speed} km/h</h3>`
            div5.innerHTML = `<h1>Humidity</h1><h3> <i class="fa fa-tint" aria-hidden="true"></i> &nbsp${humidity}% </h3> `
            div6.innerHTML = `<h1>Temperature in <sup>o</sup>F</h1> <span><h3><i class="fa-solid fa-temperature-three-quarters"></i> ${tem_fr_con}<sup>o</sup>F</h3></span>`
            div7.innerHTML = `<h1>Sunrise</h1><h4><i class="fa-regular fa-sun"></i> &nbsp ${new Date(sunRise).toISOString().slice(11, 19)} am</h4> <h1>Sunset</h1><h4><i class="fa-regular fa-moon"></i> &nbsp ${new Date(sunSet).toISOString().slice(11, 19)} am</h4>`
            div8.innerHTML = `<h1>Visiblity</h1> <h3><i class="fa fa-cloud" aria-hidden="true"></i>
            &nbsp;${visibility} km/h</h3>`
            div9.innerHTML = `<h1>Pressure</h1><h3><i class="fa fa-glass" aria-hidden="true"></i>
            &nbsp;${pressure} atm</h3>`



            if (wId >= 200 && wId <= 232) {
                bgImg.setAttribute("src", "assets/thunderstorm-bg.jpg")
                wPic.setAttribute("src", "assets/thunderstorm.png")
            }
            else if (wId >= 300 && wId <= 321) {
                bgImg.setAttribute("src", "assets/drizzle-bg.jpg")
                wPic.setAttribute("src", "assets/drizzle.png")
            }
            else if (wId >= 500 && wId <= 531) {
                bgImg.setAttribute("src", "assets/rainy-day-bg.jpeg")
                wPic.setAttribute("src", "assets/rainy-day.png")
            }
            else if (wId >= 600 && wId <= 622) {
                bgImg.setAttribute("src", "assets/snowflake-bg.jpg")
                wPic.setAttribute("src", "assets/snowflake.png")
            }
            else if (wId == 701) {
                bgImg.setAttribute("src", "assets/mist-bg.jpg")
                wPic.setAttribute("src", "assets/mist.png")
            }
            else if (wId == 711) {
                bgImg.setAttribute("src", "assets/smoke-bg.jpg")
                wPic.setAttribute("src", "assets/smoke.png")
            }
            else if (wId == 721) {
                bgImg.setAttribute("src", "assets/clear-sky-bg.jpg")
                wPic.setAttribute("src", "assets/clear-sky.png")
            }
            else if (wId == 731) {
                bgImg.setAttribute("src", "assets/sand-bg.jpg")
                wPic.setAttribute("src", "assets/sand.png")
            }
            else if (wId == 800) {
                bgImg.setAttribute("src", "assets/clear-sky-bg.jpg")
                wPic.setAttribute("src", "assets/clear-sky.png")
            }
            else if (wId >= 801 || wId <= 804) {
                bgImg.setAttribute("src", "assets/cloudy-bg.jpg")
                wPic.setAttribute("src", "assets/cloudy.png")
            }


        })
        .catch((err) => {
            console.log(err)

        })
}
document.getElementById("fetchButton").addEventListener("click", mainFun)