(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mainmenu></app-mainmenu>\r\n\r\n<div id=\"mainContainer\" class=\"container-fluid col-sm-12 h-100\">\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-9 h-100\">\r\n        <app-main-column></app-main-column>\r\n    </div>\r\n    <div class=\"col-sm-3 h-100 d-flex justify-content-center px-4 my-2\">\r\n      <app-right-aside-column></app-right-aside-column>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <app-left-aside-column></app-left-aside-column>\r\n  </div>\r\n  <div class=\"mx-0 px-0 w-100 col-sm-12 bg-dark text-light\">\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/breadcrumb/breadcrumb.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/breadcrumb/breadcrumb.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-sm-12\" aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li *ngFor=\"let breadcrumb of breadcrumbs$ | async\"\r\n      class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"[breadcrumb.url]\">\r\n        {{ breadcrumb.label }}\r\n      </a>\r\n    </li>\r\n  </ol>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer  class=\"\">\r\n  <div id=\"meuFooter\" class=\"row\">\r\n    <aside class=\"col-sm-4\">\r\n      <img width=\"90px\" height=\"80px\" alt=\"logo do github\" src=\"../..{{globalUrl}}/assets/images/Octocat.png\"/>\r\n      <p id=\"textoLogoGit\" > Esse site utiliza GitHub Pages</p>\r\n    </aside>\r\n    \r\n    <aside class=\"col-sm-4\">\r\n      <div><p>Icones feitos por <a href=\"https://www.freepik.com/\" target=\"_blank\" title=\"Freepik\">Freepik</a> em <a href=\"https://www.flaticon.com/\" \t\ttarget=\"_blank\"\t    title=\"Flaticon\">www.flaticon.com</a> é licenciado por <a href=\"http://creativecommons.org/licenses/by/3.0/\" \t\t\t    title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a></p></div>\r\n      <div><p><a target=\"_blank\" href=\"https://www.freepik.com/free-photos-vectors/background\"> vetor de plano de fundo criado por macrovector - www.freepik.com</a></p></div>\r\n      <div><p>icones de redes sociais feitos pelo <a href=\"https://www.iconfinder.com/social-media-icons\" target=\"_blank\">icon finder</a> </p></div>\r\n    </aside>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/git/git.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/git/git.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  git works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/left-aside-column/left-aside-column.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/left-aside-column/left-aside-column.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside >\r\n  <div style=\"z-index: 1;\" id=\"containerBtnsSocialMedia\" \r\n  class=\"col-sm-2 row justify-content-start align-items-center\r\n   position-relative my-2 h-75\">\r\n   <div  class=\"btn-group\" role=\"group\" aria-label=\"Medias sociais\">\r\n    <a  *ngFor=\"let button of buttons\"  w-100 h-100 href=\"{{button.mediaUrl}}\" target=\"_blank\">\r\n      <button  title=\"{{button.titulo}}\" class=\"btn btn-secondary mx-1 my-1 h-25 w-25 p-4 btnRedeSocial\" type=\"button\" \r\n               \r\n                [ngStyle]=\"{ 'background-image': 'url(' + button.imagemUrl + ')'}\">\r\n                \r\n      </button>\r\n    </a>\r\n   </div>\r\n  </div>\r\n</aside>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-column/main-column.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-column/main-column.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<p-card id=\"mainColumnContainer\">\r\n  <p-header>\r\n    <nav>\r\n      <app-breadcrumb></app-breadcrumb>\r\n    </nav>\r\n  </p-header>\r\n  <p-footer class=\"card-body\">\r\n    <router-outlet></router-outlet>\r\n  </p-footer>\r\n  <nav *ngIf=\"!isHome\" class=\"card-footer text-muted\">\r\n      <button (click)=\"getBack()\"  class=\"btn btn-secondary btn-light text-left justify-content-left\">Voltar</button>\r\n  </nav>\r\n</p-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mainmenu/mainmenu.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mainmenu/mainmenu.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark col-sm-12 mb-0\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/projetos']\">\r\n    <h3 class=\"mx-1 my-1\">Vinícius Silvano</h3>\r\n  </a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav\">\r\n        \r\n      <li class=\"nav-item dropdown\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div ngbDropdown class=\"d-inline-block\">\r\n              <button class=\"btn btn-outline-primary\" id=\"dropdownProjetos\" ngbDropdownToggle>Projetos</button>\r\n              <div   class=\"MenuDropdown\" ngbDropdownMenu aria-labelledby=\"dropdownProjetos\">\r\n                <button  *ngFor=\"let projeto of projetosDropDownList\" (click)=\"navigateToEspecificacao(projeto.id)\" class=\"MenuDropdownItem\" ngbDropdownItem>\r\n                  <!--<a  [routerLink]=\"['/projetoEspecificacao', projeto.id]\" routerLinkActive=\"active\">{{projeto.tituloProjeto}}</a>-->\r\n                  <a> {{projeto.tituloProjeto}}</a>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div> \r\n</nav>\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projetos-carousel-imagens/projetos-carousel-imagens.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projetos-carousel-imagens/projetos-carousel-imagens.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"alert\">\r\n  <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">{{ alert.message }}</ngb-alert>\r\n</p>\r\n<ngb-carousel class=\"carouselContainer my-4\" *ngIf=\"projeto.imagens\">\r\n    <ng-template ngbSlide *ngFor=\"let imagem of projeto.imagens\">\r\n      <div  (click)=\"pegarURLDaImagemAtual(imagem,content)\">\r\n        <img class=\"carouselImage text-white\" [src]=\"imagem.imageURL\" alt=\"{{imagem.altTexto}}\">\r\n        <div class=\"carousel-caption \">\r\n        <h3 *ngIf=\"imagem.tituloCarousel\" id=\"tituloCarousel\" [innerHTML]=\"imagem.tituloCarousel\"></h3>\r\n        <p *ngIf=\"imagem.descricaoCarousel\" id=\"descricaoCarousel\" [innerHTML]=\"imagem.descricaoCarousel\"></p>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n</ngb-carousel>\r\n\r\n\r\n  <ng-template #content id=\"imagensProjetoModal\" let-modal>\r\n        <div class=\"modal-header\">\r\n          <h4 *ngIf=\"imagemSelecionada.tituloCarousel\" class=\"modal-title\" id=\"modal-basic-title\" [innerHTML]=\"imagemSelecionada.tituloCarousel\"></h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <ngb-carousel class=\"carouselContainer my-4\" *ngIf=\"projeto.imagens\">\r\n            <ng-template ngbSlide *ngFor=\"let imagem of projeto.imagens\">\r\n              <div  (click)=\"pegarURLDaImagemAtual(imagem,content)\">\r\n                <img class=\"carouselImage text-white\" [src]=\"imagem.imageURL\" alt=\"{{imagem.altTexto}}\">\r\n                <div class=\"carousel-caption \">\r\n                  <h3 *ngIf=\"imagem.tituloCarousel\" id=\"tituloCarousel\" [innerHTML]=\"imagem.tituloCarousel\"></h3>\r\n                  <p *ngIf=\"imagem.descricaoCarousel\" id=\"descricaoCarousel\" [innerHTML]=\"imagem.descricaoCarousel\"></p>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-carousel>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('fechar')\">fechar</button>\r\n        </div>\r\n    </ng-template>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projetos-especificacao/projetos-especificacao.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projetos-especificacao/projetos-especificacao.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section *ngIf=\"projetoEspecificacao\">\r\n \r\n  <h1 class=\"d-flex justify-content-center my-3\">\r\n    <div [innerHTML]=\"projetoEspecificacao.tituloProjeto\"></div>\r\n  </h1>\r\n  \r\n  <app-projetos-carousel-imagens></app-projetos-carousel-imagens>\r\n\r\n  <div id=\"accordion\" class=\"w-100\" >\r\n    <div class=\"card accordionCard\" *ngFor=\"let accordionCard of projetoEspecificacao.accordionCards\">\r\n      <div class=\"card-header text-center\" id=\"headingOne\">\r\n        <h5 class=\"mb-0\">\r\n          <button (click)=\"changeCollapse(accordionCard.id)\"  class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n            <div [innerHTML]=\"accordionCard.tituloDescricao\"></div>\r\n          </button>\r\n        </h5>\r\n      </div>\r\n\r\n      <div id=\"collapseOne\" class=\"{{accordionCard.collapse}}\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n        <div class=\"card-body text-justify accordionBody\">\r\n          <div [innerHTML]=\"accordionCard.descricao\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n    \r\n</section>\r\n    \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projetos-existentes/projetos-existentes.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projetos-existentes/projetos-existentes.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Projetos</h1>\t\t\t\t\r\n    <div class=\"form-group col-sm-4\">\r\n      <label for=\"searchInput\">Buscar Projetos: </label>\r\n      <input \r\n      #mySearch\r\n      class=\"form-control\" \r\n      placeholder=\"Nome do Projeto\"\r\n      name=\"searchInput\" \r\n      type=\"text\"\r\n      (input)=\"filterItem(mySearch.value)\"> \r\n    </div>\r\n    \r\n  <div class=\"row justify-content-center align-items-center\" >\r\n      <button ng-cloak (click)=\"redirect(projeto.id)\" class=\"btn btn-secondary projetoCardButton col-sm-2  mx-1\" *ngFor=\"let projeto of projetosExistenteFiltered\">\r\n        <div *ngIf=\"projetosExistenteFiltered.length\">\r\n          <div class=\"card projetoCard\">  \r\n            <div class=\"card-body p-0 position-absolute fixed-top pt-3\">\r\n              {{projeto.tituloProjeto | uppercase}}<!--ANDROID-->\r\n            </div>\r\n            <img class=\"card-img-top projetoCardImagem\"  alt=\"Card image cap\" [src]=\"projeto.imagemDaTecnologia\"> <!-- src=\"imagens/android-logo.png\" -->\r\n            <div class=\"card-body p-0\">\r\n              <div *ngIf=\"projeto.tecnologiasAuxiliares\">\r\n                <img  height=25px  width=25px *ngFor=\"let tecnologiaAuxiliar of projeto.tecnologiasAuxiliares\" src=\"{{tecnologiaAuxiliar.imagemLocation}}\" />\r\n              </div>\r\n            </div>\r\n          </div>\t\r\n        </div>\r\n      </button>\t\t\t\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projetos/projetos.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projetos/projetos.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1 class=\"text-center\">Tecnologias</h1>\t\t\t\t\r\n    <div class=\"form-group col-sm-4\">\r\n      <label for=\"searchInput\">Buscar Tecnologia: </label>\r\n      <input \r\n        #mySearch\r\n        class=\"form-control\" \r\n        placeholder=\"Nome da Tecnologia\"\r\n        name=\"searchInput\" \r\n        type=\"text\"\r\n        (input)=\"filterItem(mySearch.value)\"> \r\n    </div>\r\n    \r\n  <div class=\"row justify-content-center align-items-center\" >\r\n      <button ng-cloak (click)=\"redirect(projetoCard.idTecnologia)\" \r\n      class=\"btn btn-secondary projetoCardButton col-sm-2 mx-1\" \r\n      *ngFor=\"let projetoCard of projetosCardsFiltered\">\r\n        <div class=\"enfeiteButtonTopRight\"></div>\r\n        <div class=\"enfeiteButtonBottomLeft\"></div>\r\n        <div *ngIf=\"projetosCardsFiltered.length\">\r\n        <img class=\"card-img-top projetoCardImagem\"  alt=\"Card image cap\" [src]=\"projetoCard.imagemLocation\"> <!-- src=\"imagens/android-logo.png\" -->\r\n        <div class=\"btnTexto\">\r\n          {{projetoCard.nome | uppercase}}<!--ANDROID-->\r\n        </div>\r\n         \t\t\r\n        </div>\r\n      </button>\t\t\t\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/right-aside-column/right-aside-column.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/right-aside-column/right-aside-column.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"\">\r\n  <div  class=\"row my-2\">\r\n    <div id=\"crachaDeApresentacao\" class=\"card text-dark\">\r\n      <div class=\"card-body\">\r\n        <h2 class=\"card-title\">Apresentação</h2>\r\n        <img height=\"50%\" width=\"100%\" src=\"../..{{globalUrl}}/assets/images/minhaFoto.jpg\" alt=\"Foto de Vinícius Silvano\"/>\r\n        <div id=\"divCardText\">\r\n          <p class=\"card-text apresentacaoCardText\">Olá meu nome é Vinícius Silvano e bem vindo ao meu portifólio, neste site você poderá encontrar informações e, possivelmente, artefatos de alguns projetos que eu desenvolvi.</p>\r\n          <p class=\"card-text apresentacaoCardText\">Atenciosamente Vinícius</p>\r\n        </div>\r\n       </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row my-2\">\r\n    <div>\r\n      <div title=\"cracha do linkedin\" class=\"LI-profile-badge\"  data-version=\"v1\" data-size=\"medium\" data-locale=\"pt_BR\" data-type=\"vertical\" data-theme=\"dark\" data-vanity=\"vinícius-silvano-634a1b10a\"><a class=\"LI-simple-link\" href='https://br.linkedin.com/in/vin%C3%ADcius-silvano-634a1b10a?trk=profile-badge'>Vinícius silvano</a></div>\r\n    </div>\r\n  </div>\r\n</aside>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projetos/projetos.component */ "./src/app/projetos/projetos.component.ts");
/* harmony import */ var _projetos_especificacao_projetos_especificacao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projetos-especificacao/projetos-especificacao.component */ "./src/app/projetos-especificacao/projetos-especificacao.component.ts");
/* harmony import */ var _projetos_existentes_projetos_existentes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projetos-existentes/projetos-existentes.component */ "./src/app/projetos-existentes/projetos-existentes.component.ts");






