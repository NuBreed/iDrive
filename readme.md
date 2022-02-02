//forwarding

                            // fetch(
                            //         `https://api.opencagedata.com/geocode/v1/json?q=&key=0717fe10c9694f3fb376d59093e2d74e`
                            //     )const {
                            //             results: {
                            //                 0: { formatted },
                            //             },
                            //         } = data;
                            //     console.log(formatted);

                            // })
                            //     .then((response) => response.json())
                            //     .then((data) => console.log(data));

window.addEventListener('load', function(e) {
let long;
let lat;
if (navigator.geolocation) {
this.navigator.geolocation.getCurrentPosition((position) => {
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
                            console.log(data);
                        });
                });






                 let long;
            let lat;
            if (navigator.geolocation) {
                this.navigator.geolocation.getCurrentPosition((position) => {
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
                            console.log(data);
                        });
