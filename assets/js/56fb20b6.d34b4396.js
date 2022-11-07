"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[4469],{5162:(n,e,t)=>{t.d(e,{Z:()=>l});var i=t(7294),a=t(6010);const r="tabItem_Ymn6";function l(n){let{children:e,hidden:t,className:l}=n;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:t},e)}},5488:(n,e,t)=>{t.d(e,{Z:()=>d});var i=t(7462),a=t(7294),r=t(6010),l=t(2389),s=t(7392),o=t(7094),u=t(2466);const m="tabList__CuJ",c="tabItem_LNqP";function p(n){var e;const{lazy:t,block:l,defaultValue:p,values:d,groupId:h,className:v}=n,f=a.Children.map(n.children,(n=>{if((0,a.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??f.map((n=>{let{props:{value:e,label:t,attributes:i}}=n;return{value:e,label:t,attributes:i}})),g=(0,s.l)(k,((n,e)=>n.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===p?p:p??(null==(e=f.find((n=>n.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==w&&!k.some((n=>n.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${k.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,o.U)(),[x,y]=(0,a.useState)(w),q=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=h){const n=b[h];null!=n&&n!==x&&k.some((e=>e.value===n))&&y(n)}const L=n=>{const e=n.currentTarget,t=q.indexOf(e),i=k[t].value;i!==x&&(j(e),y(i),null!=h&&N(h,String(i)))},S=n=>{var e;let t=null;switch(n.key){case"ArrowRight":{const e=q.indexOf(n.currentTarget)+1;t=q[e]??q[0];break}case"ArrowLeft":{const e=q.indexOf(n.currentTarget)-1;t=q[e]??q[q.length-1];break}}null==(e=t)||e.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},v)},k.map((n=>{let{value:e,label:t,attributes:l}=n;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:n=>q.push(n),onKeyDown:S,onFocus:L,onClick:L},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===e})}),t??e)}))),t?(0,a.cloneElement)(f.filter((n=>n.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==x})))))}function d(n){const e=(0,l.Z)();return a.createElement(p,(0,i.Z)({key:String(e)},n))}},1012:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var i=t(7462),a=(t(7294),t(3905)),r=(t(1839),t(5488)),l=t(5162);const s={},o="3 Basic Strategy",u={unversionedId:"Algorithms/3",id:"Algorithms/3",title:"3 Basic Strategy",description:"Binary Search",source:"@site/docs/Algorithms/3.md",sourceDirName:"Algorithms",slug:"/Algorithms/3",permalink:"/docs/Algorithms/3",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/Algorithms/3.md",tags:[],version:"current",frontMatter:{},sidebar:"Algorithms",previous:{title:"2 \u66b4\u529b\u6c42\u89e3/\u6570\u5b66\u95ee\u9898",permalink:"/docs/Algorithms/2"},next:{title:"4 Data Structure",permalink:"/docs/Algorithms/4"}},m={},c=[{value:"Binary Search",id:"binary-search",level:2},{value:"\u4e8c\u5206\u67e5\u627e",id:"\u4e8c\u5206\u67e5\u627e",level:3},{value:"Floating Point",id:"floating-point",level:3},{value:"\u4e8c\u5206\u641c\u7d22",id:"\u4e8c\u5206\u641c\u7d22",level:3},{value:"Two pointers",id:"two-pointers",level:2},{value:"Sliding Window",id:"sliding-window",level:3},{value:"Hash",id:"hash",level:2},{value:"Sort",id:"sort",level:2},{value:"Brute Force",id:"brute-force",level:3},{value:"Decrease &amp; Conquer",id:"decrease--conquer",level:3},{value:"Divide &amp; Conquer",id:"divide--conquer",level:3},{value:"Transform &amp; Conquer",id:"transform--conquer",level:3},{value:"Heap sort",id:"heap-sort",level:4}],p={toc:c};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-basic-strategy"},"3 Basic Strategy"),(0,a.kt)("h2",{id:"binary-search"},"Binary Search"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"O(log(n))")),(0,a.kt)("h3",{id:"\u4e8c\u5206\u67e5\u627e"},"\u4e8c\u5206\u67e5\u627e"),(0,a.kt)("p",null,"\u5728\u95ed\u533a\u95f4\u67e5\u627e","[begin,end]",",\u6ce8\u610f\u5bf9\u627e\u4e0d\u5230\u7684\u5904\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int binary_find(vector<int>& nums, int target){\n    int l=0,r=nums.size()-1;//Notice1\n    while(l<r){\n        int mid=l+(r-l)/2;//Notice2\n        if(nums[mid]==target)return mid;\n        else if(nums[mid]>target)r=mid-1;\n        else l=mid+1;\n    }\n    return nums[l]==target?l:-1;\n}\n")),(0,a.kt)("h3",{id:"floating-point"},"Floating Point"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"double floating_find(double l, double r)\n{\n    while (r - l > eps)\n    {\n        double mid = (l + r) / 2;\n        if (check(mid)) r = mid;\n        else l = mid;\n    }\n    return l;\n}\n")),(0,a.kt)("h3",{id:"\u4e8c\u5206\u641c\u7d22"},"\u4e8c\u5206\u641c\u7d22"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728[begin,end)\u67e5\u627e,\u6545\u683c\u5916\u6ce8\u610f\u8fb9\u754c"),(0,a.kt)("li",{parentName:"ol"},"\u5148\u60f3\u6700\u7ec8\u76ee\u6807>or>=,\u7136\u540e\u6ee1\u8db3\u6761\u4ef6\u65f6\u53f3\u4e0d\u53d8,\u4e0d\u6ee1\u8db3\u65f6\u5de6\u52a0\u4e00"),(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u610f\u53d8\u5f0f\u5982\u6c42\u4e0a\u754c(\u6ce8\u91ca\u90e8\u5206)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int upper_bound(vector<int>& nums, int target){\n    int l=0,n=nums.size();//Notice1\n    int r=n;\n    while(l<r){\n        int mid=l+(r-l)/2);//Notice2\n        if(nums[mid]>target)r=mid;\n        else l=mid+1;\n    }\n    if(r==n||nums[l]!=target)return -1;\n    else return l;\n    /*\n    if(l==0||nums[l-1]!=target)return -1;\n    else return l-1;    \n    */\n}\nint lower_bound(vector<int>& nums, int target){\n    int l=0,n=nums.size();//Notice1\n    int r=n;\n    while(l<r){\n        int mid=l+(r-l)/2);//Notice2\n        if(nums[mid]>=target)r=mid;\n        else l=mid+1;\n    }\n    if(r==n||nums[l]!=target)return -1;\n    else return l;\n}\n")),(0,a.kt)("h2",{id:"two-pointers"},"Two pointers"),(0,a.kt)("h3",{id:"sliding-window"},"Sliding Window"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Leetcode76")),(0,a.kt)("p",null,'Given two strings s and t of lengths m and n respectively, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string ""'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    string minWindow(string s, string t) {\n        fill(flag,flag+128,0);\n        fill(each,each+128,0);\n        int n=t.size();\n        int m=s.size();\n        int cap;\n        int count=0,start=0,mini=m+1;//\u6613\u9519\u70b91\n        for(int i=0;i<n;++i)flag[t[i]]=1,each[t[i]]++;\n        for(int i=0;i<m;++i){\n            if(flag[s[i]]){\n                if(--each[s[i]]>=0)count++;\n                while(count==n){\n                    if(i-start+1<mini){\n                        mini=i-start+1;\n                        cap=start;\n                    }\n                    if(flag[s[start]]&&++each[s[start]]>0)count--;\n                    ++start;\n                }\n            }\n        }\n        return mini==m+1?"":s.substr(cap,mini);\n    }\nprivate:\n    int flag[128];\n    int each[128];\n};\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Leetcode3")),(0,a.kt)("p",null,"Given a string s, find the length of the longest substring without repeating characters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        fill(each,each+128,0);\n        int n=s.size();\n        int start=0,maxi=0;\n        for(int i=0;i<n;++i){\n            char p=s[i];\n            if(++each[p]>1){\n                while(start<i&&s[start]!=p){\n                    --each[s[start]];\n                    ++start;\n                }\n                if(start!=i){\n                    --each[s[start]];\n                    ++start;\n                }\n            }   \n            maxi=max(maxi,i-start+1);\n        }\n        return maxi;\n    }\nprivate:\n    int each[128];\n};\n")),(0,a.kt)("h2",{id:"hash"},"Hash"),(0,a.kt)("p",null,"\u601d\u8def"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u4e0a\u4e00\u6b21\u4f4d\u7f6e(\u662f\u5426\u51fa\u73b0)\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u7528vector\u5b58,\u9700\u8981\u4ece-1\u5f00\u59cb"),(0,a.kt)("li",{parentName:"ul"},"\u7528unordered_map\u5b58,\u6ce8\u610f\u5148\u5224\u65adcount"))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Leetcode 3 Longest Substring Without Repeating Characters")),(0,a.kt)("p",null,"Given a string s, find the length of the longest substring without repeating characters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// unordered_map\nint lengthOfLongestSubstring(string s) {\n    unordered_map<char,int> record;\n    int ans = 0;\n    int n = s.size();\n    int j = -1;\n    for (int i =0;i<n;++i){\n        if(record.count(s[i])&&record[s[i]]>j){\n            j = record[s[i]];\n        }\n        record[s[i]] = i;\n        ans = max(ans, i - j);\n    }\n    return ans;\n}\n// vector\nint lengthOfLongestSubstring(string s) {\n    vector<int> record(256,-1);\n    int ans = 0;\n    int n = s.size();\n    int j = -1;\n    for (int i =0;i<n;++i){\n        j = max(j,record[s[i]]);\n        record[s[i]] = i;\n        ans = max(ans, i - j);\n    }\n    return ans;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u51fa\u73b0\u6b21\u6570(\u5f80\u5f80\u53ef\u4ee5\u8054\u7cfbTwo pointers)")),(0,a.kt)("h2",{id:"sort"},"Sort"),(0,a.kt)("h3",{id:"brute-force"},"Brute Force"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"//Selection sort\n//Finding the minimum element from the unsorted part,swapping it with the leftmost unsorted element\nfor(int i = 0; i< n-1; ++i){\n    int min = i;\n    for(int j = i+1; j<n; ++j)\n        if(nums[j]<nums[min])min = j;\n    swap(nums[i],nums[min]);\n}\n//Bubble sort\n//Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration\nfor(int i = 0; i< n-1; ++i){\n    int flag = true;\n    for(int j =0; j< n-1-i; ++j)\n        if(nums[j+1]<nums[j]){\n            swap(nums[j],nums[j+1]);\n            flag = false;\n        }\n    if(flag == true)break;\n}\n")),(0,a.kt)("h3",{id:"decrease--conquer"},"Decrease & Conquer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"//Insertion sort\n//Compare the new card to each sorted card and find its position until the array is sorted\nfor(int i = 0; i < n; ++i){\n    int v = nums[i];\n    j = i - 1;\n    while(j>= 0 && nums[j] > v){\n        nums[j + 1] = nums[j];\n        j--;\n    }\n    nums[j+1] = v;\n}\n")),(0,a.kt)("p",null,"Shell\u2019s Sort:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"compare items that are one stride length h apart. Do insertion sort."),(0,a.kt)("li",{parentName:"ul"},"Start with large stride, and decrease towards 1")),(0,a.kt)("h3",{id:"divide--conquer"},"Divide & Conquer"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"mergesort",mdxType:"TabItem"},(0,a.kt)("p",null,"\u6a21\u677f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void merge_sort(vector<int> &nums, int l, int r, vector<int> &temp) {\n    if (r-l<=1) return; //Notice1\n    // divide\n    int mid = l + (r - l) / 2;\n    merge_sort(nums, l, mid, temp); // Notice2, [l,mid), \u5982\u679c\u662fmid + 1\u6709\u53ef\u80fd=r\n    merge_sort(nums, mid, r, temp);\n    // conquer\n    int p = l, q = mid, k = l;\n    while (p < mid && q < r)\n        temp[k++] = nums[p]< nums[q]? nums[p++]:nums[q++];\n    while(p < mid)temp[k++] = nums[p++];\n    while(q < r) temp[k++] = nums[q++];\n    for (k = l; k < r; ++k)\n        nums[k] = temp[k];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Leetcode 148 https://leetcode-cn.com/problems/sort-list/\nListNode* sortList(ListNode* head) {\n    if(!head||!head->next)return head;\n    //Find midium\n    ListNode *slow = head,*fast = head;\n    while(fast->next&&fast->next->next){\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    fast = slow->next;\n    slow->next = NULL;\n    slow = head;\n    //divide\n    slow=sortList(slow);fast=sortList(fast);\n    //conquer\n    ListNode * dummy = new ListNode(0);\n    ListNode * node = dummy;\n    while(slow&&fast){\n        if(slow->val < fast->val){\n            node->next = slow;\n            slow = slow->next;\n        }\n        else{\n            node->next = fast;\n            fast = fast->next;\n        }\n        node = node->next;\n    }\n    node->next = slow?slow:fast;\n    return dummy->next;\n}\n"))),(0,a.kt)(l.Z,{value:"quicksort",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void quick_sort(int l,int r){//\u5de6\u95ed\u53f3\u5f00\n    if(r-l<=1)return;\n    int first=l,last=r-1,key=nums[l];//\u4fdd\u7559pivot\n    while(first<last){//\u5148\u53f3\u518d\u5de6\uff0c\u56e0\u4e3anums[first]\u53ef\u4ee5\u88ab\u66ff\u6362\n        while(first<last&&nums[last]>=key)last--;\n        nums[first]=nums[last];\n        while(first<last&&nums[first]<=key)first++;\n        nums[last]=nums[first];\n    }\n    nums[first]=key;\n    quick_sort(l,first);\n    quick_sort(first+1,r);\n}\n")))),(0,a.kt)("h3",{id:"transform--conquer"},"Transform & Conquer"),(0,a.kt)("h4",{id:"heap-sort"},"Heap sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sink: ",(0,a.kt)("strong",{parentName:"li"},"O(logn)")),(0,a.kt)("li",{parentName:"ul"},"construct: bottom-up sink ",(0,a.kt)("strong",{parentName:"li"},"O(n)")),(0,a.kt)("li",{parentName:"ul"},"deletion: v","[1]"," from 1 to (--n) sink ",(0,a.kt)("strong",{parentName:"li"},"O(nlogn)")),(0,a.kt)("li",{parentName:"ul"},"insert: v","[n]"," up ",(0,a.kt)("strong",{parentName:"li"},"O(logn)"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53d8\u5f0f:vector\u53ea\u5bf9v","[i]","\u505av","[i-1]","\u53d8\u6362\u5373\u53ef")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void sink(int val){\n    while(2*val<=n){//\u6700\u7ec8\u662f2*val\n        int i=2*val;\n        if(i+1<=n&&a[i+1]>a[i])i++;//\u6613\u9519\u70b92\n        if(a[i]>a[val])swap(a[i],a[val]);\n        else return;\n        val=i;\n    }\n}\nvoid up(int val){//\u6700\u7ec8\u662fval/2\n    while(val>1&&a[val>>1]<a[val]){\n        swap(a[val],a[val>>1]);\n        val>>=1;\n    }\n}\nint main(){\n    for(int i=n>>1;i>=1;--i)sink(i);//construct heap\n    while(--n){\n        swap(a[1],a[n+1]);\n        sink(1);\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Leetcode215. Kth Largest Element in an Array")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/kth-largest-element-in-an-array/"},"\u9898\u76ee")),(0,a.kt)("p",null,"\u6cd51:\u5806\u6392\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int x) {\n        k=x;\n        n=nums.size();\n        v=nums;\n        //construct heap\n        for(int i=n>>1;i>=1;--i)sink(i);\n        int index=1;\n        while(--n){\n            swap(v[0],v[n]);\n            if(index++==k)return v[n];\n            sink(1);\n        }\n        return v[n];\n    }\nprivate:\n    int k,n;\n    vector<int> v;\n    void swap(int& a,int& b){\n        int x=a;\n        a=b;\n        b=x;\n    }\n    void sink(int val){\n        while(2*val<=n){\n            int i=2*val;\n            if(i+1<=n&&v[i]>v[i-1])++i;\n            if(v[i-1]>v[val-1])swap(v[i-1],v[val-1]);\n            else return;\n            val=i;\n        }\n    }\n};\n")),(0,a.kt)("p",null,"\u6cd52:\u5feb\u6392"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int x) {\n        k=x;\n        n=nums.size();\n        v=nums;\n        quick_selection(0,n);\n        return v[n-k];\n    }\nprivate:\n    int k,n;\n    vector<int> v;\n    void quick_selection(int l,int r){\n        if(r-l<=1)return;\n        int first=l,last=r-1,p=v[l];\n        while(first<last){\n            while(first<last&&v[last]>=p)last--;\n            v[first]=v[last];\n            while(first<last&&v[first]<=p)first++;\n            v[last]=v[first];\n        }\n        v[first]=p;\n        if(first==n-k)return;\n        else if(first<n-k)quick_selection(first+1,r);\n        else quick_selection(l,first);\n    }\n};\n")))}d.isMDXComponent=!0}}]);