module.exports = function() {
  	$this.addClass("mw-home");

	// var nameLabel = $("form#subscribe_form label[for=nl_first_name]");
	// $("input#nl_first_name").attr("placeholder", nameLabel.text());
	// nameLabel.remove();
	 
	// var emailLabel = $("form#subscribe_form label[for=nl_email]");
	// $("input#nl_email").attr("placeholder", emailLabel.text());
	// emailLabel.remove()
	$(".Left").remove()
	$(".Right").remove()

	var wrapper = $("#Wrapper");

	var BlockContent= wrapper.find(".BlockContent");
	BlockContent.attr("data-ur-set","carousel").attr("data-ur-infinite","disabled");

	// BlockContent.find(".ProductList").name("div");
	BlockContent.append("<div data-ur-carousel-component='dots'></div>");

	BlockContent.find(".ProductList").attr("data-ur-carousel-component","scroll_container");

	BlockContent.find("li").attr("data-ur-carousel-component","item");

    

};