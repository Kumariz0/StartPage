// cookies 🍪
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
//set a cookie
function setCookie(name, value, days) {
    try {
        document.cookie = name + "=" + value + "; SameSite=None; Secure" + "; expires=Thu, 13 Jan 2000 12:00:00 UTC" + "; path=/";
    } catch (error) {
        alert("error");
    }
    document.cookie = name + "=" + value + "; SameSite=None; Secure" + "; expires=Thu, 13 Jan 2100 12:00:00 UTC" + "; path=/";
}

// Get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var tempcookie = cookies[i];
        while (tempcookie.charAt(0) == " ") tempcookie = tempcookie.substring(1, tempcookie.length);
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
            setCookie("toggledButton", 1);
            changesvg(".work-svg", ".home-svg");
            removelinkanimation();
            changeLinks(1);
            restorelinkanimation();
        } else {
            changesvg(".home-svg", ".work-svg");
            setCookie("toggledButton", 0);
            removelinkanimation();
            changeLinks(0);
            restorelinkanimation();
        }
    }
}

// Restore the toggle button state from a cookie
function restorePageState() {
    if (getCookie("toggledButton") == 0) {
        startAnimation(".home-svg");
    } else {
        startAnimation(".work-svg");
    }
    changeLinks(getCookie("toggledButton"));
}

async function changeLinks(pagestate) {
    //if pagestate is "home"
    if (pagestate == 0) {

        var t_1 = document.getElementById("title_1")
        var t_2 = document.getElementById("title_2")
        var t_3 = document.getElementById("title_3")
        var t_4 = document.getElementById("title_4")

        var title_1 = "Social networks"
        var link_1_1 = "https://youtube.com";
        var link_1_2 = "https://twitch.com";
        var link_1_3 = "https://twitter.com";
        var title_2 = "streaming"
        var link_2_1 = "https://netflix.com";
        var link_2_2 = "https://open.spotify.com/";
        var link_2_3 = "https://www.amazon.de/Amazon-Video/b?ie=UTF8&node=3010075031";
        var title_3 = "Sea Of Thieves"
        var link_3_1 = "https://www.seaofthieves.com/insider";
        var link_3_2 = "https://www.merfolkslullaby.com/de";
        var link_3_3 = "https://seaofthieves.wiki.gg/wiki/Sea_of_Thieves_Wiki";
        var title_4 = "Gaming"
        var link_4_1 = "https://grabfreegames.com/";
        var link_4_2 = "https://leafguides.xyz/";
        var link_4_3 = "https://open.spotify.com";

        var _1_1 = document.getElementById("1.1");
        var _1_2 = document.getElementById("1.2");
        var _1_3 = document.getElementById("1.3");
        var _2_1 = document.getElementById("2.1");
        var _2_2 = document.getElementById("2.2");
        var _2_3 = document.getElementById("2.3");
        var _3_1 = document.getElementById("3.1");
        var _3_2 = document.getElementById("3.2");
        var _3_3 = document.getElementById("3.3");
        var _4_1 = document.getElementById("4.1");
        var _4_2 = document.getElementById("4.2");
        var _4_3 = document.getElementById("4.3");
        t_1.innerHTML = title_1
        _1_1.innerHTML = "Youtube";
        _1_1.setAttribute("href", link_1_1);
        _1_2.innerHTML = "Twitch";
        _1_2.setAttribute("href", link_1_2);
        _1_3.innerHTML = "Twitter";
        _1_3.setAttribute("href", link_1_3);
        t_2.innerHTML = title_2
        _2_1.innerHTML = "Netlifx";
        _2_1.setAttribute("href", link_2_1);
        _2_2.innerHTML = "9Anime";
        _2_2.setAttribute("href", link_2_2);
        _2_3.innerHTML = "Prime Video";
        _2_3.setAttribute("href", link_2_3);
        t_3.innerHTML = title_3
        _3_1.innerHTML = "Insider build";
        _3_1.setAttribute("href", link_3_1);
        _3_2.innerHTML = "merfolkslullaby";
        _3_2.setAttribute("href", link_3_2);
        _3_3.innerHTML = "SoT wiki";
        _3_3.setAttribute("href", link_3_3);
        t_4.innerHTML = title_4
        _4_1.innerHTML = "Free games";
        _4_1.setAttribute("href", link_4_1);
        _4_2.innerHTML = "Leaf guides";
        _4_2.setAttribute("href", link_4_2);
        _4_3.innerHTML = "Spotify";
        _4_3.setAttribute("href", link_4_3);
    } else {
        //if pagestate is "work"

        var t_1 = document.getElementById("title_1")
        var t_2 = document.getElementById("title_2")
        var t_3 = document.getElementById("title_3")
        var t_4 = document.getElementById("title_4")

        var title_1 = "Schule"
        var link_1_1 = "https://www.notion.so/";
        var link_1_2 = "https://herakles.webuntis.com/WebUntis/?school=avhg-neuss#/basic/login";
        var link_1_3 = "https://165165.logineonrw-lms.de/";
        var title_2 = "Informatik"
        var link_2_1 = "https://github.com/Kumariz0/";
        var link_2_2 = "https://doc.rust-lang.org/book/";
        var link_2_3 = "https://chat.openai.com/chat";
        var title_3 = "Physik"
        var link_3_1 = "https://165165.logineonrw-lms.de/course/view.php?id=1865";
        var link_3_2 = "https://165165.logineonrw-lms.de/mod/resource/view.php?id=52351";
        var link_3_3 = "https://example.com";
        var title_4 = "Chemie"
        var link_4_1 = "https://example.com";
        var link_4_2 = "https://example.com";
        var link_4_3 = "https://example.com";

        var _1_1 = document.getElementById("1.1");
        var _1_2 = document.getElementById("1.2");
        var _1_3 = document.getElementById("1.3");
        var _2_1 = document.getElementById("2.1");
        var _2_2 = document.getElementById("2.2");
        var _2_3 = document.getElementById("2.3");
        var _3_1 = document.getElementById("3.1");
        var _3_2 = document.getElementById("3.2");
        var _3_3 = document.getElementById("3.3");
        var _4_1 = document.getElementById("4.1");
        var _4_2 = document.getElementById("4.2");
        var _4_3 = document.getElementById("4.3");
        t_1.innerHTML = title_1;
        _1_1.innerHTML = "Notion";
        _1_1.setAttribute("href", link_1_1);
        _1_2.innerHTML = "Webuntis";
        _1_2.setAttribute("href", link_1_2);
        _1_3.innerHTML = "Moodle";
        _1_3.setAttribute("href", link_1_3);
        t_2.innerHTML = title_2;
        _2_1.innerHTML = "Github";
        _2_1.setAttribute("href", link_2_1);
        _2_2.innerHTML = "Rust book";
        _2_2.setAttribute("href", link_2_2);
        _2_3.innerHTML = "ChatGPT";
        _2_3.setAttribute("href", link_2_3);
        t_3.innerHTML = title_3;
        _3_1.innerHTML = "Physik moodle";
        _3_1.setAttribute("href", link_3_1);
        _3_2.innerHTML = "script";
        _3_2.setAttribute("href", link_3_2);
        _3_3.innerHTML = "example";
        _3_3.setAttribute("href", link_3_3);
        t_4.innerHTML = title_4;
        _4_1.innerHTML = "example";
        _4_1.setAttribute("href", link_4_1);
        _4_2.innerHTML = "example";
        _4_2.setAttribute("href", link_4_2);
        _4_3.innerHTML = "example";
        _4_3.setAttribute("href", link_4_3);
    }
}