var routes = [
    {
        path: '',
        redirectTo: '/projetos',
        pathMatch: 'full'
    },
    {
        path: 'projetos',
        component: _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_3__["ProjetosComponent"],
        data: {
            breadcrumb: "projetos"
        }
    },
    {
        path: 'projetoEspecificacao/:idEspecificacao',
        component: _projetos_especificacao_projetos_especificacao_component__WEBPACK_IMPORTED_MODULE_4__["ProjetosEspecificacaoComponent"],
        data: {
            breadcrumb: "especificação de projeto"
        }
    },
    {
        path: 'projetosExistentes/:idTecnologia',
        component: _projetos_existentes_projetos_existentes_component__WEBPACK_IMPORTED_MODULE_5__["ProjetosExistentesComponent"],
        data: {
            breadcrumb: "projetos existentes"
        }
    },
    { path: '**', redirectTo: '/projetos' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*#mainContainer{\r\n\tbackground-image: url(../assets/images/background.jpg);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-attachment: fixed;\r\n\tbackground-position: center; \r\n}*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBS0UiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI21haW5Db250YWluZXJ7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG59Ki8iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portifolio-vinicius';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainmenu/mainmenu.component */ "./src/app/mainmenu/mainmenu.component.ts");
/* harmony import */ var _git_git_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./git/git.component */ "./src/app/git/git.component.ts");
/* harmony import */ var _left_aside_column_left_aside_column_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./left-aside-column/left-aside-column.component */ "./src/app/left-aside-column/left-aside-column.component.ts");
/* harmony import */ var _right_aside_column_right_aside_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./right-aside-column/right-aside-column.component */ "./src/app/right-aside-column/right-aside-column.component.ts");
/* harmony import */ var _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projetos/projetos.component */ "./src/app/projetos/projetos.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _projetos_especificacao_projetos_especificacao_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projetos-especificacao/projetos-especificacao.component */ "./src/app/projetos-especificacao/projetos-especificacao.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _projetos_carousel_imagens_projetos_carousel_imagens_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projetos-carousel-imagens/projetos-carousel-imagens.component */ "./src/app/projetos-carousel-imagens/projetos-carousel-imagens.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _main_column_main_column_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-column/main-column.component */ "./src/app/main-column/main-column.component.ts");
/* harmony import */ var _projetos_existentes_projetos_existentes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projetos-existentes/projetos-existentes.component */ "./src/app/projetos-existentes/projetos-existentes.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_17__);


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_5__["MainmenuComponent"],
                _git_git_component__WEBPACK_IMPORTED_MODULE_6__["GitComponent"],
                _left_aside_column_left_aside_column_component__WEBPACK_IMPORTED_MODULE_7__["LeftAsideColumnComponent"],
                _right_aside_column_right_aside_column_component__WEBPACK_IMPORTED_MODULE_8__["RightAsideColumnComponent"],
                _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_9__["ProjetosComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _projetos_especificacao_projetos_especificacao_component__WEBPACK_IMPORTED_MODULE_11__["ProjetosEspecificacaoComponent"],
                _projetos_carousel_imagens_projetos_carousel_imagens_component__WEBPACK_IMPORTED_MODULE_13__["ProjetosCarouselImagensComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbComponent"],
                _main_column_main_column_component__WEBPACK_IMPORTED_MODULE_15__["MainColumnComponent"],
                _projetos_existentes_projetos_existentes_component__WEBPACK_IMPORTED_MODULE_16__["ProjetosExistentesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAlertModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdownModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_17__["CardModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'pt_BR' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.css":
/*!*****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb{\r\n    background-color: rgb(0, 0, 0,0); \r\n}\r\n\r\n.breadcrumb-item.active{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLDApOyBcclxufVxyXG5cclxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmV7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.ts":
/*!****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




//Código de https://medium.com/@bo.vandersteene/angular-5-breadcrumb-c225fd9df5cf
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to the NavigationEnd event
        this.breadcrumbs$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return _this.buildBreadCrumb(_this.activatedRoute.root); }));
    };
    BreadcrumbComponent.prototype.buildBreadCrumb = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        //If no routeConfig is avalailable we are on the root path
        var label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'projetos';
        var path = route.routeConfig ? route.routeConfig.path : '/projetos';
        //In the routeConfig the complete path is not available, 
        //so we rebuild it each time
        var nextUrl = "" + url + path + "/";
        var breadcrumb = {
            label: label,
            url: nextUrl
        };
        var newBreadcrumbs = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](breadcrumbs, [breadcrumb]);
        if (route.firstChild) {
            //If we are not on our current path yet, 
            //there will be more children to look after, to build our breadcumb
            var nextUrl_1 = "" + url + path + "/";
            return this.buildBreadCrumb(route.firstChild, nextUrl_1, newBreadcrumbs);
        }
        return newBreadcrumbs;
    };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/breadcrumb/breadcrumb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    background-color: rgb(40,62,74); \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLDYyLDc0KTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalStrings/globalString */ "./src/app/globalStrings/globalString.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.globalUrl = _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_2__["GlobalStrings"].getGlobalUrlFragment();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/git/git.component.css":
/*!***************************************!*\
  !*** ./src/app/git/git.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdC9naXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/git/git.component.ts":
/*!**************************************!*\
  !*** ./src/app/git/git.component.ts ***!
  \**************************************/
/*! exports provided: GitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitComponent", function() { return GitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GitComponent = /** @class */ (function () {
    function GitComponent() {
    }
    GitComponent.prototype.ngOnInit = function () {
    };
    GitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-git',
            template: __webpack_require__(/*! raw-loader!./git.component.html */ "./node_modules/raw-loader/index.js!./src/app/git/git.component.html"),
            styles: [__webpack_require__(/*! ./git.component.css */ "./src/app/git/git.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GitComponent);
    return GitComponent;
}());



/***/ }),

/***/ "./src/app/globalStrings/globalString.ts":
/*!***********************************************!*\
  !*** ./src/app/globalStrings/globalString.ts ***!
  \***********************************************/
/*! exports provided: GlobalStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStrings", function() { return GlobalStrings; });
var GlobalStrings = /** @class */ (function () {
    function GlobalStrings() {
    }
    GlobalStrings.getGlobalUrlFragment = function () {
        return GlobalStrings.devUrl;
    };
    //
    GlobalStrings.prodUrl = '/portifolioVinicius';
    GlobalStrings.devUrl = '/';
    return GlobalStrings;
}());



/***/ }),

