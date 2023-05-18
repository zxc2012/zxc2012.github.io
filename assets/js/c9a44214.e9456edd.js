"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[1054],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),s=n(6550),o=n(1980),u=n(7392),c=n(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=h({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var g=n(2389);const b="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),o(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},3264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=(n(1839),n(4866)),i=n(5162);const s={},o="4 Data Structure",u={unversionedId:"Algorithms/4",id:"Algorithms/4",title:"4 Data Structure",description:"Array",source:"@site/docs/Algorithms/4.md",sourceDirName:"Algorithms",slug:"/Algorithms/4",permalink:"/docs/Algorithms/4",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/Algorithms/4.md",tags:[],version:"current",frontMatter:{},sidebar:"Algorithms",previous:{title:"3 Basic Strategy",permalink:"/docs/Algorithms/3"},next:{title:"5 Searching summary",permalink:"/docs/Algorithms/5"}},c={},p=[{value:"Array",id:"array",level:2},{value:"LinkedList",id:"linkedlist",level:2},{value:"Stack",id:"stack",level:2},{value:"Monotonic Stack",id:"monotonic-stack",level:3},{value:"Deque",id:"deque",level:2},{value:"Hashmap",id:"hashmap",level:2},{value:"Separate Chaining Data Indexed Array",id:"separate-chaining-data-indexed-array",level:3},{value:"Open Addressing",id:"open-addressing",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"4-data-structure"},"4 Data Structure"),(0,r.kt)("h2",{id:"array"},"Array"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u8d8a\u754c"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u662f\u5426\u53ef\u4ee5\u91cd\u590d,\u91cd\u590d\u7684\u5904\u7406")),(0,r.kt)("h2",{id:"linkedlist"},"LinkedList"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u6613\u9519\u70b9:\u6bcf\u4e00\u6b65p->next\u68c0\u67e5p!=NULL")),(0,r.kt)("h2",{id:"stack"},"Stack"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Basic Calculator")),(0,r.kt)("p",null,"Implement a basic calculator to evaluate a simple expression string."),(0,r.kt)("p",null,"The expression string contains only non-negative integers, +, -, *, / operators , open ( and closing parentheses ) and empty spaces . The integer division should truncate toward zero."),(0,r.kt)("p",null,"You may assume that the given expression is always valid. All intermediate results will be in the range of ","[-2147483648, 2147483647]"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"stack",mdxType:"TabItem"},(0,r.kt)("p",null,"if there are no brackets, we could evaluate easily"),(0,r.kt)("p",null,"if there are brackets, we could see each part = nonbracket + evaluate(bracket), but nonbracket should be store in a stack"),(0,r.kt)("p",null,"Problems: evaluate(bracket) could be -3, so the new expression could contain 3*-3, 3+-3, 3--3. We need to handle those."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int calculate(string &s) {\n    stack<string> nonbracket;\n    string curStr; \n    for(auto p: s){\n        if(p=='('){\n            nonbracket.push(curStr);\n            curStr = \"\";\n        }\n        else if(p==')'){\n            curStr = to_string(evaluate(curStr));\n            curStr = nonbracket.top() + curStr;\n            nonbracket.pop();\n        }\n        else if(p!=' ') curStr +=p;\n    }\n    return evaluate(curStr);\n}\nlong long evaluate(string input){\n    int i =0, j =0;\n    long long base = 0, temp = 0;\n    input = '+' + input;\n    while(i<input.size()){\n        if(input[i]=='+'||input[i]=='-'){\n            base += temp;\n            j = i+1;\n            if(input[j]=='-')++j;\n            while(isdigit(input[j]))++j;\n            temp = stoll(input.substr(i+1,j-1-i));\n            temp = input[i]=='+'?temp: -temp;\n            i = j;\n        }\n        else if(input[i]=='*'||input[i]=='/'){\n            j = i+1;\n            if(input[j]=='-')++j;\n            while(isdigit(input[j]))++j;\n            if(input[i]=='*') temp *= stoll(input.substr(i+1,j-1-i));\n            else temp /= stoll(input.substr(i+1,j-1-i));\n            i = j;\n        }\n    }\n    return base + temp;\n}\n"))),(0,r.kt)(i.Z,{value:"recursion",mdxType:"TabItem"},(0,r.kt)("p",null,"for each character, if not empty space, make sure you are handling digits and is an operator before go to next step:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if last character ')', break "),(0,r.kt)("li",{parentName:"ul"},"'(': recursion(i+1)"),(0,r.kt)("li",{parentName:"ul"},"digit: transform from string to long long, i becomes operator when it is done")),(0,r.kt)("p",null,"as we always start from digits, we will not handle operator every loop, and we could record last operator(or character)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int calculate(string &s) {\n    int i =0;\n    return calHelper(s,i);\n}\nint calHelper(string &s,int &i){\n    char op = '+';\n    long long base=0, temp = 0;\n    int n = s.size();\n    while(i<n&&op!=')'){\n        if(s[i]!=' '){\n            long long num = 0;\n            if(s[i] == '(')num = calHelper(s,++i);\n            else{\n                while(i<n&&isdigit(s[i])){\n                    num = num*10 + s[i] - '0';\n                    ++i;\n                } \n            }\n            if(op=='+'){\n                base +=temp;\n                temp = num;\n            }\n            else if(op == '-'){\n                base +=temp;\n                temp = -num;\n            }\n            else if(op == '*') temp *= num;\n            else if(op == '/') temp /= num;\n            if(i<n) op = s[i];\n        }\n        ++i;\n    }\n    return base + temp;\n}\n")))),(0,r.kt)("h3",{id:"monotonic-stack"},"Monotonic Stack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mono-decreasing(pop smaller elements) stack keeps the result as greater as possible"),(0,r.kt)("li",{parentName:"ul"},"Mono-increasing stack keeps the result as smaller as possible ")),(0,r.kt)("h2",{id:"deque"},"Deque"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sliding Window Maximum")),(0,r.kt)("p",null,"You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n    deque<int> dq;\n    vector<int> ans;\n    for(int i=0;i<nums.size();++i){\n        while(!dq.empty()&&dq.front()<nums[i])dq.pop_front();\n        dq.push_front(nums[i]);\n        if(i-k>=0&&!dq.empty()&&dq.back()==nums[i-k])dq.pop_back();\n        if(i>=k-1) ans.push_back(dq.back());\n    }\n    return ans;\n}\n")),(0,r.kt)("h2",{id:"hashmap"},"Hashmap"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Implement"),(0,r.kt)("th",{parentName:"tr",align:null},"contains(x)"),(0,r.kt)("th",{parentName:"tr",align:null},"add(x)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bushy BSTs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0398(log N)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0398(log N)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Separate Chaining Hash Table With No Resizing"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0398(N)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0398(N)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2026 With Resizing"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0398(1)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0398(1)")))),(0,r.kt)("h3",{id:"separate-chaining-data-indexed-array"},"Separate Chaining Data Indexed Array"),(0,r.kt)("p",null,"Data is converted into a hash code. The hash code is then reduced to a valid index."),(0,r.kt)("p",null,"Java\u2019s hashCode() function for Strings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public int hashCode() {// From Left to right: High to Low\n    int h = cachedHashValue;\n    if (h == 0 && this.length() > 0) {\n        for (int i = 0; i < this.length(); i++) {\n            h = 31 * h + this.charAt(i);\n        }\n        cachedHashValue = h;\n    }\n    return h;\n}\n")),(0,r.kt)("p",null,"31: the hashCode base should be a small ",(0,r.kt)("strong",{parentName:"p"},"prime")," to avoid overflow"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221120134556.png",alt:"20221120134556"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221120135107.png",alt:"20221120135107"})),(0,r.kt)("p",null,"suppose the number of buckets: M, number of items: N"),(0,r.kt)("p",null,"then complexities of contains and add are O(Q = N/M) "),(0,r.kt)("p",null,"To make them O(1), strategy: When N/M is \u2265 1.5, double M"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"bool contains(int x, vector<list<int>>& hash_table){\n    int n = hash_table.size();\n    int index = (x%n + n)%n;\n    list<int>& slot = hash_table[index]; \n    return find(slot.begin(),slot.end(),x)!=slot.end();\n}\nbool add(int x,vector<list<int>>& hash_table){\n    int n = hash_table.size();\n    int index = (x%n + n)%n;\n    hash_table[index].push_back(x);\n}\n")),(0,r.kt)("h3",{id:"open-addressing"},"Open Addressing"),(0,r.kt)("p",null,"An alternate way to handle collisions is to use open addressing"),(0,r.kt)("p",null,"If target bucket is already occupied, use a different bucket"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linear probing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use next address, and if already occupied, just keep scanning one by one."))),(0,r.kt)("li",{parentName:"ul"},"Quadratic probing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use next address, and if already occupied, try looking 4 ahead, then 9 ahead, then 16 ahead, ...")))))}m.isMDXComponent=!0}}]);