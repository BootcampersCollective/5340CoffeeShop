const footerComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		var ctrl.storeHours;
		ctrl.date = new Date();
		ctrl.hourInfoBasedOnDay = hourInfoBasedOnDay;

		function hourInfoBasedOnDay(ctrl.date){
			//if it is Saturday
			if (ctrl.date.getDate() === 6 ) {
				ctrl.storeHours = "open from 7:30am - 3:00pm";
			//if it is sunday
			} else if (ctrl.date.getDate() === 0) {
				ctrl.storeHours = "closed";
			} else {
				ctrl.storeHours = "open from 6:30am - 4pm";
			}
		return ctrl.storeHours;
		}
	},

	template:`<div class="container-footer">footer
		          <p> 6474 Ward Rd, Arvada, CO 80004 Today is {{$ctrl.date | date:'EEEE-MM-d'}}
									Today we are {{$ctrl.stroreHours}}
							</p>
	          </div>`
};

angular.module('5340-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];
