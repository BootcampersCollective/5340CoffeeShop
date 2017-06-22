// angular.module('bootApp')
//       .controller('bootcamperController', bootcampersFunction)
//
// // bootcamperController.$inject = ['bootcamperFact'];
//
// bootcampersFunction.$inject = ['$http'];
//
// function bootcampersFunction($http) {
//     var bCtl = this;
//
//     bCtl.title = "test!";
//
//     bCtl.data = '';
//
//     bCtl.signUp = function () {
//
//           $http.post('/signUp', bCtl.data)
//                .then(function success(response) {
//                       console.log("Sent Email!");
//                       bCtl.message = response.data;
//                 }
//               )
//               .catch(function(err){console.log("Update via put failed, caught error: ",err)})
//     }
//
// }
