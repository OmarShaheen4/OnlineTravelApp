import { checkName } from "./checkName";
import { currentDate } from "./currentDate";
import { dayDiffCheck } from "./dayDiffCheck";
import { pixabayApi } from "./pixabayApi";
import { getCityData } from "./getCityData";
import { weatherbitApi } from "./weatherbitApi";
import { updateUi } from "./updateUi";

/* Global Variables  */
const geoNamesURL = 'http://api.geonames.org/searchJSON?';
const username = "omarr_shaheeen"; // put it in env file

const weatherbitApiReqURL = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';

const dep = document.getElementById("date_start").value
const ret = document.getElementById("date_end").value

const allData = {}
const currentDatee = currentDate()

const modal = document.getElementById("myModal");
const btn = document.getElementById("button_search");
const span = document.getElementsByClassName("close")[0];


// Instead of Converting Temperature from Kelvin to Celsius or Fahrenheit use: 
// &units=imperial is for Fahrenheit (or)
// &units=metric is for Celcius.


// Event listener to add function to existing HTML DOM element
const generateBtn = document.getElementById('button_search');
generateBtn.addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    // This is going to stop any action occurred in the button 
    // e.preventDefault();

    // When the user clicks the button, open the modal 
    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = async function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = async function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //get user input
    const dest = document.getElementById('desName').value
    console.log("The Destination: ", dest)

    const dep = document.getElementById("date_start").value
    const dayDiff = dayDiffCheck(currentDatee, dep)
    allData.dayDiff = dayDiff
    console.log("dayDiffffffffff: ", dayDiff)
    console.log("all data object", allData)


    if (checkName(dest)) {
        console.log("A valid name");
        getCityData(geoNamesURL, dest, username)
            .then(cityData => {
                allData.cityLat = cityData.geonames[0].lat;
                allData.cityLong = cityData.geonames[0].lng;
                allData.country = cityData.geonames[0].countryName;
                console.log("The Second All Data: ", allData)


                // weatherbitApi(weatherbitApiReqURL, allData)
                //     .then(res => {
                //         allData.currentTemp = res.data[0].temp
                //         console.log("Current Temp: ", allData.currentTemp)

                pixabayApi(allData.country)
                    .then(res => {
                        allData.img = res.hits[0].webformatURL;
                        console.log("The Image: ", allData.img)
                        console.log("The final res: ", res)
                        updateUi(allData)
                    })
            })

        // })

    } else {
        console.log("Not a valid name");
    }

}


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


