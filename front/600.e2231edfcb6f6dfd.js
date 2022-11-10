"use strict";(self.webpackChunkangular_toursapp=self.webpackChunkangular_toursapp||[]).push([[600],{7936:(T,h,r)=>{r.d(h,{M:()=>l});var i=r(4650),u=r(9299),t=r(6895);let c=(()=>{class p{constructor(d,f){this.router=d,this.location=f,this.history=[],this.router.events.subscribe(P=>{P instanceof u.m2&&this.history.push(P.urlAfterRedirects)})}back(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/")}}return p.\u0275fac=function(d){return new(d||p)(i.LFG(u.F0),i.LFG(t.Ye))},p.\u0275prov=i.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();var m=r(4859),a=r(7392);let l=(()=>{class p{constructor(d){this.navigation=d,this.viewTitle=""}ngOnInit(){}back(){this.navigation.back()}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(c))},p.\u0275cmp=i.Xpm({type:p,selectors:[["app-back-title-button"]],inputs:{viewTitle:"viewTitle"},decls:6,vars:1,consts:[[1,"back-title-body"],["mat-icon-button","",3,"click"],[1,"view-title"]],template:function(d,f){1&d&&(i.TgZ(0,"div",0)(1,"button",1),i.NdJ("click",function(){return f.back()}),i.TgZ(2,"mat-icon"),i._uU(3,"arrow_back"),i.qZA()(),i.TgZ(4,"p",2),i._uU(5),i.qZA()()),2&d&&(i.xp6(5),i.Oqu(f.viewTitle))},dependencies:[m.lW,a.Hw],styles:[".back-title-body[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:8px}.back-title-body[_ngcontent-%COMP%]   .view-title[_ngcontent-%COMP%]{margin:0;font-weight:500;font-size:18px}"]}),p})()},4202:(T,h,r)=>{r.d(h,{T:()=>t});var i=r(4650);let u=(()=>{class c{constructor(a){this.host=a,this.width="",this.height="",this.className=""}ngOnInit(){const a=this.host.nativeElement;this.className&&a.classList.add(this.className),a.style.setProperty("--app-skeleton-loader-width",this.width??"100%"),a.style.setProperty("--app-skeleton-loader-height",this.height??"20px")}}return c.\u0275fac=function(a){return new(a||c)(i.Y36(i.SBq))},c.\u0275cmp=i.Xpm({type:c,selectors:[["app-skeleton-loader"]],hostAttrs:[1,"pulse"],decls:0,vars:0,template:function(a,l){},styles:["[_nghost-%COMP%]{margin-bottom:12px;display:block;width:var(--app-skeleton-loader-width);height:var(--app-skeleton-loader-height);background:#eee no-repeat;background:linear-gradient(110deg,#ececec 8%,#f5f5f5 18%,#ececec 33%);animation:1.5s shine linear infinite;background-size:200% 100%;border-radius:10px}@keyframes shine{to{background-position-x:-200%}}"]}),c})(),t=(()=>{class c{constructor(a,l){this.tpl=a,this.vcr=l,this.isLoading=!1,this.size=1,this.width="",this.height="",this.className=""}ngOnChanges(a){a.isLoading&&(this.vcr.clear(),a.isLoading.currentValue?Array.from({length:this.size}).forEach(()=>{const l=this.vcr.createComponent(u);Object.assign(l.instance,{width:this.width,height:this.height,className:this.className})}):this.vcr.createEmbeddedView(this.tpl))}}return c.\u0275fac=function(a){return new(a||c)(i.Y36(i.Rgc),i.Y36(i.s_b))},c.\u0275dir=i.lG2({type:c,selectors:[["","skeleton",""]],inputs:{isLoading:["skeleton","isLoading"],size:["skeletonRepeat","size"],width:["skeletonWidth","width"],height:["skeletonHeight","height"],className:["skeletonClassName","className"]},features:[i.TTD]}),c})()},8600:(T,h,r)=>{r.r(h),r.d(h,{TouristProductsModule:()=>z});var i=r(6895),u=r(9299),t=r(4650),c=r(2340),m=r(529);let a=(()=>{class e{constructor(o){this.http=o,this.apiURL=c.N.apiURL}getProducts(){return this.http.get(`${this.apiURL}tourist-products`)}getProduct(o){return this.http.get(`${this.apiURL}tourist-products/${o}`)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(m.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=r(4463),p=r(7936),g=r(4202),d=r(4077),f=r(4374),P=r(3238);let C=(()=>{class e{constructor(){this.itemUrl=["",0],this.urlImage="",this.rowOneText="",this.rowTwoText=0,this.rowThreeText=0}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-list-item"]],inputs:{itemUrl:"itemUrl",urlImage:"urlImage",rowOneText:"rowOneText",rowTwoText:"rowTwoText",rowThreeText:"rowThreeText"},decls:11,vars:8,consts:[["mat-ripple","",1,"list-item-body","mat-card",3,"routerLink"],[1,"item-image",3,"src"],[1,"item-data"],[1,"row1-and-row2"],[1,"row-1"],[1,"row-2"],[1,"row-3"]],template:function(o,s){1&o&&(t.TgZ(0,"a",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.qZA()(),t.TgZ(8,"p",6),t._uU(9),t.ALo(10,"translate"),t.qZA()()()),2&o&&(t.Q6J("routerLink",s.itemUrl),t.xp6(1),t.Q6J("src",s.urlImage,t.LSH),t.xp6(4),t.Oqu(s.rowOneText),t.xp6(2),t.hij("$",s.rowTwoText,""),t.xp6(2),t.AsE("",t.lcZ(10,6,"TOURIST_PRODUCTS.LIST.ANOTHER_PAYED_TEXT")," $",s.rowThreeText,""))},dependencies:[u.yS,P.wG,l.X$],styles:[".list-item-body[_ngcontent-%COMP%]{display:flex;height:82px;padding:6px;box-sizing:border-box;gap:6px;text-decoration:none;margin-bottom:12px;border-radius:10px;box-shadow:none}.list-item-body[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]{min-width:70px;width:70px;height:70px;border-radius:6px;object-fit:contain;background-color:#fff;aspect-ratio:1}.list-item-body[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]{display:inherit;justify-content:space-between;flex-direction:column;width:100%}.list-item-body[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .list-item-body[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.list-item-body[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]   .row1-and-row2[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{max-height:40px;font-weight:500;line-height:20px;overflow:hidden}.list-item-body[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]   .row1-and-row2[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]{font-weight:500;font-size:12px;color:var(--toursapp-primary-app)}.list-item-body[_ngcontent-%COMP%]   .item-data[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]{font-size:11px;color:gray;line-height:12px}"]}),e})();const w=function(e){return["/products",e]};function v(e,n){if(1&e&&t._UZ(0,"app-product-list-item",1),2&e){const o=n.$implicit;t.Q6J("itemUrl",t.VKq(5,w,o._id))("urlImage",o.imageURL)("rowOneText",o.name)("rowTwoText",o.prices[1].price)("rowThreeText",o.prices[2].price)}}let _=(()=>{class e{constructor(){this.products=[]}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products-list"]],inputs:{products:"products"},decls:1,vars:1,consts:[[3,"itemUrl","urlImage","rowOneText","rowTwoText","rowThreeText",4,"ngFor","ngForOf"],[3,"itemUrl","urlImage","rowOneText","rowTwoText","rowThreeText"]],template:function(o,s){1&o&&t.YNc(0,v,1,7,"app-product-list-item",0),2&o&&t.Q6J("ngForOf",s.products)},dependencies:[i.sg,C]}),e})();function O(e,n){if(1&e&&t._UZ(0,"app-products-list",7),2&e){const o=t.oxw(2);t.Q6J("products",o.touristProducts)}}function y(e,n){if(1&e&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"app-filter-buttons-group"),t.qZA(),t.TgZ(3,"div",5),t.YNc(4,O,1,1,"app-products-list",6),t.qZA()()),2&e){const o=t.oxw();t.xp6(4),t.Q6J("skeleton",o.isLoading)("skeletonHeight","82px")("skeletonRepeat",10)("skeletonWidth","100%")}}function L(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"app-error-message",8),t.NdJ("reload",function(){t.CHM(o);const x=t.oxw();return t.KtG(x.getProducts())}),t.qZA()}}let b=(()=>{class e{constructor(o,s){this.touristProductService=o,this.translate=s,this.pageTitle="",this.touristProducts=[],this.isLoading=!0,this.isLoadingMore=!1,this.isError=!1}ngOnInit(){this.getProducts(),this.translatePage()}getProducts(){this.isError=!1,this.touristProductService.getProducts().subscribe({next:o=>this.touristProducts=o,error:o=>{this.isError=!0,console.error(o)},complete:()=>this.isLoading=!1})}translatePage(){this.translate.get("TOURIST_PRODUCTS.LIST").subscribe({next:o=>{this.pageTitle=o.TITLE}})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a),t.Y36(l.sK))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products-list-page"]],decls:3,vars:3,consts:[[3,"viewTitle"],["class","wrapper",4,"ngIf"],[3,"reload",4,"ngIf"],[1,"wrapper"],[1,"filters-list"],[1,"products-list"],[3,"products",4,"skeleton","skeletonHeight","skeletonRepeat","skeletonWidth"],[3,"products"],[3,"reload"]],template:function(o,s){1&o&&(t._UZ(0,"app-back-title-button",0),t.YNc(1,y,5,4,"div",1),t.YNc(2,L,1,0,"app-error-message",2)),2&o&&(t.Q6J("viewTitle",s.pageTitle),t.xp6(1),t.Q6J("ngIf",!s.isError),t.xp6(1),t.Q6J("ngIf",s.isError))},dependencies:[i.O5,p.M,g.T,d.H,f.J,_],styles:[".load-more-button[_ngcontent-%COMP%]{display:block;margin:0 auto;width:100%}.wrapper[_ngcontent-%COMP%]{width:100%}@media (min-width: 600px){.wrapper[_ngcontent-%COMP%]{display:flex;gap:12px}.filters-list[_ngcontent-%COMP%]{min-width:270px;width:380px}.products-list[_ngcontent-%COMP%]{max-width:1366px;width:100%;margin:0 auto}}"]}),e})();var k=r(6435);function M(e,n){if(1&e&&t._UZ(0,"app-details-price-text",5),2&e){const o=n.$implicit;t.Q6J("title",o.name)("text",o.price)}}let I=(()=>{class e{constructor(){this.name="",this.prices=[]}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-info"]],inputs:{name:"name",prices:"prices"},decls:6,vars:2,consts:[[1,"product-info-container"],[1,"product-data"],[1,"product-name"],[1,"prices-list"],["icon","store",3,"title","text",4,"ngFor","ngForOf"],["icon","store",3,"title","text"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,M,1,2,"app-details-price-text",4),t.qZA()()()),2&o&&(t.xp6(3),t.Oqu(s.name),t.xp6(2),t.Q6J("ngForOf",s.prices))},dependencies:[i.sg,k.s],styles:[".product-info-container[_ngcontent-%COMP%]{margin-top:8px;display:flex;flex-direction:column}.product-info-container[_ngcontent-%COMP%]   .product-data[_ngcontent-%COMP%]{margin-bottom:12px}.product-info-container[_ngcontent-%COMP%]   .product-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.product-info-container[_ngcontent-%COMP%]   .product-data[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{margin-bottom:20px;font-weight:500;font-size:16px}@media (min-width: 600px){.product-data[_ngcontent-%COMP%]{margin-bottom:36px}}@media (min-width: 850px){.prices-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);max-width:480px}}"]}),e})(),U=(()=>{class e{constructor(){this.imageURL=""}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-image"]],inputs:{imageURL:"imageURL"},decls:1,vars:1,consts:[[1,"product-image",3,"src"]],template:function(o,s){1&o&&t._UZ(0,"img",0),2&o&&t.Q6J("src",s.imageURL,t.LSH)},styles:[".product-image[_ngcontent-%COMP%]{object-fit:contain;width:100%;margin:0 auto 20px;display:block;box-sizing:border-box;border-radius:12px;aspect-ratio:1;background-color:#fff}"]}),e})();function Z(e,n){if(1&e&&t._UZ(0,"app-product-image",7),2&e){const o=t.oxw(2);t.Q6J("imageURL",o.product.imageURL)}}function R(e,n){if(1&e&&t._UZ(0,"app-product-info",8),2&e){const o=t.oxw(2);t.Q6J("name",o.product.name)("prices",o.product.prices)}}function S(e,n){if(1&e&&(t.TgZ(0,"div",3),t.YNc(1,Z,1,1,"app-product-image",4),t.TgZ(2,"div",5),t.YNc(3,R,1,2,"app-product-info",6),t.qZA()()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("skeleton",o.isLoading)("skeletonHeight","300px")("skeletonWidth","100%"),t.xp6(2),t.Q6J("skeleton",o.isLoading)("skeletonHeight","38px")("skeletonRepeat",2)("skeletonWidth","100%")("skeletonRepeat",3)}}function N(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"app-error-message",9),t.NdJ("reload",function(){t.CHM(o);const x=t.oxw();return t.KtG(x.getProductInfo())}),t.qZA()}}const F=[{path:"",component:b},{path:":id",component:(()=>{class e{constructor(o,s,x){this.touristProductService=o,this.activatedRoute=s,this.translate=x,this.productId="",this.isLoading=!0,this.isError=!1,this.pageTitle="",this.product={_id:"",name:"",imageURL:"",prices:[]}}ngOnInit(){this.activatedRoute.params.subscribe(o=>{this.productId=o.id,this.getProductInfo()}),this.translatePage()}getProductInfo(){this.isError=!1,this.touristProductService.getProduct(this.productId).subscribe({next:o=>this.product=o,error:o=>{this.isError=!0,console.error(o)},complete:()=>this.isLoading=!1})}translatePage(){this.translate.get("TOURIST_PRODUCTS.DETAILS").subscribe({next:o=>{this.pageTitle=o.TITLE}})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a),t.Y36(u.gz),t.Y36(l.sK))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-details-page"]],decls:3,vars:3,consts:[[3,"viewTitle"],["class","product-image-details",4,"ngIf"],[3,"reload",4,"ngIf"],[1,"product-image-details"],["class","image-side",3,"imageURL",4,"skeleton","skeletonHeight","skeletonWidth"],[1,"details-side"],["class","page-component",3,"name","prices",4,"skeleton","skeletonHeight","skeletonRepeat","skeletonWidth"],[1,"image-side",3,"imageURL"],[1,"page-component",3,"name","prices"],[3,"reload"]],template:function(o,s){1&o&&(t._UZ(0,"app-back-title-button",0),t.YNc(1,S,4,8,"div",1),t.YNc(2,N,1,0,"app-error-message",2)),2&o&&(t.Q6J("viewTitle",s.pageTitle),t.xp6(1),t.Q6J("ngIf",!s.isError),t.xp6(1),t.Q6J("ngIf",s.isError))},dependencies:[i.O5,p.M,g.T,d.H,I,U],styles:["@media (min-width: 600px){.product-image-details[_ngcontent-%COMP%]{max-width:1150px;display:flex;justify-content:center;gap:24px;margin:0 auto}.image-side[_ngcontent-%COMP%]{min-width:280px;max-width:500px}.details-side[_ngcontent-%COMP%]{min-width:280px;width:600px;max-width:490px;margin:0 0 0 auto}}"]}),e})()}];let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(F),u.Bz]}),e})();var A=r(4466),E=r(4859),Y=r(5412),D=r(9549),Q=r(4144);let z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,J,A.m,E.ot,Y.Is,D.lN,Q.c,P.si]}),e})()}}]);