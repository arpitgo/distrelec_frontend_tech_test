jQuery(document).ready(function(){
	jQuery.getJSON( "../src/data.json", function( data ) {
		$dataUrl = data.url;
		jQuery.ajax({
			url: $dataUrl,
			dataType: 'application/json',
			complete: function(data){
				$carouselData = JSON.parse(data.responseText);
				list = '';
				jQuery.each($carouselData.carouselData, function(i, item) {
					list +='<li class="product-item">'+
								'<div id="product-wrapper" class="product-wrapper">'+
									'<div id="product-name">'+
										'<a class="prod-name" title="'+item.name+'" href="'+item.url+'">'+item.name+'</a>'+
									'</div>'+
									'<div id="product-image-description-wrapper">'+
									'<div id="product-image">'+
										'<a class="prod-img" title="'+item.name+'" href="'+item.url+'">'+
											'<img class="item-image" alt="'+item.productImageAltText+'" src="'+item.productImageUrl+'">'+
										'</a>'+
									'</div>'+
									'<div id="product-description">'+
										'<div id="row">'+
											'<div class="manufacturerLogo"><img class="mLogo" title="'+item.distManufacturer.name+'" src="'+item.distManufacturer.brand_logo.url+'"/></div>'+
										'</div>'+
										'<div id="row">'+
											'<div id="leftColumnlong" class="ellipsis leftColumnlong" title="Price per '+item.salesUnit+'">Price per '+item.salesUnit+'</div>'+
											'<div id="rightColumn"></div>'+
										'</div>'+
										'<div id="row">'+
											'<div id="leftColumnPrice" class="ellipsis" title="Price"></div>'+
											'<div id="rightColumn" class="priceTeaserItem"><span class="currency">'+item.price.currency+'</span>'+item.price.formattedValue+'</div>'+
										'</div>'+
										'<div class="row buy-btn">'+
											'<a class="btn btn-buy ellipsis" href="'+item.url+'">Buy now</a>'+
										'</div>'+
									'</div>'+
									'</div>'+
								'</div>'+
							'</li>';
				});
				jQuery('.customer-also-buy-carousel').append(list);
				if(jQuery('.customer-also-buy-carousel li').length){
					jQuery('.customer-also-buy-carousel').slick({
					  infinite: false,
					  slidesToShow: 4,
					  slidesToScroll: 1,
					  vertical:true,
					  verticalSwiping: true,
					  responsive: [
							{
							  breakpoint: 600,
							  settings: {
								slidesToShow: 2
							  }
							},
							{
							  breakpoint: 480,
							  settings: {
								slidesToShow: 1
							  }
							}
						  ]
					});
				}
			}
		});
	});
});