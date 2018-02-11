import {setCookie, getCookie} from "../ts/cookie"

export class Catalogue_cookie
{
    constructor()
    {
        setCookie("nbr_produits_cat", '0');
        setCookie("produits_id", '0');
        setCookie("produits_name", '0');
        setCookie("produits_img", '0');
        setCookie("produits_desc", '0');
    }

    incremente_produits_cat() : void
    {
        var pro_cat = getCookie("nbr_produits_cat");

        var pro_cat_int : number = parseInt(pro_cat);
        pro_cat_int = pro_cat_int + 1;

        setCookie("nbr_produits_cat", String(pro_cat_int));
    }

    add_element_to_cookie(cookie_name : string, element_to_add : string) : void
    {
        var tmp = getCookie(cookie_name);
        tmp += "z";
        tmp += element_to_add;
        setCookie(cookie_name, tmp);
    }

    get_element_from_cookie(cookie_name : string, pos : number) : string
    {
        var tmp1 = getCookie(cookie_name);
        var tmp2 = tmp1.split("z");
        var tmp3 = tmp2[pos];

        return tmp3;
    }
    
    add_item(produit : Produit)
    {
        if (this.get_length() == 0)
        {
            setCookie("produits_id", String(produit.get_id()));
            setCookie("produits_prix", String(produit.get_prix()));
            setCookie("produits_name", produit.get_name());
            setCookie("produits_img", produit.get_img());
            setCookie("produits_desc", produit.get_desc());
        }
        else
        {
            this.add_element_to_cookie("produits_id", String(produit.get_id()));
            this.add_element_to_cookie("produits_prix", String(produit.get_prix()));
            this.add_element_to_cookie("produits_name", produit.get_name());
            this.add_element_to_cookie("produits_img", produit.get_img());
            this.add_element_to_cookie("produits_desc", produit.get_desc());
        }
        this.incremente_produits_cat();
    }

    get_item_with_id(id : number) : Produit
    {
        var new_prod_id : number;
        var new_prod_prix : number;
	    var new_prod_name : string;
	    var new_prod_img : string;
	    var new_prod_desc : string;
	
        new_prod_id = parseInt(this.get_element_from_cookie("produits_id", id));
        new_prod_prix = parseInt(this.get_element_from_cookie("produits_prix", id));
        new_prod_name = this.get_element_from_cookie("produits_name", id);
        new_prod_img = this.get_element_from_cookie("produits_img", id);
        new_prod_desc = this.get_element_from_cookie("produits_desc", id);

        var new_prod = new Produit(new_prod_id, new_prod_prix, new_prod_name, new_prod_img, new_prod_desc);
        return new_prod;
    }
    
    get_length() : number
    {
	    var nbr : number = parseInt(getCookie("nbr_produits_catalogue"));

	    return nbr;
    }
}

export class Catalogue
{
    catalogue : Produit[];
    constructor()
    {
	    this.catalogue = new Array<Produit>();
    }

    add_item(produit : Produit) : void
    {
	    this.catalogue.push(produit);
    }

    get_item_with_id(id : number) : Produit
    {
	    return this.catalogue[id];
    }

    set_items_name(id : number, newname : string)
    {
	    this.catalogue[id].set_name(newname);
    }
    get_length() : number
    {
	    return this.catalogue.length;
    }
    print_products() : void
    {
        for (var i = 0; i < this.catalogue.length; i++)
        {
            this.catalogue[i].print();
        }
    }
    
}

export class Produit {
    id:number;
    prix:number;
    name:string;
    img:string;
    desc:string;
    constructor(obj_id : number, obj_prix : number, obj_name : string, obj_img : string, obj_desc : string)
    {
        this.id = obj_id;
        this.prix = obj_prix;
        this.name = obj_name;
        this.img = obj_img;
        this.desc = obj_desc;
    }
    
    get_id() : number { return this.id; }
    get_prix() : number { return this.prix; }
    get_name() : string { return this.name; }
    get_img() : string { return this.img; }
    get_desc() : string { return this.desc; }
    
    set_id(newid : number) { this.id = newid; }
    set_prix(newprix : number) { this.prix = newprix; }
    set_name(newname : string) { this.name = newname; }
    set_img(newimg : string) { this.img = newimg; }
    set_desc(newdesc : string) { this.desc = newdesc; }
    
    print() {
        var msg_str = "produit: " +
            this.id + ", " +
            this.name + ", " + 
            this.prix + ", " +
            this.img  + ", " +	    
            this.desc;

        alert(msg_str);
    }
}

export default function init() : Catalogue {
    if(cat == null) {
        for (var i = 0; i < 9; i++)
        {
            var name_prod = "article #" + (i+1);
            var img_prod = "img" + (i+1) + ".jpeg";
            var prix_prod = 2*(i+1);
            var desc_prod = "description article # " + (i+1);
            var prod = new Produit(i+1, prix_prod, name_prod, img_prod, desc_prod);
            cat.add_item(prod);
        }
    }

    return cat;
}

var cat;