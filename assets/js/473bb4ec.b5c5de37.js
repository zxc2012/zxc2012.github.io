"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[424],{5968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),p=(t(7294),t(3905));t(1839);const o={},a="\u5251\u6307offer",i={unversionedId:"Algorithms/point",id:"Algorithms/point",title:"\u5251\u6307offer",description:"01\u4e8c\u7ef4\u6570\u7ec4\u7684\u67e5\u627e",source:"@site/docs/Algorithms/point.md",sourceDirName:"Algorithms",slug:"/Algorithms/point",permalink:"/docs/Algorithms/point",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/Algorithms/point.md",tags:[],version:"current",frontMatter:{},sidebar:"Algorithms",previous:{title:"Huffman Tree",permalink:"/docs/Algorithms/greedy"},next:{title:"Trie summary",permalink:"/docs/Algorithms/trie"}},s={},l=[{value:"01\u4e8c\u7ef4\u6570\u7ec4\u7684\u67e5\u627e",id:"01\u4e8c\u7ef4\u6570\u7ec4\u7684\u67e5\u627e",level:3},{value:"02\u66ff\u6362\u7a7a\u683c",id:"02\u66ff\u6362\u7a7a\u683c",level:3}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,p.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u5251\u6307offer"},"\u5251\u6307offer"),(0,p.kt)("h3",{id:"01\u4e8c\u7ef4\u6570\u7ec4\u7684\u67e5\u627e"},"01\u4e8c\u7ef4\u6570\u7ec4\u7684\u67e5\u627e"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool Find(int target, vector<vector<int> > array) {\n        int n=array.size(),m=array[0].size();\n        int a=0,b=m-1;\n        while(a<n&&b>=0){\n            if(array[a][b]==target)return 1;\n            if(array[a][b]<target)a++;\n            else --b;\n        }\n        return 0;\n    }\n};\n")),(0,p.kt)("h3",{id:"02\u66ff\u6362\u7a7a\u683c"},"02\u66ff\u6362\u7a7a\u683c"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5f00\u8f9f\u65b0\u5b58\u50a8\u7a7a\u95f4"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    void replaceSpace(char *str,int length) {\n        string s="";\n        for(int x=0;x<length;++x){\n            if(str[x]!=\' \')s+=str[x];\n            else s+="%20";\n        }\n        strcpy(str,s.c_str());\n    }\n};\n')),(0,p.kt)("p",{parentName:"blockquote"},"\u539f\u5b57\u7b26\u4e32\u4fee\u6539"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void replaceSpace(char *str,int length) {\n            int len=0,j;\n            for(int i=0;i<length;++i)if(str[i]==' ')++len;\n            j=length+2*len-1;\n            for(int i=length-1;i>=0;--i){\n                if(str[i]==' '){\n                    str[j--]='0';str[j--]='2';str[j--]='%';\n                }else str[j--]=str[i];\n            }\n    }\n};\n")),(0,p.kt)("h3",{parentName:"blockquote",id:"03\u4ece\u5c3e\u5230\u5934\u53cd\u8f6c\u94fe\u8868"},"03\u4ece\u5c3e\u5230\u5934\u53cd\u8f6c\u94fe\u8868"),(0,p.kt)("p",{parentName:"blockquote"},"\u4e0d\u80fd\u6539\u53d8\u94fe\u8868\u7ed3\u6784"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> printListFromTailToHead(ListNode* head) {\n        stack<int>s;\n        vector<int>v;\n        for(auto p=head;p!=NULL;p=p->next)s.push(p->val);\n        while(!s.empty()){\n            v.push_back(s.top());\n            s.pop();\n        }\n        return v;\n    }\n};\n")),(0,p.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u6539\u53d8"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> printListFromTailToHead(ListNode* head) {\n        vector<int>v;\n        for(auto p=head;p!=NULL;p=p->next)v.push_back(p->val);\n        reverse(v.begin(),v.end());\n        return v;\n    }\n};\n")),(0,p.kt)("h3",{parentName:"blockquote",id:"04\u91cd\u5efa\u4e8c\u53c9\u6811"},"04\u91cd\u5efa\u4e8c\u53c9\u6811"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    TreeNode* reConstructBinaryTree(vector<int> pre,vector<int> vin) {\n        p=pre,in=vin;\n        int n=pre.size();\n        TreeNode* t=build(0,n-1,0,n-1);\n        return t;\n    }\nprivate:\n    vector<int>p,in;\n    TreeNode* build(int prel,int prer,int inl,int inr){\n        if(prel>prer)return NULL;\n        TreeNode* t=new TreeNode(p[prel]);int i;\n        for(i=inl;i<=inr;++i)if(in[i]==p[prel])break;\n        t->left=build(prel+1,prel+i-inl,inl,i-1);\n        t->right=build(prel+i-inl+1,prer,i+1,inr);\n        return t;\n    }\n};\n")),(0,p.kt)("h3",{parentName:"blockquote",id:"12-powxn"},"12 Pow(x,n)"),(0,p.kt)("p",{parentName:"blockquote"},"\u5feb\u901f\u5e42+\u8fed\u4ee3"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    double myPow(double x, int n) {\n        if(n==0)return 1;\n        if(n<0)return 1.0/process(x,-(long long)n);\n        else return process(x,n);\n    }\nprivate:\n    double process(double x,long long n){\n        if(x==0||x==1)return x;\n        double s=1.0,base=x;\n        while(n!=0){\n            if(n&1)s*=base;\n            base*=base;\n            n>>=1;\n        }\n        return s;\n    }\n};\n")),(0,p.kt)("h3",{parentName:"blockquote",id:"15-\u53cd\u8f6c\u94fe\u8868"},"15 \u53cd\u8f6c\u94fe\u8868"),(0,p.kt)("p",{parentName:"blockquote"},"\u7b56\u7565:\u5728\u4f7f\u7528\u9012\u63a8\u524d\u4fdd\u5b58pnext"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    ListNode* ReverseList(ListNode* pHead) {\n        ListNode* pnext=NULL;\n        ListNode* b=NULL;\n        for(auto p=pHead;p!=NULL;p=pnext){\n            pnext=p->next;\n            p->next=b;\n            b=p;\n        }\n        return b;\n    }\n};\n")),(0,p.kt)("h3",{parentName:"blockquote",id:"22-\u6808\u7684\u538b\u5165\u5f39\u51fa\u5e8f\u5217"},"22 \u6808\u7684\u538b\u5165\u3001\u5f39\u51fa\u5e8f\u5217"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool IsPopOrder(vector<int> pushV,vector<int> popV) {\n        int n=pushV.size();\n        int i=0;\n        for(int p=0;p<n;++p){\n            while(present.empty()||present.top()!=popV[p]){\n                if(i==n)break;\n                present.push(pushV[i++]);\n            }\n            if(present.top()==popV[p])\n                present.pop();\n            else return false;\n        }\n        return true;\n    }\nprivate:\n    stack<int> present;\n};\n")),(0,p.kt)("h2",{parentName:"blockquote",id:"23-\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u540e\u5e8f\u904d\u5386\u5e8f\u5217"},"23 \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u540e\u5e8f\u904d\u5386\u5e8f\u5217"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"bool VerifySquenceOfBST(vector<int> sequence) {\n    stack<int> s;\n    int root=INT_MAX;\n    reverse(sequence.begin(),sequence.end());\n    if(sequence.size()==0)return false;\n    for(int &p:sequence){\n        if(p>root)return false;\n        while(!s.empty()&&s.top()>p){\n            root=s.top();\n            s.pop();\n        }\n        s.push(p);\n    }\n    return true;\n}\n")),(0,p.kt)("h3",{parentName:"blockquote",id:"31-\u6808\u7684\u538b\u5165\u5f39\u51fa\u5e8f\u5217"},"31 \u6808\u7684\u538b\u5165\u3001\u5f39\u51fa\u5e8f\u5217"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"bool IsPopOrder(vector<int> pushV,vector<int> popV) {\n    stack<int> s;\n    int n = popV.size();\n    int j =0;\n    for(int i =0;i<n;++i){\n        while(s.empty()||popV[i]!=s.top()&&j<n)s.push(pushV[j++]);\n        if(popV[i]==s.top())s.pop();\n    }\n    return s.empty();\n}\n")),(0,p.kt)("h3",{parentName:"blockquote",id:"37-\u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9"},"37 \u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9"),(0,p.kt)("p",{parentName:"blockquote"},"\u6cd51:\u627e\u5230\u5dee\u503c\u540e\u627e\u516c\u5171"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n    int la=0,lb=0;\n    for(ListNode* p=headA;p;p=p->next)la++;\n    for(ListNode* p=headB;p;p=p->next)lb++;\n    ListNode *p=headA,*q=headB;\n    int len=lb-la;\n    if(la>lb){\n        len=-len;\n        p=headB,q=headA;\n    }\n    for(int i=0;i<len;++i)q=q->next;\n    while(p&&p!=q){\n        p=p->next;\n        q=q->next;\n    }\n    return p;\n}\n")),(0,p.kt)("p",{parentName:"blockquote"},"\u6cd52:\u53cc\u6307\u9488,\u5229\u7528\u4e24\u4e2a\u94fe\u8868\u5408\u5e76\u540e\u957f\u5ea6-\u516c\u5171\u957f\u5ea6\u65f6\u4e00\u5b9a\u76f8\u9047"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n    ListNode *p=headA,*q=headB;\n    while(p!=q){\n        p=p==NULL?headB:p->next;\n        q=q==NULL?headA:q->next;\n    }\n    return p;\n}\n"))))}u.isMDXComponent=!0}}]);