"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[4913],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var l=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=l.createContext({}),p=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(a),k=i,h=u["".concat(c,".").concat(k)]||u[k]||m[k]||n;return a?l.createElement(h,r(r({ref:t},o),{},{components:a})):l.createElement(h,r({ref:t},o))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<n;p++)r[p]=a[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3542:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var l=a(7462),i=(a(7294),a(3905));const n={},r="CS61C Lecture4 --Cache",s={unversionedId:"cs/cs61c_4",id:"cs/cs61c_4",title:"CS61C Lecture4 --Cache",description:"Basic",source:"@site/docs/cs/cs61c_4.md",sourceDirName:"cs",slug:"/cs/cs61c_4",permalink:"/docs/cs/cs61c_4",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/cs/cs61c_4.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"CS61C Lecture3 --RISC V Single-Cycle Control and Pipelining",permalink:"/docs/cs/cs61c_3"},next:{title:"CS61C Lecture5 --Parallelism",permalink:"/docs/cs/cs61c_5"}},c={},p=[{value:"Basic",id:"basic",level:2},{value:"Principle of Locality",id:"principle-of-locality",level:3},{value:"Caching Terminology",id:"caching-terminology",level:3},{value:"Cache block replacement policy",id:"cache-block-replacement-policy",level:3},{value:"Caching Read &amp; Write",id:"caching-read--write",level:3},{value:"Processor Address Fields",id:"processor-address-fields",level:2},{value:"Fully Associative Cache",id:"fully-associative-cache",level:3},{value:"Direct-Mapped",id:"direct-mapped",level:3},{value:"N-way set-associative",id:"n-way-set-associative",level:3},{value:"Cache Questions",id:"cache-questions",level:2},{value:"AMAT",id:"amat",level:3},{value:"Multilevel Caches",id:"multilevel-caches",level:3},{value:"Compiler Optimization",id:"compiler-optimization",level:3},{value:"Loop Interchange",id:"loop-interchange",level:4},{value:"Matrix Multiply",id:"matrix-multiply",level:4},{value:"Prefetching",id:"prefetching",level:4}],o={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cs61c-lecture4---cache"},"CS61C Lecture4 --Cache"),(0,i.kt)("h2",{id:"basic"},"Basic"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414195448.png",alt:null})),(0,i.kt)("h3",{id:"principle-of-locality"},"Principle of Locality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Temporal Locality (locality in time)"),(0,i.kt)("p",{parentName:"li"},"  If a memory location is referenced then it will tend to be referenced again soon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Spatial Locality (locality in space)"),(0,i.kt)("p",{parentName:"li"},"  If a memory location is referenced, the locations with nearby addresses will tend to be referenced soon"))),(0,i.kt)("h3",{id:"caching-terminology"},"Caching Terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cache hit")),(0,i.kt)("p",{parentName:"li"},"  Cache holds a valid copy of the block, so return the desired data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cache miss")),(0,i.kt)("p",{parentName:"li"},"  Cache does not have desired block, so fetch from memory and put in empty (invalid) slot"))),(0,i.kt)("p",null,"Average Memory Access Time(AMAT) = Hit time + Miss rate \xd7\nMiss penalty"),(0,i.kt)("h3",{id:"cache-block-replacement-policy"},"Cache block replacement policy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Random Replacement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Least Recently Used (LRU)"),(0,i.kt)("p",{parentName:"li"},"  Replace block we used(hit & miss) least recently first in the hopes we will use it again later than all other blocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"FIFO"),(0,i.kt)("p",{parentName:"li"},"  Replace block we miss least recently"))),(0,i.kt)("h3",{id:"caching-read--write"},"Caching Read & Write"),(0,i.kt)("p",null,"we assume the use of separate instruction and data\ncaches (Icache and Dcache)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read from both"),(0,i.kt)("li",{parentName:"ul"},"Write only to Dcache (assume no self-modifying code)")),(0,i.kt)("p",null,"Write Hits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Write-Through")," Policy: Always write data to\ncache and to memory (through cache)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Write-Back")," Policy: Write data only to cache,\nthen update memory when block is removed"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Dirty bit: Extra bit per cache row that is set if block was written to (is \u201cdirty\u201d) and needs to be written back\n")))),(0,i.kt)("p",null,"Write Miss"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Write Allocate")," policy: when we bring the block\ninto the cache after a write miss"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Write allocate almost always paired with write-back(Memory is always up-to-date)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"No Write Allocate")," policy: only change main\nmemory after a write miss"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"No write allocate typically paired with write-through(Cache is always up-to-date)\n")))),(0,i.kt)("h2",{id:"processor-address-fields"},"Processor Address Fields"),(0,i.kt)("p",null,"a cache of fixed size (C), Memory is (A) byte-addressed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Offset: denotes block size: (# = K) Bytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Index:  Can\u2019t fit all blocks at once, multiple blocks in memory must map to the same \u201cset\u201d in cache "),(0,i.kt)("p",{parentName:"li"},"  (# = $log_2{(C/K/N)}$)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fully associative (1 set): 0 Index bits!"),(0,i.kt)("li",{parentName:"ul"},"Direct-mapped (N = 1): max Index bits"),(0,i.kt)("li",{parentName:"ul"},"N-way set-associative: somewhere in-between"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tag: f identifying which memory block is currently in each\ncache slot (T = A \u2013 I \u2013 O)"))),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"type"),(0,i.kt)("th",{colspan:"3"},"Fields")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Fully Associative"),(0,i.kt)("td",{colspan:"2"},"Tag"),(0,i.kt)("td",null,"Offset")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Direct-mapped"),(0,i.kt)("td",null,"Tag"),(0,i.kt)("td",null,"Index"),(0,i.kt)("td",null,"Offset")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"N-way set-associative"),(0,i.kt)("td",null,"Tag"),(0,i.kt)("td",null,"Index"),(0,i.kt)("td",null,"Offset"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414212245.png",alt:"20220414205040"})),(0,i.kt)("h3",{id:"fully-associative-cache"},"Fully Associative Cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Total bits"),(0,i.kt)("p",{parentName:"li"},"  In a slot:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tag field of address as identifier (Tag bits)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Valid bit (1 bit): Whether cache slot was filled in")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dirty bit (1 bit if write-back)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Any necessary replacement management bits (\u201cLRU bits\u201d)"),(0,i.kt)("p",{parentName:"li"},"Total bits in cache = $(C/K) \\times (8 \\times 2^{O} + Tag + 1 + 1 + ?)$ bits")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To check a fully associative cache"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Look at ALL cache slots in sequence"),(0,i.kt)("li",{parentName:"ol"},"If Valid bit is 0, then ignore"),(0,i.kt)("li",{parentName:"ol"},"If Valid bit is 1 and Tag matches, then return that data"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Example"),(0,i.kt)("p",{parentName:"li"},"  Offset \u2013 2 bits, Tag \u2013 4 bits"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414205356.png",alt:"20220414205040"})),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414205845.png",alt:"20220414205845"})),(0,i.kt)("p",{parentName:"li"},"  Same requests, but reordered"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414205939.png",alt:"20220414205845"})),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414210035.png",alt:"20220414205845"})),(0,i.kt)("p",{parentName:"li"},"  Original sequence, but double block size"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414210248.png",alt:"20220414205845"})),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414210332.png",alt:"20220414205845"})))),(0,i.kt)("h3",{id:"direct-mapped"},"Direct-Mapped"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Total bits"),(0,i.kt)("p",{parentName:"li"},"  Total bits in cache = $(C/K) \\times (8 \\times 2^{O} + Tag + 1 + 1 + ?)$ bits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Example"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414211441.png",alt:"20220414211441"})),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414212020.png",alt:"20220414211441"})),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414212112.png",alt:"20220414212112"})))),(0,i.kt)("h3",{id:"n-way-set-associative"},"N-way set-associative"),(0,i.kt)("p",null,"Divide Cache into sets, each of which consists of N slots"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memory block maps to a set determined by Index field and is placed in any of the N slots of that set"),(0,i.kt)("li",{parentName:"ul"},"Replacement policy applies to every set")),(0,i.kt)("p",null,"Total bits = $2^I \\times N \\times (8 \\times 2^{O} + Tag + 1 + 1 + ?)$ bits"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414212912.png",alt:"20220414212112"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220421204734.png",alt:"20220414212112"})),(0,i.kt)("p",null,"Example"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414213103.png",alt:"20220414212112"})),(0,i.kt)("p",null,"Compulsory Miss: 0(first),4,8,20,16"),(0,i.kt)("p",null,"Capacity Miss: 0(second) (after its last access we have unique block accesses to 0001,0010,0101,0100, but we only have space for 4\u22121=3 more unique accesses)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414213153.png",alt:"20220414213153"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220414213239.png",alt:"20220414213239"})),(0,i.kt)("h2",{id:"cache-questions"},"Cache Questions"),(0,i.kt)("h3",{id:"amat"},"AMAT"),(0,i.kt)("p",null,"3 parameters: Hit time, miss rate, miss penalty"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hit Time",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cache size decreases \u2192 hit time decreases"),(0,i.kt)("li",{parentName:"ul"},"associativity increases \u2192 hit time increases"))),(0,i.kt)("li",{parentName:"ul"},"Miss Rate",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Larger blocks, larger caches, more associativity can hold more data \u2192 miss rate decreases"),(0,i.kt)("li",{parentName:"ul"},"Compiler optimizations"))),(0,i.kt)("li",{parentName:"ul"},"Miss penalty",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Multilevel caches"),(0,i.kt)("li",{parentName:"ul"},"Smaller block size \u2192 lower MP")))),(0,i.kt)("p",null,"3Cs(Sources of Cache Misses):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compulsory"),": First access to block impossible to avoid",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Increase block size (increases MP; too large blocks could increase MR because the number of blocks that can be held in the same size cache is smaller)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Capacity"),": Cache cannot contain all blocks accessed by the program",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Increase cache size (may increase HT)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Conflict"),": Multiple memory locations mapped to the same cache location",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Increase associativity (to fully associative) (may increase HT)"),(0,i.kt)("li",{parentName:"ul"},"Increase block size(a set can hold more data)")))),(0,i.kt)("p",null,"Capacity or Conflict Miss"),(0,i.kt)("p",null,"after the last access unique block accesses vs Fully Associative Space -1 "),(0,i.kt)("h3",{id:"multilevel-caches"},"Multilevel Caches"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220505164243.png",alt:"20220414213239"})),(0,i.kt)("p",null,"Design Considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L1 cache focuses on ",(0,i.kt)("em",{parentName:"li"},"low hit time")," (fast access)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. smaller cache"))),(0,i.kt)("li",{parentName:"ul"},"L2 L3 focus on low ",(0,i.kt)("em",{parentName:"li"},"miss rate"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. larger cache with larger block sizes")))),(0,i.kt)("p",null,"Local vs. Global Miss Rates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Local miss rate: Fraction of references to one level of a cache that miss",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.  L2 local MR = L2 misses/L1 misses"))),(0,i.kt)("li",{parentName:"ul"},"Global miss rate: Fraction of all references that miss in all levels of a multilevel cache",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Global MR is the product of all local MRs")))),(0,i.kt)("h3",{id:"compiler-optimization"},"Compiler Optimization"),(0,i.kt)("h4",{id:"loop-interchange"},"Loop Interchange"),(0,i.kt)("p",null,"By switching the order in which loops execute, misses can be reduced due to improvements in spatial locality. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/* Before */\nfor (k = 0; k < 100; k = k+1)\n    for (j = 0; j < 100; j = j+1)\n        for (i = 0; i < 5000; i = i+1)\n            x[i][j] = 2 * x[i][j];\n/* After */\nfor (k = 0; k < 100; k = k+1)\n    for (i = 0; i < 5000; i = i+1)\n        for (j = 0; j < 100; j = j+1)\n            x[i][j] = 2 * x[i][j];\n")),(0,i.kt)("h4",{id:"matrix-multiply"},"Matrix Multiply"),(0,i.kt)("p",null,"Before capacity miss: $((N+N)N+N)\\times N= 2N^3 + N^2$"),(0,i.kt)("p",null,"After capacity miss: $(BN+BN)+B^2)\\times(N/B)^2=2N^3/B + N^2$"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/* Before */\nfor (i = 0; i < N; i = i+1)\n    for (j = 0; j < N; j = j+1){\n        r = 0;\n        for (k = 0; k < N; k = k+1)\n            r = r + y[i][k]*z[k][j];\n        x[i][j] = r;\n    };\n/* After */\nfor (jj = 0; jj < N; jj = jj+B)\nfor (kk = 0; kk < N; kk = kk+B)\nfor (i = 0; i < N; i = i+1)\n    for (j = jj; j < min(jj+B-1,N); j = j+1){\n        r = 0;\n        for (k = kk; k < min(kk+B-1,N); k = k+1)\n            r = r + y[i][k]*z[k][j];\n        x[i][j] = x[i][j] + r;\n    };\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Y benefits from spatial locality"),(0,i.kt)("li",{parentName:"ul"},"Z benefits from temporal locality")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20220603160437.png",alt:"20220603160437"})),(0,i.kt)("h4",{id:"prefetching"},"Prefetching"),(0,i.kt)("p",null,"cache size: 8kB, block size: 16 Bytes, data cache strategy: direct-mapped, write-back, write-allocate"),(0,i.kt)("p",null,"The elements of a and b are 8 bytes long(double precision floating-point arrays)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"//a[3][100] b[101][3]\nfor( i=0; i <3; i = i +1) \n    for( j=0; j<100; j=j+1)\n        a[i][j] = b[j][0] * b[j+1][0];\n//A[i][j]:Among 3*100,the even value of j will miss,the odd values will hit, total 150 misses\n//B[j][0]\uff1a\n//    j=0        B[0][0]\u3001B[1][0]       2\n//    j=1        B[1][0]\u3001B[2][0]       1\n//      ...\n//    total  2+99=101 misses\n")),(0,i.kt)("p",null,"Prefetch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (j=0; j<100; j=j+1){\n        Prefetch(b[j+7][0]);        \n        prefetch(a[0][j+7]);\n        a[0][j]=b[j][0]*b [j+1][0];}; \n// a[0][1] a[0][2] a[0][4] a[0][6]:4 misses\n// b:2+5= 7 misses\nfor (i=1; i<3; i=i+1)\nfor (j=0; j<100; j=j+1){\n        prefetch(a[i][j+7]);\n        a[i][j]=b[j][0]*b [j+1][0];};\n//4 misses for a[1][j]\n//4 misses for a[2][j]\n//Total:  19 misses\n//save 232 cache misses at the price of 400 prefetch instructions. \n")))}m.isMDXComponent=!0}}]);