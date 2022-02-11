let pos = {}

// searching
const form = document.querySelector('form')
const start = document.querySelector('.start')
window.addEventListener('DOMContentLoaded', function() {
    navigator.geolocation.getCurrentPosition((position) => {
        let long = position.coords.longitude
        let lat = position.coords.latitude
        pos['lat'] = lat
        pos['long'] = long
        var api_key = '0717fe10c9694f3fb376d59093e2d74e'
        var coords = `${lat}, ${long}` // lat,lng
        var api_url = 'https://api.opencagedata.com/geocode/v1/json'
        var request_url =
            api_url +
            '?' +
            'key=' +
            api_key +
            '&q=' +
            encodeURIComponent(coords) +
            '&pretty=1' +
            '&no_annotations=1'

        this.fetch(request_url)
            .then((response) => response.json())
            .then((data) => {
                const formated = data.results[0].formatted
                start.value = formated
            })
    })
})

// distance
function distance(lat1, lon1, lat2, lon2, unit) {
    if (lat1 == lat2 && lon1 == lon2) {
        return 0
    } else {
        var radlat1 = (Math.PI * lat1) / 180
        var radlat2 = (Math.PI * lat2) / 180
        var theta = lon1 - lon2
        var radtheta = (Math.PI * theta) / 180
        var dist =
            Math.sin(radlat1) * Math.sin(radlat2) +
            Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
        if (dist > 1) {
            dist = 1
        }
        dist = Math.acos(dist)
        dist = (dist * 180) / Math.PI
        dist = dist * 60 * 1.1515
        if (unit == 'K') {
            dist = dist * 1.609344
        }
        if (unit == 'N') {
            dist = dist * 0.8684
        }
        return dist
    }
}
const bookBtn = document.querySelector('.book-btn')

bookBtn.addEventListener('click', function(e) {
        e.preventDefault()
        const destination = document.querySelector('.destination')
        const inputValue = destination.value
        console.log(inputValue)
            //forwarding

        fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=0717fe10c9694f3fb376d59093e2d74e`
            )
            .then((response) => response.json())
            .then((data) => {
                // distance between me and the destination
                const map = document.querySelector('.map-card')
                let travelDistance = distance(
                    pos.lat,
                    pos.long,
                    data.results[0].geometry.lat,
                    data.results[0].geometry.lng,
                    'K'
                ).toFixed(1)
                console.log(travelDistance)
                map.textContent = ` Your travel distance is ${travelDistance} km`
                document.querySelector('.next-cars').innerHTML = `
            
            
       <div class="user-card">
                <div class="user-center">
                    <span class="user-name">Larsson James </span>
                    <img src="https://cdn.pixabay.com/photo/2021/11/01/16/22/driving-6760994_640.jpg" alt="" class="user-img img" />
                </div>
                    

                <button class="btn book-me-btn" href="login.html">
                <a href="login.html">Book me
                </a></button>
                <p>Departs in 2hours</p>
            </div>
            `

                // console.log(
                //   'distance: ',
                //   distance(
                //     pos.lat,
                //     pos.long,
                //     data.results[0].geometry.lat,
                //     data.results[0].geometry.lng,
                //     'K'
                //   ).toFixed(1)
                // )
                console.log(data.results[1].geometry)
            })
    })
    // review