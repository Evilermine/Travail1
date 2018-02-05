var Catalogue = /** @class */ (function () {
    function Catalogue(category) {
        this.category = category;
        this.panier = new Panier();
    }
    Catalogue.prototype.ajouterAuPanier = function (produit) {
        this.panier.ajouterProduit(produit);
    };
    Catalogue.prototype.afficherPanier = function () {
        this.panier.afficherProduits();
    };
    return Catalogue;
}());
var Panier = /** @class */ (function () {
    function Panier() {
        this.m_produits = new Array();
        this.m_total = 0.0;
    }
    Panier.prototype.ajouterProduit = function (produit) {
        this.m_produits.push(produit);
        this.m_total += produit.getPrix();
    };
    Panier.prototype.afficherProduits = function () {
        for (var _i = 0, _a = this.m_produits; _i < _a.length; _i++) {
            var produit = _a[_i];
            document.getElementById("produits").innerHTML += produit.getNom();
        }
    };
    Panier.prototype.getTotal = function () {
        return this.m_total;
    };
    return Panier;
}());
var Produit = /** @class */ (function () {
    function Produit(prix, nom, description) {
        this.m_prix = prix;
        this.m_nom = nom;
        this.m_description = description;
    }
    Produit.prototype.getPrix = function () {
        return this.m_prix;
    };
    Produit.prototype.getNom = function () {
        return this.m_nom;
    };
    Produit.prototype.getDescription = function () {
        return this.m_description;
    };
    return Produit;
}());
var unCatalogue = new Catalogue("ordinateur");
function main() {
    var produit = new Produit(649.99, "Dell Inspiron", "ordinateur portable");
    unCatalogue.ajouterAuPanier(produit);
    unCatalogue.afficherPanier();
}
main();
