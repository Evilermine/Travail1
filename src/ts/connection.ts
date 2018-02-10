import {getCookie, setCookie} from "./cookie"

function init_connection() : void
{
    var si : number = +getCookie("signed_in");

    if (si == null)
    {
	    setCookie("signed_in", '0');
    }
}

function deconnection_client() : void
{
    setCookie("signed_in", '0');
    window.location.assign("./index.html");
}

function connection_client() : void
{
    setCookie("signed_in",'1');
    setCookie("compteur_panier", '0');
}

export default function im_i_connected() : boolean
{
    var connected : number = +getCookie("signed_in");
    if (connected == 1)
	    return true;

    return false;
}

function signup_callback() : void
{
    var newuser = <HTMLInputElement>document.getElementById("inputEmail");
    var newpass = <HTMLInputElement>document.getElementById("inputPassword");

    var user_str = "Username=" + newuser + ";expires=Tue, 28 Dec 2020 00:00:00 GMT; ";
    var pass_str = "Password=" + newpass + ";expires=Tue, 28 Dec 2020 00:00:00 GMT; ";
    
    setCookie("Username", newuser.value);
    setCookie("Password", newpass.value);
    
    alert("Inscription Reussie!");
    window.location.assign("index.html");
}

function signin_callback() : void
{
    var user_signed = getCookie("Username");
    var pass_of_user = getCookie("Password");

    var u = <HTMLInputElement>document.getElementById("inputEmail");
    var p = <HTMLInputElement>document.getElementById("inputPassword");

    if (pass_of_user == p.value &&
        user_signed == u.value)
    {
	connection_client();
	window.location.assign("./index.html");
    }
    else
    {
	alert("Wrong username or password.");
    }
}

init_connection();