/***/ "./src/app/left-aside-column-classes/SOCIAL_MEDIA_BUTTONS.ts":
/*!*******************************************************************!*\
  !*** ./src/app/left-aside-column-classes/SOCIAL_MEDIA_BUTTONS.ts ***!
  \*******************************************************************/
/*! exports provided: SOCIALS_MEDIA_BUTTONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIALS_MEDIA_BUTTONS", function() { return SOCIALS_MEDIA_BUTTONS; });
var SOCIALS_MEDIA_BUTTONS = [
    /*{imagemUrl: "assets/images/iconesRedesSociais/iconeFacebook.png",mediaUrl: "https://www.facebook.com/vinicius.silvano.3139"},*/
    { imagemUrl: "assets/images/iconesRedesSociais/iconeLinkedIn.png", mediaUrl: "https://www.linkedin.com/in/vinícius-silvano-634a1b10a", titulo: "Perfil do LinkedIn" },
    { imagemUrl: "assets/images/iconesRedesSociais/GitHub-Mark-64px.png", mediaUrl: "https://github.com/viniciusSilvano", titulo: "Perfil do Github" }
];


/***/ }),

/***/ "./src/app/left-aside-column/left-aside-column.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/left-aside-column/left-aside-column.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnRedeSocial{\r\n\tbackground-repeat: no-repeat !important; \r\n\tbackground-size: cover !important;\t\t\t\t\t\t\r\n\tbackground-position: center !important;\r\n}\r\n\r\n.btnRedeSocial:hover{\r\n\topacity: 0.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC1hc2lkZS1jb2x1bW4vbGVmdC1hc2lkZS1jb2x1bW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHVDQUF1QztDQUN2QyxpQ0FBaUM7Q0FDakMsc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvbGVmdC1hc2lkZS1jb2x1bW4vbGVmdC1hc2lkZS1jb2x1bW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5SZWRlU29jaWFse1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDsgXHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1x0XHRcdFx0XHRcdFxyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuUmVkZVNvY2lhbDpob3ZlcntcclxuXHRvcGFjaXR5OiAwLjU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/left-aside-column/left-aside-column.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/left-aside-column/left-aside-column.component.ts ***!
  \******************************************************************/
/*! exports provided: LeftAsideColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftAsideColumnComponent", function() { return LeftAsideColumnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _social_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social-media.service */ "./src/app/social-media.service.ts");



var LeftAsideColumnComponent = /** @class */ (function () {
    function LeftAsideColumnComponent(socialMediaService) {
        this.socialMediaService = socialMediaService;
    }
    LeftAsideColumnComponent.prototype.getSocialMediaButtons = function () {
        var _this = this;
        this.socialMediaService.getSocialMediaButtons()
            .subscribe(function (socialMediaButtons) { return _this.buttons = socialMediaButtons; });
    };
    LeftAsideColumnComponent.prototype.ngOnInit = function () {
        this.getSocialMediaButtons();
    };
    LeftAsideColumnComponent.ctorParameters = function () { return [
        { type: _social_media_service__WEBPACK_IMPORTED_MODULE_2__["SocialMediaService"] }
    ]; };
    LeftAsideColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-left-aside-column',
            template: __webpack_require__(/*! raw-loader!./left-aside-column.component.html */ "./node_modules/raw-loader/index.js!./src/app/left-aside-column/left-aside-column.component.html"),
            styles: [__webpack_require__(/*! ./left-aside-column.component.css */ "./src/app/left-aside-column/left-aside-column.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_social_media_service__WEBPACK_IMPORTED_MODULE_2__["SocialMediaService"]])
    ], LeftAsideColumnComponent);
    return LeftAsideColumnComponent;
}());



/***/ }),

/***/ "./src/app/main-column/main-column.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main-column/main-column.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*#mainColumnContainer{*/\r\n    /*background-color: #F9FEFF;*/\r\n    /*    background-color:rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n}\r\n.card-header{\r\n  border-color: white;\r\n}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb2x1bW4vbWFpbi1jb2x1bW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7SUFDcEIsNkJBQTZCO0lBQ2pDOzs7OztFQUtFIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1jb2x1bW4vbWFpbi1jb2x1bW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qI21haW5Db2x1bW5Db250YWluZXJ7Ki9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI0Y5RkVGRjsqL1xyXG4vKiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main-column/main-column.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-column/main-column.component.ts ***!
  \******************************************************/
/*! exports provided: MainColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainColumnComponent", function() { return MainColumnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var MainColumnComponent = /** @class */ (function () {
    function MainColumnComponent(router, location) {
        this.router = router;
        this.location = location;
        this.isHome = false;
    }
    MainColumnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            // see also
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (val.url == "/projetos" || val.url == "/") {
                    _this.isHome = true;
                }
                else {
                    _this.isHome = false;
                }
            }
        });
    };
    MainColumnComponent.prototype.getBack = function () {
        this.location.back();
    };
    MainColumnComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    MainColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-column',
            template: __webpack_require__(/*! raw-loader!./main-column.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-column/main-column.component.html"),
            styles: [__webpack_require__(/*! ./main-column.component.css */ "./src/app/main-column/main-column.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], MainColumnComponent);
    return MainColumnComponent;
}());



/***/ }),

