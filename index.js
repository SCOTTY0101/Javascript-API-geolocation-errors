/*javascrpit code to run an API on gps location. With handling of errors.
Running on ES6. 
Code still under development.....
*/

getLocation = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
};

showPosition = (position) => {
    console.log(`Latitude: ${position.coords.latitude};
    Longitude: ${position.coords.lonitude}`);
};

showError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            console.log('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            console.log('The requset to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            console.log('An unknown error occurred.');
            break;
        default:
            console.log('best read and change this code to remove me :p');
    }
};
