import {getCookie, setCookie} from "./cookie"
import * as connection from "./connection"

var counter : number;

function incremente_compteur_panier() : void
{
    var pan : string = getCookie("compteur_panier");

    var pan_int : number = +pan;
    pan_int++;

    setCookie("compteur_panier", String(pan_int));
}

function decremente_compteur_panier() : void
{
    var pan : string = getCookie("compteur_panier");

    var pan_int : number = +pan;
    pan_int--;

    setCookie("compteur_panier", String(pan_int));
}

function ajout_objet_a_panier(id : number) : void
{
    var objets : string = getCookie("objets_panier");

    if ( objets == "" ) {
	    objets = String(id);
	    setCookie("objets_panier", String(id));
    }
    else
    {
	    var newValue = objets.concat("a", String(id));
	    setCookie("objets_panier", newValue);
    }

    var msg3 = "objets apres = " + newValue;

}

function parse_objet_string() : String
{
    if ( typeof counter == null ) {
	    counter = 0;
    }
    var objets_enr = getCookie("objets_panier");
    var res = objets_enr.split("a");   
    
    var res_str = res[counter];

    counter += 1;
    
    return res_str;
}

function retourne_nb_articles_panier() : number
{
    var nb_articles_str = getCookie("compteur_panier");

    var nb_articles : number = +nb_articles_str;
    
    return nb_articles;
}


function ajouter_panier(id : number) : void
{
    var con : boolean = connection.default();
    if (con == false)
    {
	    window.location.href = "./signin.html";
    }
    incremente_compteur_panier();

    alert("Article bien ajouté au panier!");
    ajout_objet_a_panier(id);
}

function enlever_objet_panier(id : number) : void
{
    var objets_enr : string = getCookie("objets_panier");
    var res = objets_enr.split("a");   
    var nouveaux_objets= "-1";
    
    if (res.length == 1)
    {
	    nouveaux_objets = "";
    }
    else
    {
	for (var i = 0; i < res.length; i++)
	{
	    if (res[i] == String(id))
	    {
		continue;
	    }
	    if (nouveaux_objets == "-1")
	    {
		nouveaux_objets = res[i];
		continue;
	    }
	    
	    nouveaux_objets += "a";
	    nouveaux_objets += res[i];
	}
    }
    decremente_compteur_panier();
    
    setCookie("objets_panier", nouveaux_objets);
    window.location.href = "panier.html";
}