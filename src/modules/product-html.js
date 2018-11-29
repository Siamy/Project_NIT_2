let _makeHtml = ({
	id,
	name,
	image_url,
	description,
	price,
	special_price,
}) => {
	let 
	$product = $(`<div class="card col-xs-12 col-sm-4 col-md-3" data-product-id="${id}">`);
	$product.append($(`<img src="${image_url}" alt="${name}" class="img-fluid product-image">`));
	$product.append($(`<span class="product-title">`).text(name));
	if (special_price == null) {
		 $product.append($(`<div>`).text(price));
	}else{
		 $product.append($(`<div class="cross_price">`).text(price));
		 $product.append($(`<div class="new_price">`).text(special_price));
		}
	$product.append($(`<button class="btn btn-dark">`).text("Додати в кошик"));
	return $product;
};
module.exports = _makeHtml