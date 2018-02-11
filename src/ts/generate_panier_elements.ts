import * as panier from "../ts/panier"
import * as cat_init from "../ts/simulation_donnees"

export default function generate_panier_elements()
{
    var main_container_p = document.getElementById('main-container');

    var nb_articles = panier.retourne_nb_articles_panier();
    
    if (nb_articles == 0)
    {
        var h21 = document.createElement('h2');
        h21.innerHTML = "Aucun article dans le panier.";
        main_container_p.appendChild(h21);
    }
    else
    {
        for (var article = 0; article < nb_articles; article++)
        {
            var id_of_object = parseInt(panier.parse_objet_string());
            var article_en_cours = cat.get_item_with_id(id_of_object);
            var img_path = "./img/" + article_en_cours.get_img();
            
            var newdiv = document.createElement('div');
            newdiv.className = "row-mb-2";
            main_container_p.appendChild(newdiv);

            var newdiv_p = main_container_p.lastChild;
            var newdiv2 = document.createElement('div');
            newdiv2.className = "col-md-12";
            newdiv_p.appendChild(newdiv2);

            var newdiv2_p = newdiv_p.lastChild;
            var newdiv3 = document.createElement('div');
            newdiv3.className = "card flex-md-row mb-6 box-shadow h-md-250";
            newdiv2_p.appendChild(newdiv3);
            
            var newdiv3_p = newdiv2_p.lastChild;
            var newdiv4 = document.createElement('div');
            newdiv4.className = "card-body d-flex flex-column align-items-start";
            newdiv3_p.appendChild(newdiv4);

            var newdiv4_p = newdiv3_p.lastChild;
            var strong1 = document.createElement('strong');
            strong1.className = "d-inline-block mb-2 text-primary";
            newdiv4_p.appendChild(strong1);

            var h31 = document.createElement('h3');
            h31.className = "mb-0";
            newdiv4_p.appendChild(h31);

            var h31_p = newdiv4_p.lastChild;
            var a1 = document.createElement('a');
            a1.className = "text-dark";
            a1.innerHTML = article_en_cours.get_name();
            a1.href = "#";
            h31_p.appendChild(a1);

            var newdiv5 = document.createElement('div');
            newdiv5.className = "mb-1 text-muted";
            newdiv5.innerHTML = String(article_en_cours.get_prix());
            newdiv4_p.appendChild(newdiv5);

            var p1 = document.createElement('p');
            p1.className = "card-text mb-auto";
            p1.innerHTML = article_en_cours.get_desc();
            newdiv4_p.appendChild(p1);

            var a2 = document.createElement('a');
            a2.href = "#";
            var fct = "enlever_objet_panier(" + id_of_object + ")";
            a2.setAttribute('onclick', fct);
            a2.innerHTML = "Enlever";
            newdiv4_p.appendChild(a2);

            var img1 = document.createElement('img');
            img1.className = "card-img-right flex-auto d-none d-md-block";
            img1.setAttribute("data-holder-rendered", "true");
            img1.setAttribute("src", img_path);
            newdiv3_p.appendChild(img1);
        }
    }
}

var cat = cat_init.default();