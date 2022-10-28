"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[5529],{6528:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=t(7462),i=(t(7294),t(3905));t(1839);const r={},l="Java Application Design--Containers",p={unversionedId:"C++/Java_containers",id:"C++/Java_containers",title:"Java Application Design--Containers",description:"Introduction",source:"@site/docs/C++/Java_containers.md",sourceDirName:"C++",slug:"/C++/Java_containers",permalink:"/docs/C++/Java_containers",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/C++/Java_containers.md",tags:[],version:"current",frontMatter:{},sidebar:"C",previous:{title:"Java Application Design--Class",permalink:"/docs/C++/Java_class"},next:{title:"Java Application Design--Exceptions & IO",permalink:"/docs/C++/Java_exception"}},s={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Collection",id:"collection",level:2},{value:"List",id:"list",level:3},{value:"Set",id:"set",level:3},{value:"Map",id:"map",level:2},{value:"Generics",id:"generics",level:2},{value:"\u673a\u5236",id:"\u673a\u5236",level:3},{value:"Class",id:"class",level:3},{value:"Method",id:"method",level:3},{value:"Type Upperbound",id:"type-upperbound",level:4},{value:"Convariance",id:"convariance",level:4}],c={toc:o};function m(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"java-application-design--containers"},"Java Application Design--Containers"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Containers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Collection",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"list:hold the element in a particular sequence "),(0,i.kt)("li",{parentName:"ul"},"set"))),(0,i.kt)("li",{parentName:"ul"},"Map: key-value object pairs")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20201016212410955.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h2",{id:"collection"},"Collection"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/2020101715285823.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20201016210354543.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/2020101621042813.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"list"},"List"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ArrayList: implement with an array, slow for inserting and removing."),(0,i.kt)("li",{parentName:"ul"},"LinkedList: inexpensive insertions and deletions, slow for random access.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20201016210913913.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("p",null,"Deque","[dek]","--double ended queue"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20201016211342737.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,i.kt)("h3",{id:"set"},"Set"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HashSet: Objects must also define hashCode()"),(0,i.kt)("li",{parentName:"ul"},"TreeSet: An ordered Set backed by a tree.")),(0,i.kt)("h2",{id:"map"},"Map"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HashMap"),(0,i.kt)("li",{parentName:"ul"},"TreeMap")),(0,i.kt)("h2",{id:"generics"},"Generics"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u662f\u4ec0\u4e48\u6cdb\u578b\uff0cgetClass()\u5747\u662f\u540c\u4e00\u4e2a")),(0,i.kt)("h3",{id:"\u673a\u5236"},"\u673a\u5236"),(0,i.kt)("p",null,"Java--\u7c7b\u578b\u53c2\u6570(",(0,i.kt)("strong",{parentName:"p"},"Cannot use primitive types"),")\u4f5c\u4e3a\u7c7b\u7684\u6210\u5458\u53d8\u91cf"),(0,i.kt)("p",null,"C++(\u6a21\u677f)--\u6e90\u4ee3\u7801\u7684\u6e90\u4ee3\u7801"),(0,i.kt)("h3",{id:"class"},"Class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class ArrayMap<K, V> {\n  private K[] keys; \n  private V[] values;\n  private int size;\n  public ArrayMap() {\n    keys = (K[]) new Object[100];\n    values = (V[]) new Object[100];\n    size = 0;\n  }\n  public void put(K key, V value) {\n    int i = getKeyIndex(key);\n    if (i > -1) {\n      values[i] = value; return; }\n    keys[size] = key;\n    values[size] = value;\n    size += 1;  \n  } \n\n  public V get(K key) {       \n    return values[findKey(key)];\n  }\n  public static void main(String[] args){\n    ArrayMap<Integer, String> ismap = new ArrayMap<Integer, String>();\n    ismap.put(5, "hello");\n    ismap.put(10, "ketchup");\n  }\n}\n')),(0,i.kt)("h3",{id:"method"},"Method"),(0,i.kt)("p",null,"Create a class MapHelper with two methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"get(key): Returns the item in the map if it exists, otherwise null."),(0,i.kt)("li",{parentName:"ul"},"maxKey(): Returns the maximum of all keys. Works only if keys can be compared."),(0,i.kt)("li",{parentName:"ul"},"allBark(): Makes all keys bark. Works only for keys of type Dog.")),(0,i.kt)("p",null,"Implement get():"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221028105223.png",alt:"20221028105223"})),(0,i.kt)("h4",{id:"type-upperbound"},"Type Upperbound"),(0,i.kt)("p",null,"Implement maxKey():"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221028105644.png",alt:"20221028105644"})),(0,i.kt)("p",null,"Can use extends keyword as a type upper bound. Only allow use on ArrayMaps with Comparable keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public static <K extends Comparable<K>, V> K maxKey(ArrayMap<K, V> am) {//Meaning: Any ArrayMap you give me must have actual parameter type that is a subtype of Comparable<T>.\n\n   ...\n        if (k.compareTo(largest) > 0) {\n   ...\n}\n")),(0,i.kt)("h4",{id:"convariance"},"Convariance"),(0,i.kt)("p",null,"Implement allBark():"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ArrayMap<FrenchDog, Integer> am2 = new ArrayMap<FrenchDog, Integer>();\nam2.put(new FrenchDog("francis"), 10);\nam2.put(new FrenchDog("francis jr"), 20);\nallBark(am2);\n\n//Method1: generic method\npublic static <V> void allBark(ArrayMap<Dog, V> am) {\n   for (Dog d : am.keys()) {\n       d.bark();    \n   }\n}\n\n//Method2: WildCard\n/*\npublic static void allBark(ArrayMap<Dog, ?> am) {\n   for (Dog d : am.keys()) {\n       d.bark();    \n   }\n}\n*/\n')),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"MapHelper.java:62: error: incompatible types: ArrayMap<FrenchDog,Integer> cannot be converted to ArrayMap<Dog,?>")),(0,i.kt)("p",null,"Arrays are convariant in java, but generic types are invariant"),(0,i.kt)("p",null,"\u53cd\u8bc1:\nif 2(\u221a) then 4(x) so 2(x)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"List<FrenchDog> fg = new ArrayList<FrenchDog>();\nList<Dog> g = fg;\ng.add(new Dog());\nFrenchDog s = g.get(0);\n")),(0,i.kt)("p",null,"Fix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"//\u6b63\u786e\npublic static <K extends Dog> void allBark(ArrayMap<K, ?> am) {\n   for (Dog d : am.keys()) {\n       d.bark();\n   }\n}\n//or \npublic static void allBark(ArrayMap<?extends Dog,?> am){\n    for(Dog d : am.keys()){\n        d.bark();\n    }\n}\n\n")))}m.isMDXComponent=!0}}]);