document.onkeydown = function (e) {
 
    //F12 Engelle
    if(e.keyCode == 123) {
        alert('f12 tuşu kapalıdır')
        return false;
    }

    // CTRL+I Engelle
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        alert('I tuşu kapalıdır')
        return false;
    }

    // CTRL+J Engelle
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        alert('J tuşu kapalıdır')
        return false;
    }

    // CTRL+U Engelle
    if(e.ctrlKey && e.keyCode == 85) {
    alert('U tuşu kapalıdır')
        return false;
    }
}