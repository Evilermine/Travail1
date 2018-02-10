/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var Catalogue = /** @class */function () {
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
}();
var Panier = /** @class */function () {
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
            //document.getElementById("produits").innerHTML += produit.getNom();
        }
    };
    Panier.prototype.getTotal = function () {
        return this.m_total;
    };
    return Panier;
}();
var Produit = /** @class */function () {
    function Produit(prix, nom, description) {
        this.m_prix = prix;
        this.m_nom = nom;
        this.m_description = description;
    }
    Produit.prototype.setImage = function (path) {
        this.m_imageURL = path;
    };
    Produit.prototype.getPrix = function () {
        return this.m_prix;
    };
    Produit.prototype.getNom = function () {
        return this.m_nom;
    };
    Produit.prototype.getDescription = function () {
        return this.m_description;
    };
    Produit.prototype.getImage = function () {
        return this.m_imageURL;
    };
    return Produit;
}();
var unCatalogue = new Catalogue("ordinateur");
function main() {
    var produit = new Produit(649.99, "Dell Inspiron", "ordinateur portable");
    unCatalogue.ajouterAuPanier(produit);
    unCatalogue.afficherPanier();
}
main();

/***/ })
/******/ ]);