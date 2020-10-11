function doSwap() {
    $("#fun-nav li").each(function () {
        if ($(this).hasClass("active")) {
            swap($(this));
        } else {
            swapBack($(this));
        }
    });
}
doSwap();
function clear(o) {
    $("#fun-nav li").each(function () {
        $(this).removeClass("active");
    });
}

$("#fun-nav li").click(function () {
    // console.log("Click");
    clear();
    $(this).addClass("active");
    doSwap();
    rotate('.dial', $(this));

});

function rotate(m, o) {
    // console.log("o - ",o); console.log("m ",m);
    var id = "#" + $(o).attr("id");
    var menu = $(m);

    menu.removeClass('r0 lr1 lr2 rr1 rr2');

    if (id == "#email") {
        menu.addClass("lr2");
    }
    if (id == "#photo") {
        menu.addClass('lr1');

    }
    if (id == "#cloud") {
        menu.addClass('r0');
    }
    if (id == "#portfolio") {
        menu.addClass('rr1');
    }
    if (id == "#settings") {
        menu.addClass('rr2');
    }

}

//Logic on click
function swap(o) {
    var id = "#" + $(o).attr("id");
    var cimg = new String;
    var burl = "http://grantcr.com/files/",
        ext = ".png"
    cimg = id + " img";
    // console.log($(cimg).attr("src")); email
    if (id == "#email") {
        var nimg = burl + "iemailh" + ext;
        $(cimg).attr("src", nimg);

        //display - none -> animation
        $('#fun-animation').css({'display': 'none'});
        $('div.dg.ac').css({'display': 'none'});

        $('#song-audio').trigger('pause');

        //fun-social
        $('#fun-social').css({'display': 'none'});

        //fun-contact
        $('#fun-contact').css({'display': 'block'});

    }

    //social media
    if (id == "#photo") {
        var nimg = burl + "photosh" + ext;
        $(cimg).attr("src", nimg);

        //display - none -> animation
        $('#fun-animation').css({'display': 'none'});
        var position = $("#song-audio").offset();
        var htmlHeight = $(document).height();

        // console.log("Position : ", position); console.log("HTML Height : ",
        // htmlHeight); var guiTop = position.top + htmlHeight ;

        $('div.dg.ac').css({
            'display': 'none'
            // 'top' : guiTop+ 'px'
        });

        $('#song-audio').trigger('pause');

        //fun-social
        $('#fun-social').css({'display': 'block'});

        //fun-contact
        $('#fun-contact').css({'display': 'none'});

    }
    if (id == "#cloud") {
        var nimg = burl + "icloudh" + ext;
        $(cimg).attr("src", nimg);
    }
    if (id == "#portfolio") {
        var nimg = burl + "portfolioh" + ext;
        $(cimg).attr("src", nimg);
    }

    //animation
    if (id == "#settings") {
        var nimg = burl + "settingsh" + ext;
        $(cimg).attr("src", nimg);

        //Display threeJS animation
        $('#fun-animation').css({'display': 'block'});

        $('div.dg.ac').css({'display': 'block'});

        $('#song-audio').trigger('play');

        //fun-social
        $('#fun-social').css({'display': 'none'});

        //fun-contact
        $('#fun-contact').css({'display': 'none'});

    }

}

function swapBack(o) {
    var id = "#" + $(o).attr("id");
    var cimg = new String;
    var burl = "http://grantcr.com/files/",
        ext = ".png"
    cimg = id + " img";
    // console.log($(cimg).attr("src"));

    if (id == "#email") {
        var nimg = burl + "iemail" + ext;
        $(cimg).attr("src", nimg);
    }
    if (id == "#photo") {
        var nimg = burl + "iphoto" + ext;
        $(cimg).attr("src", nimg);
    }
    if (id == "#cloud") {
        var nimg = burl + "icloud" + ext;
        $(cimg).attr("src", nimg);
    }
    if (id == "#portfolio") {
        var nimg = burl + "portfolio" + ext;
        $(cimg).attr("src", nimg);
    }
    if (id == "#settings") {
        var nimg = burl + "settings" + ext;
        $(cimg).attr("src", nimg);
    }

}

//Custom

$(function () {

    function gui_controller() {
        $('div.dg.ac').css({'display': 'none'});
    };
    window.setTimeout(gui_controller, 2000); // after 2 seconds
});
