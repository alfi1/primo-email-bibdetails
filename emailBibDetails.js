// Select specified bibliographic elements from the full display
// and email them to a staff member

  var app = angular.module('viewCustom', ['angularLoad']);

   app.component('prmServiceDetailsAfter', {
	   bindings: { parentCtrl: '<' },
	   controller: 'prmServiceDetailsAfterController',
	   template: '<div><a href="mailto:t.c.graves@sussex.ac.uk?subject=Test%20email%20from%20Primo&amp;body={{$ctrl.getTitle()}}%0D%0A{{$ctrl.getAuthor()}}%0D%0A{{$ctrl.getMMSID()}}">Email a staff member about {{$ctrl.getTitle()}}</a></div>'

   });
   
app.controller('prmServiceDetailsAfterController', [function(){

var vm = this;

// Fetch a series of bibliographic elements one by one for use in the TEMPLATE
// Title
vm.getTitle = getTitle;
 
 function getTitle() {
	return vm.parentCtrl.item.pnx.display.title[0];
}

// Author
vm.getAuthor = getAuthor;
 
 function getAuthor() {
	return vm.parentCtrl.item.pnx.display.creator[0];
}

//MMSID
vm.getMMSID = getMMSID;
 
 function getMMSID() {
	return vm.parentCtrl.item.pnx.search.addsrcrecordid[0];
}


		}]);