/***/ "./src/app/mainmenu/mainmenu.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainmenu/mainmenu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    background-color: #283e4a;\r\n}\r\n.MenuDropdown{\r\n    border-style: solid;\r\n    padding: 5px;\r\n}\r\n.MenuDropdownItem{\r\n    width:100%;\r\n    height:100%;\r\n    padding: 0px;\r\n    color:  rgb(79,123,255);\r\n}\r\n.MenuDropdown, .MenuDropdownItem{\r\n    border-color: rgb(79,123,255);\r\n    background-color:  #283e4a;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbm1lbnUvbWFpbm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL21haW5tZW51L21haW5tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzZTRhO1xyXG59XHJcbi5NZW51RHJvcGRvd257XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5NZW51RHJvcGRvd25JdGVte1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgY29sb3I6ICByZ2IoNzksMTIzLDI1NSk7XHJcbn1cclxuLk1lbnVEcm9wZG93biwgLk1lbnVEcm9wZG93bkl0ZW17XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig3OSwxMjMsMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMjgzZTRhO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/mainmenu/mainmenu.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainmenu/mainmenu.component.ts ***!
  \************************************************/
/*! exports provided: MainmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainmenuComponent", function() { return MainmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projetos_especificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projetos-especificacao.service */ "./src/app/projetos-especificacao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var MainmenuComponent = /** @class */ (function () {
    function MainmenuComponent(projetosEspecificacaoService, router, location) {
        this.projetosEspecificacaoService = projetosEspecificacaoService;
        this.router = router;
        this.location = location;
    }
    MainmenuComponent.prototype.ngOnInit = function () {
        this.getAllProjetosEspecificacao();
    };
    MainmenuComponent.prototype.navigateToEspecificacao = function (id) {
        console.log("navigate to" + id);
        //console.log(this.router.navigate(['/projetoEspecificacao/',id],));
        this.router.navigate(['/projetoEspecificacao', id], { skipLocationChange: false, replaceUrl: true });
    };
    MainmenuComponent.prototype.getAllProjetosEspecificacao = function () {
        var _this = this;
        this.projetosEspecificacaoService
            .getAllProjetosEspecificacoes()
            .subscribe(function (projetos) {
            _this.projetosDropDownList = projetos;
        });
    };
    MainmenuComponent.ctorParameters = function () { return [
        { type: _projetos_especificacao_service__WEBPACK_IMPORTED_MODULE_2__["ProjetosEspecificacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    MainmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainmenu',
            template: __webpack_require__(/*! raw-loader!./mainmenu.component.html */ "./node_modules/raw-loader/index.js!./src/app/mainmenu/mainmenu.component.html"),
            styles: [__webpack_require__(/*! ./mainmenu.component.css */ "./src/app/mainmenu/mainmenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projetos_especificacao_service__WEBPACK_IMPORTED_MODULE_2__["ProjetosEspecificacaoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], MainmenuComponent);
    return MainmenuComponent;
}());



/***/ }),

/***/ "./src/app/messages-classes/alert.ts":
/*!*******************************************!*\
  !*** ./src/app/messages-classes/alert.ts ***!
  \*******************************************/
/*! exports provided: ALERTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERTS", function() { return ALERTS; });
var ALERTS = [{
        id: 1,
        type: 'success',
        message: 'This is an success alert',
    }, {
        id: 2,
        type: 'info',
        message: 'This is an info alert',
    }, {
        id: 3,
        type: 'warning',
        message: 'This is a warning alert',
    }, {
        id: 4,
        type: 'danger',
        message: 'This is a danger alert',
    }, {
        id: 5,
        type: 'primary',
        message: 'This is a primary alert',
    }, {
        id: 6,
        type: 'secondary',
        message: 'This is a secondary alert',
    }, {
        id: 7,
        type: 'light',
        message: 'This is a light alert',
    }, {
        id: 8,
        type: 'dark',
        message: 'This is a dark alert',
    }
];


/***/ }),

/***/ "./src/app/messages.service.ts":
/*!*************************************!*\
  !*** ./src/app/messages.service.ts ***!
  \*************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages_classes_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-classes/alert */ "./src/app/messages-classes/alert.ts");



var MessagesService = /** @class */ (function () {
    function MessagesService() {
    }
    MessagesService.prototype.getMessageById = function (id) {
        return _messages_classes_alert__WEBPACK_IMPORTED_MODULE_2__["ALERTS"].find(function (x) { return x.id == id; });
    };
    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/projetos-carousel-imagens/projetos-carousel-imagens.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/projetos-carousel-imagens/projetos-carousel-imagens.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carouselImage{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n    height: 50%;\r\n    cursor:pointer;\r\n}\r\n.carouselContainer{\r\n    background-color: #CFD3D4;\r\n    \r\n}\r\n#tituloCarousel{\r\n    color: #000FFF;\r\n    background-color: #CFD3D4;\r\n}\r\n#descricaoCarousel{\r\n    color: #000FFF;\r\n    background-color: #CFD3D4;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MtY2Fyb3VzZWwtaW1hZ2Vucy9wcm9qZXRvcy1jYXJvdXNlbC1pbWFnZW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wcm9qZXRvcy1jYXJvdXNlbC1pbWFnZW5zL3Byb2pldG9zLWNhcm91c2VsLWltYWdlbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbEltYWdle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5jYXJvdXNlbENvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQzRDQ7XHJcbiAgICBcclxufVxyXG4jdGl0dWxvQ2Fyb3VzZWx7XHJcbiAgICBjb2xvcjogIzAwMEZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQzRDQ7XHJcbn1cclxuXHJcbiNkZXNjcmljYW9DYXJvdXNlbHtcclxuICAgIGNvbG9yOiAjMDAwRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDNENDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/projetos-carousel-imagens/projetos-carousel-imagens.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/projetos-carousel-imagens/projetos-carousel-imagens.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProjetosCarouselImagensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosCarouselImagensComponent", function() { return ProjetosCarouselImagensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projetos_especificacao_projetos_especificacao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projetos-especificacao/projetos-especificacao.component */ "./src/app/projetos-especificacao/projetos-especificacao.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../messages.service */ "./src/app/messages.service.ts");





var ProjetosCarouselImagensComponent = /** @class */ (function () {
    function ProjetosCarouselImagensComponent(projetoEspecificacao, modalService, messageService) {
        this.projetoEspecificacao = projetoEspecificacao;
        this.modalService = modalService;
        this.messageService = messageService;
    }
    ProjetosCarouselImagensComponent.prototype.ngOnInit = function () {
        this.projeto = this.projetoEspecificacao.getProjetoEspecificacao();
        this.alert = this.messageService.getMessageById(3);
        this.alert.message = "Clique na imagem para ampliá-la";
    };
    ProjetosCarouselImagensComponent.prototype.showEvent = function (event) {
        alert(event);
    };
    ProjetosCarouselImagensComponent.prototype.close = function (alert) {
        this.alert = undefined;
    };
    ProjetosCarouselImagensComponent.prototype.pegarURLDaImagemAtual = function (imagemSelecionada, content) {
        this.imagemSelecionada = imagemSelecionada;
        this.modalService.open(content, { size: 'lg' });
    };
    ProjetosCarouselImagensComponent.ctorParameters = function () { return [
        { type: _projetos_especificacao_projetos_especificacao_component__WEBPACK_IMPORTED_MODULE_2__["ProjetosEspecificacaoComponent"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }
    ]; };
    ProjetosCarouselImagensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projetos-carousel-imagens',
            template: __webpack_require__(/*! raw-loader!./projetos-carousel-imagens.component.html */ "./node_modules/raw-loader/index.js!./src/app/projetos-carousel-imagens/projetos-carousel-imagens.component.html"),
            styles: [__webpack_require__(/*! ./projetos-carousel-imagens.component.css */ "./src/app/projetos-carousel-imagens/projetos-carousel-imagens.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projetos_especificacao_projetos_especificacao_component__WEBPACK_IMPORTED_MODULE_2__["ProjetosEspecificacaoComponent"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]])
    ], ProjetosCarouselImagensComponent);
    return ProjetosCarouselImagensComponent;
}());



/***/ }),

/***/ "./src/app/projetos-classes/TECNOLOGIAS.ts":
/*!*************************************************!*\
  !*** ./src/app/projetos-classes/TECNOLOGIAS.ts ***!
  \*************************************************/
/*! exports provided: TECNOLOGIAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TECNOLOGIAS", function() { return TECNOLOGIAS; });
/* harmony import */ var _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalStrings/globalString */ "./src/app/globalStrings/globalString.ts");

var TECNOLOGIAS = [
    {
        idTecnologia: 1,
        nome: "ANDROID",
        imagemLocation: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_0__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/android-logo.png",
        idEspecificacao: 1,
    },
    {
        idTecnologia: 2,
        nome: "SPRING BOOT",
        // imagemLocation:"../../portifolioVinicius/assets/images/spring-boot-logo.jpg",
        imagemLocation: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_0__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/spring-boot-logo.jpg",
        idEspecificacao: 2
    }
];


/***/ }),

