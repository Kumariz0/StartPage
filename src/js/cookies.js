// cookies 🍪
//set a cookie
function setCookie(name, value, days) {
    try {
        document.cookie = name + "=" + value + "; SameSite=None; Secure" + "; expires=Thu, 13 Jan 2000 12:00:00 UTC" + "; path=/";
    } catch (error) {
        alert("error")
    }
    document.cookie = name + "=" + value + "; SameSite=None; Secure" + "; expires=Thu, 13 Jan 2100 12:00:00 UTC" + "; path=/";
}

// Get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var tempcookie = cookies[i];
        while (tempcookie.charAt(0) == ' ') tempcookie = tempcookie.substring(1, tempcookie.length);
        if (tempcookie.indexOf(nameEQ) == 0) return tempcookie.substring(nameEQ.length, tempcookie.length);
    }
    return null;
}



// Save the toggle button state to a cookie
function saveToggleButtonState() {
    if (getCookie("toggledButton") != 1 && getCookie("toggledButton") != 0) {
        setCookie("toggledButton", 0);
    } else {
        if (getCookie("toggledButton") == 0) {
            setCookie("toggledButton", 1)
            document.getElementById("mode-svg").src = "images/work.svg"

        } else {
            setCookie("toggledButton", 0)
            document.getElementById("mode-svg").src = "images/home.svg"
        }
    }
}



// Restore the toggle button state from a cookie
function restorePageState() {
    if (getCookie("toggledButton") == 0) {
        document.getElementById("mode-svg").src = "images/home.svg"
    } else {
        document.getElementById("mode-svg").src = "images/work.svg"
    }
}