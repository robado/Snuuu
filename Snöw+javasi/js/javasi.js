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






















