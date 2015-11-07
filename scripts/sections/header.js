module.exports = function() {
	// change the search button using sprite
	$("#SearchForm form input[type=image]").
	attr("style","opacity: 0; width: 40px;height: 33px").
	wrap("div").parent().
	addClass("mw_search_btn sprites-search");

	var Logo = $("#Logo");

	Logo.append($("#TopMenu"));
	$("#TopMenu li").not(".CartLink, .First").remove();

	// move the First and CartLink to LOGO

	Logo.append($("[class='First']"));
	Logo.append($(".CartLink"));
	Logo.children($(".First")).attr("style","opacity: 0;display: block; width: 44px;height: 39px").wrap("div").parent().addClass("sprites-user");
	Logo.children($(".CartLink")).attr("style","opacity: 0;display: block; width: 44px;height: 39px").wrap("div").parent().addClass("sprites-cart");

	// add the toggle menu
	$("#Header").attr("data-ur-set","toggler").append("<div class='mw_header_bottom'> \
							<div class='mw_search'></div> \
							<div class='mw_menu_btn sprites-menu' data-ur-toggler-component='button'></div> \
						</div>");

	// remove unecessary element
	$("#SearchForm").children($("p")).remove();

	// add palceholder
	var searchForm = $("#SearchForm form");
	searchForm.children($("label")).remove();
	searchForm.children($("input[type=text]")).attr("placeholder", "Search...");

	$("#Header").append($("#Menu"));
	$("#Header #Menu").attr("data-ur-toggler-component","content").append($(".Left #SideCategoryList"));
	$("#Menu li").addClass("mw_bar2");

	// move the search form to div mv_header_bottom 
	$(".mw_header_bottom .mw_search").append($("#SearchForm"));

	// remove br tag
	$("#Header .Clear").remove();

	//remove TopMenu
	$("#TopMenu").remove();

	// remove Ajax Loading
	$("#Container #AjaxLoading").remove();


};

