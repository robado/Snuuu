
function openBox(field) {
            var y = $(field).find(".box");
            var x = y.attr("class");
            if (y.hasClass("boxOpened")) {
                y.removeClass("boxOpened");
            }
            else {
                $(".box").removeClass("boxOpened");
                y.addClass("boxOpened");
            }
        }
ovi = function (ovet) {
        var t = new Date();
        var day = t.getDate();
        var mm = t.getMonth() + 1;
        if (ovet <= day && mm == 12) {
            alert("sus");
            return true;
        } else {
            alert("sas");
            return false;
        }  
}