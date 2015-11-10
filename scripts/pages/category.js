module.exports = function() {
  var SideCategoryShopByPrice = $("#SideCategoryShopByPrice,#SideShopByBrand")
  SideCategoryShopByPrice.attr("data-ur-set","toggler")
  SideCategoryShopByPrice.find("h2").attr("data-ur-toggler-component", "button").
                          append("<div class = 'mw_indicator'></div>")
  SideCategoryShopByPrice.find(".BlockContent").attr("data-ur-toggler-component", "content")
  SideCategoryShopByPrice.find("li > a").append("<div class = 'mw_arrow'></div>")

  $("#SideNewsletterBox").remove()

  $("#LayoutColumn1").prepend($("#CategoryHeading .BlockContent >h2"));

  $("#CategoryBreadcrumb").remove()


  $(".ProductCompareButton").remove()
  $(".CompareButton").remove()


  // Add carousel
  var frmCompare = $("#frmCompare");
  frmCompare.attr("data-ur-set","carousel").attr("data-ur-infinite","disabled");
  frmCompare.append("<div data-ur-carousel-component='dots'></div>");

  frmCompare.find(".ProductList").attr("data-ur-carousel-component","scroll_container");

  frmCompare.find("li").attr("data-ur-carousel-component","item");

  // Add carousel
  var Top_and_newPro = $("#SideCategoryTopSellers > .BlockContent, #SideCategoryNewProducts > .BlockContent")

  Top_and_newPro.attr("data-ur-set","carousel").attr("data-ur-infinite","disabled");
  Top_and_newPro.append("<div data-ur-carousel-component='dots'></div>");

  Top_and_newPro.find(".ProductList").attr("data-ur-carousel-component","scroll_container");

  Top_and_newPro.find("li").attr("data-ur-carousel-component","item");

  //$(".TopSellerNumber").remove()
  

};