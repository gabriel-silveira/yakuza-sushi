(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"78b9":function(a,e,t){},a060:function(a,e,t){"use strict";const s="home",i="horarios",n="cardapio",o="delivery",l="localizacao";e["a"]={HOME:s,SCHEDULE:i,MENU:n,DELIVERY:o,LOCATION:l}},a2e6:function(a,e,t){"use strict";var s=t("78b9"),i=t.n(s);i.a},d12e:function(a,e,t){"use strict";e["a"]=[{id:1,path:"combinados",name:"Combinados"},{id:2,path:"duplas",name:"Duplas"},{id:3,path:"makisushis",name:"Makisushis"},{id:4,path:"quentes",name:"Especialidades Quentes"},{id:5,path:"almoco-jantar",name:"Almoco e Jantar"},{id:6,path:"bebidas",name:"Bebidas"},{id:7,path:"rodizio",name:"Rodízio especial"}]},eea6:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{staticClass:"flex q-pa-none"},[t("div",{staticClass:"full-width"},[a.$q.platform.is.mobile?a._e():t("div",{staticClass:"logo-home text-center"},[t("img",{attrs:{src:"/imgs/logo-yakuza-transp.png"}})]),t("q-carousel",{staticClass:"full-height",attrs:{autoplay:!0,animated:"",infinite:"",arrows:"","control-type":"push","transition-prev":"slide-right","transition-next":"slide-left"},model:{value:a.slide,callback:function(e){a.slide=e},expression:"slide"}},[t("q-carousel-slide",{staticClass:"column no-wrap flex-center q-pa-none banner-1",attrs:{name:"banner-1"}},[t("div",{staticClass:"bg-fume"}),t("div",{staticClass:"carousel-content text-center"},[t("h3",{staticClass:"q-mb-sm text-yellow"},[a._v("Delivery")]),t("p",[a._v("Em tempos de pandemia, "),a.$q.platform.is.mobile?t("br"):a._e(),a._v("a "),t("span",{staticClass:"text-primary"},[a._v("Yakuza Sushi")]),a._v(" vai até você")]),t("q-btn",{staticClass:"q-mt-sm",attrs:{color:"yellow",label:"Faça seu pedido",outline:""},on:{click:function(e){return a.$router.push({name:a.ROUTES.MENU,params:{categoryPath:a.categories[0].path}})}}})],1)]),t("q-carousel-slide",{staticClass:"column no-wrap flex-center q-pa-none banner-2",attrs:{name:"banner-2"}},[t("div",{staticClass:"bg-fume"}),t("div",{staticClass:"carousel-content text-center"},[t("h3",{staticClass:"q-mb-md text-yellow"},[a._v("Higiene")]),t("p",[a._v("Estamos levando nossos "),a.$q.platform.is.mobile?t("br"):a._e(),a._v("pratos até você com a"),t("br"),a._v(" máxima higienização "),a.$q.platform.is.mobile?t("br"):a._e(),a._v("e segurança na entrega!")])])]),t("q-carousel-slide",{staticClass:"column no-wrap flex-center q-pa-none banner-3",attrs:{name:"banner-3"}},[t("div",{staticClass:"bg-fume"}),t("div",{staticClass:"carousel-content text-center"},[t("h3",{staticClass:"q-mb-none text-yellow"},[a._v("O MELHOR")]),t("p",[a._v("DELIVERY DE SUSHI "),a.$q.platform.is.mobile?t("br"):a._e(),a._v("de toda região!")]),t("p",{staticClass:"text-yellow"},[a._v("Entregamos 24h por dia, "),a.$q.platform.is.mobile?t("br"):a._e(),a._v("todos os dias da semana")])])])],1)],1)])},i=[],n=t("d12e"),o=t("a060"),l={name:"PageIndex",meta:{title:"Yakuza Sushi"},data:()=>({ROUTES:o["a"],slide:"banner-1",autoplay:!0,categories:n["a"]})},r=l,c=(t("a2e6"),t("2877")),m=t("9989"),d=t("880c"),u=t("62cd"),p=t("9c40"),b=t("eebe"),v=t.n(b),h=Object(c["a"])(r,s,i,!1,null,null,null);e["default"]=h.exports;v()(h,"components",{QPage:m["a"],QCarousel:d["a"],QCarouselSlide:u["a"],QBtn:p["a"]})}}]);