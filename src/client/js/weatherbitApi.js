const weatherbitApi = async (weatherbitApiReqURL, allData) => {
    const weatherbitApiKey = "9724fd8f861241848ed47ffc0ff7998c";

    const res = await fetch(weatherbitApiReqURL + allData.cityLat + "&lon=" + allData.cityLong + "&key=" + weatherbitApiKey);
    console.log(res)
    try {
        const data = await res.json();
        console.log('The data from weatherbitApi: ', data);
        return data;

    } catch (error) {
        console.log("Error in WeatherBitAPI function:", error);
    }
};

export { weatherbitApi };