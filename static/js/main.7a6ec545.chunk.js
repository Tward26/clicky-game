(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Beedrill",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"},{id:2,name:"Golisopod",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/768.png"},{id:3,name:"Heracross",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png"},{id:4,name:"Ninjask",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/291.png"},{id:5,name:"Pinsir",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png"},{id:6,name:"Scyther",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png"},{id:7,name:"Venomoth",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png"},{id:8,name:"Vikavolt",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/738.png"},{id:9,name:"Joltik",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/595.png"},{id:10,name:"Durant",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/632.png"},{id:11,name:"Buzzwole",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/794.png"},{id:12,name:"Armaldo",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/348.png"}]},,,,function(e,t,s){e.exports=s(20)},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(2),c=s.n(o),r=s(7),m=s(3),i=s(4),l=s(8),u=s(5),p=s(9),g=(s(16),function(e){return a.a.createElement("nav",{className:"sticky-top"},a.a.createElement("ul",null,a.a.createElement("li",null,"Bug-Type Pokemon Memory Game"),a.a.createElement("li",{className:"".concat(e.class)},e.guess),a.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))}),d=(s(17),function(){return a.a.createElement("div",{className:"jumbotron text-center"},a.a.createElement("h1",null,"Bug-Type Pokemon Memory Game"),a.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))}),f=function(e){return a.a.createElement("div",{className:"container d-flex justify-content-center flex-wrap align-items-center"},e.children)},k=s(6);s(18);var h=function(e){return a.a.createElement("div",{className:"card",onClick:function(){return e.click(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))},y=function(e){function t(){var e,s;Object(m.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(s=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={guessedArray:[],pokemonList:k,guess:"Click an Image to begin",score:0,topScore:0,class:""},s.click=function(e){s.repeatCheck(e)&&(s.addToGuessedArray(e),s.topScoreCheck(s.state.score),s.shuffle(s.state.pokemonList))},s.topScoreCheck=function(e){e<s.state.topScore?s.setState(function(e){return{score:e.score+1,guess:"Correct Guess",class:"correct"}}):s.setState(function(e){return{score:e.score+1,guess:"Correct Guess",topScore:e.topScore+1,class:"correct"}})},s.shuffle=function(e){for(var t=e.slice(),n=t.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),o=[t[a],t[n]];t[n]=o[0],t[a]=o[1]}s.setState(function(e){return{pokemonList:t}})},s.repeatCheck=function(e){for(var t=!0,n=0;n<s.state.guessedArray.length;n++)if(s.state.guessedArray[n].id===e)return s.shuffle(s.state.pokemonList),s.setState(function(e){return{score:e.score=0,guess:"Incorrect Guess - The Game has Reset",class:"incorrect",guessedArray:[]}}),t=!1;return t},s.addToGuessedArray=function(e){var t=null;s.state.pokemonList.forEach(function(n,a){n.id===e&&(t=s.state.pokemonList[a])}),s.setState(function(e){return{guessedArray:[].concat(Object(r.a)(e.guessedArray),[t])}})},s}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{guess:this.state.guess,score:this.state.score,topScore:this.state.topScore,class:this.state.class}),a.a.createElement(d,null),a.a.createElement(f,null,this.state.pokemonList.map(function(t){return a.a.createElement(h,{id:t.id,key:t.id,name:t.name,image:t.image,click:e.click})})))}}]),t}(n.Component);s(19);c.a.render(a.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7a6ec545.chunk.js.map