import * as cat_init from "../ts/simulation_donnees"

export default function generate_products()
{
    var img_paths = ["./img/img1.jpeg", "./img/img2.jpeg", "./img/img3.jpeg",
		     "./img/img4.jpeg", "./img/img5.jpeg", "./img/img6.jpeg",
		     "./img/img7.jpeg", "./img/img8.jpeg", "./img/img9.jpeg"];
    
    var product_cat_p = document.getElementById('product-catalogue');

    for (var i : number = 0; i < cat.get_length(); i++) {

	var curr_product = cat.get_item_with_id(i);

	var img_path = "./img/" + curr_product.get_img();
	
	var div1 = document.createElement('div');
	div1.className = "col-md-4";
	product_cat_p.appendChild(div1);

	var div1_p = product_cat_p.lastChild;
	var div2 = document.createElement('div');
	div2.className = "card mb-4 box-shadow";
	div1_p.appendChild(div2);

	var div2_p = div1_p.lastChild;
	var img1 = document.createElement('img');
	img1.className = "card-img-top";
	img1.src = img_path;
	img1.alt = "Card img cap";
	div2_p.appendChild(img1);

	var div3 = document.createElement('div');
	div3.className = "card-body";
	div2_p.appendChild(div3);

	var div3_p = div2_p.lastChild;
	
	var p1 = document.createElement('p');
	p1.className = "card-Text";
	p1.innerHTML = curr_product.get_desc();
	div3_p.appendChild(p1);

	var div4 = document.createElement('div');	
	div4.className = "d-flex justify-content-between align-items-center";
	div3_p.appendChild(div4);

	var div4_p = div3_p.lastChild;

	var div5 = document.createElement('div');	
	div5.className = "btn-group";
	div4_p.appendChild(div5);

	var div5_p = div4_p.lastChild;
	var button1 = document.createElement('button');
	button1.className = "btn btn-sm btn-outline-secondary";
	button1.type = "button";
	button1.innerHTML = "Ajouter au panier";
	var fct = "ajouter_panier(" + i + ")";
	button1.setAttribute('onclick', fct);
	div5_p.appendChild(button1);

	var a1 = document.createElement('a');
	a1.href = "./description_detaillee.html" + "?id=" + i;
	div5_p.appendChild(a1);

	var a1_p = div5_p.lastChild;
	var button2 = document.createElement('button');
	button2.className = "btn btn-sm btn-outline-secondary";
	button2.type = "button";
	button2.innerHTML = "Description Detaillee";
	a1_p.appendChild(button2);

	var small1 = document.createElement('small');
	small1.className = "text-muted";
	small1.innerHTML = String(curr_product.get_prix());
	div4_p.appendChild(small1);
    }
}

var cat = cat_init.default();