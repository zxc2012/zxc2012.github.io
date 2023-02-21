"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[1008],{9993:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var s=t(7462),n=(t(7294),t(3905));t(1839);const m={},r="CS61C Lecture6 --Virtual Memory",p={unversionedId:"cs/Computer_Architecture/cs61c_6",id:"cs/Computer_Architecture/cs61c_6",title:"CS61C Lecture6 --Virtual Memory",description:"Basic",source:"@site/docs/cs/Computer_Architecture/cs61c_6.md",sourceDirName:"cs/Computer_Architecture",slug:"/cs/Computer_Architecture/cs61c_6",permalink:"/docs/cs/Computer_Architecture/cs61c_6",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/cs/Computer_Architecture/cs61c_6.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"CS61C Lecture5 --Parallelism",permalink:"/docs/cs/Computer_Architecture/cs61c_5"},next:{title:"CS61C Lecture7 --Summary",permalink:"/docs/cs/Computer_Architecture/cs61c_7"}},l={},i=[{value:"Basic",id:"basic",level:2},{value:"Virtual Memory and Page Tables",id:"virtual-memory-and-page-tables",level:2},{value:"Paged Memory",id:"paged-memory",level:3},{value:"Address Translation",id:"address-translation",level:3},{value:"Page Table Entry",id:"page-table-entry",level:3},{value:"Page Fault",id:"page-fault",level:3},{value:"Hierarchical Page Table",id:"hierarchical-page-table",level:3},{value:"Translation Lookaside Buffer (TLB)",id:"translation-lookaside-buffer-tlb",level:2},{value:"TLB Entry Format",id:"tlb-entry-format",level:3}],o={toc:i};function c(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cs61c-lecture6---virtual-memory"},"CS61C Lecture6 --Virtual Memory"),(0,n.kt)("h2",{id:"basic"},"Basic"),(0,n.kt)("p",null,"Virtual Memory Goals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allow multiple processes to simultaneously occupy memory and provide ",(0,n.kt)("strong",{parentName:"li"},"protection"),": Don\u2019t let programs read/write each other\u2019s memory"),(0,n.kt)("li",{parentName:"ul"},"Give each program the illusion that it has its\nown ",(0,n.kt)("strong",{parentName:"li"},"private address space"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603203635.png",alt:"20220603203635"})),(0,n.kt)("p",null,"Processes use ",(0,n.kt)("strong",{parentName:"p"},"virtual addresses")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Divided into pages indexed by virtual page number(VPN)")),(0,n.kt)("p",null,"Memory uses ",(0,n.kt)("strong",{parentName:"p"},"physical addresses")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Divided into pages indexed by phisical page number(PPN)")),(0,n.kt)("h2",{id:"virtual-memory-and-page-tables"},"Virtual Memory and Page Tables"),(0,n.kt)("h3",{id:"paged-memory"},"Paged Memory"),(0,n.kt)("p",null,"Base & Bound Machine"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221126210452.png",alt:"20221126210452"})),(0,n.kt)("p",null,"Problems"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"May need more space than segment allows")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"External Fragmentation: Free chunks between allocated regions"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20230105233347.png",alt:"20230105233347"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Internal Fragmentation: Space inside allocated address space may not be fully used"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20230105233503.png",alt:"20230105233503"})))),(0,n.kt)("p",null,"Paged Memory"),(0,n.kt)("p",null,"Instead of having segments of various sizes, divide physical memory and virtual memory into equal units called ",(0,n.kt)("em",{parentName:"p"},"pages")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pages are the same size in both virtual and physical memory, and RAM is an integer multiple of pages"),(0,n.kt)("li",{parentName:"ul"},"Avoids internal fragmentation: Each program has access to one or more pages(do not have to be contiguous)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603214957.png",alt:"20220603214957"})),(0,n.kt)("h3",{id:"address-translation"},"Address Translation"),(0,n.kt)("p",null,"Virtual/Physical addresses can be broken into page number + offset(much likeT/I/O)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Memory Size = ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"2"),(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mi",{parentName:"mrow"},"A"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"s")))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{Address}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"A"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"dd"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ress")))))))))))))," Bytes"),(0,n.kt)("li",{parentName:"ul"},"Page size Bytes = ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"2"),(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mi",{parentName:"mrow"},"O"),(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"t")))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{Offset}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"O"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10764em"}},"ff"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"se"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))))))))))))," Bytes"),(0,n.kt)("li",{parentName:"ul"},"VPN/PPN = log_2(# of pages) = log_2(Memory Size/page size)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603214329.png",alt:"20220603214329"})),(0,n.kt)("p",null,"Physical Page Number(Frame number)"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603214355.png",alt:"20220603214355"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221126221332.png",alt:"20221126221332"})),(0,n.kt)("h3",{id:"page-table-entry"},"Page Table Entry"),(0,n.kt)("p",null,"Each program has a page table"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dirty bit: Page has been modified recently"),(0,n.kt)("li",{parentName:"ul"},"Valid bit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1: virtual page is in physical memory"),(0,n.kt)("li",{parentName:"ul"},"0: OS needs to fetch page from disk(Page Fault)"))),(0,n.kt)("li",{parentName:"ul"},"Permission bits: Access Rights checked on every access to see if allowed (else protection fault)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Read, Write, Executable"))),(0,n.kt)("li",{parentName:"ul"},"PPN")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603215849.png",alt:"20220603215849"})),(0,n.kt)("p",null,"Example: "),(0,n.kt)("p",null,"If we ignore the valid and permission bits, assume that page table entry only contains PPN"),(0,n.kt)("p",null,"Number of pages needed by Page table = ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"msup"},"2"),(0,n.kt)("mrow",{parentName:"msup"},(0,n.kt)("mi",{parentName:"mrow"},"V"),(0,n.kt)("mi",{parentName:"mrow"},"P"),(0,n.kt)("mi",{parentName:"mrow"},"N"))),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mi",{parentName:"mrow"},"P"),(0,n.kt)("mi",{parentName:"mrow"},"P"),(0,n.kt)("mi",{parentName:"mrow"},"N")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mn",{parentName:"mrow"},"8"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mi",{parentName:"mrow"},"p"),(0,n.kt)("mi",{parentName:"mrow"},"a"),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"z"),(0,n.kt)("mi",{parentName:"mrow"},"e")))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{2^{VPN}\\times PPN}{8\\times pagesize}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.5185em",verticalAlign:"-0.4811em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.0374em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"8"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"es"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ze")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9191em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.931em",marginRight:"0.0714em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"PN"))))))))),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"PPN"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.4811em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,n.kt)("h3",{id:"page-fault"},"Page Fault"),(0,n.kt)("p",null,"On Page Table Miss"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Load the page off the disk into a free page of memory. Switch to some other process while we wait"),(0,n.kt)("li",{parentName:"ul"},"Interrupt thrown when page loaded and the process\u2019 page table is updated. When we switch back to the task, the desired data will be in memory"),(0,n.kt)("li",{parentName:"ul"},'If memory full, replace page (LRU), writing back if necessary, and update both page table entries. Continuous swapping between disk and memory called "thrashing"')),(0,n.kt)("h3",{id:"hierarchical-page-table"},"Hierarchical Page Table"),(0,n.kt)("p",null,"Linear Page Table"),(0,n.kt)("p",null,"Page Table Base Register(PTBR): stores Physical Address of current\nPage Table"),(0,n.kt)("p",null,"PTBR value saved/restored in PCB on context switch"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221127214128.png",alt:"20221127214128"})),(0,n.kt)("p",null,"Problems:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"can be really large (span multiple pages), and sparsely populated"),(0,n.kt)("li",{parentName:"ul"},"have to load the entire page table(may only need sections)")),(0,n.kt)("p",null,"Hierarchical Page Table"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221127214634.png",alt:"20221127214634"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221127214602.png",alt:"20221127214602"})),(0,n.kt)("h2",{id:"translation-lookaside-buffer-tlb"},"Translation Lookaside Buffer (TLB)"),(0,n.kt)("p",null,"Virtual Memory Problem: 2+ physical memory accesses per data access\n= SLOW"),(0,n.kt)("p",null,"Build a separate cache for the Page Table: TLB"),(0,n.kt)("p",null,"TLB vs Cache"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TLBs usually small, typically 32\u2013128 entries"),(0,n.kt)("li",{parentName:"ul"},"TLB access time comparable to cache (much faster than accessing main memory)"),(0,n.kt)("li",{parentName:"ul"},"TLBs usually are fully/highly associativity")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221127220733.png",alt:"20221127220733"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221127220842.png",alt:"20221127220842"})),(0,n.kt)("h3",{id:"tlb-entry-format"},"TLB Entry Format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Valid: whether that TLB ENTRY is valid (unrelated to PT)"),(0,n.kt)("li",{parentName:"ul"},"Ref: Used to implement LRU, set when page is accessed, cleared periodically by OS"),(0,n.kt)("li",{parentName:"ul"},"Access Rights: Data from the PT"),(0,n.kt)("li",{parentName:"ul"},"Dirty: Consistent with PT"),(0,n.kt)("li",{parentName:"ul"},"PPN: Data from PT"),(0,n.kt)("li",{parentName:"ul"},"VPN: Data from PT")))}c.isMDXComponent=!0}}]);