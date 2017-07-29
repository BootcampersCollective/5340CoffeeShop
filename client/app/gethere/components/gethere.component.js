const gethere = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {
            "use strict";
            const lat = 39.81400;
            const lng = -105.1371342;
            function driveme () {
                GMaps.geolocate({
                    success: function (position) {
                        map.setCenter(position.coords.latitude, position.coords.longitude);
                        map.drawRoute({
                            origin: [position.coords.latitude, position.coords.longitude],
                            destination: [lat, lng],
                            travelMode: 'driving',
                            strokeColor: '#131540',
                            strokeOpacity: 0.6,
                            strokeWeight: 6
                        });
                    },
                    error: function (error) {
                        console.log('Geolocation failed: ' + error.message);
                    },
                    not_supported: function () {
                        console.log("Your browser does not support geolocation");
                    }/*,
                        always: function() {
                            console.log("Done!");
                        }*/
                });

            }

            const map = new GMaps({
                el: '.map',
                lat: lat,
                lng: lng
            });
            map.addMarker({
                lat: lat,
                lng: lng,
                title: '5340 Coffee & Events',
                //click: dirveme
            });
        };

    },
    template: `<div class="map"></div>`
};

angular.module('5340-site.gethere')
    .component('gethere', gethere);

gethere.$inject = [];