/***/ "./src/app/projetos-especificacao-classes/PROJETOS_ESPECIFICACOES.ts":
/*!***************************************************************************!*\
  !*** ./src/app/projetos-especificacao-classes/PROJETOS_ESPECIFICACOES.ts ***!
  \***************************************************************************/
/*! exports provided: PROJETOS_ESPECIFICACOES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJETOS_ESPECIFICACOES", function() { return PROJETOS_ESPECIFICACOES; });
/* harmony import */ var _projeto_especificacao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projeto_especificacao */ "./src/app/projetos-especificacao-classes/projeto_especificacao.ts");
/* harmony import */ var _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalStrings/globalString */ "./src/app/globalStrings/globalString.ts");


var PROJETOS_ESPECIFICACOES = [
    {
        id: 1,
        tituloProjeto: "Alugueis",
        idTecnologia: 1,
        imagemDaTecnologia: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/android-logo.png",
        imagens: [
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-aluguel/main_activity.png", altTexto: "Tela principal", tituloCarousel: "Tela principal", descricaoCarousel: "A tela inicial do sistema mobile." },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-aluguel/estoque_activity.png", altTexto: "Tela de listagem de itens cadastrados", tituloCarousel: "Tela de listagem de itens" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-aluguel/estoque_activity_com_popupMenu.png", altTexto: "PopUp menu da tela de listagem", tituloCarousel: "PopUp menu da tela de listagem" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-aluguel/item_activity.png", altTexto: "Tela de cadastro/modificação de itens", tituloCarousel: "Tela de cadastro/modificação de itens" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-aluguel/calendarioCustomizado.png", altTexto: "Calendário customizado", tituloCarousel: "Calendário customizado", descricaoCarousel: "Utilizado para o cadastro de aluguel e listagem" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-aluguel/calendarioCustomizado2.png", altTexto: "Calendário customizado", tituloCarousel: "Calendário customizado", descricaoCarousel: "Selecionando uma data para cadastrar um aluguel" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-aluguel/cadastroAluguel.png", altTexto: "Tela de cadastro/modificação de aluguel", tituloCarousel: "Tela de cadastro/modificação de aluguel" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-aluguel/ListagemAluguel.png", altTexto: "Tela de listagem de alugueis", tituloCarousel: "Tela de listagem de alugueis" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-aluguel/ListagemAluguel2.png", altTexto: "Tela de listagem de alugueis", tituloCarousel: "Tela de listagem de alugueis" },
        ],
        accordionCards: [
            {
                id: 1,
                tituloDescricao: "Descrição",
                descricao: "\n                <article>\n                    <p>tempo de desenvolvimento: 156h 25min</p>\n                    <h2> O que \u00E9?</h2>\n                    <p>Aplicativo de alugueis e controle de estoque.</p>\n                    <h2>Requisitos</h2>\n                    <p>O sistema mobile deve cadastrar itens, com nome, data de entrega, e quantidade.</p>\n                    <p>O objetivo desse sistema \u00E9: Dar ao usu\u00E1rio o conhecimento de seus alugueis e do estoque de itens que s\u00E3o usados nesses alugueis,\n                    para isso ele necessita saber os dias de cada aluguel e a situa\u00E7\u00E3o que seu estoque se encontra.</p>\n\n                    <h2>Ferramentas utilizadas:</h2>\n                    <ul>\n                        <li>Microsoft Word 2007.</li>\n                        <li>Android Studio 3.3.1.</li>\n                        <li>Trello.</li>\n                        <li>Azure DevOps + GIT + Metodologia Scrum.</li>\n                        <li>Gimp 2 (prot\u00F3tipo de tela e arte, extens\u00E3o .xcf ).</li>\n                        <li>Free Officer 2018.</li>\n                        <li>Lucidchart (<a href=\"https://www.lucidchart.com\" target=_blank>https://www.lucidchart.com </a>).</li>\n                        <li>JUNIT.</li>\n                    </ul>\n                    <h2>Documenta\u00E7\u00F5es utilizadas:</h2>\n                    <ul>\n                        <li>Diagrama de caso de uso (UC, intera\u00E7\u00E3o do usu\u00E1rio com o sistema).</li>\n                        <li>Especifica\u00E7\u00E3o de caso de uso (ECU, detalhamentos dos UCs(Casos de uso)).</li>\n                        <li>Diagrama de classe(classes/entidades principais do sistema).</li>\n                        <li>Documento de requisitos(regras de neg\u00F3cio).</li>\n                        <li>Fluxograma (apresenta o fluxo principal do app).</li>\n                        <li>Diagrama de estados (representa a mudan\u00E7a de estados da entidade Aluguel).</li>\n                    </ul>\n                    <h2>Vers\u00E3o do projeto android:</h2>\n                    <ul>\n                        <li>compileSdkVersion 27</li>\n                        <li>minSdkVersion 19</li>\n                        <li>targetSdkVersion 27</li>\n                    </ul>\n                    <h2>Atores:</h2>\n                    <ul>\n                        <li>Vin\u00EDcius Silvano Silveira Felipe</li>\n                    </ul>\n                </article>\n                ",
                collapse: _projeto_especificacao__WEBPACK_IMPORTED_MODULE_0__["Collapse"].collapsed
            },
            {
                id: 2,
                tituloDescricao: "Sobre o Projeto",
                descricao: "\n                <article>\n                    <h2>As Entidades do sistema</h2>\n                    <ul>\n                        <li>Aluguel: A entidade que representa os alugueis criados pelo usu\u00E1rios, possui uma rela\u00E7\u00E3o de muitos para muitos com a entidade item.</li>\n                        <li>Item: A entidade que representa os itens do aluguel.</li>\n                        <li>AluguelItens: A entidade que representa o relacionamento entre aluguel e itens.</li>\n                    </ul>\n                    <h2>Arquitetura</h2>\n                    <p>A arquitetura do projeto \u00E9 <strong>MVVM</strong> (Model View e View model).</p>\n                    <p>Para a persist\u00EAncia de dados foi utilizado a biblioteca Room, que \u00E9 altamente recomendada pelos desenvolvedores.</p>\n                    <h2>Design Patterns (Padr\u00F5es de Projeto).</h2>\n                    <p>Os designers patterns utilizados foram:</p>\n                    <ul>\n                        <li>Factory</li>\n                        <li>Builder</li>\n                        <li>Dao</li>\n                        <li>Singleton</li>\n                    </ul>\n                    <h3>Factory</h3>\n                    <p>O padr\u00E3o factory foi utilizado para retornar inst\u00E2ncias dos reposit\u00F3rios das entidades do sistema e\n                    ela foi utilizada junto ao padr\u00E3o <strong>Singleton</strong>, pois, o repository \u00E9 algo custoso ao sistema e deve ter apenas uma inst\u00E2ncia de cada.</p>\n                    <h3>Builder</h3>\n                    <p>\n                        As entidades aluguel e item do sistema possuiam atributos opcionais, o que acaba gerando um pouco de confus\u00E3o,\n                        , ent\u00E3o eu decidi utilizar o design pattern builder que facilita bastante a leitura do que \u00E9 opcional e do que \u00E9 obrigat\u00F3rio na inst\u00E2ncia dessas entidades.\n                    </p>\n                    <h2>Dao</h2>\n                    <p>\n                        \u00C9, aparentemente, o padr\u00E3o mais utilizado para persist\u00EAncia de dados e \u00E9 utilizado pela biblioteca <strong>ROOM</strong>.\n                    </p>\n                </article>    \n                ",
                collapse: _projeto_especificacao__WEBPACK_IMPORTED_MODULE_0__["Collapse"].collapsed
            }
        ]
    },
    {
        id: 2,
        tituloProjeto: "SGQ(Sistema de Gerenciamento de Questão) - TCC",
        idTecnologia: 2,
        imagemDaTecnologia: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/spring-boot-logo.jpg",
        imagens: [
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/TelaInicial.PNG", altTexto: "Tela principal" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/TelaInicial2.PNG", altTexto: "Tela principal" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/TelaInicial3.PNG", altTexto: "Tela principal" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/TelaInicial4.PNG", altTexto: "Tela principal" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/CadastrarQuestao.PNG", altTexto: "Tela de cadastrar questão" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/CadastrarQuestao2.PNG", altTexto: "Tela de cadastrar questão" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/CadastrarQuestao3.PNG", altTexto: "Tela de cadastrar questão" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/CadastrarQuestao4.PNG", altTexto: "Tela de cadastrar questão" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/consultarQuestao.PNG", altTexto: "Tela de consultar questão" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/consultarQuestao2.PNG", altTexto: "Tela de consultar questão" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/consultarQuestao3.PNG", altTexto: "Tela de consultar questão" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/consultarQuestao4.PNG", altTexto: "Tela de consultar questão" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/cadastrarProfessor.PNG", altTexto: "Tela de cadastrar professor" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/cadastrarDisciplina.PNG", altTexto: "Tela de cadastrar disciplina" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/cadastrarProva.PNG", altTexto: "Tela de cadastrar prova" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/cadastrarProva2.PNG", altTexto: "Tela de cadastrar prova" },
            { imageURL: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/projeto-sgq/consultarProva.PNG", altTexto: "Tela de consultar provas" }
        ],
        tecnologiasAuxiliares: [
            {
                idTecnologiaAuxiliar: 1,
                imagemLocation: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/tecnologias-auxiliares/bootstrap-logo.svg"
            },
            {
                idTecnologiaAuxiliar: 2,
                imagemLocation: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/tecnologias-auxiliares/logoJquery.gif"
            },
            {
                idTecnologiaAuxiliar: 3,
                imagemLocation: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/tecnologias-auxiliares/postgresqlLogo.png"
            },
            {
                idTecnologiaAuxiliar: 4,
                imagemLocation: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/tecnologias-auxiliares/tinymceLogo.png"
            },
            {
                idTecnologiaAuxiliar: 5,
                imagemLocation: "../.." + _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_1__["GlobalStrings"].getGlobalUrlFragment() + "/assets/images/tecnologias-auxiliares/thymeleafLogo.png"
            }
        ],
        accordionCards: [
            {
                id: 1,
                tituloDescricao: "Descrição",
                descricao: "\n                    <p>Esse sistema foi descontinuado</p>\n                    <h2>O que \u00E9?</h2>\n                    <p>Esse foi o meu projeto de conclus\u00E3o de curso da faculdade.\n                    Ele serve para o coordenador de um curso de ensino criar provas \n                    de forma aleat\u00F3ria com um banco de quest\u00F5es, as quest\u00F5es s\u00E3o organizadas\n                    por meio da Taxonomia de Bloom.</p>\n                    <p>Os professores eram respons\u00E1veis pelo cadastro das quest\u00F5es \n                    e o coordenador homologava(dava o aceite) dessas quest\u00F5es para a cria\u00E7\u00E3o das provas.</p>\n                    <h2>Ferramentas utilizadas:</h2>\n                    <ul>\n                        <li>Microsoft Word 2007.</li>\n                        <li>Eclipse</li>\n                        <li>Spring boot</li>\n                        <li>JQuery</li>\n                        <li>Bootstrap 3</li>\n                        <li>TinyMCE (Vers\u00E3o gratuita)</li>\n                        <li>PostgresSQL</li>\n                        <li>Thymeleaf</li>\n                    </ul>\n                    <h2>Documenta\u00E7\u00F5es utilizadas:</h2>\n                    <ul>\n                        <li>Diagrama de caso de uso (UC, intera\u00E7\u00E3o do usu\u00E1rio com o sistema).</li>\n                        <li>Especifica\u00E7\u00E3o de caso de uso (ECU, detalhamentos dos UCs(Casos de uso)).</li>\n                        <li>Diagrama de classe(classes/entidades principais do sistema).</li>\n                        <li>Documento de requisitos(regras de neg\u00F3cio).</li>\n                        <li>Documento de vis\u00E3o(vis\u00E3o geral do sistema).</li>\n                        <li>Documento de regra de neg\u00F3cio.</li>\n                        <li>Especifica\u00E7\u00E3o suplementar.</li>\n                    </ul>\n                    <h2>Autores</h2>\n                    <p>Vin\u00EDcius Silvano (na parte de cria\u00E7\u00E3o do sistema, pois o TCC foi feito em dupla)</p>\n                ",
                collapse: _projeto_especificacao__WEBPACK_IMPORTED_MODULE_0__["Collapse"].collapsed
            },
            {
                id: 2,
                tituloDescricao: "Legal mas onde está o código?",
                descricao: "<h2>Acesse o c\u00F3digo pelo meu github</h2>\n                    <p>C\u00F3digo em: <a href=\"https://github.com/viniciusSilvano/codigo_TCC\" target=_blank>TCC</a></p>",
                collapse: _projeto_especificacao__WEBPACK_IMPORTED_MODULE_0__["Collapse"].collapsed
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/projetos-especificacao-classes/projeto_especificacao.ts":
/*!*************************************************************************!*\
  !*** ./src/app/projetos-especificacao-classes/projeto_especificacao.ts ***!
  \*************************************************************************/
/*! exports provided: AccordionCard, Collapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionCard", function() { return AccordionCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
var AccordionCard = /** @class */ (function () {
    function AccordionCard() {
    }
    return AccordionCard;
}());

var Collapse;
(function (Collapse) {
    Collapse["collapsed"] = "collapse";
    Collapse["notCollapsed"] = "collpase show";
})(Collapse || (Collapse = {}));


/***/ }),

/***/ "./src/app/projetos-especificacao.service.ts":
/*!***************************************************!*\
  !*** ./src/app/projetos-especificacao.service.ts ***!
  \***************************************************/
/*! exports provided: ProjetosEspecificacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosEspecificacaoService", function() { return ProjetosEspecificacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projetos_especificacao_classes_PROJETOS_ESPECIFICACOES__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projetos-especificacao-classes/PROJETOS_ESPECIFICACOES */ "./src/app/projetos-especificacao-classes/PROJETOS_ESPECIFICACOES.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ProjetosEspecificacaoService = /** @class */ (function () {
    function ProjetosEspecificacaoService() {
    }
    ProjetosEspecificacaoService.prototype.getProjetoEspecificaoById = function (projetoEspecificacao) {
        var id = typeof projetoEspecificacao === 'number' ? projetoEspecificacao : projetoEspecificacao.id;
        var result = _projetos_especificacao_classes_PROJETOS_ESPECIFICACOES__WEBPACK_IMPORTED_MODULE_2__["PROJETOS_ESPECIFICACOES"].find(function (x) { return x.id == id; });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
    };
    ProjetosEspecificacaoService.prototype.getAllProjetosEspecificacoes = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_projetos_especificacao_classes_PROJETOS_ESPECIFICACOES__WEBPACK_IMPORTED_MODULE_2__["PROJETOS_ESPECIFICACOES"]);
    };
    ProjetosEspecificacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjetosEspecificacaoService);
    return ProjetosEspecificacaoService;
}());



