"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[2373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(n),s=p,k=c["".concat(o,".").concat(s)]||c[s]||d[s]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function s(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(7462),p=(n(7294),n(3905));const a={},l="7 DP summary",i={unversionedId:"Algorithms/7",id:"Algorithms/7",title:"7 DP summary",description:"1.\u601d\u8def\u65b9\u5411",source:"@site/docs/Algorithms/7.md",sourceDirName:"Algorithms",slug:"/Algorithms/7",permalink:"/docs/Algorithms/7",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/Algorithms/7.md",tags:[],version:"current",frontMatter:{},sidebar:"Algorithms",previous:{title:"6 Tree",permalink:"/docs/Algorithms/6"},next:{title:"\u4f4d\u8fd0\u7b97\u603b\u7ed3",permalink:"/docs/Algorithms/bit_operation"}},o={},m=[{value:"1.\u601d\u8def\u65b9\u5411",id:"1\u601d\u8def\u65b9\u5411",level:2},{value:"2.\u7ecf\u5178\u6a21\u578b\u603b\u7ed3",id:"2\u7ecf\u5178\u6a21\u578b\u603b\u7ed3",level:2},{value:"\u7ebf\u6027dp",id:"\u7ebf\u6027dp",level:3},{value:"\u6811\u5f62dp",id:"\u6811\u5f62dp",level:3}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"7-dp-summary"},"7 DP summary"),(0,p.kt)("h2",{id:"1\u601d\u8def\u65b9\u5411"},"1.\u601d\u8def\u65b9\u5411"),(0,p.kt)("p",null,"\u5237\u8868\u6cd5--\u8003\u8651\u6bcf\u4e2a\u72b6\u6001\u5f71\u54cd\u5230\u7684\u72b6\u6001"),(0,p.kt)("p",null,"\u586b\u8868\u6cd5--\u8003\u8651\u6bcf\u4e2a\u72b6\u6001\u7684\u4f9d\u8d56"),(0,p.kt)("p",null,"\u72b6\u6001\u65b9\u5411\uff1ahas/remain"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"\u5b8c\u5168\u80cc\u5305\u95ee\u9898")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u603b\u4f53\u79ef\u4e0d\u8d85\u8fc7T\u7684\u60c5\u51b5\u4e0b\u6700\u5927\u91cd\u91cfdp","[T]","=dp[T-v","[i]","]+w","[i]")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u603b\u4f53\u79ef\u5269\u4f59T\u65f6\u6700\u5927\u91cd\u91cfdp","[T]","=dp[T-v","[i]","]+w","[i]")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("del",{parentName:"p"},"\u603b\u4f53\u79ef\u8fbe\u5230T\u540e\u8fd8\u5269\u4f59\u7684\u6700\u5927\u91cd\u91cfdp","[T]","=dp[T+v","[i]","]+w","[i]")))),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"\u8fd9\u65f6\u53ef\u4ee5\u7efc\u5408\u8003\u8651\u5237\u8868/\u586b\u8868\u6cd5\u9700\u8981\u554a\u8003\u8651\u7684\u56e0\u7d20\u533a\u522b+\u601d\u8003\u65b9\u5411\u662f\u5426\u4e60\u60ef,\u53e6\u4e00\u65b9\u9762\u53ef\u6839\u636e\u641c\u7d22\u5143\u7d20\u7684\u987a\u5e8f\u8c03\u6574\u5185\u5916\u5faa\u73af\u987a\u5e8f,\u5982\u4e0b")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"for(i=0;i<m;++i)for(j=t-v[i].g;j>=0;--j)\n    dp[j]=max(dp[j],dp[j+g[i]]+w[i]);\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"\u5c0f\u7ed3:")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"(1)\u6700\u540e\u7684\u5904\u7406")),(0,p.kt)("p",null,"\u5982\u679c\u805a\u96f6\u4e3a\u6574(\u4e0d\u65ad\u7d2f\u52a0\u80cc\u5305\uff0c\u770b\u5f71\u54cd\u540e\u9762\u7684\u4ef7\u503c)\uff0c\u6700\u540e\u8981\u6c42min/max_element--\x3e"),(0,p.kt)("p",null,"\u5982\u679c\u5316\u6574\u4e3a\u96f6(\u6700\u5927\u5bb9\u91cf\u51cf\u5c11),\u6700\u540e\u53ea\u9700\u6c42\u7aef\u70b9\u503c"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"(2)\u6d89\u53ca\u6c42\u5b57\u5178\u5e8f(\u6216\u6d89\u53cadp\u7684\u5e8f\u53f7\u83b7\u53d6)")),(0,p.kt)("p",null,"\u6cd51:\u53bb\u6389\u4e0d\u53ef\u8fbe\u7ed3\u70b9\uff0c\u521d\u59cb\u5316\u4e3a-inf(max)inf(min)"),(0,p.kt)("p",null,"\u6cd52:\u52a0\u5165\u5b9e\u9645has\u6570\u7ec4"),(0,p.kt)("h2",{id:"2\u7ecf\u5178\u6a21\u578b\u603b\u7ed3"},"2.\u7ecf\u5178\u6a21\u578b\u603b\u7ed3"),(0,p.kt)("h3",{id:"\u7ebf\u6027dp"},"\u7ebf\u6027dp"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"LCS\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548c")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u8fde\u7eed\u5173\u7cfb--\x3e\u4e00\u4f4d\u9012\u63a8\uff0c\u770b\u672b\u4f4d")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"LIS\u6700\u5927\u4e0a\u5347\u5b50\u5e8f\u5217")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u6bcf\u6b21\u5237\u65b0(\u957f\u5ea6\u4e0d\u53d8\u65f6\u8ba9\u67d0\u4f4d\u66f4\u5c0f)")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},'for(i=0;i<n;++i){\n    scanf("%d",&m);\n    fill(dp,dp+40000,60000);\n    for(j=0;j<m;++j){\n        scanf("%d",&x);\n        *lower_bound(dp,dp+m,x)=x;\n    }\n    printf("%d\\n",lower_bound(dp,dp+m,60000)-dp);\n}\n')),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"LCS\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u770b\u4e24\u4e2a\u672b\u5c3e(\u4ea4\u53c9\u578b+\u9012\u63a8\u578b\uff0c\u52a0\u4e2a\u7a7a\u95f4\u4fdd\u5b58\u4e0a\u4e00\u884c\u5373\u53ef)")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},'for(int i=0;i<strlen(a);++i){\n    for(int j=0;j<strlen(b);++j){\n        if(a[i]==b[j])dp[j]=(j-1<0?0:last[j-1])+1;\n        else dp[j]=max(j-1<0?0:dp[j-1],last[j]);\n    }\n    last=dp;\n}\nprintf("%d\\n",dp[strlen(b)-1]);\n')),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"\u5b8c\u5168\u80cc\u5305")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u9012\u63a8\u88ab\u524d\u9762\u7ed3\u679c\u5f71\u54cd")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},'for(int i=0;i<m;++i){\n    scanf("%d%d",&v,&p);\n    for(int j=n;j>=v;--j)\n    dp[j]=max(dp[j],dp[j-v]+v*p);\n}\nprintf("%d",dp[n]);\n')),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"01\u80cc\u5305")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u9012\u63a8\u4e0d\u80fd\u88ab\u524d\u9762\u7ed3\u679c\u5f71\u54cd")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},'for(i=0;i<m;++i)scanf("%d%d",&g[i],&w[i]);\nfor(i=0;i<m;++i)for(j=t-v[i].g;j>=0;--j)\ndp[j]=max(dp[j],dp[j+g[i]]+w[i]);\nprintf("%d",dp[0]);\n')),(0,p.kt)("h3",{id:"\u6811\u5f62dp"},"\u6811\u5f62dp"))}d.isMDXComponent=!0}}]);