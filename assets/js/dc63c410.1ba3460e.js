"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[6083],{2690:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=n(7462),l=(n(7294),n(3905));n(1839);const i={},r="2 Data Science",o={unversionedId:"Language/Python/2",id:"Language/Python/2",title:"2 Data Science",description:"Numpy",source:"@site/docs/Language/Python/2.md",sourceDirName:"Language/Python",slug:"/Language/Python/2",permalink:"/docs/Language/Python/2",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/Language/Python/2.md",tags:[],version:"current",frontMatter:{},sidebar:"C",previous:{title:"1 Python Basic",permalink:"/docs/Language/Python/1"},next:{title:"3 Machine Learning",permalink:"/docs/Language/Python/3"}},p={},s=[{value:"Numpy",id:"numpy",level:2},{value:"Basic operation",id:"basic-operation",level:3},{value:"Advanced Indexing",id:"advanced-indexing",level:3},{value:"Deep copy",id:"deep-copy",level:3},{value:"Pandas",id:"pandas",level:2},{value:"Selection",id:"selection",level:3},{value:"Boolean Indexing",id:"boolean-indexing",level:3},{value:"Operations",id:"operations",level:3},{value:"Matplotlib",id:"matplotlib",level:2},{value:"Seaborn",id:"seaborn",level:2},{value:"Distributional representations",id:"distributional-representations",level:3},{value:"Catergorical Plot",id:"catergorical-plot",level:3},{value:"Matrix Plot",id:"matrix-plot",level:3}],d={toc:s};function u(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"2-data-science"},"2 Data Science"),(0,l.kt)("h2",{id:"numpy"},"Numpy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Slice",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"np.arrange(start,stop,step)"),(0,l.kt)("li",{parentName:"ul"},"np.linspace(start,stop,num)"))),(0,l.kt)("li",{parentName:"ul"},"Random",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"uniform: np.random.randint(low,high,size)"),(0,l.kt)("li",{parentName:"ul"},"standard normal: np.random.randn(d1,d2,...)"))),(0,l.kt)("li",{parentName:"ul"},"max,min",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"argmax, argmin return the indices of the maximum/minimum values")))),(0,l.kt)("h3",{id:"basic-operation"},"Basic operation"),(0,l.kt)("p",null,"elementwise vs dot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = np.array([20, 30, 40, 50])\nb = np.arange(4)\nc = a + b # Matrix\nprint(c) # [20 31 42 53]\nprint(a*b) # [0 30 80 150]\nprint(a.dot(b)) # 260\n")),(0,l.kt)("p",null,"With the larger dataset, we see that using NumPy results in code that executes over 50 times faster! Throughout this course (and in the real world), you will find that writing efficient code will be important; arrays and vectorized operations are the most common way of making Python programs run quickly."),(0,l.kt)("h3",{id:"advanced-indexing"},"Advanced Indexing"),(0,l.kt)("p",null,"Index by arrays of indices"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = np.arange(12)**2  # the first 12 square numbers\ni = np.array([1, 1, 3, 8, 5])  # an array of indices\nprint(a[i])  # array([ 1,  1,  9, 64, 25])\nj = np.array([[3, 4], [9, 7]])  # a bidimensional array of indices\nprint(a[j])  # array([[ 9, 16],[81, 49]])\n")),(0,l.kt)("p",null,"Index by boolean arrays"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = np.arange(12).reshape(3, 4)\na[a>4] = 0 # 0 is a matrix\nprint(a) # array([[0, 1, 2, 3],[4, 0, 0, 0],[0, 0, 0, 0]])\n")),(0,l.kt)("h3",{id:"deep-copy"},"Deep copy"),(0,l.kt)("p",null,"If a = b, that's only a reference"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = np.arange(int(1e8))\nb = a[:100].copy()\ndel a  # the memory of ``a`` can be released.\n")),(0,l.kt)("h2",{id:"pandas"},"Pandas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pd.Series(data,index): One-dimensional ndarray with axis labels. data could be array-like, Iterable, dict, or scalar value"),(0,l.kt)("li",{parentName:"ul"},"pd.DataFrame(data,index,column): Two-dimensional, size-mutable, potentially heterogeneous tabular data. ")),(0,l.kt)("h3",{id:"selection"},"Selection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select by column"),(0,l.kt)("li",{parentName:"ul"},"Slice the row"),(0,l.kt)("li",{parentName:"ul"},"Select by label")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'df = pd.DataFrame(\n    {\n        "A": 1.0,\n        "B": pd.Timestamp("20130102"),\n        "C": pd.Series(1, index=list(range(4)), dtype="float32"),\n        "D": np.array([3] * 4, dtype="int32"),\n        "E": pd.Categorical(["test", "train", "test", "train"]),\n        "F": "foo",\n    }\n)\n## 1. Select by column\nprint(df[\'A\'])\n# 0    1.0\n# 1    1.0\n# 2    1.0\n# 3    1.0\n## 2. Slice the row\nprint(df[0:2])\n#      A          B    C  D      E    F\n# 0  1.0 2013-01-02  1.0  3   test  foo\n# 1  1.0 2013-01-02  1.0  3  train  foo\n## 3. Select by label\nprint(df.loc[[0,2],[\'A\',\'B\']])\n# Name: A, dtype: float64\n#      A          B\n# 0  1.0 2013-01-02\n# 2  1.0 2013-01-02\n')),(0,l.kt)("p",null,"MultiIndex"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'tuples = list(\n    zip(\n        ["bar", "bar", "baz", "baz", "foo", "foo", "qux", "qux"],\n        ["one", "two", "one", "two", "one", "two", "one", "two"],\n    )\n)\nindex = pd.MultiIndex.from_tuples(tuples, names=["first", "second"])\ndf = pd.DataFrame(np.random.randn(8, 2), index=index, columns=["A", "B"])\n#                      A         B\n# first second                    \n# bar   one     1.036623  0.775701\n#       two    -0.491414 -0.596697\n# baz   one    -1.039759  0.274683\n#       two    -0.138051 -1.128008\n# foo   one    -0.525837 -1.043091\n#       two     0.152277  1.281915\n# qux   one     0.625832  1.662615\n#       two    -0.933067 -0.257373\nprint(df.loc[\'bar\'].loc[\'one\',\'B\']) # 0.775701188641088\nprint(df.groupby(\'second\').describe()[\'A\'])\n#         count      mean       std       min       25%       50%       75%       max\n# second                                                                             \n# one       4.0  0.523990  0.743125 -0.007540  0.125254  0.241141  0.639877  1.621220\n# two       4.0  0.264113  0.644908 -0.414561 -0.175321  0.222076  0.661510  1.026859\n')),(0,l.kt)("h3",{id:"boolean-indexing"},"Boolean Indexing"),(0,l.kt)("p",null,"Selecting values from a DataFrame where a boolean condition is met"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'df = pd.DataFrame(np.random.randn(6, 4), index=pd.date_range("20130101", periods=6), columns=list("ABCD"))\nprint(df[df["A"] > 0])\n#                    A         B         C         D\n# 2013-01-02  0.945462 -0.880120  0.030657 -1.906303\n# 2013-01-06  0.290602 -0.155123  0.174085 -1.606480\n')),(0,l.kt)("h3",{id:"operations"},"Operations"),(0,l.kt)("p",null,"SQL join"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'left = pd.DataFrame({"key": ["foo", "foo"], "lval": [1, 2]})\nright = pd.DataFrame({"key": ["foo", "foo"], "rval": [4, 5]})\nprint(pd.merge(left,right,on = \'key\'))\n#    key  lval  rval\n# 0  foo     1     4\n# 1  foo     1     5\n# 2  foo     2     4\n# 3  foo     2     5\n')),(0,l.kt)("h2",{id:"matplotlib"},"Matplotlib"),(0,l.kt)("p",null,"The Figure keeps track of all the child Axes, an area where points can be specified in terms of x-y coordinates"),(0,l.kt)("p",null,"fig, axes = plt.subplots()"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20230508171812.png",alt:"20230508171812"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"plt.tight_layout()\nfig, axes = plt.subplots(1,2,figsize=(8,2))\naxes[0].plot(x,y1,'b:',x,y2,'g-')\naxes[0].legend(['fig1','fig2'],loc='lower left')\naxes[0].set_xlabel('x label')\nplt.show()\n")),(0,l.kt)("h2",{id:"seaborn"},"Seaborn"),(0,l.kt)("h3",{id:"distributional-representations"},"Distributional representations"),(0,l.kt)("p",null,"KDE: kernel distribution estimation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'tips = sns.load_dataset("tips")\nsns.displot(data=tips, x="total_bill", col="time", kde=True)\nsns.jointplot(x=\'total_bill\',y=\'tip\',data=tips,kind="hist")\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/Figure_1.png",alt:"Figure_1"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/2342.png",alt:"2342"})),(0,l.kt)("h3",{id:"catergorical-plot"},"Catergorical Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"tips =  sns.load_dataset(\"tips\")\nsns.boxplot(x='day',y='total_bill',data=tips,hue='sex')\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20123011111.png",alt:"2342"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20230510214230.png",alt:"20230510214230"})),(0,l.kt)("h3",{id:"matrix-plot"},"Matrix Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"fp = flights.pivot_table(index='month',columns='year',values='passengers')\nsns.heatmap(fp)\nsns.clustermap(fp,cmap='coolwarm')\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/heatmap.png",alt:"heatmap"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/coolwarm.png",alt:"coolwarm"})))}u.isMDXComponent=!0}}]);