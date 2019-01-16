(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(46)},,,,,,function(e,a,t){},,,function(e,a,t){},,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(14),i=t.n(o),c=(t(22),t(48)),l=t(50),s=t(49),m=t(5),h=t(6),u=t(8),p=t(7),g=t(9),d=t(47),b=(t(25),function(e){return r.a.createElement("div",{className:"Burger"},r.a.createElement("div",{className:"burgerButton",onClick:e.click},r.a.createElement("div",{className:"line line1",style:e.burger?{transform:"translate(1px, 7px) rotate(45deg)",width:"100%"}:null}),r.a.createElement("div",{className:"line line2",style:e.burger?{display:"none"}:null}),r.a.createElement("div",{className:"line line3",style:e.burger?{transform:"translate(1px, 0) rotate(-45deg)"}:null})),r.a.createElement("div",{className:"Navigation",style:e.burger&&"/about"===e.location?{display:"flex",background:"#9c8af6"}:e.burger&&"/projects"===e.location?{display:"flex",background:"#26e4bf"}:e.burger&&"react"===e.location?{display:"flex",background:"#39f1ff"}:e.burger&&"angular"===e.location?{display:"flex",background:"#E53938"}:e.burger&&"vanilla"===e.location?{display:"flex",background:"#ead20c"}:e.burger&&"/contact"===e.location?{display:"flex",background:"#3cfbf1"}:e.burger?{display:"flex"}:{display:"none"}},r.a.createElement("h2",null,r.a.createElement(d.a,{to:"/",style:{color:"#fff",fontSize:"1.5em"}},"<bg />")),r.a.createElement("h3",{className:"burgerOptions"},r.a.createElement(d.a,{to:"/about"},"about")),r.a.createElement("h3",{className:"burgerOptions"},r.a.createElement(d.a,{to:"/projects"},"projects")),r.a.createElement("h3",{className:"burgerOptions"},r.a.createElement(d.a,{to:"/contact"},"contact")),r.a.createElement("h3",{className:"burgerOptions"},r.a.createElement("a",{href:"resume.pdf",target:"_blank"},"resume"))))}),f=(t(29),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={content:[{id:0,name:"about",link:"/about"},{id:1,name:"projects",link:"/projects"},{id:2,name:"contact",link:"/contact"},{id:3,name:"resume",link:"/resume"}],burger:!1},t.onBurgerClick=function(){t.setState({burger:!t.state.burger})},t}return Object(g.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this,a=this.state.content.map(function(a){return r.a.createElement("h4",{key:a.id},3!==a.id?r.a.createElement(d.a,{to:a.link,style:"/"===e.props.location?{color:"#00b9ff"}:null},a.name):r.a.createElement("a",{href:"resume.pdf",target:"_blank",style:"/"===e.props.location?{color:"#00b9ff"}:null},a.name))});return console.log(this.props),r.a.createElement("div",{className:"Nav"},r.a.createElement(b,{burger:this.state.burger,click:this.onBurgerClick,location:this.props.location}),r.a.createElement("div",{className:"logo"},r.a.createElement("h3",{id:"logo"},r.a.createElement(d.a,{to:"/"},"<bg />"))),r.a.createElement("div",{className:"navContent"},a))}}]),a}(n.Component)),v=(t(31),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={icons:[{id:0,path:"https://github.com/Bryang09",class:"fab fa-github"},{id:1,path:"https://www.linkedin.com/in/bryan-gonzalez09/",class:"fab fa-linkedin"},{id:2,path:"mailto:bryan.gonzalez1020.bg@gmail.com",class:"fas fa-envelope"}],width:window.innerWidth},t.componentDidUpdate=function(){window.innerWidth!==t.state.width&&t.setState({width:window.innerWidth})},t}return Object(g.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.state.icons.map(function(e){return r.a.createElement("div",{className:"icon",key:e.id},r.a.createElement("a",{href:e.path,target:2!==e.id?"_blank":null,rel:"noopener noreferrer"},r.a.createElement("i",{className:e.class})))});return r.a.createElement("div",{className:"Landing"},r.a.createElement(f,{location:this.props.location.pathname}),r.a.createElement("div",{className:"landingContent"},r.a.createElement("h1",null,"Bryan Gonzalez"),r.a.createElement("h3",null,"Front End Developer"),r.a.createElement("div",{className:"icons"},e)))}}]),a}(n.Component)),y=(t(33),function(e){return r.a.createElement("div",{className:e.hero?"aboutHero":"aboutHero altBg"},r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,"Who Am I?"),r.a.createElement("h5",{onClick:e.onHero},"Find Out!")),r.a.createElement("div",{className:"illustration"}))}),E=function(e){return r.a.createElement("section",{className:"aboutMe",style:e.heroOnly?{display:"none"}:{display:"flex"}},r.a.createElement("div",{className:"intPara"},r.a.createElement("h2",null,"So, Who am I And why should you read this?"),r.a.createElement("h4",null,"My name is Bryan Gonzalez and I'm a Front End Developer. I am 100% self taught, which contrary to popular belief, is an advantage. How dare I say such a thing? Well, I've had to learn the hard way that knowing how to find an answer is just as crusial as knowing the answer. For over a year now, I've had the pleasure of seemingly endless adventures to finding an answer, that frankly, aren't all that complicated. However, I believe this is what allowed me to grow not only as a developer, but as a person as well."),r.a.createElement("h2",null,"That didn't answer who I am?"),r.a.createElement("h4",null,"If you've read this far, you probably have a pretty good idea about the type of person I am. But is it accurate? Yes. I'm a pretty laid back guy with a work oriented mentality. This, I've been told, makes me an efficient worker. I also enjoy watching sports and catching a good comedy. So, if you're looking for a hardworking and laid back worker, look no further."),r.a.createElement("div",{className:"icons"},e.icons)))},k=(t(35),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={heroOnly:!0,icons:[{id:0,class:"fab fa-html5",color:"#e54c21"},{id:1,class:"fab fa-css3-alt",color:"#29a9df"},{id:2,class:"fab fa-js",color:"#f2bf26"},{id:3,class:"fab fa-react",color:"#61dbfb"},{id:4,class:"fab fa-angular",color:"#d6002f"}]},t.onHeroButton=function(){t.setState({heroOnly:!t.state.heroOnly})},t}return Object(g.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.state.icons.map(function(e){return r.a.createElement("div",{className:"icon",key:e.id},r.a.createElement("i",{className:"".concat(e.class," "),style:{color:e.color}}))});return r.a.createElement("div",{className:"About"},r.a.createElement(f,{location:this.props.location.pathname}),r.a.createElement(y,{hero:this.state.heroOnly,onHero:this.onHeroButton}),r.a.createElement(E,{heroOnly:this.state.heroOnly,icons:e}))}}]),a}(n.Component)),w=(t(37),t(39),function(e){var a=e.options.map(function(a){return r.a.createElement("div",{className:"option",key:a.id},r.a.createElement("h3",{onClick:0===a.id?e.onTop:1===a.id?e.onRecent:2===a.id?e.onReact:3===a.id?e.onVanilla:4===a.id?e.onAngular:5===a.id?e.onAxios:null},a.name))});return r.a.createElement("div",{className:"projectBg"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{className:"options"},a))}),j=function(e){return console.log(e),e.projects.map(function(e){return r.a.createElement("div",{className:"project",style:{backgroundImage:"url(".concat(e.img,")")},key:e.id},r.a.createElement(d.a,{to:!0===e.react?{pathname:"/projects/react/".concat(e.id)}:!0===e.angular?{pathname:"/projects/angular/".concat(e.id)}:!0===e.vanilla?{pathname:"/projects/vanilla/".concat(e.id)}:null},r.a.createElement("div",{className:"link"})))})},x=[{id:0,img:"./img/watches.jpg",top:!0,recent:!1,react:!0,vanilla:!1,angular:!1,axios:!0,code:"https://github.com/Bryang09/watches",demo:"https://intense-bayou-29884.herokuapp.com/#/",name:"The Watches App",desc:"This is an application created with the MERN Stack."},{id:1,img:"./img/newshelter.jpg",top:!0,recent:!1,react:!0,vanilla:!1,angular:!1,axios:!0,code:"https://github.com/Bryang09/newshelter",demo:"https://bryang09.github.io/newshelter/#/",name:"The Shelter App",desc:"This is a React application that uses the PetFinder API to search for nearby shelters and animals."},{id:2,img:"./img/newmovies.jpg",top:!0,recent:!1,react:!0,vanilla:!1,angular:!1,axios:!0,code:"https://github.com/Bryang09/newmovies",demo:"https://bryang09.github.io/newmovies/#/",name:"The Movies App",desc:"This is an application that uses the MoviesDB API to search for movies and shows."},{id:3,img:"./img/anime.jpg",top:!0,recent:!1,react:!0,vanilla:!1,angular:!1,axios:!0,code:"https://github.com/Bryang09/anime",demo:"https://bryang09.github.io/anime/#/",name:"The Watches App",desc:"This is an application created with the MERN Stack."},{id:4,img:"./img/traveling.jpg",top:!0,recent:!1,react:!0,vanilla:!1,angular:!1,axios:!1,code:"https://github.com/Bryang09/traveling",demo:"https://bryang09.github.io/traveling/#/",name:"The Traveling App",desc:"This is an application created with React that focuses on better animations and UI"},{id:5,img:"./img/ng-restaurant.jpg",top:!0,recent:!1,react:!1,vanilla:!1,angular:!0,axios:!1,code:"https://github.com/Bryang09/ng-restaurant",demo:"https://bryang09.github.io/ng-restaurant",name:"The Restuarant App",desc:"This is an application that uses Angular 7 to display different menu items."},{id:6,img:"./img/designer.jpg",top:!1,recent:!0,react:!1,vanilla:!0,angular:!1,axios:!1,code:"https://github.com/Bryang09/appDeveloper",demo:"https://bryang09.github.io/appDeveloper",name:"The Designer App",desc:"This is a Vanilla Js application created after prototyping the design with Adobe XD"},{id:7,img:"./img/construction.jpg",top:!1,recent:!0,react:!1,vanilla:!0,angular:!1,axios:!1,code:"https://github.com/Bryang09/construction",demo:"https://bryang09.github.io/construction",name:"The Construction App",desc:"This is a Vanilla Js Application for a fictional construction company."},{id:8,img:"./img/speech.jpg",top:!1,recent:!0,react:!1,vanilla:!0,angular:!1,axios:!1,code:"https://github.com/Bryang09/textToSpeech2",demo:"https://bryang09.github.io/textToSpeech2",name:"The Speech App",desc:"A Vanilla Js application which speaks."},{id:9,img:"./img/word.jpg",top:!1,recent:!0,react:!1,vanilla:!0,angular:!1,axios:!1,code:"https://github.com/Bryang09/wordBeater",demo:"https://bryang09.github.io/wordBeater",name:"The Word Game",desc:"This is a Vanilla Js Application that tests typing speed."},{id:10,img:"./img/split.jpg",top:!1,recent:!0,react:!1,vanilla:!0,angular:!1,axios:!1,code:"https://github.com/Bryang09/splitScreen",demo:"https://bryang09.github.io/splitScreen",name:"The Split Screen App",desc:"This is an application that changes display based on mouse position."},{id:11,img:"./img/ghFinder.jpg",top:!1,recent:!0,react:!1,vanilla:!0,angular:!1,axios:!1,code:"https://github.com/Bryang09/ghFinder",demo:"https://bryang09.github.io/ghFinder",name:"The GhFinder App",desc:"A Vanilla Js application that uses the Github Api."},{id:12,img:"./img/glasses.png",top:!1,recent:!1,react:!1,vanilla:!1,angular:!0,axios:!1,code:"https://github.com/Bryang09/ng-glasses",demo:"https://bryang09.github.io/ng-glasses",name:"The Glasses App",desc:"A UI centric application that uses Angular."},{id:13,img:"./img/trainer.png",top:!1,recent:!1,react:!1,vanilla:!1,angular:!0,axios:!1,code:"https://github.com/Bryang09/ng-trainer",demo:"https://bryang09.github.io/ng-trainer",name:"The Trainer App",desc:"This is an application for a for a fiction trainer."}],N=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={options:[{id:0,name:"Top"},{id:1,name:"Recent"},{id:2,name:"React"},{id:3,name:"Vanilla Js"},{id:4,name:"Angular"},{id:5,name:"Axios"}],top:!0,recent:!1,react:!1,vanilla:!1,angular:!1,axios:!1},t.onTop=function(){t.setState({top:!0,recent:!1,react:!1,vanilla:!1,angular:!1,axios:!1})},t.onRecent=function(){t.setState({top:!1,recent:!0,react:!1,vanilla:!1,angular:!1,axios:!1})},t.onReact=function(){t.setState({top:!1,recent:!1,react:!0,vanilla:!1,angular:!1,axios:!1})},t.onVanilla=function(){t.setState({top:!1,recent:!1,react:!1,vanilla:!0,angular:!1,axios:!1})},t.onAngular=function(){t.setState({top:!1,recent:!1,react:!1,vanilla:!1,angular:!0,axios:!1})},t.onAxios=function(){t.setState({top:!1,recent:!1,react:!1,vanilla:!1,angular:!1,axios:!0})},t}return Object(g.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=x.filter(function(e){return e.top}),a=x.filter(function(e){return e.recent}),t=x.filter(function(e){return e.react}),n=x.filter(function(e){return e.vanilla}),o=x.filter(function(e){return e.angular}),i=x.filter(function(e){return e.axios});return r.a.createElement("div",{className:"Projects"},r.a.createElement(f,{location:this.props.location.pathname}),r.a.createElement(w,{options:this.state.options,onTop:this.onTop,onRecent:this.onRecent,onReact:this.onReact,onVanilla:this.onVanilla,onAngular:this.onAngular,onAxios:this.onAxios}),r.a.createElement("div",{className:"projectsContainer"},this.state.top?r.a.createElement(j,{projects:e}):this.state.recent?r.a.createElement(j,{projects:a}):this.state.react?r.a.createElement(j,{projects:t}):this.state.vanilla?r.a.createElement(j,{projects:n}):this.state.angular?r.a.createElement(j,{projects:o}):this.state.axios?r.a.createElement(j,{projects:i}):null))}}]),a}(n.Component),A=(t(41),function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.match.params.tech,a=this.props.match.params.id;return console.log(this.props),console.log(e,a),console.log(x),x.filter(function(e){return e.id==a}).map(function(a){return r.a.createElement("div",{className:"Project",style:{backgroundImage:"url(".concat(a.img,")")},key:a.id},r.a.createElement(f,{location:e}),r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,a.name),r.a.createElement("h3",null,a.desc),r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{href:a.demo,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h4",{style:"react"===e?{background:"linear-gradient(rgb(57, 241, 255), rgb(57,241,255), #1D7980)"}:"angular"===e?{background:"linear-gradient(#E53939, #E53939, #802E2E)"}:"vanilla"===e?{background:"linear-gradient(#f8e01e, #f8e01e, #9c9540)"}:null},"Demo")),r.a.createElement("a",{href:a.code,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h4",{style:"react"===e?{background:"linear-gradient(#00B9FF ,#00B9FF , #005D80)"}:"angular"===e?{background:"linear-gradient(#7f0e0e,#7f0e0e,#7f0e0e,#3d0a0a)"}:"vanilla"===e?{background:"linear-gradient(#e0d54c, #e0d54c, #735e0b)"}:null},"Code")))))})}}]),a}(n.Component)),O=(t(43),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={toggle:!1},t.onToggle=function(){t.setState({toggle:!t.state.toggle})},t}return Object(g.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"Contact"},r.a.createElement(f,{location:this.props.location.pathname}),r.a.createElement("div",{className:"bg",style:this.state.toggle?{height:"60vh",backgroundImage:"url(/static/media/bg2.945f029d.svg)"}:this.state.toggle?{height:"60vh",backgroundImage:"url(/static/media/bg2.945f029d.svg)"}:{height:"100vh",background:"linear-gradient(#39FFF1,#9C8AF6)"}},r.a.createElement("h1",{style:this.state.toggle?{fontSize:"3em"}:{fontSize:"4em"}},"Lets Work Together!"),r.a.createElement("h5",{onClick:this.onToggle},"Contact")),r.a.createElement("section",{className:"contactBoxesContainer",style:this.state.toggle?{display:"flex"}:this.state.toggle?null:{display:"none"}},r.a.createElement("a",{href:"https://www.linkedin.com/in/bryan-gonzalez09",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"box box1"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("div",{className:"text"},r.a.createElement("h3",null,"Linkedin")))," "),r.a.createElement("a",{href:"mailto:bryan.gonzalez1020.bg@gmail.com"},r.a.createElement("div",{className:"box box2"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("div",{className:"text"},r.a.createElement("h3",null,"Gmail"))))))}}]),a}(n.Component)),T=function(){return r.a.createElement(l.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:v}),r.a.createElement(s.a,{exact:!0,path:"/about",component:k}),r.a.createElement(s.a,{exact:!0,path:"/projects",component:N}),r.a.createElement(s.a,{exact:!0,path:"/projects/:tech/:id",component:A}),r.a.createElement(s.a,{exact:!0,path:"/contact",component:O}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,2,1]]]);
//# sourceMappingURL=main.be048f45.chunk.js.map