function incremente_compteur_panier()
{
    var pan = getCookie("compteur_panier");

    pan_int = parseInt(pan);
    pan_int = pan_int + 1;

    setCookie("compteur_panier", pan_int);
}

function decremente_compteur_panier()
{
    var pan = getCookie("compteur_panier");

    pan_int = parseInt(pan);
    pan_int = pan_int - 1;

    setCookie("compteur_panier", pan_int);
}

function ajout_objet_a_panier(id)
{
    var objets = getCookie("objets_panier");

    if ( objets == "" ) {
	objets = id;
	setCookie("objets_panier", id);
    }
    else
    {
	var newValue = objets.concat("a", id);
	setCookie("objets_panier", newValue);
    }

    var msg3 = "objets apres = " + newValue;

}

function parse_objet_string()
{
    if ( typeof counter == 'undefined' ) {
	counter = 0;
    }
    var objets_enr = getCookie("objets_panier");
    var res = objets_enr.split("a");   
    
    var res_str = res[counter];

    counter += 1;
    
    return res_str;
}

function retourne_nb_articles_panier()
{
    var nb_articles_str = getCookie("compteur_panier");

    var nb_articles = parseInt(nb_articles_str);
    
    return nb_articles;
}


function ajouter_panier(id)
{
    var con = im_i_connected();
    if (con == false)
    {
	window.location = "signin.html";
    }
    incremente_compteur_panier();

    alert("Article bien ajouté au panier!");
    ajout_objet_a_panier(id);
}

function enlever_objet_panier(id)
{
    var objets_enr = getCookie("objets_panier");
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
	    if (res[i] == id)
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
    window.location = "panier.html";
}





