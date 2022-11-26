(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(15),c(10)),n=c(2),r=c(1),d=(c(16),c(17),c(18),c(0)),l=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(d.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(l,{movie:e},e.imdbId)}))})},j=c(8),m=c(6),b=c.n(m),u=c(9),h=c.n(u);function v(e){return fetch("".concat("https://www.omdbapi.com/?i=tt3896198&apikey=ac13be43","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}c(21);var O=function(e){var t=e.onAdd,c=Object(r.useState)(""),i=Object(n.a)(c,2),a=i[0],s=i[1],o=Object(r.useState)(null),m=Object(n.a)(o,2),u=m[0],O=m[1],x=Object(r.useState)(!1),p=Object(n.a)(x,2),f=p[0],N=p[1],g=Object(r.useState)(!1),y=Object(n.a)(g,2),w=y[0],I=y[1],S=function(){var e=Object(j.a)(b.a.mark((function e(t){var c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),I(!0),e.next=4,v(a);case 4:c=e.sent,I(!1),"Error"in c?N(!0):(i={title:c.Title,description:c.Plot,imgUrl:"N/A"===c.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":c.Poster,imdbUrl:"https://www.imdb.com/title/".concat(c.imdbID),imdbId:c.imdbID},O(i));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"find-movie",onSubmit:S,children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:a,onChange:function(e){s(e.target.value),N(!1)}})}),f&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{"data-cy":"searchButton",type:"submit",className:h()("button is-light",{"is-loading":w}),disabled:!a,children:u?"Search again":"Find a movie"})}),u&&Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return t(u),s(""),O(null),void I(!1)},children:"Add to the list"})})]})]}),u&&Object(d.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(d.jsx)("h2",{className:"title",children:"Preview"}),Object(d.jsx)(l,{movie:u})]})]})},x=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(o,{movies:c})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(O,{onAdd:function(e){c.find((function(t){return t.imdbId===e.imdbId}))||i([].concat(Object(s.a)(c),[e]))}})})]})};a.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.43238f20.chunk.js.map