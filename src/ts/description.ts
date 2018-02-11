import * as init_catalogue from "../ts/simulation_donnees"

var cat : init_catalogue.Catalogue;

function get_query_variable(variable : string) : string {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

export function get_produit_detail() : void
{
    var id_of_product : number = parseInt(get_query_variable("id"));
    var produit = cat.get_item_with_id(id_of_product);
    var img_path = "./img/" + produit.get_img();
    
    document.getElementById("prix_produit").innerHTML = String(produit.get_prix());
    (<HTMLImageElement>document.getElementById("img_produit")).src = img_path;
}

export default function init() : void {
    if(cat == null) {
        cat = init_catalogue.default();
    }
}