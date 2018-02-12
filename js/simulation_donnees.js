class Catalogue_cookie
{
    constructor()
    {
	setCookie("nbr_produits_cat", 0);
	setCookie("produits_id", 0);
	setCookie("produits_name", 0);
	setCookie("produits_img", 0);
	setCookie("produits_desc", 0);
    }

    incremente_produits_cat()
    {
	var pro_cat = getCookie("nbr_produits_cat");

	pro_cat_int = parseInt(pro_cat);
	pro_cat_int = pro_cat_int + 1;

	setCookie("nbr_produits_cat", pro_cat_int);
    }

    add_element_to_cookie(cookie_name, element_to_add)
    {
	var tmp = getCookie(cookie_name);
	tmp += "z";
	tmp += element_to_add;
	setCookie(cookie_name, tmp);
    }

    get_element_from_cookie(cookie_name, pos)
    {
	var tmp1 = getCookie(cookie_name);
	var tmp2 = tmp1.split("z");
	var tmp3 = tmp2[pos];
    }
    
    add_item(produit)
    {
	if (nbr_produits_cat == 0)
	{
	    setCookie("produits_id", produit.get_id());
	    setCookie("produits_name", produit.get_name());
	    setCookie("produits_img", produit.get_img());
	    setCookie("produits_desc", produit,get_desc());
	}
	else
	{
	    add_element_to_cookie("produits_id", produit.get_id());
	    add_element_to_cookie("produits_name", produit.get_name());
	    add_element_to_cookie("produits_img", produit.get_img());
	    add_element_to_cookie("produits_desc", produit.get_desc());
	}
	incremente_produits_cat();
    }

    get_item_with_id(id)
    {
	var new_prod_id = 0;
	var new_prod_name = 0;
	var new_prod_img = 0;
	var new_prod_desc = 0;
	
	new_prod_id = get_element_from_cookie("produits_id", id);
	new_prod_name = get_element_from_cookie("produits_name", id);
	new_prod_img = get_element_from_cookie("produits_img", id);
	new_prod_desc = get_element_from_cookie("produits_desc", id);

	var new_prod = new Produit(new_prod_id, new_prod_name, new_prod_img, new_prod_desc);
	return new_prod;
    }

    set_items_name(id, newname)
    {
	this.catalogue[id].set_name(newname);
    }
    get_length()
    {
	var nbr = getCookie("nbr_produits_catalogue");

	return nbr;
    }
    print_products()
    {
	for (var i = 0; i < this.catalogue.length; i++)
	{
	    get_item_with_id(i).print();
	}
    }
}

class Catalogue
{
    constructor()
    {
	this.catalogue = [];
    }

    add_item(produit)
    {
	this.catalogue.push(produit);
    }

    get_item_with_id(id)
    {
	return this.catalogue[id];
    }

    set_items_name(id, newname)
    {
	this.catalogue[id].set_name(newname);
    }
    get_length()
    {
	return this.catalogue.length;
    }
    print_products()
    {
	for (var i = 0; i < this.catalogue.length; i++)
	{
	    this.catalogue[i].print();
	}
    }
    
}

class Produit {
    constructor(obj_id, obj_prix, obj_name, obj_img, obj_desc)
    {
	this.id = obj_id;
	this.prix = obj_prix;
	this.name = obj_name;
	this.img = obj_img;
	this.desc = obj_desc;
    }
    
    get_id() { return this.id; }
    get_prix() { return this.prix; }
    get_name() { return this.name; }
    get_img() { return this.img; }
    get_desc() { return this.desc; }
    
    set_id(newid) { this.id = newid; }
    set_prix(newprix) { this.prix = newprix; }
    set_name(newname) { this.name = newname; }
    set_img(newimg) { this.img = newimg; }
    set_desc(newdesc) { this.desc = newdesc; }
    
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
var cat = new Catalogue();

for (var i = 0; i < 9; i++)
{
    var name_prod = "article #" + (i+1);
    var img_prod = "img" + (i+1) + ".jpeg";
    var prix_prod = 2*(i+1) + ".00$";
    var desc_prod = "description article # " + (i+1);
    var prod = new Produit(i+1, prix_prod, name_prod, img_prod, desc_prod);
    cat.add_item(prod);
}



















