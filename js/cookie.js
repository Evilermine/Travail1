function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cookieName, cookieValue)
{
    cookieValue = escape(cookieValue);

    var nowDate = new Date();
    nowDate.setMonth(nowDate.getMonth() + 6);
    var cookieExpires = nowDate.toGMTString();

    document.cookie = cookieName + "=" + cookieValue +
	";expires=" + cookieExpires;
}