/***/ }),

/***/ "./src/app/projetos-especificacao/projetos-especificacao.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/projetos-especificacao/projetos-especificacao.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tituloTelasDoSistema{\r\n    color: white;\r\n}\r\n\r\n.accordionCard{\r\n    color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MtZXNwZWNpZmljYWNhby9wcm9qZXRvcy1lc3BlY2lmaWNhY2FvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG9zLWVzcGVjaWZpY2FjYW8vcHJvamV0b3MtZXNwZWNpZmljYWNhby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdHVsb1RlbGFzRG9TaXN0ZW1he1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uQ2FyZHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/projetos-especificacao/projetos-especificacao.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/projetos-especificacao/projetos-especificacao.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjetosEspecificacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosEspecificacaoComponent", function() { return ProjetosEspecificacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projetos_especificacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projetos-especificacao.service */ "./src/app/projetos-especificacao.service.ts");
/* harmony import */ var _projetos_especificacao_classes_projeto_especificacao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projetos-especificacao-classes/projeto_especificacao */ "./src/app/projetos-especificacao-classes/projeto_especificacao.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProjetosEspecificacaoComponent = /** @class */ (function () {
    function ProjetosEspecificacaoComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    ProjetosEspecificacaoComponent.prototype.ngOnInit = function () {
        this.initiateRouterEventSubscription();
        this.initializeData();
    };
    ProjetosEspecificacaoComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.routerSubscription.unsubscribe();
    };
    ProjetosEspecificacaoComponent.prototype.initiateRouterEventSubscription = function () {
        var _this = this;
        //Com o codigo abaixo é detectado qualquer mudança na url em todas as "paginas"
        // do app, portanto, eu criei o metodo ngondestroy para me livrar de algo 
        // ainda desnecessário para as demais "paginas ou views"
        this.routerSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                // Navigation Ended Successfully.
                console.log(event.url);
                _this.initializeData();
            }
        });
    };
    ProjetosEspecificacaoComponent.prototype.initializeData = function () {
        this.setProjetoEspecificacao();
        this.projetoEspecificacao = this.getProjetoEspecificacao();
    };
    ProjetosEspecificacaoComponent.prototype.getProjetoEspecificacao = function () {
        return this.projetoEspecificacao;
    };
    ProjetosEspecificacaoComponent.prototype.alertar = function () {
        console.log("o alerta");
    };
    ProjetosEspecificacaoComponent.prototype.setProjetoEspecificacao = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('idEspecificacao');
        this.service.getProjetoEspecificaoById(id)
            .subscribe(function (x) {
            _this.projetoEspecificacao = x
                , function (err) { return console.log("Error", err); };
        });
    };
    ProjetosEspecificacaoComponent.prototype.changeCollapse = function (idCard) {
        var accordionCard;
        accordionCard = this.projetoEspecificacao.accordionCards.find(function (x) { return x.id == idCard; });
        accordionCard.collapse = accordionCard.collapse == _projetos_especificacao_classes_projeto_especificacao__WEBPACK_IMPORTED_MODULE_3__["Collapse"].notCollapsed ? _projetos_especificacao_classes_projeto_especificacao__WEBPACK_IMPORTED_MODULE_3__["Collapse"].collapsed : _projetos_especificacao_classes_projeto_especificacao__WEBPACK_IMPORTED_MODULE_3__["Collapse"].notCollapsed;
    };
    ProjetosEspecificacaoComponent.prototype.testClick = function (numImagem) {
        alert(numImagem);
    };
    ProjetosEspecificacaoComponent.ctorParameters = function () { return [
        { type: _projetos_especificacao_service__WEBPACK_IMPORTED_MODULE_2__["ProjetosEspecificacaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ProjetosEspecificacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projetos-especificacao',
            template: __webpack_require__(/*! raw-loader!./projetos-especificacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/projetos-especificacao/projetos-especificacao.component.html"),
            styles: [__webpack_require__(/*! ./projetos-especificacao.component.css */ "./src/app/projetos-especificacao/projetos-especificacao.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projetos_especificacao_service__WEBPACK_IMPORTED_MODULE_2__["ProjetosEspecificacaoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProjetosEspecificacaoComponent);
    return ProjetosEspecificacaoComponent;
}());



/***/ }),

