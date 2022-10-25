# Java Application Design--Containers

## Introduction

Two Containers:**Collection** and **Map**

1.Collection:

**list**:hold the element in a particular sequence 

**set**

2.Map:
key-value object pairs
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201016212410955.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center)

## Collection
### Function
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020101715285823.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201016210354543.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020101621042813.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center)
### List

1.**ArrayList**:implement with an array,slow for inserting and removing.

2.**LinkedList**:inexpensive insertions and deletions,slow for random access.
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201016210913913.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center)
Deque[dek]--double ended queue
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201016211342737.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzgwMjMw,size_16,color_FFFFFF,t_70#pic_center)

### Set

1.**HashSet**:Objects must also define hashCode()

2.**TreeSet**:An ordered Set backed by a tree.

## Map

**HashMap** and **TreeMap**
## Generics
`注意无论是什么泛型，getClass()均是同一个`

### 机制
Java--类型参数(**Cannot use primitive types**)作为类的成员变量

C++(模板)--源代码的源代码

### Class
```java
public class ArrayMap<K, V> {
  private K[] keys; 
  private V[] values;
  private int size;
  public ArrayMap() {
    keys = (K[]) new Object[100];
    values = (V[]) new Object[100];
    size = 0;
  }
  ...
}
```

### Method

#### Type Upper Bounds

```java
public static <K extends Comparable<K>, V> K maxKey(ArrayMap<K, V> am) {//Meaning: Any ArrayMap you give me must have actual parameter type that is a subtype of Comparable<T>.

   ...
     	if (k.compareTo(largest) > 0) {
   ...
}
```

#### Convariance 

```java
ArrayMap<FrenchDog, Integer> am2 = new ArrayMap<FrenchDog, Integer>();
am2.put(new FrenchDog("francis"), 10);
am2.put(new FrenchDog("francis jr"), 20);
allBark(am2);
// 实现allBark
public static void allBark(ArrayMap<Dog, ?> am) {
   for (Dog d : am.keys()) {
       d.bark(); 	
   }
}
```

Arrays are convariant in java, but generic types are invariant

反证: 
if 2(√) then 4(x) so 2(x)

```java
List<FrenchDog> fg = new ArrayList<FrenchDog>();
List<Dog> g = fg;
g.add(new Dog());
FrenchDog s = g.get(0);
```

```java
//正确
public static <K extends Dog> void allBark(ArrayMap<K, ?> am) {
   for (Dog d : am.keys()) {
       d.bark();
   }
}
//or 
public static void allBark(ArrayMap<?extends Dog,?> am){
    for(Dog d : am.keys()){
        d.bark();
    }
}

```