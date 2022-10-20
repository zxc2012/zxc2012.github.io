"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[4469],{3905:(n,t,e)=>{e.d(t,{Zo:()=>c,kt:()=>d});var r=e(7294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var o=r.createContext({}),u=function(n){var t=r.useContext(o),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},c=function(n){var t=u(n.components);return r.createElement(o.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(n,t){var e=n.components,i=n.mdxType,a=n.originalType,o=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),m=u(e),d=i,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||a;return e?r.createElement(f,l(l({ref:t},c),{},{components:e})):r.createElement(f,l({ref:t},c))}));function d(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var a=e.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=n,s.mdxType="string"==typeof n?n:i,l[1]=s;for(var u=2;u<a;u++)l[u]=e[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},1012:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=e(7462),i=(e(7294),e(3905));const a={},l="3 Binary Search",s={unversionedId:"Algorithms/3",id:"Algorithms/3",title:"3 Binary Search",description:"O(log(n))",source:"@site/docs/Algorithms/3.md",sourceDirName:"Algorithms",slug:"/Algorithms/3",permalink:"/docs/Algorithms/3",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/Algorithms/3.md",tags:[],version:"current",frontMatter:{},sidebar:"Algorithms",previous:{title:"2 \u66b4\u529b\u6c42\u89e3/\u6570\u5b66\u95ee\u9898",permalink:"/docs/Algorithms/2"},next:{title:"4 Data Structure",permalink:"/docs/Algorithms/4"}},o={},u=[{value:"\u4e8c\u5206\u67e5\u627e",id:"\u4e8c\u5206\u67e5\u627e",level:2},{value:"\u4e8c\u5206\u641c\u7d22",id:"\u4e8c\u5206\u641c\u7d22",level:2},{value:"Sliding Window",id:"sliding-window",level:2},{value:"Brute Force",id:"brute-force",level:2},{value:"Decrease &amp; Conquer",id:"decrease--conquer",level:2},{value:"Divide &amp; Conquer",id:"divide--conquer",level:2},{value:"Merge Sort",id:"merge-sort",level:3},{value:"Quick sort",id:"quick-sort",level:3},{value:"Transform &amp; Conquer",id:"transform--conquer",level:2},{value:"Heap sort",id:"heap-sort",level:3}],c={toc:u};function p(n){let{components:t,...e}=n;return(0,i.kt)("wrapper",(0,r.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"3-binary-search"},"3 Binary Search"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"O(log(n))")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4e8c\u5206\u67e5\u627e"},"\u4e8c\u5206\u67e5\u627e"),(0,i.kt)("p",null,"\u5728\u95ed\u533a\u95f4\u67e5\u627e","[begin,end]",",\u6ce8\u610f\u5bf9\u627e\u4e0d\u5230\u7684\u5904\u7406"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int binary_find(vector<int>& nums, int target){\n    int l=0,r=nums.size()-1;//Notice1\n    while(l<r){\n        int mid=l+((r-l)>>1);//Notice2\n        if(nums[mid]==target)return mid;\n        else if(nums[mid]>target)r=mid-1;\n        else l=mid+1;\n    }\n    return nums[l]==target?l:-1;\n}\n")),(0,i.kt)("h2",{id:"\u4e8c\u5206\u641c\u7d22"},"\u4e8c\u5206\u641c\u7d22"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728[begin,end)\u67e5\u627e,\u6545\u683c\u5916\u6ce8\u610f\u8fb9\u754c"),(0,i.kt)("li",{parentName:"ol"},"\u5148\u60f3\u6700\u7ec8\u76ee\u6807>or>=,\u7136\u540e\u6ee1\u8db3\u6761\u4ef6\u65f6\u53f3\u4e0d\u53d8,\u4e0d\u6ee1\u8db3\u65f6\u5de6\u52a0\u4e00"),(0,i.kt)("li",{parentName:"ol"},"\u6ce8\u610f\u53d8\u5f0f\u5982\u6c42\u4e0a\u754c(\u6ce8\u91ca\u90e8\u5206)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int upper_bound(vector<int>& nums, int target){\n    int l=0,n=nums.size();//Notice1\n    int r=n;\n    while(l<r){\n        int mid=l+((r-l)>>1);//Notice2\n        if(nums[mid]>target)r=mid;\n        else l=mid+1;\n    }\n    if(r==n||nums[l]!=target)return -1;\n    else return l;\n    /*\n    if(l==0||nums[l-1]!=target)return -1;\n    else return l-1;    \n    */\n}\nint lower_bound(vector<int>& nums, int target){\n    int l=0,n=nums.size();//Notice1\n    int r=n;\n    while(l<r){\n        int mid=l+((r-l)>>1);//Notice2\n        if(nums[mid]>=target)r=mid;\n        else l=mid+1;\n    }\n    if(r==n||nums[l]!=target)return -1;\n    else return l;\n}\n")),(0,i.kt)("h1",{id:"two-pointers"},"Two pointers"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"sliding-window"},"Sliding Window"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Leetcode76")),(0,i.kt)("p",null,'Given two strings s and t of lengths m and n respectively, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string ""'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    string minWindow(string s, string t) {\n        fill(flag,flag+128,0);\n        fill(each,each+128,0);\n        int n=t.size();\n        int m=s.size();\n        int cap;\n        int count=0,start=0,mini=m+1;//\u6613\u9519\u70b91\n        for(int i=0;i<n;++i)flag[t[i]]=1,each[t[i]]++;\n        for(int i=0;i<m;++i){\n            if(flag[s[i]]){\n                if(--each[s[i]]>=0)count++;\n                while(count==n){\n                    if(i-start+1<mini){\n                        mini=i-start+1;\n                        cap=start;\n                    }\n                    if(flag[s[start]]&&++each[s[start]]>0)count--;\n                    ++start;\n                }\n            }\n        }\n        return mini==m+1?"":s.substr(cap,mini);\n    }\nprivate:\n    int flag[128];\n    int each[128];\n};\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Leetcode3")),(0,i.kt)("p",null,"Given a string s, find the length of the longest substring without repeating characters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        fill(each,each+128,0);\n        int n=s.size();\n        int start=0,maxi=0;\n        for(int i=0;i<n;++i){\n            char p=s[i];\n            if(++each[p]>1){\n                while(start<i&&s[start]!=p){\n                    --each[s[start]];\n                    ++start;\n                }\n                if(start!=i){\n                    --each[s[start]];\n                    ++start;\n                }\n            }   \n            maxi=max(maxi,i-start+1);\n        }\n        return maxi;\n    }\nprivate:\n    int each[128];\n};\n")),(0,i.kt)("h1",{id:"hash"},"Hash"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u5206\u522b\u7ed9\u51faN\u3001M\u4e2a\u6b63\u6574\u6570\uff0c\u95eeM\u4e2a\u6570\u662f\u5426\u5728N\u4e2a\u6570\u4e2d\u51fa\u73b0\u8fc7?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u904d\u5386 ",(0,i.kt)("em",{parentName:"li"},"O(NM)")),(0,i.kt)("li",{parentName:"ul"},"Hash ",(0,i.kt)("em",{parentName:"li"},"O(M+N)"))),(0,i.kt)("p",null,"\u8bfb\u5165\u65f6\u5373\u786e\u5b9ahashtable","[x]","=true or false"),(0,i.kt)("h1",{id:"sort"},"Sort"),(0,i.kt)("h2",{id:"brute-force"},"Brute Force"),(0,i.kt)("h2",{id:"decrease--conquer"},"Decrease & Conquer"),(0,i.kt)("h2",{id:"divide--conquer"},"Divide & Conquer"),(0,i.kt)("h3",{id:"merge-sort"},"Merge Sort"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Leetcode14 SortList")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/sort-list/"},"\u9898\u76ee")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"ListNode* sortList(ListNode* head) {\n    ListNode *slow=head,*fast=head;\n    if(!head||!head->next)return head;\n    while(fast->next&&fast->next->next){\n        slow=slow->next;\n        fast=fast->next->next;\n    }\n    fast=slow->next;\n    slow->next=NULL;\n    head=sortList(head);fast=sortList(fast);\n    ListNode * ptr=NULL,*ans=NULL;\n    while(head&&fast){\n        auto &node=head->val<fast->val?head:fast;\n        if(ptr)ptr=ptr->next=node;\n        else ans=ptr=node;\n        node=node->next;\n    }\n    ptr->next=head?head:fast;\n    return ans;\n}\n")),(0,i.kt)("h3",{id:"quick-sort"},"Quick sort"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void quick_sort(int l,int r){//\u5de6\u95ed\u53f3\u5f00\n    if(r-l<=1)return;\n    int first=l,last=r-1,p=a[l];//\u4fdd\u7559pivot\n    while(first<last){//\u5148\u53f3\u518d\u5de6\n        while(first<last&&a[last]>=p)last--;\n        a[first]=a[last];\n        while(first<last&&a[first]<=p)first++;\n        a[last]=a[first];\n    }\n    a[first]=p;\n    quick_sort(l,first+1);\n    quick_sort(first+1,r);\n}\n")),(0,i.kt)("h2",{id:"transform--conquer"},"Transform & Conquer"),(0,i.kt)("h3",{id:"heap-sort"},"Heap sort"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sink: ",(0,i.kt)("strong",{parentName:"li"},"O(logn)")),(0,i.kt)("li",{parentName:"ul"},"construct: bottom-up sink ",(0,i.kt)("strong",{parentName:"li"},"O(n)")),(0,i.kt)("li",{parentName:"ul"},"deletion: v","[1]"," from 1 to (--n) sink ",(0,i.kt)("strong",{parentName:"li"},"O(nlogn)")),(0,i.kt)("li",{parentName:"ul"},"insert: v","[n]"," up ",(0,i.kt)("strong",{parentName:"li"},"O(logn)"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53d8\u5f0f:vector\u53ea\u5bf9v","[i]","\u505av","[i-1]","\u53d8\u6362\u5373\u53ef")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void sink(int val){\n    while(2*val<=n){//\u6700\u7ec8\u662f2*val\n        int i=2*val;\n        if(i+1<=n&&a[i+1]>a[i])i++;//\u6613\u9519\u70b92\n        if(a[i]>a[val])swap(a[i],a[val]);\n        else return;\n        val=i;\n    }\n}\nvoid up(int val){//\u6700\u7ec8\u662fval/2\n    while(val>1&&a[val>>1]<a[val]){\n        swap(a[val],a[val>>1]);\n        val>>=1;\n    }\n}\nint main(){\n    for(int i=n>>1;i>=1;--i)sink(i);//construct heap\n    while(--n){\n        swap(a[1],a[n+1]);\n        sink(1);\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Leetcode215. Kth Largest Element in an Array")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/kth-largest-element-in-an-array/"},"\u9898\u76ee")),(0,i.kt)("p",null,"\u6cd51:\u5806\u6392\u5e8f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int x) {\n        k=x;\n        n=nums.size();\n        v=nums;\n        //construct heap\n        for(int i=n>>1;i>=1;--i)sink(i);\n        int index=1;\n        while(--n){\n            swap(v[0],v[n]);\n            if(index++==k)return v[n];\n            sink(1);\n        }\n        return v[n];\n    }\nprivate:\n    int k,n;\n    vector<int> v;\n    void swap(int& a,int& b){\n        int x=a;\n        a=b;\n        b=x;\n    }\n    void sink(int val){\n        while(2*val<=n){\n            int i=2*val;\n            if(i+1<=n&&v[i]>v[i-1])++i;\n            if(v[i-1]>v[val-1])swap(v[i-1],v[val-1]);\n            else return;\n            val=i;\n        }\n    }\n};\n")),(0,i.kt)("p",null,"\u6cd52:\u5feb\u6392"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int x) {\n        k=x;\n        n=nums.size();\n        v=nums;\n        return quick_selection(0,n);\n    }\nprivate:\n    int k,n;\n    vector<int> v;\n    int quick_selection(int l,int r){\n        if(r-l<=0)return 0;\n        int first=l,last=r-1,p=v[l];\n        while(first<last){\n            while(first<last&&v[last]>=p)last--;\n            v[first]=v[last];\n            while(first<last&&v[first]<=p)first++;\n            v[last]=v[first];\n        }\n        v[first]=p;\n        if(first==n-k)return v[n-k];\n        else if(first<n-k)return quick_selection(first+1,r);\n        else return quick_selection(l,first);\n    }\n};\n")))}p.isMDXComponent=!0}}]);