import { checkName } from "./checkName";
import { currentDate } from "./currentDate";
import { dayDiffCheck } from "./dayDiffCheck";
import { pixabayApi } from "./pixabayApi";
import { getCityData } from "./getCityData";
import { weatherbitApi } from "./weatherbitApi";

/* Global Variables  */
const geoNamesURL = 'http://api.geonames.org/searchJSON?';
const username = "omarr_shaheeen"; // put it in env file

// const weatherbitApiKey = "9724fd8f861241848ed47ffc0ff7998c";
const weatherbitApiReqURL = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';

const dep = document.getElementById("date_start").value
const ret = document.getElementById("date_end").value

const allData = {}
const currentDatee = currentDate()

// Instead of Converting Temperature from Kelvin to Celsius or Fahrenheit use: 
// &units=imperial is for Fahrenheit (or)
// &units=metric is for Celcius.



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
const generateBtn = document.getElementById('button_search');
generateBtn.addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    // This is going to stop any action occurred in the button 
    e.preventDefault();

    //get user input
    const dest = document.getElementById('desName').value
    console.log("The Destination: ", dest)

    const dep = document.getElementById("date_start").value
    const dayDiff = dayDiffCheck(currentDatee, dep)
    allData.dayDiff = dayDiff
    console.log("dayDiffffffffff: ", dayDiff)
    console.log("all data object", allData)

    // let diff = Date.parse(dep)-Date.parse(newDate)
    // let msInDay = 1000 * 3600 * 24

    // console.log("Ya rabb", diff/msInDay)

    // console.log("Type of Dep", typeof (parseInt(dep)))
    // console.log("Type of Dep", parseInt(dep))
    // console.log("Type of New Date", typeof (parseInt(newDate)))

    // const tripTime = (parseInt(dep) - parseInt(newDate))
    // console.log("Trip Time Left: ", tripTime)
    // const timestampNow = (Date.now()) / 1000;


    // const timestamp = (new Date(dep).getTime()) / 1000;
    // console.log("The Time Stamp:", timestamp)

    // const daysLeft = Math.round((timestamp - timestampNow) / 86400);
    // console.log("Days Left: ",daysLeft)

    if (checkName(dest)) {
        alert("A valid name");
        getCityData(geoNamesURL, dest, username)
            .then(cityData => {
                allData.cityLat = cityData.geonames[0].lat;
                allData.cityLong = cityData.geonames[0].lng;
                allData.country = cityData.geonames[0].countryName;
                console.log("The Second All Data: ", allData)


                weatherbitApi(weatherbitApiReqURL, allData)
                    .then(res => {
                        allData.currentTemp = res.data[0].temp
                        console.log("Current Temp: ", allData.currentTemp)

                        pixabayApi(allData.country)
                            .then(res => {
                                allData.img = res.hits[0].webformatURL;
                                console.log("The Image: ", allData.img)
                                console.log("The final res: ", res)
                                updateUi(allData)
                            })
                    })

            })

    } else {
        alert("Not a valid name");
    }

}


/* Function to GET Web API Data by generating url and path what the user 
    enter to get the data from the API*/




/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    });

    console.log('response');
    console.log(response);
    try {
        const newData = await response.json();
        console.log('newData');
        console.log(newData);
        return newData;
    } catch (error) {
        console.log(error);
    }
};


