const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {};
    },
    template:   `<h1> About 5340 Coffee and Events </h1>
                <h3> Family-owned, friendly, comfortable, community-minded. </h3>
                <h3> That's 5340 Coffee & Events! </h3>
                <ul>
                    <li> Gourmet coffee & espresso drinks </li>
                    <li> Chais, teas, blended drinks </li>
                    <li> Pastries, burritos, oatmeal </li>
                    <li> Comfortable seating for over 60 </li>
                    <li> Free meeting room </li>
                    <li> Games, books, magazines </li>
                    <li> Free WiFi </li>
                    <li> Coffee beans by the pound </li>
                    <li> Catering for meetings & parties </li>
                    <li> Delivery through DeliveryDudes.com </li>
                    <li> Shop is available for private events </li>
                    <li> Rewards for loyal customers with the free and easy Perka <br> app available in the App Store or at Google Play.  </li>
                </ul>
                <br>
                <h2>Newsletter</h2>
                <p>Subscribe to our newsletter</p>
                <form>
                    <input type="email" ng-model="$ctrl.newsletter.email">
                    <button ng-click="">Sign Me Up!</button>
                </form>`

};

angular.module('5340-site.about')
    .component('about', about);

about.$inject = [];
