"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[1008],{9993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>n,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=a(7462),l=(a(7294),a(3905));a(1839);const i={},s="CS61C Lecture6 --Virtual Memory",c={unversionedId:"cs/Computer_Architecture/cs61c_6",id:"cs/Computer_Architecture/cs61c_6",title:"CS61C Lecture6 --Virtual Memory",description:"Basic",source:"@site/docs/cs/Computer_Architecture/cs61c_6.md",sourceDirName:"cs/Computer_Architecture",slug:"/cs/Computer_Architecture/cs61c_6",permalink:"/docs/cs/Computer_Architecture/cs61c_6",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/cs/Computer_Architecture/cs61c_6.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"CS61C Lecture5 --Parallelism",permalink:"/docs/cs/Computer_Architecture/cs61c_5"},next:{title:"CS61C Lecture7 --Summary",permalink:"/docs/cs/Computer_Architecture/cs61c_7"}},n={},u=[{value:"Basic",id:"basic",level:2},{value:"Virtual Memory and Page Tables",id:"virtual-memory-and-page-tables",level:2},{value:"Address Translation",id:"address-translation",level:3}],o={toc:u};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cs61c-lecture6---virtual-memory"},"CS61C Lecture6 --Virtual Memory"),(0,l.kt)("h2",{id:"basic"},"Basic"),(0,l.kt)("p",null,"Virtual Memory Goals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Allow multiple processes to simultaneously occupy memory and provide ",(0,l.kt)("strong",{parentName:"li"},"protection"),": Don\u2019t let programs read/write each other\u2019s memory"),(0,l.kt)("li",{parentName:"ul"},"Give each program the illusion that it has its\nown ",(0,l.kt)("strong",{parentName:"li"},"private address space"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603203635.png",alt:"20220603203635"})),(0,l.kt)("h2",{id:"virtual-memory-and-page-tables"},"Virtual Memory and Page Tables"),(0,l.kt)("h3",{id:"address-translation"},"Address Translation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sizeof(Address) = log_2(Virtual Memory Size)"),(0,l.kt)("li",{parentName:"ul"},"sizeof(offset) = log_2(page size)"),(0,l.kt)("li",{parentName:"ul"},"sizeof(VPN) = log_2(# of virtual pages)")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603214329.png",alt:"20220603214329"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sizeof(Address) = log_2(Physical Memory Size)"),(0,l.kt)("li",{parentName:"ul"},"sizeof(offset) = log_2(page size)"),(0,l.kt)("li",{parentName:"ul"},"sizeof(PPN) = log_2(# of Physical pages)")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603214355.png",alt:"20220603214355"})),(0,l.kt)("p",null,"Each process has a table mapping its physical/virtual pages"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603214957.png",alt:"20220603214957"})),(0,l.kt)("p",null,"Page Table Entry"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dirty: Page has been modified recently"),(0,l.kt)("li",{parentName:"ul"},"Valid = Valid page table entry",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1: virtual page is in physical memory"),(0,l.kt)("li",{parentName:"ul"},"0: OS needs to fetch page from disk Page Fault!"))),(0,l.kt)("li",{parentName:"ul"},"Access Rights checked on every access to seeif allowed (else protection fault)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Read, Write, Executable"))),(0,l.kt)("li",{parentName:"ul"},"PPN")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603215849.png",alt:"20220603215849"})))}m.isMDXComponent=!0}}]);