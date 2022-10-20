"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[1287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},l="Java Application Design--Exceptions & IO",o={unversionedId:"C++/Java_exception",id:"C++/Java_exception",title:"Java Application Design--Exceptions & IO",description:"IO",source:"@site/docs/C++/Java_exception.md",sourceDirName:"C++",slug:"/C++/Java_exception",permalink:"/docs/C++/Java_exception",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/C++/Java_exception.md",tags:[],version:"current",frontMatter:{},sidebar:"C",previous:{title:"Java Application Design--Containers",permalink:"/docs/C++/Java_containers"},next:{title:"Memory Layout",permalink:"/docs/C++/\u5185\u5b58\u5206\u914d"}},p={},u=[{value:"IO",id:"io",level:2},{value:"Read a file",id:"read-a-file",level:3},{value:"Stream",id:"stream",level:3},{value:"Exceptions",id:"exceptions",level:2},{value:"The catch mechanism",id:"the-catch-mechanism",level:3},{value:"throw and throws",id:"throw-and-throws",level:3},{value:"Interface:throwable",id:"interfacethrowable",level:3},{value:"throw Inheritance",id:"throw-inheritance",level:3}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java-application-design--exceptions--io"},"Java Application Design--Exceptions & IO"),(0,r.kt)("h2",{id:"io"},"IO"),(0,r.kt)("h3",{id:"read-a-file"},"Read a file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"open the file;(\u5171\u4eab\u6587\u4ef6\u540c\u65f6\u6b63\u5728\u5199)"),(0,r.kt)("li",{parentName:"ol"},"determine its size;(\u6587\u4ef6=\u952e\u76d8)"),(0,r.kt)("li",{parentName:"ol"},"allocate that much memory;(JVM64MB)"),(0,r.kt)("li",{parentName:"ol"},"read the file into memory;(\u676d\u5dde\u4e0b\u96e8\u8f6f\u76d8\u5931\u6548)"),(0,r.kt)("li",{parentName:"ol"},"close the file;")),(0,r.kt)("h3",{id:"stream"},"Stream"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph LR;\n    DataInputStream--\x3eFilterInputStream;\n    LineNumberInputStream--\x3eFilterInputStream;\n    BufferedInputStream--\x3eFilterInputStream;\n    FilterInputStream--\x3eInputStream;\n    PipedInputStream--\x3eInputStream;\n    ByteArrayInputStream--\x3eInputStream;\n    FileInputStream--\x3eInputStream;\n    DataOutputStream--\x3eFilterOutputStream;\n    LineNumberOutputStream--\x3eFilterOutputStream;\n    BufferedOutputStream--\x3eFilterOutputStream;\n    FilterOutputStream--\x3eOutputStream;\n    PipedOutputStream--\x3eOutputStream;\n    ByteArrayOutputStream--\x3eOutputStream;\n    FileOutputStream--\x3eOutputStream;\n")),(0,r.kt)("p",null,"DataInputStream:\u4e8c\u8fdb\u5236\u5199\u7684 primitive"),(0,r.kt)("p",null,"LineNumberInputStream:\u4e00\u884c\u884c\u8bfb\u6587\u672c"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"InputStream")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"read()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"int read()"),(0,r.kt)("li",{parentName:"ul"},"read(byte b[])"),(0,r.kt)("li",{parentName:"ul"},"read(byte b[],int off,int len)"))),(0,r.kt)("li",{parentName:"ul"},"skip(long n)"),(0,r.kt)("li",{parentName:"ul"},"int available()"),(0,r.kt)("li",{parentName:"ul"},"mark()"),(0,r.kt)("li",{parentName:"ul"},"reset()"),(0,r.kt)("li",{parentName:"ul"},"boolean markSupported()"),(0,r.kt)("li",{parentName:"ul"},"close()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OutputStream")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"write()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"write(int b)"),(0,r.kt)("li",{parentName:"ul"},"write(byte b[]);"),(0,r.kt)("li",{parentName:"ul"},"write(byte b[],int off,int len)"))),(0,r.kt)("li",{parentName:"ul"},"flush()"),(0,r.kt)("li",{parentName:"ul"},"close()")),(0,r.kt)("h2",{id:"exceptions"},"Exceptions"),(0,r.kt)("h3",{id:"the-catch-mechanism"},"The catch mechanism"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"throw try to match a catch")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/2020102715001043.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,r.kt)("h3",{id:"throw-and-throws"},"throw and throws"),(0,r.kt)("p",null,"You can ",(0,r.kt)("em",{parentName:"p"},"claim")," to throw an Exception that you really don't."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Otherwise if you \u5728 f()\u5185 throw \u522b\u7684\u5f02\u5e38 \u7f16\u8bd1\u4e0d\u901a\u8fc7.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Anyone call your funcition must catch it or throws again."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"throw new Exception;//\u7948\u4f7f\u53e5\nclass SException extends Exception{}//\u9648\u8ff0\u53e5\u4e09\u5355\npublic void f()throws SException,IOExption{}//\u9648\u8ff0\u53e5\u4e09\u5355\n")),(0,r.kt)("h3",{id:"interfacethrowable"},"Interface:throwable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph LR;\n    ArithmeticException--\x3eRuntimeException;\n    ClassCastException--\x3eRuntimeException;\n    IllegalArgumentException--\x3eRuntimeException;\n    IllegalStateException--\x3eRuntimeException;\n    IndexOutOfBoundsException--\x3eRuntimeException;\n    NoSuchElementException--\x3eRuntimeException;\n    NullPointerException--\x3eRuntimeException;\n    ClassNotFoundException--\x3eException;\n    CloneNotSupportedException--\x3eException;\n    IOException--\x3eException;\n    RuntimeException--\x3eException;\n    Exception--\x3eThrowable;\n    Error--\x3eThrowable;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"String get Message();"),(0,r.kt)("li",{parentName:"ul"},"String toString();"),(0,r.kt)("li",{parentName:"ul"},"void printStackTrace();"),(0,r.kt)("li",{parentName:"ul"},"void printStackTrace(PrintStream);")),(0,r.kt)("h3",{id:"throw-inheritance"},"throw Inheritance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6210\u5458\u51fd\u6570:\u7236\u7c7b\u548c\u63a5\u53e3\u7684\u4ea4\u96c6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class B extends A;\nA b=new B();\nb.f();//\u7f16\u8bd1\u5668\u8ba4\u4e3a\u4ed6\u8fd8\u662fA\u7c7b\uff0c\u5982\u679cthrow\u5176\u4ed6\u5f02\u5e38\u4f1a\u5149A.f()\u6355\u6349\u4e0d\u5230\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6784\u9020\u65b9\u6cd5:\u7236\u7c7b\u7684\u8d85\u96c6")),(0,r.kt)("p",null,"\u56e0\u4e3a\u6784\u9020\u65b9\u6cd5\u91cc\u9690\u542b\u8c03\u7528\u4e86 super();"))}m.isMDXComponent=!0}}]);