/***/ "./src/app/projetos-existentes.service.ts":
/*!************************************************!*\
  !*** ./src/app/projetos-existentes.service.ts ***!
  \************************************************/
/*! exports provided: ProjetosExistentesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosExistentesService", function() { return ProjetosExistentesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projetos_especificacao_classes_PROJETOS_ESPECIFICACOES__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projetos-especificacao-classes/PROJETOS_ESPECIFICACOES */ "./src/app/projetos-especificacao-classes/PROJETOS_ESPECIFICACOES.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ProjetosExistentesService = /** @class */ (function () {
    function ProjetosExistentesService() {
    }
    ProjetosExistentesService.prototype.getProjetoEspecificaoByIdTecnologia = function (projetoEspecificacao) {
        var id = typeof projetoEspecificacao === 'number' ? projetoEspecificacao : projetoEspecificacao.idTecnologia;
        //tentar fazer isso dessa vez com o filter
        var result = Object.assign([], _projetos_especificacao_classes_PROJETOS_ESPECIFICACOES__WEBPACK_IMPORTED_MODULE_2__["PROJETOS_ESPECIFICACOES"]).filter(function (x) { return x.idTecnologia == id; });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
    };
    ProjetosExistentesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjetosExistentesService);
    return ProjetosExistentesService;
}());



/***/ }),

/***/ "./src/app/projetos-existentes/projetos-existentes.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/projetos-existentes/projetos-existentes.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG9zLWV4aXN0ZW50ZXMvcHJvamV0b3MtZXhpc3RlbnRlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/projetos-existentes/projetos-existentes.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/projetos-existentes/projetos-existentes.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProjetosExistentesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosExistentesComponent", function() { return ProjetosExistentesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projetos_existentes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projetos-existentes.service */ "./src/app/projetos-existentes.service.ts");





var ProjetosExistentesComponent = /** @class */ (function () {
    function ProjetosExistentesComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
    }
    ProjetosExistentesComponent.prototype.ngOnInit = function () {
        this.setProjetosExistentesById();
    };
    ProjetosExistentesComponent.prototype.setProjetosExistentesById = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('idTecnologia');
        this.service.getProjetoEspecificaoByIdTecnologia(id)
            .subscribe(function (x) {
            _this.projetosExistente = x;
            _this.projetosExistenteFiltered = x;
        }, function (err) { return console.log("Error", err); });
    };
    ProjetosExistentesComponent.prototype.redirect = function (idEspecificacao) {
        this.router.navigateByUrl("/projetoEspecificacao/" + idEspecificacao);
    };
    ProjetosExistentesComponent.prototype.filterItem = function (value) {
        if (!value) {
            this.assignCopy();
        } // when nothing has typed
        this.projetosExistenteFiltered = Object.assign([], this.projetosExistente).filter(function (item) { return item.tituloProjeto.toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    ProjetosExistentesComponent.prototype.assignCopy = function () {
        this.projetosExistenteFiltered = Object.assign([], this.projetosExistente);
    };
    ProjetosExistentesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _projetos_existentes_service__WEBPACK_IMPORTED_MODULE_3__["ProjetosExistentesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProjetosExistentesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projetos-existentes',
            template: __webpack_require__(/*! raw-loader!./projetos-existentes.component.html */ "./node_modules/raw-loader/index.js!./src/app/projetos-existentes/projetos-existentes.component.html"),
            styles: [__webpack_require__(/*! ./projetos-existentes.component.css */ "./src/app/projetos-existentes/projetos-existentes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _projetos_existentes_service__WEBPACK_IMPORTED_MODULE_3__["ProjetosExistentesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjetosExistentesComponent);
    return ProjetosExistentesComponent;
}());



/***/ }),

/***/ "./src/app/projetos.service.ts":
/*!*************************************!*\
  !*** ./src/app/projetos.service.ts ***!
  \*************************************/
/*! exports provided: ProjetosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosService", function() { return ProjetosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _projetos_classes_TECNOLOGIAS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projetos-classes/TECNOLOGIAS */ "./src/app/projetos-classes/TECNOLOGIAS.ts");




var ProjetosService = /** @class */ (function () {
    function ProjetosService() {
    }
    ProjetosService.prototype.getProjetoCards = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_projetos_classes_TECNOLOGIAS__WEBPACK_IMPORTED_MODULE_3__["TECNOLOGIAS"]);
    };
    ProjetosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjetosService);
    return ProjetosService;
}());



/***/ }),

