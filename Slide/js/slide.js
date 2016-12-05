
	var my_window;
 function OpenWin()
        {
          my_window=window.open("http://myy.haaga-helia.fi/~a1602711/Game/", "_blank", "resizable=yes, scrollbars=yes, titlebar=yes,             width=1500, height=1400, top=10, left=200");
             
        function GoUrl(Url)
        {
            my_window.location=Url;
        }
        } 

  ovi = function (ovet) {
        var t = new Date();
        var day = t.getDate();
        var mm = t.getMonth() + 1;
        if (ovet <= day && mm == 12) {
            
            return true;
        } else {
            alert("EHEI EI NYT VIEL .. SÖITKÖ JO MUUT KALENTERIT?");
            return false;
        }  
}
  
  function sus() {
var audio = document.getElementById("back");
audio.volume=0.4;
}
  