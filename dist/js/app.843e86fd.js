(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,v=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0266":function(t,e,a){"use strict";a("3fb2")},"0405":function(t,e,a){},"0700":function(t,e,a){t.exports=a.p+"img/Clone-Trooper-icon.203357ba.png"},"072a":function(t,e,a){"use strict";a("afe9")},"0782":function(t,e,a){"use strict";a("d8dd")},"0f48":function(t,e,a){},"0f4c":function(t,e,a){},"119a":function(t,e,a){},"165d":function(t,e,a){t.exports=a.p+"img/Death-Star-icon.3d9895e2.png"},"22d7":function(t,e,a){"use strict";a("be87")},3071:function(t,e,a){t.exports=a.p+"img/Master-Joda-icon.433c4552.png"},"3fb2":function(t,e,a){},4593:function(t,e,a){},"53a2":function(t,e,a){"use strict";a("0405")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("Header"),a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loadingStatus,expression:"loadingStatus"}]}),a("Search",{directives:[{name:"show",rawName:"v-show",value:!t.loadingStatus,expression:"!loadingStatus"}]}),a("OrderBy",{directives:[{name:"show",rawName:"v-show",value:!t.loadingStatus,expression:"!loadingStatus"}]}),a("Movies",{directives:[{name:"show",rawName:"v-show",value:!t.loadingStatus,expression:"!loadingStatus"}]}),a("Pagination",{directives:[{name:"show",rawName:"v-show",value:!t.loadingStatus,expression:"!loadingStatus"}]}),a("Footer")],1)])},s=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"header-title"},[a("h1",{staticClass:"glow"},[t._v(t._s(t.headerTitle))])])])])])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"logo"},[r("img",{attrs:{src:a("c093")}})])])])}],u={name:"Header",data:function(){return{headerTitle:"May the Force be with you"}}},d=u,v=(a("8baf"),a("2877")),f=Object(v["a"])(d,c,l,!1,null,null,null),p=f.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"loading"},[r("img",{attrs:{src:a("eaf0")}})])])])}],m={name:"Loading"},g=m,_=(a("53a2"),Object(v["a"])(g,h,b,!1,null,null,null)),O=_.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"}),a("div",{staticClass:"col-md-8"},[a("form",{staticClass:"card card-sm"},[a("div",{staticClass:"card-body row no-gutters align-items-center"},[t._m(0),a("div",{staticClass:"col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control form-control-lg form-control-borderless",attrs:{type:"search",placeholder:"Search Star Wars movies by name"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-lg btn-dark btn-black",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.searchMovieByName()}}},[t._v("Search")])])])])]),a("div",{staticClass:"col-md-2"})])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fa fa-search h4 text-body"})])}],j={name:"Search",data:function(){return{searchTerm:""}},methods:{searchMovieByName:function(){this.$store.dispatch("loadMovies","https://swapi.py4e.com/api/films/?search="+this.searchTerm)}}},S=j,w=(a("0782"),Object(v["a"])(S,y,C,!1,null,null,null)),P=w.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9"}),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"input-group sort"},[t._m(0),a("select",{staticClass:"custom-select glowing-border",attrs:{id:"inputGroupSelect01"},on:{change:function(e){return t.onSelectChange(e)}}},[a("option",{attrs:{value:"null",selected:""}},[t._v("Choose...")]),a("option",{attrs:{value:"name"}},[t._v("Name")]),a("option",{attrs:{value:"date"}},[t._v("Date")])])])])])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("label",{staticClass:"input-group-text",attrs:{for:"inputGroupSelect01"}},[t._v("Order By")])])}],D={name:"OrderBy",methods:{onSelectChange:function(t){"null"!=t.target.value&&this.$store.dispatch("orderMoviesBy",t.target.value)}}},T=D,x=(a("072a"),Object(v["a"])(T,M,E,!1,null,null,null)),I=x.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._l(Math.ceil(t.movies.length/3),(function(e){return r("div",{key:e,staticClass:"row"},t._l(t.movies.slice(3*(e-1),3*e),(function(e,n){return r("div",{key:n,staticClass:"col-4 margin-top-30px"},[r("div",{staticClass:"card"},[r("img",{staticClass:"card-img-top",attrs:{src:a("e9a6"),alt:"..."}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title text-center"},[t._v(t._s(e.title))]),r("p",{staticClass:"card-text"},[t._v(t._s(e.opening_crawl))])]),r("ul",{staticClass:"list-group list-group-flush text-center"},[r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"fs-6"},[t._v("Release Date")]),t._v(" "),r("br"),t._v(" "),r("span",{staticClass:"fs-5"},[t._v(t._s(t._f("formateDate")(e.release_date)))])]),r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"fs-6"},[t._v("Director")]),t._v(" "),r("br"),t._v(" "),r("span",{staticClass:"fs-5"},[t._v(t._s(e.director))])])]),r("div",{staticClass:"card-body text-center"},[r("button",{staticClass:"btn btn-dark btn-black",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":".bd-example-modal-lg"},on:{click:function(a){return a.preventDefault(),t.loadMovieByUrl(e.url)}}},[t._v("Details")])])])])})),0)})),r("Modal")],2)},$=[],L=(a("6b54"),a("f576"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[t.movieLoadingStatus?t._e():a("h5",{staticClass:"modal-title"},[t._v(t._s(t.movie.title))]),a("button",{staticClass:"btn-close btn-close-white",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),a("div",{staticClass:"modal-body"},[t.movieLoadingStatus?a("Loading"):t._e(),t.movieLoadingStatus?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"characters-tab","data-bs-toggle":"tab","data-bs-target":"#characters",role:"tab","aria-controls":"characters","aria-selected":"true"},on:{click:function(e){return e.preventDefault(),t.setCurrentMovieTab("characters")}}},[t._v("Characters")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"planets-tab","data-bs-toggle":"tab","data-bs-target":"#planets",role:"tab","aria-controls":"planets","aria-selected":"false"},on:{click:function(e){return e.preventDefault(),t.setCurrentMovieTab("planets")}}},[t._v("Planets")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"species-tab","data-bs-toggle":"tab","data-bs-target":"#species",role:"tab","aria-controls":"species","aria-selected":"false"},on:{click:function(e){return e.preventDefault(),t.setCurrentMovieTab("species")}}},[t._v("Species")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"starships-tab","data-bs-toggle":"tab","data-bs-target":"#starships",role:"tab","aria-controls":"starships","aria-selected":"false"},on:{click:function(e){return e.preventDefault(),t.setCurrentMovieTab("starships")}}},[t._v("Starships")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"vehicles-tab","data-bs-toggle":"tab","data-bs-target":"#vehicles",role:"tab","aria-controls":"vehicles","aria-selected":"false"},on:{click:function(e){return e.preventDefault(),t.setCurrentMovieTab("vehicles")}}},[t._v("Vehicles")])])]),a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a("ChildCharacters"),a("ChildPlanets"),a("ChildSpecies"),a("ChildStarships"),a("ChildVehicles")],1)])])],1)])])])}),N=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-pane fade show active",attrs:{id:"characters",role:"tabpanel","aria-labelledby":"characters-tab"}},[t._m(0),t.loadingMovieInfoStatus?a("Loading"):t._e(),a("div",{staticClass:"table-responsive"},[t.loadingMovieInfoStatus?t._e():a("table",{staticClass:"table table-bordered table-hover"},[t._m(1),a("tbody",t._l(t.movieCharacters,(function(e,r){return a("tr",{key:r},[a("th",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.height))]),a("td",[t._v(t._s(e.mass))]),a("td",[t._v(t._s(e.hair_color))]),a("th",[t._v(t._s(e.skin_color))]),a("td",[t._v(t._s(e.eye_color))]),a("td",[t._v(t._s(e.gender))])])})),0)])])],1)},U=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"star-wars-icon"},[r("img",{attrs:{src:a("3071")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Height")]),a("th",{attrs:{scope:"col"}},[t._v("Mass")]),a("th",{attrs:{scope:"col"}},[t._v("Hair")]),a("th",{attrs:{scope:"col"}},[t._v("Skin")]),a("th",{attrs:{scope:"col"}},[t._v("Eyes")]),a("th",{attrs:{scope:"col"}},[t._v("Gender")])])])}],B=(a("7f7f"),a("bc3a")),R=a.n(B);function A(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function G(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?A(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var F={name:"ChildCharacters",components:{Loading:O},data:function(){return{movieCharacters:[],loadingMovieInfoStatus:!1,counter:0}},mounted:function(){"characters"==this.currentMovieTab&&this.loadMovieCharacters(this.movie.characters)},computed:G({},Object(i["b"])(["movie","currentMovieTab"])),watch:{currentMovieTab:function(t,e){"characters"==this.currentMovieTab&&this.loadMovieCharacters(this.movie.characters)}},methods:{loadMovieCharacters:function(t){var e=this;null!=t&&""!=t&&(this.loadingMovieInfoStatus=!0,this.counter=0,this.movieCharacters=[],t.forEach((function(a){R.a.get(a).then((function(t){var a={name:t.data.name,height:t.data.height,mass:t.data.mass,hair_color:t.data.hair_color,skin_color:t.data.skin_color,eye_color:t.data.eye_color,gender:t.data.gender};e.movieCharacters.push(a),e.counter++})).catch((function(t){console.log(t)})).finally((function(){e.counter==t.length&&(e.loadingMovieInfoStatus=!1)}))})))}}},H=F,W=(a("da1d"),Object(v["a"])(H,V,U,!1,null,null,null)),Y=W.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-pane fade",attrs:{id:"planets",role:"tabpanel","aria-labelledby":"planets-tab"}},[t._m(0),t.loadingMovieInfoStatus?a("Loading"):t._e(),a("div",{staticClass:"table-responsive"},[t.loadingMovieInfoStatus?t._e():a("table",{staticClass:"table table-bordered table-hover"},[t._m(1),a("tbody",t._l(t.moviePlanets,(function(e,r){return a("tr",{key:r},[a("th",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.climate))]),a("td",[t._v(t._s(e.gravity))]),a("td",[t._v(t._s(t._f("formateWaterInfo")(e.surface_water)))]),a("th",[t._v(t._s(e.population))])])})),0)])])],1)},q=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"star-wars-icon"},[r("img",{attrs:{src:a("a12e")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Climate")]),a("th",{attrs:{scope:"col"}},[t._v("Gravity")]),a("th",{attrs:{scope:"col"}},[t._v("Surface Water")]),a("th",{attrs:{scope:"col"}},[t._v("Population")])])])}];function z(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function K(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?z(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Q={name:"ChildPlanets",components:{Loading:O},data:function(){return{moviePlanets:[],loadingMovieInfoStatus:!1,counter:0}},computed:K({},Object(i["b"])(["movie","currentMovieTab"])),filters:{formateWaterInfo:function(t){return 1==t?"Yes":"No"}},watch:{currentMovieTab:function(t,e){"planets"==this.currentMovieTab&&this.loadMoviePlanets(this.movie.planets)}},methods:{loadMoviePlanets:function(t){var e=this;null!=t&&""!=t&&(this.loadingMovieInfoStatus=!0,this.counter=0,this.moviePlanets=[],t.forEach((function(a){R.a.get(a).then((function(t){var a={name:t.data.name,climate:t.data.climate,gravity:t.data.gravity,surface_water:t.data.surface_water,population:t.data.population};e.moviePlanets.push(a),e.counter++})).catch((function(t){console.log(t)})).finally((function(){e.counter==t.length&&(e.loadingMovieInfoStatus=!1)}))})))}}},X=Q,Z=(a("6ae0"),Object(v["a"])(X,J,q,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-pane fade",attrs:{id:"species",role:"tabpanel","aria-labelledby":"species-tab"}},[t._m(0),t.loadingMovieInfoStatus?a("Loading"):t._e(),a("div",{staticClass:"table-responsive"},[t.loadingMovieInfoStatus?t._e():a("table",{staticClass:"table table-bordered table-hover"},[t._m(1),a("tbody",t._l(t.movieSpecies,(function(e,r){return a("tr",{key:r},[a("th",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.classification))]),a("td",[t._v(t._s(e.designation))]),a("td",[t._v(t._s(e.average_lifespan))]),a("th",[t._v(t._s(e.language))])])})),0)])])],1)},at=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"star-wars-icon"},[r("img",{attrs:{src:a("ec4c")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Classification")]),a("th",{attrs:{scope:"col"}},[t._v("Designation")]),a("th",{attrs:{scope:"col"}},[t._v("Average Lifespan")]),a("th",{attrs:{scope:"col"}},[t._v("Language")])])])}];function rt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function nt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):rt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var st={name:"ChildSpecies",components:{Loading:O},data:function(){return{movieSpecies:[],loadingMovieInfoStatus:!1,counter:0}},computed:nt({},Object(i["b"])(["movie","currentMovieTab"])),watch:{currentMovieTab:function(t,e){"species"==this.currentMovieTab&&this.loadMovieSpecies(this.movie.species)}},methods:{loadMovieSpecies:function(t){var e=this;null!=t&&""!=t&&(this.loadingMovieInfoStatus=!0,this.counter=0,this.movieSpecies=[],t.forEach((function(a){R.a.get(a).then((function(t){var a={name:t.data.name,classification:t.data.classification,designation:t.data.designation,average_lifespan:t.data.average_lifespan,language:t.data.language};e.movieSpecies.push(a),e.counter++})).catch((function(t){console.log(t)})).finally((function(){e.counter==t.length&&(e.loadingMovieInfoStatus=!1)}))})))}}},ot=st,it=(a("ab48"),Object(v["a"])(ot,et,at,!1,null,null,null)),ct=it.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-pane fade",attrs:{id:"starships",role:"tabpanel","aria-labelledby":"starships-tab"}},[t._m(0),t.loadingMovieInfoStatus?a("Loading"):t._e(),a("div",{staticClass:"table-responsive"},[t.loadingMovieInfoStatus?t._e():a("table",{staticClass:"table table-bordered table-hover"},[t._m(1),a("tbody",t._l(t.movieStarships,(function(e,r){return a("tr",{key:r},[a("th",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.model))]),a("td",[t._v(t._s(e.manufacturer))]),a("td",[t._v(t._s(e.crew))]),a("th",[t._v(t._s(e.starship_class))])])})),0)])])],1)},ut=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"star-wars-icon"},[r("img",{attrs:{src:a("0700")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Model")]),a("th",{attrs:{scope:"col"}},[t._v("Manufacturer")]),a("th",{attrs:{scope:"col"}},[t._v("Crew")]),a("th",{attrs:{scope:"col"}},[t._v("Starship Class")])])])}];function dt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function vt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):dt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var ft={name:"ChildStarships",components:{Loading:O},data:function(){return{movieStarships:[],loadingMovieInfoStatus:!1,counter:0}},computed:vt({},Object(i["b"])(["movie","currentMovieTab"])),watch:{currentMovieTab:function(t,e){"starships"==this.currentMovieTab&&this.loadMovieStarships(this.movie.starships)}},methods:{loadMovieStarships:function(t){var e=this;null!=t&&""!=t&&(this.loadingMovieInfoStatus=!0,this.counter=0,this.movieStarships=[],t.forEach((function(a){R.a.get(a).then((function(t){var a={name:t.data.name,model:t.data.model,manufacturer:t.data.manufacturer,crew:t.data.crew,starship_class:t.data.starship_class};e.movieStarships.push(a),e.counter++})).catch((function(t){console.log(t)})).finally((function(){e.counter==t.length&&(e.loadingMovieInfoStatus=!1)}))})))}}},pt=ft,ht=(a("0266"),Object(v["a"])(pt,lt,ut,!1,null,null,null)),bt=ht.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-pane fade",attrs:{id:"vehicles",role:"tabpanel","aria-labelledby":"vehicles-tab"}},[t._m(0),t.loadingMovieInfoStatus?a("Loading"):t._e(),a("div",{staticClass:"table-responsive"},[t.loadingMovieInfoStatus?t._e():a("table",{staticClass:"table table-bordered table-hover"},[t._m(1),a("tbody",t._l(t.movieVehicles,(function(e,r){return a("tr",{key:r},[a("th",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.model))]),a("td",[t._v(t._s(e.manufacturer))]),a("td",[t._v(t._s(e.crew))]),a("th",[t._v(t._s(e.vehicle_class))])])})),0)])])],1)},gt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"star-wars-icon"},[r("img",{attrs:{src:a("165d")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Model")]),a("th",{attrs:{scope:"col"}},[t._v("Manufacturer")]),a("th",{attrs:{scope:"col"}},[t._v("Crew")]),a("th",{attrs:{scope:"col"}},[t._v("Vehicle Class")])])])}];function _t(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Ot(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_t(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_t(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var yt={name:"ChildVehicles",components:{Loading:O},data:function(){return{movieVehicles:[],loadingMovieInfoStatus:!1,counter:0}},computed:Ot({},Object(i["b"])(["movie","currentMovieTab"])),watch:{currentMovieTab:function(t,e){"vehicles"==this.currentMovieTab&&this.loadMovieVehicles(this.movie.vehicles)}},methods:{loadMovieVehicles:function(t){var e=this;null!=t&&""!=t&&(this.loadingMovieInfoStatus=!0,this.counter=0,this.movieVehicles=[],t.forEach((function(a){R.a.get(a).then((function(t){var a={name:t.data.name,model:t.data.model,manufacturer:t.data.manufacturer,crew:t.data.crew,vehicle_class:t.data.vehicle_class};e.movieVehicles.push(a),e.counter++})).catch((function(t){console.log(t)})).finally((function(){e.counter==t.length&&(e.loadingMovieInfoStatus=!1)}))})))}}},Ct=yt,jt=(a("a732"),Object(v["a"])(Ct,mt,gt,!1,null,null,null)),St=jt.exports;function wt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Pt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?wt(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):wt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Mt={name:"Modal",components:{Loading:O,ChildCharacters:Y,ChildPlanets:tt,ChildSpecies:ct,ChildStarships:bt,ChildVehicles:St},mounted:function(){},computed:Pt({},Object(i["b"])(["movie","movieLoadingStatus"])),methods:{setCurrentMovieTab:function(t){this.$store.dispatch("updateCurrentMovieTab",t)}}},Et=Mt,Dt=(a("22d7"),Object(v["a"])(Et,L,N,!1,null,null,null)),Tt=Dt.exports;function xt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function It(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?xt(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):xt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var kt={name:"Movies",components:{Modal:Tt},mounted:function(){this.$store.dispatch("loadMovies","https://swapi.py4e.com/api/films")},computed:It({},Object(i["b"])(["movies"])),filters:{formateDate:function(t){var e=new Date(t),a=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getFullYear();return r+"/"+a+"/"+n}},methods:{loadMovieByUrl:function(t){this.$store.dispatch("loadMovie",t)}}},$t=kt,Lt=(a("bee4"),Object(v["a"])($t,k,$,!1,null,null,null)),Nt=Lt.exports,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("nav",[a("ul",{staticClass:"pagination pagination-lg justify-content-center"},[a("li",{staticClass:"page-item",class:null==t.prevPageUrl?"disabled":""},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.loadPrevPageUrl(t.prevPageUrl)}}},[t._v("Next")])]),a("li",{staticClass:"page-item",class:null==t.nextPageUrl?"disabled":""},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.loadNextPageUrl(t.nextPageUrl)}}},[t._v("Prev")])])])])])])])},Ut=[];function Bt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Rt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Bt(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Bt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var At={name:"Pagination",computed:Rt({},Object(i["b"])(["prevPageUrl","nextPageUrl"])),methods:{loadPrevPageUrl:function(t){this.$store.dispatch("loadMovies",t)},loadNextPageUrl:function(t){this.$store.dispatch("loadMovies",t)}}},Gt=At,Ft=(a("6ccd"),Object(v["a"])(Gt,Vt,Ut,!1,null,null,null)),Ht=Ft.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"footer"},[a("p",[t._v("Developed with "),a("i",{staticClass:"fa fa-heart"}),t._v(" by "+t._s(t.author)+".")])])])])])])},Yt=[],Jt={name:"Footer",data:function(){return{author:"Michel Motta da Silva"}}},qt=Jt,zt=(a("760c"),Object(v["a"])(qt,Wt,Yt,!1,null,null,null)),Kt=zt.exports;function Qt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Xt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Qt(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Qt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Zt={name:"app",components:{Header:p,Loading:O,Search:P,OrderBy:I,Movies:Nt,Pagination:Ht,Footer:Kt},computed:Xt({},Object(i["b"])(["loadingStatus"]))},te=Zt,ee=Object(v["a"])(te,n,s,!1,null,null,null),ae=ee.exports;a("55dd");r["a"].use(i["a"],R.a);var re=new i["a"].Store({state:{movies:[],movie:{},currentMovieTab:null,prevPageUrl:null,nextPageUrl:null,loadingStatus:!1,movieLoadingStatus:!1},actions:{loadMovies:function(t,e){var a=t.commit;a("SET_LOADING",!0),R.a.get(e).then((function(t){var e=t.data.results,r=t.data.previous,n=t.data.next;a("SET_LOADING",!1),a("SET_MOVIES",{movies:e,prevPageUrl:r,nextPageUrl:n})})).catch((function(t){console.log(t)}))},orderMoviesBy:function(t,e){var a=t.commit;a("SET_MOVIES_ORDER_BY",e)},loadMovie:function(t,e){var a=t.commit;a("SET_LOADING_MOVIE",!0),R.a.get(e).then((function(t){var e=t.data;a("SET_LOADING_MOVIE",!1),a("SET_MOVIE",e),a("SET_CURRENT_MOVIE_TAB","characters")})).catch((function(t){console.log(t)}))},updateCurrentMovieTab:function(t,e){var a=t.commit;a("SET_CURRENT_MOVIE_TAB",e)}},mutations:{SET_MOVIES:function(t,e){var a=e.movies,r=e.prevPageUrl,n=e.nextPageUrl;t.movies=a,t.prevPageUrl=r,t.nextPageUrl=n},SET_LOADING:function(t,e){t.loadingStatus=e},SET_MOVIES_ORDER_BY:function(t,e){"name"==e&&t.movies.sort((function(t,e){return t.title>e.title?1:-1})),"date"==e&&t.movies.sort((function(t,e){return t.release_date>e.release_date?1:-1}))},SET_MOVIE:function(t,e){t.movie=e},SET_CURRENT_MOVIE_TAB:function(t,e){t.currentMovieTab=e},SET_LOADING_MOVIE:function(t,e){t.movieLoadingStatus=e}}});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(ae)},store:re}).$mount("#app")},6860:function(t,e,a){},"6ae0":function(t,e,a){"use strict";a("f6fc")},"6ccd":function(t,e,a){"use strict";a("a3ac")},"760c":function(t,e,a){"use strict";a("c3f5")},"8baf":function(t,e,a){"use strict";a("6860")},a12e:function(t,e,a){t.exports=a.p+"img/Darth-Vader-icon.404242b1.png"},a3ac:function(t,e,a){},a732:function(t,e,a){"use strict";a("119a")},ab48:function(t,e,a){"use strict";a("4593")},afe9:function(t,e,a){},be87:function(t,e,a){},bee4:function(t,e,a){"use strict";a("0f4c")},c093:function(t,e,a){t.exports=a.p+"img/star_wars_logo.5d100186.png"},c3f5:function(t,e,a){},d8dd:function(t,e,a){},da1d:function(t,e,a){"use strict";a("0f48")},e9a6:function(t,e,a){t.exports=a.p+"img/demo_star_wars.e0d00681.jpeg"},eaf0:function(t,e,a){t.exports=a.p+"img/loading.9dcdf537.gif"},ec4c:function(t,e,a){t.exports=a.p+"img/R2D2-icon.23dbe285.png"},f6fc:function(t,e,a){}});
//# sourceMappingURL=app.843e86fd.js.map