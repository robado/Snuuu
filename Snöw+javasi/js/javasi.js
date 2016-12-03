/*var d = new Date();
var pv = d.getDate():
var kk = d.getMonth()+1;

var paivat = document.getElementById("id").id;

var x = paivat;
if (kk == 11) { 
   while (x >= 1) {
       if (x <= 24) {
           
       }
            
   } else {
       x--;
   }
       
}

/*function avaa(Luukku){
    
    if ( kk != 11){ 
        alert("sus");
    } else if (dd < dateLuukku) {
        alert(";)");
    } else {
        document.getElementById(Luukku);
    }
}*/


/*function tulostus(){
    var x = document.getElementsByClassName("datetime");
    
    if(x == 1) {
        alert("moi");
    }
}*/
/*document.getElementById("nappi").disabled = true;

function myFunction() {
    document.getElementById("nappi").disabled = true;
    var x = document.getElementById("id").id;
    if (x == 1) {
        window.alert("sus");
    }
}*/
/*ovi = function () {
    // Your code here


    function ovi(ovet) {
        var t = new Date();
        var day = t.getDate();
        var mm = t.getMonth() + 1;
        if (ovet <= day && mm == 12) {
            alert("sus");
        } else {
            alert("sas");

        }
    }
    return false;
}*/

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






















