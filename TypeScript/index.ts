class Catalogue {
	private panier: Panier;
	
	constructor(public category: string){
		this.panier = new Panier();
	}
	ajouterAuPanier(produit: Produit){
		this.panier.ajouterProduit(produit);
	}
	afficherPanier(){
		this.panier.afficherProduits();
	}
}

class Panier {
	private m_produits: Array<Produit>;
	private m_total: number;
	
	constructor(){
		this.m_produits = new Array();
		this.m_total = 0.0;
	}
	
	ajouterProduit(produit: Produit){
		this.m_produits.push(produit);
		this.m_total += produit.getPrix();
	}
	
	afficherProduits(){
		for(let produit of this.m_produits){
			//document.getElementById("produits").innerHTML += produit.getNom();
		}
	}
	
	getTotal(){
		return this.m_total;
	}
}

class Produit {
	private m_prix: number;
	private m_nom: string;
	private m_description: string;
	private m_imageURL: string;
	
	constructor(prix: number, nom: string, description: string) {
		this.m_prix = prix;
		this.m_nom = nom;
		this.m_description = description;
	}
	
	setImage(path: string){
		this.m_imageURL=path;
	}
	getPrix(){
		return this.m_prix;
	}
	
	getNom(){
		return this.m_nom;
	}
	
	getDescription(){
		return this.m_description;
	}
	getImage(){
		return this.m_imageURL;
	}
}

let unCatalogue = new Catalogue("ordinateur");

function main(){
	let produit = new Produit(649.99, "Dell Inspiron", "ordinateur portable");
	unCatalogue.ajouterAuPanier(produit);
	unCatalogue.afficherPanier();
}

main();



