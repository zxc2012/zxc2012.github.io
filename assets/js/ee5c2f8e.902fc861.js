"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[959],{2748:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));t(1839);const i={},r="2 Collection",o={unversionedId:"Language/Java/Java_2",id:"Language/Java/Java_2",title:"2 Collection",description:"Collection",source:"@site/docs/Language/Java/Java_2.md",sourceDirName:"Language/Java",slug:"/Language/Java/Java_2",permalink:"/docs/Language/Java/Java_2",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/Language/Java/Java_2.md",tags:[],version:"current",frontMatter:{},sidebar:"C",previous:{title:"1 Class",permalink:"/docs/Language/Java/Java_1"},next:{title:"3 Exceptions & IO",permalink:"/docs/Language/Java/Java_3"}},s={},p=[{value:"Collection",id:"collection",level:2},{value:"List",id:"list",level:3},{value:"Set",id:"set",level:3},{value:"Map",id:"map",level:2},{value:"Collections",id:"collections",level:2},{value:"Generics",id:"generics",level:2},{value:"\u673a\u5236",id:"\u673a\u5236",level:3},{value:"Class",id:"class",level:3},{value:"Method",id:"method",level:3},{value:"Type Upperbound",id:"type-upperbound",level:4},{value:"Convariance",id:"convariance",level:4},{value:"Type Inference",id:"type-inference",level:4}],c={toc:p};function u(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"2-collection"},"2 Collection"),(0,l.kt)("h2",{id:"collection"},"Collection"),(0,l.kt)("p",null,"Deque","[dek]","--double ended queue"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221031160055.png",alt:"20221031160055"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Interface Iterable<T>{\n  default void forEach(Consumer<? super T> action)//Performs the given action for each element of the Iterable until all elements have been processed or the action throws an exception.\n  Iterator<T> iterator()//Returns an iterator over elements of type T.\n}\npublic interface Iterator<E>{\n  boolean   hasNext(); \n  E next();//Returns the next element in the iteration.\n}\npublic interface Collection<E> extends Iterable<E>{\n  int size();\n  boolean add(E e);\n  boolean addAll(Collection<? extends E> c);\n  void clear();\n  boolean contains(Object);\n  boolean containsAll(Collection<?> c);\n  boolean isEmpty();\n  default Stream<E> stream();//Returns a sequential Stream with this collection as its source.\n  default Stream<E> parallelStream();//Returns a possibly parallel Stream with this collection as its source.\n  boolean remove(Object o);\n  boolean removeAll(Collection<?> c);\n  boolean retainAll(Collection<?> c);//Retains only the elements in this collection that are contained in the specified collection \n  Object[] toArray();//Returns an array containing all of the elements in this collection.\n  <T> T[] toArray(T[] a);\n}\n")),(0,l.kt)("p",null,"Consumer Inferface"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface Consumer<T>{\n  void accept(T t);\n}\n")),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ArrayList: implement with an array, slow for inserting and removing."),(0,l.kt)("li",{parentName:"ul"},"LinkedList: inexpensive insertions and deletions, slow for random access.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LinkedList is a doubly-linked list implementation of the List and Deque interfaces")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Interface List<E>{\n  E get(int index);\n  int indexOf(Object o);\n  int lastindexOf(Object o);\n  static <E> List<E> of(E... elements);\n  E set(int index, E element);// returns the element previously at the specified position\n  Object[] toArray();\n}\n")),(0,l.kt)("h3",{id:"set"},"Set"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HashSet: Objects must also define hashCode()"),(0,l.kt)("li",{parentName:"ul"},"TreeSet: An ordered Set backed by a tree.")),(0,l.kt)("h2",{id:"map"},"Map"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221031212205.png",alt:"20221031212205"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface Map<K,V>{\n  int size();\n  void clear();\n  boolean containsKey(Object key);\n  boolean containsValue(Object value);\n  default void forEach(BiConsumer<? super K,? super V> action);\n  V put(K key,V value)//Returns the previous value associated with key, or null if there was no mapping for key.\n  V get(Object key);//Returns the value or null\n  boolean isEmpty();\n  V remove(Object key);\n  default V replace(K key, V value);\n  Collection<V> values();\n}\n")),(0,l.kt)("h2",{id:"collections"},"Collections"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Collections extends Object{\n  static <T> void fill(List<? super T> list, T obj);//Replaces all of the elements of the specified list with the specified element.\n  static <T> T max(Collection<? extends T> coll,Comparator<? super T> comp);\n  static <T> T min(Collection<? extends T> coll,Comparator<? super T> comp);\n  static void reverse(List<?> list);\n  static <T> void sort(List<T> list, Comparator<? super T> c);\n  static void swap(List<?> list, int i, int j);\n}\n")),(0,l.kt)("h2",{id:"generics"},"Generics"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u662f\u4ec0\u4e48\u6cdb\u578b\uff0cgetClass()\u5747\u662f\u540c\u4e00\u4e2a")),(0,l.kt)("h3",{id:"\u673a\u5236"},"\u673a\u5236"),(0,l.kt)("p",null,"Java--\u7c7b\u578b\u53c2\u6570(",(0,l.kt)("strong",{parentName:"p"},"Cannot use primitive types"),")\u4f5c\u4e3a\u7c7b\u7684\u6210\u5458\u53d8\u91cf"),(0,l.kt)("p",null,"C++(\u6a21\u677f)--\u6e90\u4ee3\u7801\u7684\u6e90\u4ee3\u7801"),(0,l.kt)("p",null,"The most commonly used type parameter names are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"E: Element"),(0,l.kt)("li",{parentName:"ul"},"K: Key"),(0,l.kt)("li",{parentName:"ul"},"N: Number"),(0,l.kt)("li",{parentName:"ul"},"T: Type"),(0,l.kt)("li",{parentName:"ul"},"V: Value")),(0,l.kt)("h3",{id:"class"},"Class"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class ArrayMap<K, V> {\n  private K[] keys; \n  private V[] values;\n  private int size;\n  public ArrayMap() {\n    keys = (K[]) new Object[100];\n    values = (V[]) new Object[100];\n    size = 0;\n  }\n  public void put(K key, V value) {\n    int i = getKeyIndex(key);\n    if (i > -1) {\n      values[i] = value; return; }\n    keys[size] = key;\n    values[size] = value;\n    size += 1;  \n  } \n\n  public V get(K key) {       \n    return values[findKey(key)];\n  }\n  public static void main(String[] args){\n    ArrayMap<Integer, String> ismap = new ArrayMap<Integer, String>();\n    ismap.put(5, "hello");\n    ismap.put(10, "ketchup");\n  }\n}\n')),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"Create a class MapHelper with three methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"get(key): Returns the item in the map if it exists, otherwise null."),(0,l.kt)("li",{parentName:"ul"},"maxKey(): Returns the maximum of all keys. Works only if keys can be compared."),(0,l.kt)("li",{parentName:"ul"},"allBark(): Makes all keys bark. Works only for keys of type Dog.")),(0,l.kt)("p",null,"Implement get():"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221028105223.png",alt:"20221028105223"})),(0,l.kt)("h4",{id:"type-upperbound"},"Type Upperbound"),(0,l.kt)("p",null,"Implement maxKey():"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20221028105644.png",alt:"20221028105644"})),(0,l.kt)("p",null,"Can use extends keyword as a type upper bound. Only allow use on ArrayMaps with Comparable keys."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public static <K extends Comparable<K>, V> K maxKey(ArrayMap<K, V> am) {//Meaning: Any ArrayMap you give me must have actual parameter type that is a subtype of Comparable<T>.\n\n   ...\n        if (k.compareTo(largest) > 0) {\n   ...\n}\n")),(0,l.kt)("h4",{id:"convariance"},"Convariance"),(0,l.kt)("p",null,"Implement allBark():"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ArrayMap<FrenchDog, Integer> am2 = new ArrayMap<FrenchDog, Integer>();\nam2.put(new FrenchDog("francis"), 10);\nam2.put(new FrenchDog("francis jr"), 20);\nallBark(am2);\n\n//Method1: generic method\npublic static <V> void allBark(ArrayMap<Dog, V> am) {\n   for (Dog d : am.keys()) {\n       d.bark();    \n   }\n}\n\n//Method2: WildCard\n/*\npublic static void allBark(ArrayMap<Dog, ?> am) {\n   for (Dog d : am.keys()) {\n       d.bark();    \n   }\n}\n*/\n')),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"MapHelper.java:62: error: incompatible types: ArrayMap<FrenchDog,Integer> cannot be converted to ArrayMap<Dog,?>")),(0,l.kt)("p",null,"Arrays are convariant in java, but generic types are invariant"),(0,l.kt)("p",null,"\u53cd\u8bc1:\nif 2(\u221a),I made 3 without telling List, then 4(x) => 2(x)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Object[] numArray = new int[]{1,2,3}; // Correct\nList<Dog> fg = new ArrayList<Dog>();\nList<Animal> g = fg;\ng.add(new Cat());\nDog s = g.get(0);\n")),(0,l.kt)("p",null,"Fix"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"//\u6b63\u786e\npublic static <K extends Dog> void allBark(ArrayMap<K, ?> am) {\n   for (Dog d : am.keys()) {\n       d.bark();\n   }\n}\n//or \npublic static void allBark(ArrayMap<?extends Dog,?> am){\n    for(Dog d : am.keys()){\n        d.bark();\n    }\n}\n")),(0,l.kt)("h4",{id:"type-inference"},"Type Inference"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Type inference")," is a Java compiler's ability to look at each method invocation and corresponding declaration to determine the type argument (or arguments) that make the invocation applicable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, List<String>> myMap = new HashMap<>();// <String,List<String>>\nclass MyClass<X> {\n  <T> MyClass(T t) {\n    // ...\n  }\n}\nMyClass<Integer> myObject = new MyClass<>("");// X should be Integer, T should be String\n')))}u.isMDXComponent=!0}}]);