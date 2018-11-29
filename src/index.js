console.log('Hello!');
console.log(`The time is ${new Date()}`);	
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'bootstrap';

let _makeProduct = require('./modules/product-html');
function showProducts(category_id = null){
	 jQuery.ajax({
		url: 'http://nit.tron.net.ua/api/product/list' + (category_id == null ? '' : '/category/' + category_id),
		method: 'get',
		dataType: 'json',
		success: function(json){
			console.log('Loaded via AJAX!');
			// console.log(json);
			console.table(json);

			$('.product-grid').empty();
			json.forEach(product => $('.product-grid').append(_makeProduct(product)));
			console.log('Added to grid');
		},
		error: function(xhr){
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		},
	});
}
showProducts();
 jQuery.ajax({
	url: 'http://nit.tron.net.ua/api/category/list',
	method: 'get',
	dataType: 'json',
	success: function(json){
		console.log('Loaded categories via AJAX!');
		console.table(json);
		json.forEach(category => $('.dropdown-menu.categories')
									.append(
										$(`<a class="dropdown-item category" href="#" data-cat-id="${category.id}">`)
											.text(category.name)));
	},		
	error: function(xhr){
		alert("An error occured: " + xhr.status + " " + xhr.statusText);
	},
});

$(document).on('click', '.dropdown-item.category', function(){ 
  showProducts($(this).data('cat-id'));
});


$(document).on('click', '#allproducts', function(){
  showProducts($(this).data('product-id'));
});

// $(document).on('click', '.card.col-xs-12.col-sm-4.col-md-3', function(){
//         $("#myModal2").modal({backdrop: false});
//     });