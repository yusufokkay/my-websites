

function IE(e) {
     if (navigator.appName == "Microsoft Internet Explorer" && (event.button == "2" || event.button == "3")) {
          alert('UYARI BEYBI');
          return false;
     }
}
function NS(e) {
     if (document.layers || (document.getElementById && !document.all)) {
          if (e.which == "2" || e.which == "3") {
               alert('Bu sitede sağ tık kapalıdır ');
               return false;
          }
     }
}
document.onmousedown=IE;document.onmouseup=NS;document.oncontextmenu=new Function("return false");
