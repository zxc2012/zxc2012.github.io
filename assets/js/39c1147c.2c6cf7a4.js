"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[5280],{2576:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));a(8209);const l={},i="8 Cache Coherence & Memory Consistency",o={unversionedId:"cs/Computer_Architecture/Arch_8",id:"cs/Computer_Architecture/Arch_8",title:"8 Cache Coherence & Memory Consistency",description:"Cache Coherence",source:"@site/docs/cs/Computer_Architecture/Arch_8.md",sourceDirName:"cs/Computer_Architecture",slug:"/cs/Computer_Architecture/Arch_8",permalink:"/docs/cs/Computer_Architecture/Arch_8",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/cs/Computer_Architecture/Arch_8.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"7 IO & Summary",permalink:"/docs/cs/Computer_Architecture/Arch_7"},next:{title:"9 Complex Pipelining",permalink:"/docs/cs/Computer_Architecture/Arch_9"}},p={},m=[{value:"Cache Coherence",id:"cache-coherence",level:2},{value:"Snoopy Cache",id:"snoopy-cache",level:3},{value:"MSI",id:"msi",level:4},{value:"MESI",id:"mesi",level:4},{value:"MOESI",id:"moesi",level:4},{value:"Scalable Approach:Directory Cache",id:"scalable-approachdirectory-cache",level:3},{value:"False Sharing vs. Real Sharing",id:"false-sharing-vs-real-sharing",level:3},{value:"Memory Consistency",id:"memory-consistency",level:2},{value:"Sequential Consistency",id:"sequential-consistency",level:3}],s={toc:m};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"8-cache-coherence--memory-consistency"},"8 Cache Coherence & Memory Consistency"),(0,r.kt)("h2",{id:"cache-coherence"},"Cache Coherence"),(0,r.kt)("h3",{id:"snoopy-cache"},"Snoopy Cache"),(0,r.kt)("p",null,"Have cache\twatch (or snoop\tupon) other\tmemory transactions,and\tthen \u201cdo the right thing\u201d"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220614205903.png",alt:"20220614205903"})),(0,r.kt)("p",null,"Cache Coherence\tProtocols"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"write miss: the address is invalidated in all other\ncaches before the write is performed"),(0,r.kt)("li",{parentName:"ul"},"read miss: if a dirty copy is found in some cache, a writeback is performed by that cache before the memory is read ")),(0,r.kt)("h4",{id:"msi"},"MSI"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Valid Bit"),(0,r.kt)("th",{parentName:"tr",align:null},"Dirty Bit"),(0,r.kt)("th",{parentName:"tr",align:null},"Shared Bit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modified"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shared"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invalid"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modified: up-to-date, changed (dirty), OK to write",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"no other cache has a copy"))),(0,r.kt)("li",{parentName:"ul"},"Shared: up-to-date data, not allowed to write",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"other caches may have a copy")))),(0,r.kt)("li",{parentName:"ul"},"Invalid: This\tblock is either\tnot\tpresent\tin the current cache or\thas\tbeen invalidated by\ta bus request,and must be fetched from memory if the block is to be stored in\tthis cache")),(0,r.kt)("p",null,"Current Processor"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220510101653.png",alt:null})),(0,r.kt)("p",null,"Response to Other Processors"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220510102030.png",alt:null})),(0,r.kt)("p",null,"Problem: Writing to Shared is Expensive"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If block is in shared, need to check if other caches have data (so we can invalidate) if we want to write"),(0,r.kt)("li",{parentName:"ul"},"If block is in modified, don\u2019t need to check other caches if we want to write.")),(0,r.kt)("h4",{id:"mesi"},"MESI"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Valid Bit"),(0,r.kt)("th",{parentName:"tr",align:null},"Dirty Bit"),(0,r.kt)("th",{parentName:"tr",align:null},"Shared Bit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modified"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exclusive"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shared"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invalid"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exclusive: up-to-date data, OK to write (change to modified)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"no other cache has a copy"),(0,r.kt)("li",{parentName:"ul"},"supplies data on read instead of going to memory"))),(0,r.kt)("li",{parentName:"ul"},"Shared: up-to-date data, not allowed to write",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"other caches have a up-to-date copy")))),(0,r.kt)("p",null,"On Write Miss: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Other Copies in I: Value read from ",(0,r.kt)("strong",{parentName:"li"},"memory")," to local cache"),(0,r.kt)("li",{parentName:"ul"},"Other Copies in S or E: Value read from ",(0,r.kt)("strong",{parentName:"li"},"memory")," to local cache + Snooping invalid"),(0,r.kt)("li",{parentName:"ul"},"Other Copies in M: Snooping Writes back its copy to memory, set invalid + Value read from ",(0,r.kt)("strong",{parentName:"li"},"memory")," to local cache")),(0,r.kt)("p",null,"Current Processor"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220510102848.png",alt:"20220510102848"})),(0,r.kt)("p",null,"Response to Other Processors"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220510102939.png",alt:"20220510102848"})),(0,r.kt)("p",null,"Problem: Expensive to Share Modified"),(0,r.kt)("p",null,"In MSI and MESI, if we want to share block in modified, Modified data has to write back to memory"),(0,r.kt)("h4",{id:"moesi"},"MOESI"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Valid Bit"),(0,r.kt)("th",{parentName:"tr",align:null},"Dirty Bit"),(0,r.kt)("th",{parentName:"tr",align:null},"Shared Bit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modified"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Owned"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exclusive"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shared"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invalid"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Owner: up-to-date data, read-only (like shared, you can write if you invalidate shared copies first and your state changes to ",(0,r.kt)("strong",{parentName:"li"},"modified"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Owner supplies data on probe read instead of going to memory"))),(0,r.kt)("li",{parentName:"ul"},"Shared: up-to-date data, not allowed to write",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"copy in memory ",(0,r.kt)("del",{parentName:"li"},"is")," may be up-to-date")))),(0,r.kt)("p",null,"Current Processor"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220510104017.png",alt:"20220510102848"})),(0,r.kt)("p",null,"Response to Other Processors"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220510104121.png",alt:"20220510102848"})),(0,r.kt)("h3",{id:"scalable-approachdirectory-cache"},"Scalable Approach:Directory Cache"),(0,r.kt)("p",null,"Cache controllers do not observe all activity, but interact only with directory"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220512155437.png",alt:"20220510102848"})),(0,r.kt)("p",null,"For each cache line,there are 4\tpossible states(based on MSI):\t"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C-invalid(=Nothing)"),(0,r.kt)("li",{parentName:"ul"},"C-shared(=Sh)"),(0,r.kt)("li",{parentName:"ul"},"C-modified(=Ex)"),(0,r.kt)("li",{parentName:"ul"},"C-transient(=Pending):for example, the site has just issued a\tprotocol request,but has not received the corresponding protocol reply).")),(0,r.kt)("p",null,"For\teach memory\tline,there are\t4 possible directory states:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R(dir):The memory\tline is\tread-only by the sites specified in dir(dir is\ta set of sites).If\tdir\tis\tempty,the\tmemory line is not cached\tby\tany\tsite."),(0,r.kt)("li",{parentName:"ul"},"W(id):The\tmemory line is\texclusively\tcached\tat\tsite id,and\thas\tbeen modified at that site."),(0,r.kt)("li",{parentName:"ul"},"TR(dir)"),(0,r.kt)("li",{parentName:"ul"},"TW(id)")),(0,r.kt)("p",null,"Directory: one bit for each  processor that is sharing or for the  single processor that has the modified  line"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220512155625.png",alt:"20220512155625"})),(0,r.kt)("p",null,"Read miss,to uncached or shared\tline"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220512160731.png",alt:"20220512155625"})),(0,r.kt)("p",null,"Write miss,to read shared line"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220512160920.png",alt:"20220512155625"})),(0,r.kt)("h3",{id:"false-sharing-vs-real-sharing"},"False Sharing vs. Real Sharing"),(0,r.kt)("p",null,"False Sharing: Block ping-pongs between two caches even though processors are accessing disjoint variables"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220510105104.png",alt:"20220510102848"})),(0,r.kt)("p",null,"Real Sharing"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220510105252.png",alt:"20220510102848"})),(0,r.kt)("p",null,"Assume x1 and x2 in\tsame cache line. P1\tand\tP2 both read x1 and x2 previously."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Time1, X1 was read by P1 and needs to be invalidated from P2"),(0,r.kt)("li",{parentName:"ul"},"Time2, X2 was read by P2 and needs to be invalidated from P2"),(0,r.kt)("li",{parentName:"ul"},"Time3, X1 was invalidated by the write of X2 in P1, but that value of X1 is not used in P1"),(0,r.kt)("li",{parentName:"ul"},"Time4, Block is Shared->hit"),(0,r.kt)("li",{parentName:"ul"},"Time5, the block containing X2 is marked shared, but P2 did not read X2. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220615154436.png",alt:"20220615154436"})),(0,r.kt)("h2",{id:"memory-consistency"},"Memory Consistency"),(0,r.kt)("h3",{id:"sequential-consistency"},"Sequential Consistency"),(0,r.kt)("p",null,"Sequential\tConsistency: A system is sequentially consistent if\tthe\tresult\tof\tany\texecution is the same as if\tthe\toperations of all the processors were executed in\tsome sequential\torder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only a few commercial ISAs require SC(Neither RISCV nor X86)"),(0,r.kt)("li",{parentName:"ul"},"Weaker memory\tmodels -> fewer\tguarantees")),(0,r.kt)("p",null,"Producer-Consumer: Consumer lw xdata has to be done after lw xflag"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220512202509.png",alt:"20220512155625"})),(0,r.kt)("p",null,"Solutions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Total store ordering (TSO)"),(0,r.kt)("p",{parentName:"li"},"Processor P can read B before its write to A is seen by all processors"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220512202931.png",alt:"20220512155625"})),(0,r.kt)("p",{parentName:"li"},"Possible Outcomes(Blue could be done before red)"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"P1.x2"),(0,r.kt)("th",{parentName:"tr",align:null},"P2.x2"),(0,r.kt)("th",{parentName:"tr",align:null},"SC"),(0,r.kt)("th",{parentName:"tr",align:null},"TSO"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fences"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220512203822.png",alt:"20220512155625"})))))}u.isMDXComponent=!0}}]);