/***/ "./src/app/projetos/projetos.component.css":
/*!*************************************************!*\
  !*** ./src/app/projetos/projetos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projetoCardButton{\r\n    width:200px;\r\n    height:80px;\r\n    background-color: black;\r\n    border-style: solid;\r\n    border-width: medium;\r\n    border-color: green;\r\n}\r\n\r\n.projetoCardButton:hover{\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n\r\n}\r\n\r\n/* Animações dos botões do menu principal */\r\n\r\n.enfeiteButtonBottomLeft, .enfeiteButtonTopRight{\r\n    -webkit-animation-name: ProjetoCardButtonAni;\r\n            animation-name: ProjetoCardButtonAni;\r\n    -webkit-animation-duration: 0.7s;\r\n            animation-duration: 0.7s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n    -webkit-animation-delay: 0s;\r\n            animation-delay: 0s;\r\n}\r\n\r\n/* parte da animação dos botões */\r\n\r\n@-webkit-keyframes ProjetoCardButtonAni {\r\n    from { border-top-color: #6c757d; border-bottom-color: #6c757d;}\r\n    to { border-top-color: green; border-bottom-color: green;}\r\n}\r\n\r\n@keyframes ProjetoCardButtonAni {\r\n    from { border-top-color: #6c757d; border-bottom-color: #6c757d;}\r\n    to { border-top-color: green; border-bottom-color: green;}\r\n}\r\n\r\n.enfeiteButtonTopRight{\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    /*metade do tamanho do height do pai (.projetoCardButton) */\r\n    border-top: 40px solid green;\r\n    /*metade do tamanho do width do pai (.projetoCardButton)*/\r\n    border-left: 100px solid transparent;\r\n    top: 0;\r\n    right: 0;\r\n    opacity: 0.9;\r\n}\r\n\r\n.enfeiteButtonBottomLeft{\r\n    position: absolute;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    width: 0;\r\n    height: 0;\r\n    /*metade do tamanho do height do pai (.projetoCardButton)*/\r\n    border-bottom: 40px solid green;\r\n    /*metade do tamanho do width do pai (.projetoCardButton) */\r\n    border-right: 100px solid transparent;\r\n    left: 0;\r\n    opacity: 0.9\r\n}\r\n\r\n.btnTexto{\r\n    position: absolute;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    color: white;\r\n    right: 0;\r\n    top: 50;\r\n    bottom: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.projetoCardImagem{\r\n    position: absolute;\r\n    width: calc(100% - 50%);\r\n    height: calc(100% - 50%);\r\n    padding: 0px;\r\n    left: 0;\r\n    bottom: 100%;\r\n    top: 20%;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: left;\r\n    z-index: 1;\r\n    opacity: 0.9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvcHJvamV0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEVBQTBFOztBQUU5RTs7QUFDQSwyQ0FBMkM7O0FBQzNDO0lBQ0ksNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQyxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUNBLGlDQUFpQzs7QUFDakM7SUFDSSxPQUFPLHlCQUF5QixFQUFFLDRCQUE0QixDQUFDO0lBQy9ELEtBQUssdUJBQXVCLEVBQUUsMEJBQTBCLENBQUM7QUFDN0Q7O0FBSEE7SUFDSSxPQUFPLHlCQUF5QixFQUFFLDRCQUE0QixDQUFDO0lBQy9ELEtBQUssdUJBQXVCLEVBQUUsMEJBQTBCLENBQUM7QUFDN0Q7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLDJEQUEyRDtJQUMzRCw0QkFBNEI7SUFDNUIseURBQXlEO0lBQ3pELG9DQUFvQztJQUNwQyxNQUFNO0lBQ04sUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULDBEQUEwRDtJQUMxRCwrQkFBK0I7SUFDL0IsMERBQTBEO0lBQzFELHFDQUFxQztJQUNyQyxPQUFPO0lBQ1A7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osT0FBTztJQUNQLFlBQVk7SUFDWixRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZXRvcy9wcm9qZXRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2pldG9DYXJkQnV0dG9ue1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBoZWlnaHQ6ODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnByb2pldG9DYXJkQnV0dG9uOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcblxyXG59XHJcbi8qIEFuaW1hw6fDtWVzIGRvcyBib3TDtWVzIGRvIG1lbnUgcHJpbmNpcGFsICovXHJcbi5lbmZlaXRlQnV0dG9uQm90dG9tTGVmdCwgLmVuZmVpdGVCdXR0b25Ub3BSaWdodHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBQcm9qZXRvQ2FyZEJ1dHRvbkFuaTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxufVxyXG4vKiBwYXJ0ZSBkYSBhbmltYcOnw6NvIGRvcyBib3TDtWVzICovXHJcbkBrZXlmcmFtZXMgUHJvamV0b0NhcmRCdXR0b25Bbmkge1xyXG4gICAgZnJvbSB7IGJvcmRlci10b3AtY29sb3I6ICM2Yzc1N2Q7IGJvcmRlci1ib3R0b20tY29sb3I6ICM2Yzc1N2Q7fVxyXG4gICAgdG8geyBib3JkZXItdG9wLWNvbG9yOiBncmVlbjsgYm9yZGVyLWJvdHRvbS1jb2xvcjogZ3JlZW47fVxyXG59XHJcblxyXG5cclxuLmVuZmVpdGVCdXR0b25Ub3BSaWdodHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qbWV0YWRlIGRvIHRhbWFuaG8gZG8gaGVpZ2h0IGRvIHBhaSAoLnByb2pldG9DYXJkQnV0dG9uKSAqL1xyXG4gICAgYm9yZGVyLXRvcDogNDBweCBzb2xpZCBncmVlbjtcclxuICAgIC8qbWV0YWRlIGRvIHRhbWFuaG8gZG8gd2lkdGggZG8gcGFpICgucHJvamV0b0NhcmRCdXR0b24pKi9cclxuICAgIGJvcmRlci1sZWZ0OiAxMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uZW5mZWl0ZUJ1dHRvbkJvdHRvbUxlZnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgLyptZXRhZGUgZG8gdGFtYW5obyBkbyBoZWlnaHQgZG8gcGFpICgucHJvamV0b0NhcmRCdXR0b24pKi9cclxuICAgIGJvcmRlci1ib3R0b206IDQwcHggc29saWQgZ3JlZW47XHJcbiAgICAvKm1ldGFkZSBkbyB0YW1hbmhvIGRvIHdpZHRoIGRvIHBhaSAoLnByb2pldG9DYXJkQnV0dG9uKSAqL1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwLjlcclxufVxyXG5cclxuLmJ0blRleHRve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJvamV0b0NhcmRJbWFnZW17XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTAlKTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTAlKTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/projetos/projetos.component.ts":
/*!************************************************!*\
  !*** ./src/app/projetos/projetos.component.ts ***!
  \************************************************/
/*! exports provided: ProjetosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosComponent", function() { return ProjetosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projetos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projetos.service */ "./src/app/projetos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjetosComponent = /** @class */ (function () {
    function ProjetosComponent(projetoService, router) {
        this.projetoService = projetoService;
        this.router = router;
    }
    ProjetosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projetoService.getProjetoCards()
            .subscribe(function (projetos) {
            _this.projetosCards = projetos;
            _this.projetosCardsFiltered = projetos;
        });
    };
    ProjetosComponent.prototype.filterItem = function (value) {
        if (!value) {
            this.assignCopy();
        } // when nothing has typed
        this.projetosCardsFiltered = Object.assign([], this.projetosCards).filter(function (item) { return item.nome.toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    ProjetosComponent.prototype.assignCopy = function () {
        this.projetosCardsFiltered = Object.assign([], this.projetosCards);
    };
    ProjetosComponent.prototype.redirect = function (idTecnologia) {
        this.router.navigateByUrl("/projetosExistentes/" + idTecnologia);
    };
    ProjetosComponent.ctorParameters = function () { return [
        { type: _projetos_service__WEBPACK_IMPORTED_MODULE_2__["ProjetosService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProjetosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projetos',
            template: __webpack_require__(/*! raw-loader!./projetos.component.html */ "./node_modules/raw-loader/index.js!./src/app/projetos/projetos.component.html"),
            styles: [__webpack_require__(/*! ./projetos.component.css */ "./src/app/projetos/projetos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projetos_service__WEBPACK_IMPORTED_MODULE_2__["ProjetosService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjetosComponent);
    return ProjetosComponent;
}());



/***/ }),

/***/ "./src/app/right-aside-column/right-aside-column.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/right-aside-column/right-aside-column.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#crachaDeApresentacao{\r\n    /*background-color: #F9FEFF;*/\r\n    background-color:rgba(0, 0, 0, 0.3);\r\n    color: white !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtYXNpZGUtY29sdW1uL3JpZ2h0LWFzaWRlLWNvbHVtbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9yaWdodC1hc2lkZS1jb2x1bW4vcmlnaHQtYXNpZGUtY29sdW1uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3JhY2hhRGVBcHJlc2VudGFjYW97XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNGOUZFRkY7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/right-aside-column/right-aside-column.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/right-aside-column/right-aside-column.component.ts ***!
  \********************************************************************/
/*! exports provided: RightAsideColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightAsideColumnComponent", function() { return RightAsideColumnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalStrings/globalString */ "./src/app/globalStrings/globalString.ts");



var RightAsideColumnComponent = /** @class */ (function () {
    function RightAsideColumnComponent() {
        this.globalUrl = _globalStrings_globalString__WEBPACK_IMPORTED_MODULE_2__["GlobalStrings"].getGlobalUrlFragment();
    }
    RightAsideColumnComponent.prototype.ngOnInit = function () {
    };
    RightAsideColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-right-aside-column',
            template: __webpack_require__(/*! raw-loader!./right-aside-column.component.html */ "./node_modules/raw-loader/index.js!./src/app/right-aside-column/right-aside-column.component.html"),
            styles: [__webpack_require__(/*! ./right-aside-column.component.css */ "./src/app/right-aside-column/right-aside-column.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RightAsideColumnComponent);
    return RightAsideColumnComponent;
}());



/***/ }),

/***/ "./src/app/social-media.service.ts":
/*!*****************************************!*\
  !*** ./src/app/social-media.service.ts ***!
  \*****************************************/
/*! exports provided: SocialMediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaService", function() { return SocialMediaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_left_aside_column_classes_SOCIAL_MEDIA_BUTTONS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/left-aside-column-classes/SOCIAL_MEDIA_BUTTONS */ "./src/app/left-aside-column-classes/SOCIAL_MEDIA_BUTTONS.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SocialMediaService = /** @class */ (function () {
    function SocialMediaService() {
    }
    SocialMediaService.prototype.getSocialMediaButtons = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_app_left_aside_column_classes_SOCIAL_MEDIA_BUTTONS__WEBPACK_IMPORTED_MODULE_2__["SOCIALS_MEDIA_BUTTONS"]);
    };
    SocialMediaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialMediaService);
    return SocialMediaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Desenv\projetos\portifolioVinicius\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map