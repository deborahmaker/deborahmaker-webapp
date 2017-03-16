(function () {
  'use strict';

  angular
  .module('myShoppingList')
  .controller('myCtrl', myCtrl);
  
  function myCtrl() {
   	var vm = this;
	
	vm.products = [];
	
	vm.addItem = addItem;
	vm.update = update;
	vm.removeItem = removeItem;
	vm.get = get;
	vm.getAll = getAll;
	
	(function initController() {
      vm.getAll();
    })();
	
	// Create
    function addItem() {
        vm.errortext = "";        
		if (!vm.product.name) {return;}        
			vm.product.id = 4;
            vm.products.push(vm.product);
        //} else {
        //    vm.errortext = "The item is already in your shopping list.";
        //}
    }
	
	// Update
	function update(x) {
		
	}
	
	// Delete
    function removeItem(x) {
        vm.errortext = "";    
        vm.products.splice(x, 1);
    }
	
	// Get
	function get(x) {	
		var product = vm.products.filter({id: x});
         return product;
	}
	
	// GetAll
	function getAll() {
		vm.products = [{id:1, name:"Milk"}, {id:2, name:"Bread"}, {id:3, name:"Cheese"}];
	}	
}

})();