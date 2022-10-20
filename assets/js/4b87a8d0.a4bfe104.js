"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[8302],{3435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>r});var a=n(7462),s=(n(7294),n(3905));n(1839);const i={},o="web.lab3 --React",p={unversionedId:"cs/web_3",id:"cs/web_3",title:"web.lab3 --React",description:"Component",source:"@site/docs/cs/web_3.md",sourceDirName:"cs",slug:"/cs/web_3",permalink:"/docs/cs/web_3",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/cs/web_3.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"web.lab2 --Javascript",permalink:"/docs/cs/web_2"},next:{title:"web.lab4 --Node.js",permalink:"/docs/cs/web_4"}},l={},r=[{value:"Component",id:"component",level:2},{value:"JSX",id:"jsx",level:2},{value:"Lifecyle method",id:"lifecyle-method",level:2}],c={toc:r};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"weblab3---react"},"web.lab3 --React"),(0,s.kt)("h2",{id:"component"},"Component"),(0,s.kt)("p",null,"Make states stay, make props pass"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"props -- Input information passed from a parent to a child component(properties)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"states -- Private information maintained by a component"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'//Parent Component\nchangeCatHappinneess=()=>{\n    this.setState=({\n        catHappiness: this.state.catHappiness+1,\n        //change state\n        prevState=>({\n            persons:[...prevState.persons,"me"]\n        })\n    },()=>{\n        console.log(this.state.persons);//callback\n    });\n}\nrender(){//run the code inside the childComponent constructor!\n    return (\n        <childComponent propName={this.state.catHappiness}/>\n    );\n}\n//Child Component\nthis.props.catHappiness;\n')),(0,s.kt)("h2",{id:"jsx"},"JSX"),(0,s.kt)("p",null,"syntax extension to JavaScript that allows us to write HTML code snippets in JavaScript files"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"() allows us to write HTML code inside JavaScript")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"{} allows us to return to JavaScript inside the HTML environment inside the JavaScript class"))),(0,s.kt)("h2",{id:"lifecyle-method"},"Lifecyle method"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20210804194814.png",alt:"20210804194814"})))}m.isMDXComponent=!0}}]);