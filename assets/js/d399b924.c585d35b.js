"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[7169],{5663:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>N,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>r,toc:()=>l});var s=t(7462),n=(t(7294),t(3905));t(1839);const m={},p="5 Searching summary",r={unversionedId:"Algorithms/5",id:"Algorithms/5",title:"5 Searching summary",description:"DFS",source:"@site/docs/Algorithms/5.md",sourceDirName:"Algorithms",slug:"/Algorithms/5",permalink:"/docs/Algorithms/5",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/Algorithms/5.md",tags:[],version:"current",frontMatter:{},sidebar:"Algorithms",previous:{title:"4 Data Structure",permalink:"/docs/Algorithms/4"},next:{title:"6 Tree and Graph",permalink:"/docs/Algorithms/6"}},N={},l=[{value:"DFS",id:"dfs",level:2},{value:"BFS",id:"bfs",level:2}],i={toc:l};function k(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"5-searching-summary"},"5 Searching summary"),(0,n.kt)("h2",{id:"dfs"},"DFS"),(0,n.kt)("p",null,"Backtracking "),(0,n.kt)("p",null,"The basic idea is that suppose we have a partial solution ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(x_1, ... , x_i )")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"..."),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))))," where each ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mi",{parentName:"msub"},"k")),(0,n.kt)("mo",{parentName:"mrow"},"\u2208"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"S"),(0,n.kt)("mi",{parentName:"msub"},"k"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x_k\\in S_k")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6891em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))))," for  ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"\u2264"),(0,n.kt)("mi",{parentName:"mrow"},"k"),(0,n.kt)("mo",{parentName:"mrow"},"\u2264"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow"},"<"),(0,n.kt)("mi",{parentName:"mrow"},"n")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1\\leq k\\leq i<n")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6986em",verticalAlign:"-0.0391em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),".   "),(0,n.kt)("p",null,"First we add  ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1"))),(0,n.kt)("mo",{parentName:"mrow"},"\u2208"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"S"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1")))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x_{i+1} \\in S_{i+1}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7474em",verticalAlign:"-0.2083em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2083em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8917em",verticalAlign:"-0.2083em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2083em"}},(0,n.kt)("span",{parentName:"span"}))))))))))," and check if ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1"))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(x_1, ... , x_i,x_{i+1})")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"..."),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2083em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))),"satisfies the constrains.  If the answer is \u201cyes\u201d we continue to add the next x, else we delete ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1")))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x_{i+1}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6389em",verticalAlign:"-0.2083em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2083em"}},(0,n.kt)("span",{parentName:"span"}))))))))))," and backtrack to the previous partial solution ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(x_1, ... , x_i )")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"..."),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void dfs(){\n    if (\u9012\u5f52\u51fa\u53e3) {\n        \u8bb0\u5f55\u7b54\u6848;\n        return;\n    }\n    for (\u6240\u6709\u7684\u62c6\u89e3\u53ef\u80fd\u6027) {\n        \u4fee\u6539\u6240\u6709\u7684\u53c2\u6570\n        dfs(\u53c2\u6570\u5217\u8868);\n        \u8fd8\u539f\u6240\u6709\u88ab\u4fee\u6539\u8fc7\u7684\u53c2\u6570\n    }\n    return \n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u641c\u7d22\u7684\u987a\u5e8f")),(0,n.kt)("p",null,"\u4e00\u822c\u5148\u8bd5\u9009\u62e9\u5c11\u7684\u6b65\u9aa4\uff0c\u540e\u8bd5\u9009\u62e9\u591a\u7684\u6b65\u9aa4"),(0,n.kt)("p",null,"eg:\u4e03\u5de7\u677f\u5148\u62fc\u5927\u5757"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u526a\u679d\u4e0e\u72b6\u6001\u66f4\u65b0")),(0,n.kt)("p",null,"\u72b6\u6001\u66f4\u65b0:\u82e5\u53d8\u91cf\u4e0e\u6808\u7684\u56de\u9000\u6709\u5173\uff0c\u53ef\u5c06\u5176\u52a0\u5165\u5f62\u53c2\u800c\u4e0d\u662f\u5168\u5c40\u53d8\u91cf"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"sum += i;\n")),(0,n.kt)("p",null,"\u526a\u679d:\u53ef\u884c\u6027\u548c\u6700\u4f18\u6027\u526a\u679d"),(0,n.kt)("h2",{id:"bfs"},"BFS"),(0,n.kt)("p",null,"\u57fa\u672c\u7ed3\u6784"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void bfs(){\n    \u8d77\u70b9\u5165\u5217\uff0c\u5df2\u8bbf\u95ee;\n    while(!\u975e\u7a7a){\n        \u53d6\u961f\u9996;\n        \u961f\u9996\u51fa\u961f;\n        \u961f\u9996\u5b69\u5b50\u7ed3\u70b9\u5165\u961f,\u5df2\u8bbf\u95ee;\n    }\n}\n")),(0,n.kt)("p",null,"PAT1091\u6709\u5982\u4e0b\u4f53\u4f1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.push\u548cpop\u5904\u7684\u5b89\u6392")),(0,n.kt)("p",null,"visit","[i][j]","[k]"," = 1;\u548csum++;\u7684\u4f4d\u7f6e\u9009\u53d6:"),(0,n.kt)("p",null,"\u7531\u4e8e\u6b64\u9898\u662f\u591a\u7c73\u8bfa\u9aa8\u724c\u5f0f\u8bbf\u95ee\uff0c\u82e5\u4e0d\u63d0\u524d\u7f6e1\u4f1a\u91cd\u590d\u8ba1\u6570(\u4e0d\u7136\u6ca1\u6709\u8d77\u5230\u641c\u7d22\u7684\u6548\u679c)\uff0c\u53ea\u8981\u4fdd\u8bc1\u4e86\u8fd9\u4e2a\u524d\u63d0\uff0csum++\u653e\u4e24\u4e2a\u5730\u65b9\u90fd\u884c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"int bfs(int i,int j,int k)\n{\n    queue<Node> q;\n    Node temp;\n    int sum=0;\n    node = {i,j,k};\n    q.push(node);\n    visit[i][j][k] = 1;\n    while(!q.empty()){\n        temp=q.front();\n        q.pop();\n        sum++;\n        for (int r = 0;r<6; ++r){\n            node = {temp.i + l[r], temp.j + m[r], temp.k + n[r]};\n            if (node.i < 0 || node.j < 0 || node.k < 0 || node.i >= L || node.j >= M || node.k >= N || visit[node.i][node.j][node.k]||!sq[node.i][node.j][node.k])\n                continue;\n            else\n            {\n                q.push(node);\n                visit[node.i][node.j][node.k] = 1;\n            }\n        }\n\n    }\n    if(sum>=T)\n        return sum;\n    else\n        return 0;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2.\u6ce8\u610ftemp\u7684\u8bbe\u7f6e\uff0c\u6bcf\u6b21for(6)\u5f97\u4fdd\u8bc1\u4e0d\u53d8")))}k.isMDXComponent=!0}}]);