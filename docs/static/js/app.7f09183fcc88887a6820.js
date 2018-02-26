webpackJsonp([0],[,function(t,e,n){"use strict";function i(t){n(49)}var r=n(15),a=n(50),s=n(0),o=i,c=s(r.a,a.a,!1,o,null,null);e.a=c.exports},,function(t,e,n){"use strict";function i(t){n(34)}var r=n(10),a=n(35),s=n(0),o=i,c=s(r.a,a.a,!1,o,"data-v-8534403a",null);e.a=c.exports},function(t,e,n){"use strict";function i(t){return fetch(t).then(function(t){return t.json()}).catch(function(t){return console.error(t)})}function r(t){var e=t.split("");return e[0]=e[0].toUpperCase(),e=e.join("")}e.a=i,e.b=r},,function(t,e,n){"use strict";var i=n(23),r=n(26);e.a={components:{SiteHeader:i.a,SiteFooter:r.a},name:"Teaching"}},function(t,e,n){"use strict";e.a={data:function(){return{courses:[{title:"COMP1511",link:"comp1511"},{title:"COMP1521",link:"comp1521"}]}}}},function(t,e,n){"use strict";e.a={data:function(){return{items:[{link:"https://github.com/DarkPurple141/teaching-18s1",name:"Source.",icon:"github"},{link:"mailto:a.hinds@unsw.edu.au",name:"Email.",icon:"envelope"}]}}}},function(t,e,n){"use strict";var i=n(3);e.a={name:"Home",components:{SectionHeader:i.a}}},function(t,e,n){"use strict";e.a={props:{name:String},computed:{longName:function(){return this.name.toUpperCase()}}}},function(t,e,n){"use strict";var i=n(3),r=n(4);e.a={components:{SectionHeader:i.a},props:{course:{type:String,required:!0}},data:function(){return{classes:[],copy:"I'll be putting anything worth announcing here. For class relevant labs and tute material click the above link."}},beforeMount:function(){var t=this;console.log("Getting static/"+this.course+"/index.json"),Object(r.a)("static/"+this.course+"/index.json").then(function(e){return e.classes.forEach(function(e){return t.classes.push({path:e,name:Object(r.b)(e)})})})}}},function(t,e,n){"use strict";var i=n(3),r=n(42),a=n(4);e.a={components:{SectionHeader:i.a,Card:r.a},props:{cls:{type:String,required:!0},course:{type:String,required:!0}},data:function(){return{labs:[],meta:{}}},beforeMount:function(){var t=this;Object(a.a)("static/"+this.course+"/"+this.cls+"/index.json").then(function(e){e.weeks.forEach(function(e){return t.labs.push({path:e,meta:{}})}),t.meta=e.meta}).then(function(){t.labs.forEach(function(e){Object(a.a)("static/"+t.course+"/"+t.cls+"/"+e.path+"/index.json").then(function(t){e.meta=t.meta})})})}}},function(t,e,n){"use strict";e.a={props:{link:String,meta:Object,number:Number}}},function(t,e,n){"use strict";var i=n(4);e.a={props:{cls:{type:String,required:!0},course:{type:String,required:!0},week:{type:String,required:!0}},data:function(){return{files:[]}},beforeMount:function(){var t=this;Object(i.a)("static/"+this.course+"/"+this.cls+"/"+this.week+"/index.json").then(function(e){e.files.forEach(function(e){return t.files.push(e)}),lab.meta=e.meta})}}},function(t,e,n){"use strict";function i(){return"fa-"+(a++).toString(16)}var r={};e.a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in r||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?r[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(t,n){var r=i();return e[n]=r,' id="'+r+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,n,i,r){var a=n||r;return a&&e[a]?"#"+e[a]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),r[e]=n}},icons:r};var a=870711},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=n(20),a=n(30),s=n(1);n(51);i.a.component("icon",s.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:r.a}})},,,,function(t,e,n){"use strict";function i(t){n(21)}var r=n(6),a=n(29),s=n(0),o=i,c=s(r.a,a.a,!1,o,null,null);e.a=c.exports},function(t,e){},,function(t,e,n){"use strict";function i(t){n(24)}var r=n(7),a=n(25),s=n(0),o=i,c=s(r.a,a.a,!1,o,"data-v-63f3d5c7",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[n("h1",{staticClass:"logo"},[n("router-link",{attrs:{to:{name:"Home"}}},[t._v("18s1")])],1),t._v(" "),n("ul",{staticClass:"nav"},t._l(t.courses,function(e){return n("li",{key:e.title},[n("router-link",{attrs:{to:{name:"Course",params:{course:e.link}}}},[t._v("\n              "+t._s(e.title)+"\n           ")])],1)}))])])},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";function i(t){n(27)}var r=n(8),a=n(28),s=n(0),o=i,c=s(r.a,a.a,!1,o,"data-v-b8719f6a",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-footer"},[n("div",{staticClass:"footer-links"},t._l(t.items,function(t){return n("div",{staticClass:"footer-link"},[n("a",{attrs:{href:t.link}},[n("div",[n("icon",{attrs:{scale:"1.5",name:t.icon}})],1)])])})),t._v(" "),t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright"},[n("p",[t._v("Made by Alexander Hinds")]),t._v(" "),n("p",[t._v("© 2018")])])}],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("site-header"),t._v(" "),n("main",[n("router-view",{key:t.$route.path})],1),t._v(" "),n("site-footer")],1)},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";var i=n(5),r=n(31),a=n(32),s=n(37),o=n(40),c=n(46);i.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Home",component:a.a},{path:"/course/:course",name:"Course",component:s.a,props:function(t){return{course:t.params.course}}},{path:"/course/:course/:class",name:"Class",component:o.a,props:function(t){return{course:t.params.course,cls:t.params.class}}},{path:"/course/:course/:class/:week",name:"Lab",component:c.a,props:function(t){return{course:t.params.course,cls:t.params.class,week:t.params.week}}}]})},,function(t,e,n){"use strict";function i(t){n(33)}var r=n(9),a=n(36),s=n(0),o=i,c=s(r.a,a.a,!1,o,"data-v-4d3ddebf",null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-header"},[n("h1",[t._v(t._s(t.longName))])])},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("section-header",{attrs:{name:"Yo."}}),t._v(" "),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"content-body"},[n("p",[t._v("This site is for "),n("em",[t._v("you")]),t._v(". Anything I (Alex Hinds) went over in a tutorial or lab or anything I think might be useful should appear here.\n         This is the fifth straight semester I've tutored COMP1511 and the first I've done COMP1521.")]),n("br"),t._v(" "),n("p",[t._v("If you've got a question please send me an email, or better yet ask it in class.\n         This site is enitrely my own and is intended to support and complement the resources already provided on "),n("a",{attrs:{href:"https://webcms3.cse.unsw.edu.au/"}},[t._v("WebCMS3")]),t._v(".")])])}],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";function i(t){n(38)}var r=n(11),a=n(39),s=n(0),o=i,c=s(r.a,a.a,!1,o,"data-v-5900e500",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("section-header",{attrs:{name:t.course}}),t._v(" "),t._l(t.classes,function(e){return n("div",[n("router-link",{attrs:{to:{name:"Class",params:{class:e.path}}}},[t._v("\n         "+t._s(e.name)+"\n      ")])],1)}),t._v(" "),n("article",{staticClass:"content-body"},[n("p",[t._v(t._s(t.copy))])])],2)},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";function i(t){n(41)}var r=n(12),a=n(45),s=n(0),o=i,c=s(r.a,a.a,!1,o,"data-v-714da764",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";function i(t){n(43)}var r=n(13),a=n(44),s=n(0),o=i,c=s(r.a,a.a,!1,o,"data-v-b4576b40",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("h3",[t._v("Week "+t._s(t.number+1))]),t._v(" "),n("p",[t._v(t._s(t.meta.description))]),t._v(" "),n("router-link",{attrs:{to:{name:"Lab",params:{week:this.link}}}},[t._v("More")])],1)},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"labs"},[n("section-header",{attrs:{name:"labs"}}),t._v(" "),n("h3",[t._v(t._s(this.meta.description))]),t._v(" "),n("section",{staticClass:"lab-cards"},t._l(t.labs,function(t,e){return n("card",{key:t.path,attrs:{link:t.path,meta:t.meta,number:e}})}))],1)},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";function i(t){n(47)}var r=n(14),a=n(48),s=n(0),o=i,c=s(r.a,a.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"labs"},t._l(t.files,function(e){return n("p",[t._v(t._s(e))])}))},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return n("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return n("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";n(52),n(53),n(54),n(55),n(56)}],[16]);
//# sourceMappingURL=app.7f09183fcc88887a6820.js.map