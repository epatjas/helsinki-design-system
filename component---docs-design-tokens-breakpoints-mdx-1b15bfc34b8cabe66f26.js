(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"w+ZK":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));n("gs/B"),n("uydD"),n("Cwzy"),n("odAc"),n("OksV"),n("ho3K");var a=n("ZVZ0"),r=n("9Rvw"),i=n("vD+s"),b=n("fSvc");n("l1C2");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/design_tokens/breakpoints.mdx"}});var s={_frontmatter:o},c=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,l({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"breakpoints"},"Breakpoints"),Object(a.b)(i.a,{mdxType:"LargeParagraph"},"Breakpoint tokens are used to keep services and products using HDS consistent across all screen sizes."),Object(a.b)("p",null,"HDS includes tokenized values for both breakpoints and maximum container width in each breakpoint. Breakpoint tokens can be also used alongside ",Object(a.b)("a",l({parentName:"p"},{href:"/guidelines/grid"}),"HDS grid guidelines")," in order to create consistent designs and implementations."),Object(a.b)("h2",{id:"principles"},"Principles"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Always use token of the same level for both the breakpoint and container width"),". This ensures consistency across all services using HDS breakpoint tokens. Read more about this in ",Object(a.b)("a",l({parentName:"li"},{href:"/design-tokens/breakpoints#usage"}),"breakpoint usage"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Aim to provide all breakpoints listed in HDS tokens in your service.")," This way you ensure your service is usable with every common screen width. "),Object(a.b)("li",{parentName:"ul"},"For best results, test your designs and implementations ",Object(a.b)("strong",{parentName:"li"},"at the edge")," of each HDS breakpoint."),Object(a.b)("li",{parentName:"ul"},"It is recommended to use scaling methods HDS suggests for each breakpoint (see ",Object(a.b)("a",l({parentName:"li"},{href:"/design-tokens/breakpoints#breakpoints-1"}),"Breakpoints token table"),"). However, it is allowed to use different scaling methods if it works better for the service.")),Object(a.b)("h2",{id:"accessibility"},"Accessibility"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When testing your designs and implementation at different breakpoints, pay extra attention how your service behaves if browser zoom functionality is used. Read more about the ",Object(a.b)(b.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html",external:!0,mdxType:"Link"},"WCAG requirements considering reflow"),".")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"The breakpoint tokens are divided into two sets;"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Breakpoint tokens")," define exact widths (in pixels) where the next breakpoint comes into effect. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Container width tokens")," define maximum container width in each breakpoint.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note how these two sets of tokens are linked.")," You are supposed pick and use tokens from same level depending on the screen width. For example, when screen width is above 769 pixels and below 994 pixels you use ",Object(a.b)("inlineCode",{parentName:"p"},"--breakpoint-m")," token in combination with ",Object(a.b)("inlineCode",{parentName:"p"},"--container-width-m")," token."),Object(a.b)("h2",{id:"tokens"},"Tokens"),Object(a.b)("h3",{id:"breakpoints-1"},"Breakpoints"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"CSS"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"SASS"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"px value"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Scaling method"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"--breakpoint-xs"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"$breakpoint-xs"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"≤ 320"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Scale columns")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"--breakpoint-s"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"$breakpoint-s"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"≥ 576"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Scale outside margins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"--breakpoint-m"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"$breakpoint-m"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"≥ 768"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Scale outside margins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"--breakpoint-l"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"$breakpoint-l"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"≥ 992"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Scale outside margins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"--breakpoint-xl"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"$breakpoint-xl"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"≥ 1224"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Scale outside margins")))),Object(a.b)("h3",{id:"maximum-container-widths"},"Maximum container widths"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"CSS"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"SASS"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"px value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"--container-width-xs"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"$container-width-xs"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"304")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"--container-width-s"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"$container-width-s"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"560")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"--container-width-m"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"$container-width-m"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"752")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"--container-width-l"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"$container-width-l"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"968")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"--container-width-xl"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"$container-width-xl"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"1200")))))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/design_tokens/breakpoints.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-design-tokens-breakpoints-mdx-1b15bfc34b8cabe66f26.js.map