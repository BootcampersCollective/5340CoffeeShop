const events = {
  bindings: {},
  controller: /*@ngInject*/ function(apiService) {
    let ctrl = this;

    ctrl.$onInit = function() {
      apiService
        .getEvents()
        .then(function(res) {
          // Store array of JSON events.
          ctrl.events = res.data;
          console.log(ctrl.events);
//          Data to compare dates

//          ctrl.events.forEach(date => {
//            let currentDate = new Date();
//            let todayDate = currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getDate();
//            let eventDate = date.start_time.split("T").slice(0,1).join();
////            console.log(todayDate)
////            console.log(eventDate)
//            if (todayDate > eventDate) {
//              eventDate;
//            }
          })
        })
        .then(function(data, status) {
          console.log('Data: ', data);
          console.log('Status: ', status);
        });
    };
  },
  template: `
    <h1>Events</h1>
    <h3>{{ $ctrl.events[0].place.name }}</h3>
    <h4>
        {{ $ctrl.events[0].place.location.street }} {{ $ctrl.events[0].place.location.city }}
        {{ $ctrl.events[0].place.location.state }} {{ $ctrl.events[0].place.location.zip }}
    </h4>
    <div>
        <section ng-repeat="(key, value) in $ctrl.events">
            <div><b>{{ value.name }}</b></div>
            <span>{{ value.start_time | date:"MM/dd/yyyy 'at' h:mma"}}</span> - <span>{{ value.end_time | date:"MM/dd/yyyy 'at' h:mma"}}</span><br>
            <div>Description: {{ value.description }}</div>
            <hr/>
        </section>
    </div>
  `
};

angular.module('5340-site.events').component('events', events);
