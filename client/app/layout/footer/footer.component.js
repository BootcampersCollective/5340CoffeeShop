const footerComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.date = new Date();
        // Sunday
		if(ctrl.date.getDay() === 0) {
			ctrl.storeHours = "closed.";
		// Saturday
		} else if (ctrl.date.getDay() === 6 ) {
			ctrl.storeHours = "open from 7:30 a.m. - 3:00 p.m.";
		} else {
			ctrl.storeHours = "open from 6:30 a.m. - 4 p.m.";
		}

	},

	template:`<div class="container-footer">footer
		          <p>6474 Ward Rd, Arvada, CO 80004. Today is {{$ctrl.date | date:'EEEE, MMMM d, y'}}. We are {{$ctrl.storeHours}}</p>
	          </div>`
};

angular.module('5340-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];
