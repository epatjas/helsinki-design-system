(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{yJeh:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return s})),n.d(e,"default",(function(){return m}));n("gs/B"),n("uydD"),n("Cwzy"),n("odAc"),n("OksV"),n("ho3K");var a=n("ZVZ0"),r=n("9Rvw"),o=n("qbsg"),l=n("OBWD"),b=n("sQ7B"),c=n("vD+s"),u=n("x0e6");n("l1C2");function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/buttons.mdx"}});var p={_frontmatter:s},i=r.a;function m(t){var e,n,m,y,g,O,j=t.components,N=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(a.b)(i,d({},p,N,{components:j,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"buttons"},"Buttons"),Object(a.b)(c.a,{mdxType:"LargeParagraph"},"Buttons are meant to make actions easily visible and understandable to the user. HDS offers different kinds of button variations which each suit for different needs."),Object(a.b)("h2",{id:"principles"},"Principles"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Buttons are used to trigger an action.")," Be cautious when using buttons for navigating. In most cases you should prefer links for this purpose. "),Object(a.b)("li",{parentName:"ul"},"Button label should always describe the action that the buttons is going to trigger. A good practice is to start the label with a verb and use two word labels at maximum."),Object(a.b)("li",{parentName:"ul"},"Use provided button types to control the visual priority of the view. Priority of the button types is the following: ",Object(a.b)("em",{parentName:"li"},"Primary -> Secondary -> Supplementary"),"."),Object(a.b)("li",{parentName:"ul"},"In mobile screen sizes, use full-width buttons. In other sizes use buttons that scale according to their content."),Object(a.b)("li",{parentName:"ul"},"Try to keep the amount of buttons in one view low. If there is a need for several actions in one view, consider using the smaller button variant.")),Object(a.b)("h2",{id:"accessibility"},"Accessibility"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"It is advisable to use colour combinations provided by the implementation.")," These combinations are ensured to comply with WCAG AA requirements. When customising colours, refer to ",Object(a.b)("a",d({parentName:"li"},{href:"/design-tokens/colour",title:"Colour"}),"colour guidelines")," to ensure accessibility."),Object(a.b)("li",{parentName:"ul"},"In most cases, prefer using normal size buttons over small buttons. Default sized buttons are easier for users to notice and press.")),Object(a.b)("h2",{id:"usage--variations"},"Usage & variations"),Object(a.b)("h3",{id:"primary-button"},"Primary button"),Object(a.b)("p",null,"Primary button is reserved for the most important action on the screen. Primary action is usually either mandatory or essential for the user. Primary buttons are designed to clearly highlight the most important action and therefore you should avoid having multiple primary buttons in one screen. For less important actions, consider using secondary or supplementary buttons instead."),Object(a.b)(o.c,{__position:1,__code:"<Button>Primary</Button>\n<Button style={{ marginLeft: 'var(--spacing-s)' }} disabled>\n  Primary disabled\n</Button>",__scope:(e={props:N,DefaultLayout:r.a,Playground:o.c,Button:l.Button,IconShare:l.IconShare,IconAngleRight:l.IconAngleRight,ColorBox:b.a,LargeParagraph:c.a,Text:u.a},e.DefaultLayout=r.a,e._frontmatter=s,e),mdxType:"Playground"},Object(a.b)(l.Button,{mdxType:"Button"},"Primary"),Object(a.b)(l.Button,{style:{marginLeft:"var(--spacing-s)"},disabled:!0,mdxType:"Button"},"Primary disabled")),Object(a.b)("h5",{id:"core"},"Core:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-html"}),'<button type="button" class="hds-button hds-button--primary">\n  <span class="hds-button__label">Primary</span>\n</button>\n')),Object(a.b)("h5",{id:"react"},"React:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-tsx"}),"<Button>Primary</Button>\n")),Object(a.b)("h3",{id:"secondary-button"},"Secondary button"),Object(a.b)("p",null,"Secondary buttons are used for actions which are not mandatory or essential for the user. Often screens will include multiple secondary buttons alongside one primary button."),Object(a.b)(o.c,{__position:2,__code:'<Button variant="secondary">Secondary</Button>\n<Button\n  variant="secondary"\n  style={{ marginLeft: \'var(--spacing-s)\' }}\n  disabled\n>\n  Secondary disabled\n</Button>',__scope:(n={props:N,DefaultLayout:r.a,Playground:o.c,Button:l.Button,IconShare:l.IconShare,IconAngleRight:l.IconAngleRight,ColorBox:b.a,LargeParagraph:c.a,Text:u.a},n.DefaultLayout=r.a,n._frontmatter=s,n),mdxType:"Playground"},Object(a.b)(l.Button,{variant:"secondary",mdxType:"Button"},"Secondary"),Object(a.b)(l.Button,{variant:"secondary",style:{marginLeft:"var(--spacing-s)"},disabled:!0,mdxType:"Button"},"Secondary disabled")),Object(a.b)("h5",{id:"core-1"},"Core:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-html"}),'<button type="button" class="hds-button hds-button--secondary">\n  <span class="hds-button__label">Secondary</span>\n</button>\n')),Object(a.b)("h5",{id:"react-1"},"React:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-tsx"}),'<Button variant="secondary">Secondary</Button>\n')),Object(a.b)("h3",{id:"supplementary-button"},"Supplementary button"),Object(a.b)("p",null,"Supplementary buttons can be used in similar cases as secondary buttons. However, supplementary buttons are meant for actions which are intentionally wanted to be less visible to the user. These kind of actions include i.e. cancel and dismiss functionalities."),Object(a.b)(o.c,{__position:3,__code:'<Button variant="supplementary">Supplementary</Button>\n<Button\n  variant="supplementary"\n  style={{ marginLeft: \'var(--spacing-s)\' }}\n  disabled\n>\n  Supplementary disabled\n</Button>',__scope:(m={props:N,DefaultLayout:r.a,Playground:o.c,Button:l.Button,IconShare:l.IconShare,IconAngleRight:l.IconAngleRight,ColorBox:b.a,LargeParagraph:c.a,Text:u.a},m.DefaultLayout=r.a,m._frontmatter=s,m),mdxType:"Playground"},Object(a.b)(l.Button,{variant:"supplementary",mdxType:"Button"},"Supplementary"),Object(a.b)(l.Button,{variant:"supplementary",style:{marginLeft:"var(--spacing-s)"},disabled:!0,mdxType:"Button"},"Supplementary disabled")),Object(a.b)("h5",{id:"core-2"},"Core:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-html"}),'<button type="button" class="hds-button hds-button--supplementary">\n  <span class="hds-button__label">Supplementary</span>\n</button>\n')),Object(a.b)("h5",{id:"react-2"},"React:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-tsx"}),'<Button variant="supplementary">Supplementary</Button>\n')),Object(a.b)("h3",{id:"icon-buttons"},"Icon buttons"),Object(a.b)("p",null,"Icons can be added to buttons to make the action easier to understand. Sometimes it can be also beneficial to add icons to make important actions more distinguishable. It is not recommended to use buttons with icons without text label because users interpret icons in different ways. More information on icon usage in the ",Object(a.b)("a",d({parentName:"p"},{href:"/visual-assets/icons",title:"Icons"}),"icon guideleines"),"."),Object(a.b)(o.c,{__position:4,__code:"<Button iconLeft={<IconShare />}>Button</Button>\n<Button\n  iconRight={<IconAngleRight />}\n  style={{ marginLeft: 'var(--spacing-s)' }}\n>\n  Button\n</Button>\n<Button\n  iconLeft={<IconShare />}\n  iconRight={<IconAngleRight />}\n  style={{ marginLeft: 'var(--spacing-s)' }}\n>\n  Button\n</Button>",__scope:(y={props:N,DefaultLayout:r.a,Playground:o.c,Button:l.Button,IconShare:l.IconShare,IconAngleRight:l.IconAngleRight,ColorBox:b.a,LargeParagraph:c.a,Text:u.a},y.DefaultLayout=r.a,y._frontmatter=s,y),mdxType:"Playground"},Object(a.b)(l.Button,{iconLeft:Object(a.b)(l.IconShare,{mdxType:"IconShare"}),mdxType:"Button"},"Button"),Object(a.b)(l.Button,{iconRight:Object(a.b)(l.IconAngleRight,{mdxType:"IconAngleRight"}),style:{marginLeft:"var(--spacing-s)"},mdxType:"Button"},"Button"),Object(a.b)(l.Button,{iconLeft:Object(a.b)(l.IconShare,{mdxType:"IconShare"}),iconRight:Object(a.b)(l.IconAngleRight,{mdxType:"IconAngleRight"}),style:{marginLeft:"var(--spacing-s)"},mdxType:"Button"},"Button")),Object(a.b)("h5",{id:"core-3"},"Core:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-html"}),'<button type="button" class="hds-button hds-button--primary">\n  <span aria-hidden="true" class="hds-icon hds-icon--share"></span>\n  <span class="hds-button__label">Button</span>\n</button>\n\n<button type="button" class="hds-button hds-button--primary">\n  <span class="hds-button__label">Button</span>\n  <span aria-hidden="true" class="hds-icon hds-icon--angle-right"></span>\n</button>\n\n<button type="button" class="hds-button hds-button--primary">\n  <span aria-hidden="true" class="hds-icon hds-icon--share"></span>\n  <span class="hds-button__label">Button</span>\n  <span aria-hidden="true" class="hds-icon hds-icon--angle-right"></span>\n</button>\n')),Object(a.b)("h5",{id:"react-3"},"React:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-tsx"}),"<Button iconLeft={<IconShare />}>Button</Button>\n<Button iconRight={<IconAngleRight />}>Button</Button>\n<Button iconLeft={<IconShare />} iconRight={<IconAngleRight />}>Button</Button>\n")),Object(a.b)("h3",{id:"small-buttons"},"Small buttons"),Object(a.b)("p",null,"It is recommended to use the standard button size in most cases. If there is a big number of actions in the same view, small buttons can be used instead of the normal sized buttons. Small buttons can be especially useful in mobile screen sizes to ensure uncluttered view with multiple available actions."),Object(a.b)(o.c,{__position:5,__code:'<Button size="small">Primary</Button>\n<Button\n  variant="secondary"\n  size="small"\n  style={{ marginLeft: \'var(--spacing-s)\' }}\n>\n  Secondary\n</Button>\n<Button\n  variant="supplementary"\n  size="small"\n  style={{ marginLeft: \'var(--spacing-s)\' }}\n>\n  Supplementary\n</Button>',__scope:(g={props:N,DefaultLayout:r.a,Playground:o.c,Button:l.Button,IconShare:l.IconShare,IconAngleRight:l.IconAngleRight,ColorBox:b.a,LargeParagraph:c.a,Text:u.a},g.DefaultLayout=r.a,g._frontmatter=s,g),mdxType:"Playground"},Object(a.b)(l.Button,{size:"small",mdxType:"Button"},"Primary"),Object(a.b)(l.Button,{variant:"secondary",size:"small",style:{marginLeft:"var(--spacing-s)"},mdxType:"Button"},"Secondary"),Object(a.b)(l.Button,{variant:"supplementary",size:"small",style:{marginLeft:"var(--spacing-s)"},mdxType:"Button"},"Supplementary")),Object(a.b)("h5",{id:"core-4"},"Core:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-html"}),'<button type="button" class="hds-button hds-button--primary hds-button--small">\n  <span class="hds-button__label">Button</span>\n</button>\n<button type="button" class="hds-button hds-button--secondary hds-button--small">\n  <span class="hds-button__label">Button</span>\n</button>\n<button type="button" class="hds-button hds-button--supplementary hds-button--small">\n  <span class="hds-button__label">Button</span>\n</button>\n')),Object(a.b)("h5",{id:"react-4"},"React:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-tsx"}),'<Button size="small">Primary</Button>\n<Button variant="secondary" size="small">Secondary</Button>\n<Button variant="supplementary" size="small">Supplementary</Button>\n')),Object(a.b)("h3",{id:"utility-buttons"},"Utility buttons"),Object(a.b)("p",null,"If required to achieve clearer user interface, you may also use additional utility colors. Different visual styles of these buttons can be used to better inform users of destructive or dangerous actions. To comply with WCAG requirement 1.4.1 Use of Color, these colors are more accessible when paired with an icon."),Object(a.b)(o.c,{__position:6,__code:'<Button variant="success">Success</Button>\n<Button variant="danger" style={{ marginLeft: \'var(--spacing-s)\' }}>\n  Danger\n</Button>',__scope:(O={props:N,DefaultLayout:r.a,Playground:o.c,Button:l.Button,IconShare:l.IconShare,IconAngleRight:l.IconAngleRight,ColorBox:b.a,LargeParagraph:c.a,Text:u.a},O.DefaultLayout=r.a,O._frontmatter=s,O),mdxType:"Playground"},Object(a.b)(l.Button,{variant:"success",mdxType:"Button"},"Success"),Object(a.b)(l.Button,{variant:"danger",style:{marginLeft:"var(--spacing-s)"},mdxType:"Button"},"Danger")),Object(a.b)("h5",{id:"core-5"},"Core:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-html"}),'<button type="button" class="hds-button hds-button--success">\n  <span class="hds-button__label">Button</span>\n</button>\n\n<button type="button" class="hds-button hds-button--danger">\n  <span class="hds-button__label">Button</span>\n</button>\n')),Object(a.b)("h5",{id:"react-5"},"React:"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-tsx"}),'<Button variant="success">Success</Button>\n<Button variant="danger">Danger</Button>\n')),Object(a.b)("h2",{id:"demos--api"},"Demos & API"),Object(a.b)("h3",{id:"core-6"},"Core"),Object(a.b)("p",null,Object(a.b)("a",d({parentName:"p"},{href:"/storybook/core/?path=/story/button--primary"}),"Buttons in hds-core")),Object(a.b)("h3",{id:"react-6"},"React"),Object(a.b)("p",null,Object(a.b)("a",d({parentName:"p"},{href:"/storybook/react/?path=/story/components-button--primary"}),"Buttons in hds-react")),Object(a.b)("p",null,Object(a.b)("a",d({parentName:"p"},{href:"/storybook/react/?path=/docs/components-button--primary"}),"Button API")),Object(a.b)("h2",{id:"tokens"},"Tokens"),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-css"}),'/* CSS */\n@import "hds-design-tokens/lib/color/component/button.css";\n/* SCSS */\n@import "hds-design-tokens/lib/color/component/button.scss";\n')),Object(a.b)("pre",null,Object(a.b)("code",d({parentName:"pre"},{className:"language-js"}),"// JS\nimport 'hds-design-tokens/lib/color/component/button.css';\n")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",d({parentName:"tr"},{align:null}),"CSS"),Object(a.b)("th",d({parentName:"tr"},{align:null}),"SASS"),Object(a.b)("th",d({parentName:"tr"},{align:null}),"Value"),Object(a.b)("th",d({parentName:"tr"},{align:null}),"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-primary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-primary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0000bf"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-primary-default)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-primary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-primary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#000098"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-primary-hover)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-primary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-primary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0000bf"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-primary-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-primary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-primary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#000098"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-primary-hover-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-primary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-primary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#cccccc"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-primary-disabled)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-secondary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-secondary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"transparent"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-secondary-default)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-secondary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-secondary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#f2f2fc"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-secondary-hover)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-secondary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-secondary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"transparent"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-secondary-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-secondary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-secondary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#f2f2fc"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-secondary-hover-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-secondary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-secondary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"transparent"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-secondary-disabled)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-supplementary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-supplementary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"transparent"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-supplementary-default)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-supplementary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-supplementary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#f2f2fc"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-supplementary-hover)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-supplementary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-supplementary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"transparent"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-supplementary-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-supplementary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-supplementary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#f2f2fc"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-supplementary-hover-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-background-button-supplementary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-background-button-supplementary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"transparent"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-background-button-supplementary-disabled)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-primary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-primary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0000bf"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-primary-default)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-primary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-primary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#000098"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-primary-hover)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-primary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-primary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0000bf"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-primary-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-primary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-primary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#000098"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-primary-hover-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-primary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-primary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#cccccc"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-primary-disabled)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-secondary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-secondary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0000bf"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-secondary-default)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-secondary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-secondary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#000098"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-secondary-hover)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-secondary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-secondary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0000bf"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-secondary-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-secondary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-secondary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#000098"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-secondary-hover-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-secondary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-secondary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#808080"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-secondary-disabled)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-supplementary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-supplementary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"transparent"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-supplementary-default)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-supplementary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-supplementary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"transparent"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-supplementary-hover)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-supplementary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-supplementary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0072c6"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-supplementary-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-supplementary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-supplementary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0072c6"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-supplementary-hover-focus)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-border-button-supplementary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-border-button-supplementary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"transparent"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-border-button-supplementary-disabled)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-focus-outline-button-primary"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-focus-outline-button-primary"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0072c6"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-focus-outline-button-primary)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-focus-outline-button-secondary"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-focus-outline-button-secondary"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0072c6"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-focus-outline-button-secondary)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-focus-outline-button-supplementary"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-focus-outline-button-supplementary"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"transparent"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(b.a,{color:"var(--color-focus-outline-button-supplementary)",mdxType:"ColorBox"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-primary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-primary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#ffffff"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-primary-default)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-primary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-primary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#ffffff"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-primary-hover)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-primary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-primary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#ffffff"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-primary-focus)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-primary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-primary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#ffffff"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-primary-hover-focus)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-primary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-primary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#ffffff"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-primary-disabled)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-secondary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-secondary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0000bf"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-secondary-default)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-secondary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-secondary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#000098"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-secondary-hover)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-secondary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-secondary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0000bf"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-secondary-focus)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-secondary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-secondary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#000098"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-secondary-hover-focus)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-secondary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-secondary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#999898"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-secondary-disabled)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-supplementary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-supplementary-default"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0000bf"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-supplementary-default)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-supplementary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-supplementary-hover"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#000098"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-supplementary-hover)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-supplementary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-supplementary-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#0000bf"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-supplementary-focus)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-supplementary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-supplementary-hover-focus"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#000098"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-supplementary-hover-focus)",mdxType:"Text"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",d({parentName:"tr"},{align:null}),"--color-label-button-supplementary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"$color-label-button-supplementary-disabled"),Object(a.b)("td",d({parentName:"tr"},{align:null}),"#999898"),Object(a.b)("td",d({parentName:"tr"},{align:null}),Object(a.b)(u.a,{color:"var(--color-label-button-supplementary-disabled)",mdxType:"Text"}))))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/buttons.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-buttons-mdx-445a4298556f448948d3.js.map