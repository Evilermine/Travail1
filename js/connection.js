function init_connection()
{
    var si = getCookie("signed_in");

    if (si != "y")
    {
	setCookie("signed_in", "n");
    }
}

function deconnection_client()
{
    setCookie("signed_in", "n");
    window.location = "index.html";
}

function connection_client()
{
    setCookie("signed_in", "y");
    setCookie("compteur_panier", 0);
}

function im_i_connected()
{
    var connected = getCookie("signed_in");
    if (connected == "y")
	return true;

    return false;
}

function signup_callback()
{
    var newuser = document.getElementById("inputEmail").value;
    var newpass = document.getElementById("inputPassword").value;

    var user_str = "Username=" + newuser + ";expires=Tue, 28 Dec 2020 00:00:00 GMT; ";
    var pass_str = "Password=" + newpass + ";expires=Tue, 28 Dec 2020 00:00:00 GMT; ";
    
    setCookie("Username", newuser);
    setCookie("Password", newpass);
    
    alert("Inscription Reussie!");
    window.location = "index.html";
}

function signin_callback()
{
    var user_signed = getCookie("Username");
    var pass_of_user = getCookie("Password");

    var u = document.getElementById("inputEmail").value;
    var p = document.getElementById("inputPassword").value;

    if (pass_of_user == p &&
        user_signed == u)
    {
	connection_client();
	window.location = "index.html";
    }
    else
    {
	alert("Wrong username or password.");
    }
}

init_connection();
