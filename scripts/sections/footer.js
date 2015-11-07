module.exports = function() {
    var Footer = $("#Footer");
    Footer.addClass("mw-footer")
    Footer.find("p").remove()

    Footer.append("<div class = 'mw-logo'><p>All prices are in <span title='Default Currency'>USD</span></p>\
        <p>Copyright 2014 iGadgetCommerce.</p>\
        <p class='mw-power'> Powered by : </p> <p >MOOVWEB</p><div>")


    // body.append(
    //     $(tag("footer", {class: "mw-footer"}, "Powered by Moovweb"), function() {
    //         // Move stuff here



    //     })
    // );
    // This injects a snippet of code used locally with gulp live-reloading
    // Note: assert statements are ignored in production.
    fns.assert(true, function(){
      if (fns.layer('live-reload'))
        require("/sections/browsersync.js")();
    });
};