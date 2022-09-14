/* Global Variables  */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather/';

// Instead of Converting Temperature from Kelvin to Celsius or Fahrenheit use: 
// &units=imperial is for Fahrenheit (or)
// &units=metric is for Celcius.
const apiKey = 'bb04270cd184efee40dac170417a61a3&units=metric';



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
const generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    // This is going to stop any action occurred in the button 
    e.preventDefault();

    //get user input
    const zipCode = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;

    // Make sure that the user enter a zipcode 
    if (zipCode !== '') {
        // Make sure that the user enter how he feels
        if (content !== '') {
            /* Function to GET Web API Data*/
            getWeatherData(baseUrl, zipCode, apiKey)
                .then(function (data) {
                    console.log('The data');
                    console.log(data);
                    // add data to POST request
                    postData('/AddData', { temp: data.main.temp, date: newDate, content: content });
                }).then(function () {
                    // call updateUI to update browser content
                    updateUI()
                }).catch(function (error) {
                    console.log(error);
                    alert('The zip code is invalid. Try again');

                });
        } else {
            alert('Please Enter How do you feel')
        }
    } else {
        alert('Please Enter ZipCode')
    }

}


/* Function to GET Web API Data by generating url and path what the user 
    enter to get the data from the API*/
const getWeatherData = async (baseUrl, zipCode, apiKey) => {
    // res equals to the output of fetch function
    const res = await fetch(`${baseUrl}?zip=${zipCode}&apikey=${apiKey}`);
    // const res = await fetch(baseUrl +zipCode+`/&appid=${apiKey}`);
    console.log(res)
    try {
        // data equals to res but in json format
        const data = await res.json();

        console.log('The data from weatherData');
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

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

const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log("all data")
        console.log(allData);
        // update new entry values
        if (allData.date !== undefined && allData.temp !== undefined && allData.content !== undefined) {
            
            // Write updated data to DOM elements

            document.getElementById('date').innerHTML = `Today's Date: ` + allData.date;
            document.getElementById('temp').innerHTML = `Today's Temperature: ` + Math.round(allData.temp) + ' degrees Celsius';
            document.getElementById('content').innerHTML = `You are Feeling: ` + allData.content;
        }
    } catch (error) {
        console.log('error', error);
    }
};
