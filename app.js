//nav bar togggling
const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-times-circle');

toggleBtn.addEventListener('click', function() {
    navbar.classList.add('show');
    toggleBtn.style.display = 'none';
    closeBtn.style.display = 'inline';
});
closeBtn.addEventListener('click', function() {
    navbar.classList.remove('show');
    toggleBtn.style.display = 'inline';
    closeBtn.style.display = 'none';
});
// searching
const form = document.querySelector('form');
const start = document.querySelector('.start');
window.addEventListener('load', function() {
    navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        var api_key = '0717fe10c9694f3fb376d59093e2d74e';
        var coords = `${lat}, ${long}`; // lat,lng
        var api_url = 'https://api.opencagedata.com/geocode/v1/json';
        var request_url =
            api_url +
            '?' +
            'key=' +
            api_key +
            '&q=' +
            encodeURIComponent(coords) +
            '&pretty=1' +
            '&no_annotations=1';

        this.fetch(request_url)
            .then((response) => response.json())
            .then((data) => {
                const formated = data.results[0].formatted;
                start.value = formated;
            });
    });
});

const bookBtn = document.querySelector('.book-btn');
bookBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const destination = document.querySelector('.destination');
    const inputValue = destination.value;
    console.log(inputValue);
    //forwarding

    fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=0717fe10c9694f3fb376d59093e2d74e`
        )
        .then((response) => response.json())
        .then((data) => console.log(data.results[1].geometry));
});