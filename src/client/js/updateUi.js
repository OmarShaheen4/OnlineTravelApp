const updateUi = async (allData) => {
    // const allData = await request.json();

    document.getElementById('test1').innerHTML = `Today's Date: ` + currentDatee;
    document.getElementById('test2').innerHTML = `Today's Temperature: ` + allData.currentTemp + ' degrees Celsius';
    document.getElementById('test3').innerHTML = `You are Feeling: ` + allData.country;

};
export { updateUi };