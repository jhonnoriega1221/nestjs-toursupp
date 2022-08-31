"use strict";(self.webpackChunkangular_toursapp=self.webpackChunkangular_toursapp||[]).push([[592],{6435:(m,u,o)=>{o.d(u,{s:()=>a});var t=o(4650),c=o(7392);let a=(()=>{class r{constructor(){this.icon="attach_money",this.title="",this.text=""}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-details-price-text"]],inputs:{icon:"icon",title:"title",text:"text"},decls:8,vars:3,consts:[[1,"wrapper"],[1,"icon-side"],[1,"text-side"],[1,"title-text","mat-caption"],[1,"body-text"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0)(1,"mat-icon",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2)(4,"p",3),t._uU(5),t.qZA(),t.TgZ(6,"p",4),t._uU(7),t.qZA()()()),2&e&&(t.xp6(2),t.Oqu(l.icon),t.xp6(3),t.Oqu(l.title),t.xp6(2),t.hij("$ ",l.text," COP"))},dependencies:[c.Hw],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;gap:6px;margin-bottom:12px}.wrapper[_ngcontent-%COMP%]   .icon-side[_ngcontent-%COMP%]{background-color:var(--toursapp-primary-transparent-app);border-radius:100%;padding:6px;color:var(--toursapp-primary-app)}.wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.wrapper[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{color:gray;line-height:18px}.wrapper[_ngcontent-%COMP%]   .body-text[_ngcontent-%COMP%]{font-weight:500;color:var(--toursapp-primary-app)}"]}),r})()},7011:(m,u,o)=>{o.d(u,{u:()=>c});var t=o(4650);let c=(()=>{class a{constructor(){this.title=""}ngOnInit(){}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-details-separator"]],inputs:{title:"title"},decls:2,vars:1,consts:[[1,"separator-title","mat-caption"]],template:function(s,e){1&s&&(t.TgZ(0,"span",0),t._uU(1),t.qZA()),2&s&&(t.xp6(1),t.Oqu(e.title))},styles:[".separator-title[_ngcontent-%COMP%]{display:block;margin:12px 0 6px}"]}),a})()},4077:(m,u,o)=>{o.d(u,{H:()=>a});var t=o(4650),c=o(4859);let a=(()=>{class r{constructor(){this.reload=new t.vpe}reloadInfo(){this.reload.emit()}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-error-message"]],outputs:{reload:"reload"},decls:8,vars:0,consts:[[1,"error-container"],["src","../../../../assets/page-error.svg",1,"error-icon"],[1,"error-title"],[1,"error-text"],["mat-raised-button","","color","primary",1,"action-button",3,"click"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"p",2),t._uU(3,"Oops!"),t.qZA(),t.TgZ(4,"p",3),t._uU(5,"Algo sali\xf3 mal mientras se cargaba la \xednformaci\xf3n."),t.qZA(),t.TgZ(6,"button",4),t.NdJ("click",function(){return l.reloadInfo()}),t._uU(7,"Intentar de nuevo"),t.qZA()())},dependencies:[c.lW],styles:[".error-container[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);min-width:260px}.error-title[_ngcontent-%COMP%]{text-align:center;font-weight:600;font-size:18px}.error-text[_ngcontent-%COMP%]{text-align:center;color:gray;margin-bottom:30px}.error-icon[_ngcontent-%COMP%]{text-align:center;display:block;margin:0 auto 20px;width:120px;min-height:140px}.action-button[_ngcontent-%COMP%]{margin:0 auto;display:block;width:100%}"]}),r})()},4374:(m,u,o)=>{o.d(u,{J:()=>p});var t=o(4650),c=o(4463),a=o(6895),r=o(4859);const s=function(n,d){return{"filter-button-disabled":n,"filter-button-active":d}};let e=(()=>{class n{constructor(){this.text="",this.active=!1}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-toggle-filter-button"]],inputs:{text:"text",active:"active"},decls:2,vars:5,consts:[["mat-button","",1,"filter-button",3,"ngClass"]],template:function(i,g){1&i&&(t.TgZ(0,"button",0),t._uU(1),t.qZA()),2&i&&(t.Q6J("ngClass",t.WLB(2,s,!g.active,g.active)),t.xp6(1),t.Oqu(g.text))},dependencies:[a.mk,r.lW],styles:[".filter-button[_ngcontent-%COMP%]{border-radius:20px}.filter-button-active[_ngcontent-%COMP%]{background-color:var(--toursapp-primary-app);color:#fff}.filter-button-disabled[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.1450980392);background-color:#00000010}@media (min-width: 600px){.filter-button[_ngcontent-%COMP%]{width:100%}}"]}),n})();function l(n,d){if(1&n&&t._UZ(0,"app-toggle-filter-button",3),2&n){const i=d.$implicit;t.Q6J("text",i.text)("active",i.active)}}let p=(()=>{class n{constructor(i){this.translate=i,this.filterButtons=[{text:"Todos",active:!0}]}ngOnInit(){this.translateComponent()}translateComponent(){this.translate.get("FILTER").subscribe({next:i=>{this.filterButtons[0].text=i.CATEGORIES_LIST.ALL}})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(c.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-filter-buttons-group"]],decls:5,vars:4,consts:[[1,"category-text"],[1,"wrapper"],[3,"text","active",4,"ngFor","ngForOf"],[3,"text","active"]],template:function(i,g){1&i&&(t.TgZ(0,"p",0),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"div",1),t.YNc(4,l,1,2,"app-toggle-filter-button",2),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,2,"FILTER.CATEGORIES_TITLE")),t.xp6(3),t.Q6J("ngForOf",g.filterButtons))},dependencies:[a.sg,e,c.X$],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;margin-bottom:12px;overflow:auto;gap:6px}.category-text[_ngcontent-%COMP%]{display:none;text-align:center;font-weight:600}@media (min-width: 600px){.wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr)}.category-text[_ngcontent-%COMP%]{display:block}}"]}),n})()},4850:(m,u,o)=>{o.d(u,{d:()=>r,t:()=>s});var t=o(4650),c=o(1281),a=o(3238);let r=(()=>{class e{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(p){this._vertical=(0,c.Ig)(p)}get inset(){return this._inset}set inset(p){this._inset=(0,c.Ig)(p)}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(p,n){2&p&&(t.uIk("aria-orientation",n.vertical?"vertical":"horizontal"),t.ekj("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(p,n){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0}),e})(),s=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.BQ,a.BQ]}),e})()}}]);