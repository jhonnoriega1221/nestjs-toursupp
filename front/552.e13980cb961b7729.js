"use strict";(self.webpackChunkangular_toursapp=self.webpackChunkangular_toursapp||[]).push([[552],{7936:(M,g,o)=>{o.d(g,{M:()=>m});var t=o(4650),s=o(9299),u=o(6895);let n=(()=>{class d{constructor(c,f){this.router=c,this.location=f,this.history=[],this.router.events.subscribe(C=>{C instanceof s.m2&&this.history.push(C.urlAfterRedirects)})}back(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/")}}return d.\u0275fac=function(c){return new(c||d)(t.LFG(s.F0),t.LFG(u.Ye))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();var l=o(4859),i=o(7392);let m=(()=>{class d{constructor(c){this.navigation=c,this.viewTitle=""}ngOnInit(){}back(){this.navigation.back()}}return d.\u0275fac=function(c){return new(c||d)(t.Y36(n))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-back-title-button"]],inputs:{viewTitle:"viewTitle"},decls:6,vars:1,consts:[[1,"back-title-body"],["mat-icon-button","",3,"click"],[1,"view-title"]],template:function(c,f){1&c&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return f.back()}),t.TgZ(2,"mat-icon"),t._uU(3,"arrow_back"),t.qZA()(),t.TgZ(4,"p",2),t._uU(5),t.qZA()()),2&c&&(t.xp6(5),t.Oqu(f.viewTitle))},dependencies:[l.lW,i.Hw],styles:[".back-title-body[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:8px}.back-title-body[_ngcontent-%COMP%]   .view-title[_ngcontent-%COMP%]{margin:0;font-weight:500;font-size:18px}"]}),d})()},4202:(M,g,o)=>{o.d(g,{T:()=>u});var t=o(4650);let s=(()=>{class n{constructor(i){this.host=i,this.width="",this.height="",this.className=""}ngOnInit(){const i=this.host.nativeElement;this.className&&i.classList.add(this.className),i.style.setProperty("--app-skeleton-loader-width",this.width??"100%"),i.style.setProperty("--app-skeleton-loader-height",this.height??"20px")}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(t.SBq))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-skeleton-loader"]],hostAttrs:[1,"pulse"],decls:0,vars:0,template:function(i,m){},styles:["[_nghost-%COMP%]{margin-bottom:12px;display:block;width:var(--app-skeleton-loader-width);height:var(--app-skeleton-loader-height);background:#eee no-repeat;background:linear-gradient(110deg,#ececec 8%,#f5f5f5 18%,#ececec 33%);animation:1.5s shine linear infinite;background-size:200% 100%;border-radius:10px}@keyframes shine{to{background-position-x:-200%}}"]}),n})(),u=(()=>{class n{constructor(i,m){this.tpl=i,this.vcr=m,this.isLoading=!1,this.size=1,this.width="",this.height="",this.className=""}ngOnChanges(i){i.isLoading&&(this.vcr.clear(),i.isLoading.currentValue?Array.from({length:this.size}).forEach(()=>{const m=this.vcr.createComponent(s);Object.assign(m.instance,{width:this.width,height:this.height,className:this.className})}):this.vcr.createEmbeddedView(this.tpl))}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(t.Rgc),t.Y36(t.s_b))},n.\u0275dir=t.lG2({type:n,selectors:[["","skeleton",""]],inputs:{isLoading:["skeleton","isLoading"],size:["skeletonRepeat","size"],width:["skeletonWidth","width"],height:["skeletonHeight","height"],className:["skeletonClassName","className"]},features:[t.TTD]}),n})()},3546:(M,g,o)=>{o.d(g,{QW:()=>b,a8:()=>v});var t=o(4650),s=o(3238);const u=["*",[["mat-card-footer"]]],n=["*","mat-card-footer"];let v=(()=>{class e{constructor(r){this._animationMode=r}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(t.QbO,8))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(r,h){2&r&&t.ekj("_mat-animation-noopable","NoopAnimations"===h._animationMode)},exportAs:["matCard"],ngContentSelectors:n,decls:2,vars:0,template:function(r,h){1&r&&(t.F$t(u),t.Hsn(0),t.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:2,changeDetection:0}),e})(),b=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.BQ,s.BQ]}),e})()}}]);