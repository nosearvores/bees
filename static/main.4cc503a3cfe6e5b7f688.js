webpackJsonp([2],{0:function(e,t,n){e.exports=n("eZJJ")},"2CK4":function(e,t,n){"use strict";var r=n("xCVC");n.d(t,"a",function(){return r.a})},"6hL5":function(e,t){},"8TCK":function(e,t,n){"use strict";var r=n("RIJa");n.d(t,"a",function(){return r.a})},"93Qx":function(e,t,n){"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function createDynamicSaga(e,t){function _start(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("error",t.t0);case 8:case"end":return t.stop()}},r[0],this,[[0,5]])}var r=[_start].map(regeneratorRuntime.mark);return regeneratorRuntime.mark(function dynamicSaga(){var r,o;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return r=void 0,i.next=3,n.i(a.d)(_start,t);case 3:o=i.sent;case 4:return i.next=6,n.i(a.b)(e);case 6:if(!(r=i.sent)){i.next=14;break}return i.next=9,n.i(a.e)(o);case 9:return i.next=11,n.i(a.d)(_start,r.payload);case 11:o=i.sent,i.next=4;break;case 14:case"end":return i.stop()}},dynamicSaga,this)})}var r=n("tExh"),o=(n.n(r),n("dZCP")),i=n("fTVT"),a=n("6qFv");n.d(t,"a",function(){return s});var u=n.i(i.a)(),c=void 0,s=function(e){var t=e.reducers,i=e.rootSagas,a=e.preloadedState,s=void 0===a?n.i(r.Map)():a,f=e.settings,l=void 0===f?{}:f,p=e.middlewares,d=void 0===p?[]:p,h=e.enhancers,b=void 0===h?[]:h;return d.unshift(u),l.isBrowser&&l.debugMode&&window.__REDUX_DEVTOOLS_EXTENSION__&&b.unshift(window.__REDUX_DEVTOOLS_EXTENSION__()),c=n.i(o.b)(t,s,o.c.apply(void 0,[o.d.apply(void 0,_toConsumableArray(d))].concat(_toConsumableArray(b)))),u.run(createDynamicSaga("main/set_sagas",i())),c}},CLMg:function(e,t){},DcxK:function(e,t,n){"use strict";var r=n("WTHF");n.d(t,"a",function(){return r.a})},FIlj:function(e,t,n){"use strict";var r=n("jMn0");n.d(t,"a",function(){return o});var o="dashboard/increment";n.i(r.a)(o),n.i(r.a)("dashboard/decrement")},G9K2:function(e,t,n){"use strict";var r=n("ZkNz"),o=n.n(r),i=n("uuNt"),a=(n.n(i),n("RFp0")),u=n.n(a);n.d(t,"a",function(){return c});var c=function(e){var t=e.title,n=e.openMenu;return o.a.createElement(u.a,{iconClassNameRight:"muidocs-icon-navigation-expand-more",title:t,onLeftIconButtonTouchTap:n})};c.propTypes={title:i.string,openMenu:i.func}},HzLx:function(e,t,n){"use strict";var r=n("HvbX"),o=n.n(r),i=n("4PyC"),a=(n.n(i),n("Xdng"));n.d(t,"b",function(){return d}),n.d(t,"a",function(){return h});var u=a.a[600],c=a.b.A200,s=a.a[800],f=a.b[200],l=a.c[800],p=a.c[700],d={spacing:o.a,fontFamily:"Roboto, sans-serif",borderRadius:2,palette:{primary1Color:a.a[500],primary2Color:a.a[700],primary3Color:a.a[300],accent1Color:a.b[500],accent2Color:a.b.A400,accent3Color:a.b.A700,textColor:s,alternateTextColor:f,canvasColor:c,borderColor:a.d[300],disabledColor:n.i(i.fade)(s,.3),pickerHeaderColor:a.a[500],clockCircleColor:n.i(i.fade)(s,.07),shadowColor:l}},h={spacing:o.a,fontFamily:"Roboto, sans-serif",borderRadius:2,palette:{primary1Color:a.b[500],primary2Color:a.b[700],primary3Color:a.b[300],accent1Color:a.a[500],accent2Color:a.a.A400,accent3Color:a.a.A700,textColor:f,alternateTextColor:s,canvasColor:u,borderColor:a.d[300],disabledColor:n.i(i.fade)(f,.3),pickerHeaderColor:a.a[500],clockCircleColor:n.i(i.fade)(f,.07),shadowColor:p}}},JUZq:function(e,t,n){"use strict";var r=n("y3QL");n.d(t,"a",function(){return r.a})},NHIF:function(e,t,n){"use strict";var r=(n("i8ci"),n("JUZq"),n("8TCK"));n.d(t,"a",function(){return r.a})},NXDo:function(e,t,n){"use strict";var r=n("d10G");n.d(t,"a",function(){return r.a})},P0dA:function(e,t,n){"use strict";var r=n("ZkNz"),o=(n.n(r),n("srt2"));n.n(o)},PA37:function(e,t,n){"use strict";function watchFirstThreeIncrements(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<3)){t.next=7;break}return t.next=4,n.i(r.b)(o.a);case 4:e++,t.next=1;break;case 7:return t.next=9,n.i(r.c)({type:"SHOW_CONGRATULATION"});case 9:case"end":return t.stop()}},i[0],this)}var r=n("6qFv"),o=n("FIlj");n.d(t,"a",function(){return a});var i=[watchFirstThreeIncrements].map(regeneratorRuntime.mark),a=function(){return[watchFirstThreeIncrements()]}},RIJa:function(e,t,n){"use strict";var r=n("NCAU"),o=n("JUZq"),i=n("i8ci"),a=n("qrZj");n.d(t,"a",function(){return s});var u=function(e){return{registered:i.a.initial(e)}},c=function(e){return{onRegister:function(t){return e(a.j({id:t}))},onUnregister:function(t){return e(a.k({id:t}))},onToggle:function(t,n){return e(a.l({id:t,open:n}))},onOpen:function(t){return e(a.h({id:t}))},onClose:function(t){return e(a.i({id:t}))},onDock:function(t){return e(a.m({id:t}))},onUndock:function(t){return e(a.n({id:t}))}}},s=n.i(r.b)(u,c)(o.a)},SjZ8:function(e,t,n){"use strict";var r=n("tjo/");n.d(t,"a",function(){return r.a})},TgCk:function(e,t,n){"use strict";var r=n("DcxK");n.d(t,"What",function(){return r.a});var o=n("qwiO");n.n(o)},ToJX:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("ZkNz"),o=(n.n(r),n("uuNt")),i=(n.n(o),n("t8iB"));n.n(i);n.d(t,"a",function(){return s});var a,u,c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),s=(u=a=function(e){function OfflinePlugin(){return _classCallCheck(this,OfflinePlugin),_possibleConstructorReturn(this,(OfflinePlugin.__proto__||Object.getPrototypeOf(OfflinePlugin)).apply(this,arguments))}return _inherits(OfflinePlugin,e),c(OfflinePlugin,[{key:"componentWillMount",value:function(){i.install()}},{key:"render",value:function(){return this.props.children}}]),OfflinePlugin}(r.Component),a.propTypes={children:o.element.isRequired},u)},VQhf:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getDefaultTheme(){return l||(l=(0,f.default)()),l}function muiThemeable(){return function(e){var t=function(t,n){var r=n.muiTheme,i=void 0===r?getDefaultTheme():r;return a.default.createElement(e,(0,o.default)({muiTheme:i},t))};return t.contextTypes={muiTheme:c.default.object.isRequired},t}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("DH0D"),o=_interopRequireDefault(r);t.default=muiThemeable;var i=n("ZkNz"),a=_interopRequireDefault(i),u=n("uuNt"),c=_interopRequireDefault(u),s=n("6Q00"),f=_interopRequireDefault(s),l=void 0},WARu:function(e,t,n){"use strict";var r=n("tExh"),o=(n.n(r),n("OS9/")),i=(n.n(o),n("qrZj"));n.d(t,"a",function(){return c});var a=n.i(r.Map)(),u={opened:!1,docked:!1},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1],c=t.type,s=t.payload,f=s&&s.id?s.id:null,l=[f,"opened"],p=[f,"docked"];switch(c){case i.a:return e.set(f,n.i(r.Map)(u));case i.b:return e.delete(f);case i.c:return e.setIn(l,!0);case i.d:return e.setIn(l,!1);case i.e:var d=n.i(o.isBoolean)(s.open)?s.open:!e.getIn(l);return e.setIn(l,d);case i.f:return e.setIn(p,!0);case i.g:return e.setIn(p,!1);default:return e}}},WIDM:function(e,t,n){"use strict";var r=n("ToJX");n.d(t,"a",function(){return r.a});var o=n("yzlT");n.d(t,"b",function(){return o.a});var i=(n("P0dA"),n("G9K2"));n.d(t,"c",function(){return i.a});var a=n("xo9C");n.d(t,"d",function(){return a.a})},WTHF:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("ZkNz"),o=n.n(r);n.d(t,"a",function(){return c});var i,a,u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),c=(a=i=function(e){function What(){return _classCallCheck(this,What),_possibleConstructorReturn(this,(What.__proto__||Object.getPrototypeOf(What)).apply(this,arguments))}return _inherits(What,e),u(What,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",{style:{padding:"1em"}},"Segundo artigo na"," ",o.a.createElement("a",{href:"https://pt.wikipedia.org/wiki/Abelha"},"Wikipédia"),":"),o.a.createElement("blockquote",{cite:"https://pt.wikipedia.org/wiki/Abelha"},"Abelhas são insetos voadores, conhecidos pelo seu papel na polinização. Pertencem à ordem Hymenoptera, da superfamília Apoidea, subgrupo Anthophila, e são aparentados das vespas e formigas."),o.a.createElement("blockquote",{cite:"https://pt.wikipedia.org/wiki/Abelha"},"O representante mais conhecido é a Apis mellifera, oriunda do Velho Mundo, criada em larga escala para a produção de mel, cera, própolis, geleia real e veneno (Apitoxina). As espécies de abelhas nativas das Américas (Novo Mundo) não possuem ferrão. A maioria destas pertence à tribo Meliponini."))}}]),What}(r.PureComponent),i.title="Definição",i.path="/bees/definicao",a)},Xdng:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return a});var r={50:"#fff8eb",100:"#ffefcd",200:"#ffe4ab",300:"#ffd989",400:"#ffd070",500:"#ffc857",600:"#ffc24f",700:"#ffbb46",800:"#ffb43c",900:"#ffa72c",A100:"#ffffff",A200:"#ffffff",A400:"#ffeed8",A700:"#ffe3be",contrastDefaultColor:"dark"},o={50:"#e3e4e6",100:"#babcbf",200:"#8c9095",300:"#5d646b",400:"#3b424b",500:"#18212b",600:"#151d26",700:"#111820",800:"#0e141a",900:"#080b10",A100:"#5498ff",A200:"#217aff",A400:"#005fed",A700:"#0055d4",contrastDefaultColor:"light"},i={50:"#f7faf7",100:"#ebf4ec",200:"#deecdf",300:"#d1e4d2",400:"#c7dfc9",500:"#bdd9bf",600:"#b7d5b9",700:"#aecfb1",800:"#a6caa9",900:"#98c09b",A100:"#ffffff",A200:"#ffffff",A400:"#fafffa",A700:"#e0ffe2",contrastDefaultColor:"dark"},a={50:"#d59f98",100:"#bf6d62",200:"#a54f43",300:"#72372f",400:"#5d2c26",500:"#47221d",600:"#311814",700:"#1c0d0b",800:"#060302",900:"#000000",A100:"#e9877a",A200:"#da3923",A400:"#762b20",A700:"#5c2821",contrastDefaultColor:"light"}},YLfx:function(e,t,n){"use strict";var r=n("jMn0");n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return u});var o="main/set_title",i="main/menu_push",a=n.i(r.a)(o),u=n.i(r.a)(i)},"Z/sw":function(e,t,n){"use strict";var r=(n("pvNS"),n("syx9"),n("h5mE"));n.d(t,"a",function(){return r.a})},bwgu:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=function(e){var t=e.get("drawer");return t?t.toJS():t},o={initial:r}},c9El:function(e,t,n){"use strict";var r=n("YLfx");n.d(t,"a",function(){return r.c}),n.d(t,"b",function(){return r.d});var o=(n("xRE2"),n("paNr"));n.d(t,"c",function(){return o.a})},d10G:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("ZkNz"),o=n.n(r);n.d(t,"a",function(){return c});var i,a,u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),c=(a=i=function(e){function Home(){return _classCallCheck(this,Home),_possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).apply(this,arguments))}return _inherits(Home,e),u(Home,[{key:"render",value:function(){return o.a.createElement("p",{style:{padding:"1em"}},"Banco de dados de informações sobre abelhas.")}}]),Home}(r.PureComponent),i.title="Home",i.path="/bees/",a)},eZJJ:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n("6hL5"),o=(n.n(r),n("rBBz")),i=(n.n(o),n("lJls")),a=(n.n(i),n("ZkNz")),u=n.n(a),c=n("k6EK"),s=(n.n(c),n("zvQv")),f=(n.n(s),n("iELW")),l=n("pvNS"),p=n("Z/sw"),d=n("jSj6"),h=n("x0zZ"),b=n.i(f.a)("/bees/",l.a),m=n.i(f.b)({reducers:d.combinedReducers,rootSagas:h.a,settings:{isBrowser:l.a,debugMode:l.b}}),v=function(e){return function(){n.i(s.render)(u.a.createElement(c.AppContainer,null,u.a.createElement(e,{store:m,history:b})),document.getElementById("root")),l.c&&("android"===cordova.platformId&&StatusBar&&StatusBar.backgroundColorByHexString("#004F6B"),cordova.InAppBrowser&&(window.open=cordova.InAppBrowser.open))}};l.c?document.addEventListener("deviceready",v(p.a),!1):document.addEventListener("DOMContentLoaded",v(p.a),!1),l.b&&e.hot&&(e.hot.accept("app",function(){v(p.a)()}),e.hot.accept("app/redux/reducer",function(){m.replaceReducer(n("jSj6").combinedReducers)}),e.hot.accept("app/redux/sagas",function(){m.dispatch({type:"main/set_sagas",payload:n.i(h.a)()})}))}).call(t,n("f1Eh")(e))},h5mE:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("ZkNz"),o=n.n(r),i=n("NCAU"),a=n("US/c"),u=n("uuNt"),c=(n.n(u),n("WIDM")),s=n("m9ep"),f=n("zq9m"),l=n("TgCk");n.d(t,"a",function(){return b});var p,d,h=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),b=(d=p=function(e){function App(){return _classCallCheck(this,App),_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments))}return _inherits(App,e),h(App,[{key:"componentWillMount",value:function(){this.props.store.dispatch(n.i(s.a)("Bees"))}},{key:"renderRoute",value:function(e){var t=e.title,r=e.path;return this.props.store.dispatch(n.i(s.b)({title:t,path:r})),o.a.createElement(a.a,{path:r,component:e})}},{key:"render",value:function(){var e=this.props,t=e.store,n=e.history;return o.a.createElement(c.a,null,o.a.createElement(c.b,{dark:!0},o.a.createElement(i.a,{store:t},o.a.createElement(a.b,{history:n},o.a.createElement(s.c,null,this.renderRoute(f.Home),this.renderRoute(l.What))))))}}]),App}(r.PureComponent),p.propTypes={store:u.object,history:u.object},d)},i8ci:function(e,t,n){"use strict";var r=(n("qrZj"),n("WARu"),n("bwgu"));n.d(t,"a",function(){return r.a})},iELW:function(e,t,n){"use strict";var r=n("zuwZ");n.d(t,"a",function(){return r.a});var o=n("93Qx");n.d(t,"b",function(){return o.a})},jSj6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("ukz8"),o=(n.n(r),n("xRE2")),i=n("WARu");n.d(t,"combinedReducers",function(){return a});var a=n.i(r.combineReducers)({main:o.a,drawer:i.a})},lJls:function(e,t){},m9ep:function(e,t,n){"use strict";var r=n("c9El");n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return r.b});var o=(n("SjZ8"),n("2CK4"));n.d(t,"c",function(){return o.a})},paNr:function(e,t,n){"use strict";var r=n("cw4v");n.n(r);n.d(t,"a",function(){return u});var o=function(e){return e.get("main")},i=n.i(r.createSelector)(o,function(e){return e.get("title")}),a=n.i(r.createSelector)(o,function(e){return e.get("menu").toList().toJS()}),u={initial:o,getTitle:i,getMenu:a}},pvNS:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r=!1,o=!0,i=!1},qrZj:function(e,t,n){"use strict";var r=n("jMn0");n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"e",function(){return a}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"f",function(){return s}),n.d(t,"g",function(){return f}),n.d(t,"j",function(){return l}),n.d(t,"k",function(){return p}),n.d(t,"l",function(){return d}),n.d(t,"h",function(){return h}),n.d(t,"i",function(){return b}),n.d(t,"m",function(){return m}),n.d(t,"n",function(){return v});var o="drawer/register",i="drawer/unregister",a="drawer/toggle",u="drawer/open",c="drawer/close",s="drawer/dock",f="drawer/undock",l=n.i(r.a)(o),p=n.i(r.a)(i),d=n.i(r.a)(a),h=n.i(r.a)(u),b=n.i(r.a)(c),m=n.i(r.a)(s),v=n.i(r.a)(f)},qwiO:function(e,t){},rBBz:function(e,t,n){e.exports=n.p+"static/web-app.manifest.5a029e502a28fb8ff564cfded82dcadd.json"},syx9:function(e,t,n){"use strict";n("x0zZ"),n("jSj6")},t8iB:function(e,t){function hasSW(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname)}function install(e){if(e||(e={}),hasSW()){var t=navigator.serviceWorker.register("/bees/static/sw.js"),r=function(e){function onUpdateStateChange(){switch(r.state){case"redundant":o("onUpdateFailed"),r.onstatechange=null;break;case"installing":t||o("onUpdating");break;case"installed":n||o("onUpdateReady");break;case"activated":o("onUpdated"),r.onstatechange=null}}function onInstallStateChange(){switch(r.state){case"redundant":r.onstatechange=null;break;case"installing":case"installed":break;case"activated":o("onInstalled"),r.onstatechange=null}}var t,n,r=e.installing||e.waiting;if(r&&!r.onstatechange){var i;e.active?(onUpdateStateChange(),i=onUpdateStateChange):(onInstallStateChange(),i=onInstallStateChange),t=!0,e.waiting&&(n=!0),r.onstatechange=i}},o=function(t){"function"==typeof e[t]&&e[t]({source:"ServiceWorker"})};return void t.then(function(e){e&&(r(e),e.onupdatefound=function(){r(e)})}).catch(function(e){return o("onError"),Promise.reject(e)})}if(window.applicationCache){var i=function(){var t=document.createElement("iframe");window.addEventListener("message",function(n){if(n.source===t.contentWindow){var r=(n.data+"").match(/__offline-plugin_AppCacheEvent:(\w+)/),o=r[1];"function"==typeof e[o]&&e[o]({source:"AppCache"})}}),t.src="/bees/appcache/manifest.html",t.style.display="none",n=t,document.body.appendChild(t)};return void("complete"===document.readyState?setTimeout(i):window.addEventListener("load",i))}}function applyUpdate(e,t){if(hasSW())return void navigator.serviceWorker.getRegistration().then(function(n){if(!n||!n.waiting)return void(t&&t());n.waiting.postMessage({action:"skipWaiting"}),e&&e()});if(n)try{n.contentWindow.__applyUpdate(),e&&setTimeout(e)}catch(e){t&&setTimeout(t)}}function update(){if(hasSW()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()}),n)try{n.contentWindow.applicationCache.update()}catch(e){}}var n;setInterval(update,36e5),t.install=install,t.applyUpdate=applyUpdate,t.update=update},"tjo/":function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("ZkNz"),o=n.n(r),i=n("uuNt"),a=(n.n(i),n("WkPh")),u=n.n(a),c=n("Xpur"),s=n.n(c),f=n("ed0r"),l=n.n(f),p=n("WIDM"),d=n("NHIF");n.d(t,"a",function(){return v});var h,b,m=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),v=(b=h=function(e){function Main(){var e,t,n,r;_classCallCheck(this,Main);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return t=n=_possibleConstructorReturn(this,(e=Main.__proto__||Object.getPrototypeOf(Main)).call.apply(e,[this].concat(a))),n.renderMenuItems=function(e,t){return o.a.createElement(l.a,{key:t,primaryText:e.title,onTouchTap:n.tapMenuItem(e.path)})},r=t,_possibleConstructorReturn(n,r)}return _inherits(Main,e),m(Main,[{key:"tapMenuItem",value:function(e){var t=this;return function(){t.props.history.push(e),t.props.closeMenu("menu")}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.title,r=e.menu,i=e.openMenu;return o.a.createElement(u.a,{zDepth:1,rounded:!1,style:{flex:"1 1 100%"}},o.a.createElement(p.c,{title:n,openMenu:function(){return i("menu")}}),o.a.createElement(d.a,{id:"menu",width:250},o.a.createElement(p.d,{size:200}),o.a.createElement(s.a,null,r.map(this.renderMenuItems))),o.a.createElement("div",null,t))}}]),Main}(r.PureComponent),h.propTypes={history:i.object.isRequired,children:n.i(i.oneOfType)([i.element,n.i(i.arrayOf)(i.element)]),title:i.string,menu:n.i(i.arrayOf)(i.object),openMenu:i.func,closeMenu:i.func},b)},x0zZ:function(e,t,n){"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function rootSagas(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(r.a)([].concat(_toConsumableArray(n.i(o.a)())));case 2:case"end":return e.stop()}},i[0],this)}var r=n("6qFv"),o=n("PA37");t.a=rootSagas;var i=[rootSagas].map(regeneratorRuntime.mark)},xCVC:function(e,t,n){"use strict";var r=n("NCAU"),o=n("/cy4"),i=n("SjZ8"),a=n("c9El"),u=n("YLfx"),c=n("qrZj");n.d(t,"a",function(){return l});var s=function(e){return{title:a.c.getTitle(e),menu:a.c.getMenu(e)}},f=function(e){return{openMenu:function(t){return e(n.i(c.h)({id:t}))},closeMenu:function(t){return e(n.i(c.i)({id:t}))},setTitle:function(t){return e(u.c({title:t}))}}},l=n.i(o.a)(n.i(r.b)(s,f)(i.a))},xRE2:function(e,t,n){"use strict";var r=n("tExh"),o=(n.n(r),n("YLfx"));n.d(t,"a",function(){return a});var i=n.i(r.fromJS)({title:"",menu:{}}),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1],a=t.type,u=t.payload;switch(a){case o.a:return e.set("title",u);case o.b:var c=u.title+"-"+u.path;return e.setIn(["menu",c],n.i(r.fromJS)(u));default:return e}}},xo9C:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("ZkNz"),o=n.n(r),i=n("uuNt"),a=(n.n(i),n("VQhf")),u=n.n(a),c=n("WkPh"),s=n.n(c);n.d(t,"a",function(){return b});var f,l,p,d,h=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),b=(f=u()())((d=p=function(e){function Logo(){return _classCallCheck(this,Logo),_possibleConstructorReturn(this,(Logo.__proto__||Object.getPrototypeOf(Logo)).apply(this,arguments))}return _inherits(Logo,e),h(Logo,[{key:"render",value:function(){var e=this.props,t=e.size,n=e.muiTheme,r=n.palette,i=r.primary1Color,a=r.alternateTextColor;return o.a.createElement(s.a,{zDepth:1,rounded:!1,style:{backgroundColor:i,color:a,textAlign:"center",height:t+"px"}},o.a.createElement("div",{className:"bee-icon bee-icon-bee",style:{display:"inline-block",fontSize:t+"px"}}))}}]),Logo}(r.PureComponent),p.propTypes={muiTheme:i.object,size:i.number},l=d))||l},y3QL:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("ZkNz"),o=n.n(r),i=n("uuNt"),a=(n.n(i),n("9ovb")),u=n.n(a),c=n("OS9/");n.n(c);n.d(t,"a",function(){return p});var s,f,l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),p=(f=s=function(e){function Drawer(e){_classCallCheck(this,Drawer);var t=_possibleConstructorReturn(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).call(this,e));return t.id=e.id||n.i(c.uniqueId)("drawer-"),t}return _inherits(Drawer,e),l(Drawer,[{key:"componentWillMount",value:function(){this.props.onRegister(this.id)}},{key:"componentWillUnmount",value:function(){this.props.onUnregister(this.id)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.width,i=void 0===r?200:r,a=t.registered,c=void 0===a?{}:a,s=t.onToggle,f=c[this.id]||{},l=f.opened,p=void 0!==l&&l,d=f.docked,h=void 0!==d&&d;return o.a.createElement(u.a,{width:i,docked:h,open:p,onRequestChange:function(t){return s(e.id,t)}},n)}}]),Drawer}(r.PureComponent),s.propTypes={id:i.string,children:n.i(i.oneOfType)([i.element,n.i(i.arrayOf)(i.element)]),width:i.number,registered:i.object,onRegister:i.func.isRequired,onUnregister:i.func.isRequired,onToggle:i.func.isRequired,onOpen:i.func.isRequired,onClose:i.func.isRequired,onDock:i.func.isRequired,onUndock:i.func.isRequired},f)},yzlT:function(e,t,n){"use strict";var r=n("ZkNz"),o=n.n(r),i=n("uuNt"),a=(n.n(i),n("pEls")),u=n.n(a),c=n("BM7K"),s=n.n(c),f=n("6Q00"),l=n.n(f),p=n("HzLx");n.d(t,"a",function(){return d}),u()();var d=function(e){var t=e.children,n=e.dark,r=void 0!==n&&n,i=void 0;return i=r?p.a:p.b,o.a.createElement(s.a,{muiTheme:l()(i)},t)};d.propTypes={children:i.element.isRequired,dark:i.bool,light:i.bool}},zq9m:function(e,t,n){"use strict";var r=n("NXDo");n.d(t,"Home",function(){return r.a});var o=n("CLMg");n.n(o)},zuwZ:function(e,t,n){"use strict";var r=n("adya"),o=n.n(r),i=n("+54/"),a=n.n(i);n.d(t,"a",function(){return u});var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?a()({initialEntries:[e]}):o()({basename:e})}}},[0]);