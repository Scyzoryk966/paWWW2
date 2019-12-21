
$("#csschanger a[data-theme]").click(function() {
    $("head link#theme").attr("href", $(this).data("theme"));
    $.cookie("styleSheet", $(this).data("theme"), { expires : 365 });
});


$("#losuj").click(function() {
    var themes = ["css/default.css","css/gray.css","css/green.css", "css/blue.css"];
    var number = Math.floor(Math.random() * 4);
    if($.cookie('number') == null || $.cookie('number') == undefined) {
        $.cookie('number', number, {expires: 10});
    }
    if($.cookie('number') == number){
            number++;
        if(number>=3)
        {
            number=0;
        }
    }
    $.cookie("number", number, {expires: 10});
    $("head link#theme").attr("href", themes[number]);
    $.cookie("styleSheet", themes[number], { expires : 365 });
});

function readCookieCSS(){
    if($.cookie('styleSheet') === null || $.cookie('styleSheet')==undefined) {
        /*Do nothing*/
    }
    else{
        $("head link#theme").attr("href", $.cookie('styleSheet'));
    }
}

function scroll_to(selector) {
    $('html,body').animate({scrollTop: $(selector).offset().top-200}, 1000);
    return false;
}