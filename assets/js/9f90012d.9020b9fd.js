"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[8966],{5638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),r=n(1839);const i={},o="1 Python Basic",s={unversionedId:"Language/Python/1",id:"Language/Python/1",title:"1 Python Basic",description:"Functions",source:"@site/docs/Language/Python/1.md",sourceDirName:"Language/Python",slug:"/Language/Python/1",permalink:"/docs/Language/Python/1",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/Language/Python/1.md",tags:[],version:"current",frontMatter:{},sidebar:"C",previous:{title:"6 Web Frameworks and ORM",permalink:"/docs/Language/Java/Java_6"},next:{title:"2 Data Science",permalink:"/docs/Language/Python/2"}},p={},u=[{value:"Functions",id:"functions",level:2},{value:"Scope",id:"scope",level:3},{value:"Unpacking argument lists",id:"unpacking-argument-lists",level:3},{value:"lambda",id:"lambda",level:3},{value:"Function Annotations",id:"function-annotations",level:3},{value:"Class",id:"class",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Class and instance variables",id:"class-and-instance-variables",level:3},{value:"Class and Static Method",id:"class-and-static-method",level:3},{value:"Packages",id:"packages",level:2},{value:"Iterable",id:"iterable",level:2},{value:"Generators",id:"generators",level:3},{value:"Common Sequence Operations",id:"common-sequence-operations",level:3},{value:"Immutable Sequence Types",id:"immutable-sequence-types",level:3},{value:"Mutable Sequence Types",id:"mutable-sequence-types",level:3},{value:"Data Types",id:"data-types",level:2},{value:"Numbers",id:"numbers",level:3},{value:"Strings",id:"strings",level:3},{value:"List",id:"list",level:3},{value:"Tuple",id:"tuple",level:3},{value:"Range",id:"range",level:3},{value:"dict",id:"dict",level:3},{value:"Control Flow and Loops",id:"control-flow-and-loops",level:2},{value:"Exceptions",id:"exceptions",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"1-python-basic"},"1 Python Basic"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"functions without a return statement return None"),(0,l.kt)("li",{parentName:"ul"},"default value: The default value is evaluated only once, unless it is a mutable object such as a list, dictionary, or instances of most classes"),(0,l.kt)("li",{parentName:"ul"},"keyword arguments must follow positional arguments")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'## General\ni = 5\ndef f(arg=i):\n    print(arg)\n\ni = 6\nf() # 5\n\n## Mutable object\ndef f(a, L=[]):\n    L.append(a)\n    return L\n\nprint(f(1)) # [1]\nprint(f(2)) # [1,2]\nprint(f(3)) # [1,2,3]\n\n# positional: *name, keyword: **name\ndef cheeseshop(kind, *arguments, **keywords):\n    # arguments receives a tuple, keywords receives a dictionary\n    print("-- Do you have any", kind, "?")\n    for arg in arguments:\n        print(arg)\n    for kw in keywords:\n        print(kw, ":", keywords[kw])\n')),(0,l.kt)("h3",{id:"scope"},"Scope"),(0,l.kt)("p",null,"Python has only function scope, no block scope"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'if a > 3:\n    choice = "pears"\nprint(choice) # pears\n')),(0,l.kt)("p",null,"local vs global variable"),(0,l.kt)("p",null,"only read from global variable, never modify it"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'choice = "zombie"\ndef choose_menu():\n    # choice += "!" \n    # UnboundLocalError: local variable \'choice\' referenced before assignment\n    return choice + "!"\n\nchoice  = choose_menu()\nprint(choice) # zombie!\n')),(0,l.kt)("h3",{id:"unpacking-argument-lists"},"Unpacking argument lists"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'nums = [3, 6]\nlist(range(*nums)) # * to unpack the arguments out of a list or tuple->[3, 4, 5]\nd = {"voltage": "four million", "state": "bleedin\' demised", "action": "VOOM"}\nparrot(**d) # ** deliver keyword arguments\n')),(0,l.kt)("h3",{id:"lambda"},"lambda"),(0,l.kt)("p",null,"lambda parameter_list : expression"),(0,l.kt)("h3",{id:"function-annotations"},"Function Annotations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def input(__prompt: object = "") -> str: ...\n')),(0,l.kt)("h2",{id:"class"},"Class"),(0,l.kt)("h3",{id:"constructor"},"Constructor"),(0,l.kt)("p",null,"python allow only one constructor but multiple inheritance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Complex(Base1,Base2,Base3): # Inheritance\n    def __init__(self, realpart, imagpart):\n        self.r = realpart\n        self.i = imagpart\n")),(0,l.kt)("h3",{id:"class-and-instance-variables"},"Class and instance variables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Dog:\n\n    kind = 'canine'         # class variable shared by all instances\n    def __init__(self, name):\n        self.name = name    # instance variable unique to each instance\n\nd = Dog('Fido')\ne = Dog('Buddy')\nprint(d.kind)                  # 'canine'\nprint(e.kind)                  # 'canine'\nprint(d.name)                  # 'Fido'\nprint(e.name)                  # 'Buddy'\n")),(0,l.kt)("h3",{id:"class-and-static-method"},"Class and Static Method"),(0,l.kt)("p",null,"A class method can access or modify the class state while a static method can\u2019t access or modify it. They both bound to the class and not the object of the class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class C(object):\n    @classmethod\n    def fun(cls, arg1, arg2, ...):\n    @staticmethod\n    def func(arg1, arg2, ...):\n")),(0,l.kt)("h2",{id:"packages"},"Packages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# absolute imports\nimport sound.effects.echo\nsound.effects.echo.echofilter(input, output, delay=0.7, atten=4)\n# relative imports\nfrom .subpackage1.module5 import function2\nfrom ..filters import equalizer\n# naming imports\nfrom sound.effects import echo\necho.echofilter(input, output, delay=0.7, atten=4)\n")),(0,l.kt)("h2",{id:"iterable"},"Iterable"),(0,l.kt)("p",null,"Any classes you define with an ","_","_","iter","_","_","() method or with a ","_","_","getitem","_","_","() method that implements sequence semantics are Iterable"),(0,l.kt)(r.G,{chart:"graph LR;\n\tSequenceTypes--\x3eIterable;\n    list--\x3eSequenceTypes;\n    Tuple--\x3eSequenceTypes;\n    Range--\x3eSequenceTypes;\n    dict--\x3eMappingTypes;\n    MappingTypes--\x3eIterable;",mdxType:"Mermaid"}),(0,l.kt)("p",null,"the ",(0,l.kt)("em",{parentName:"p"},"for")," statement calls ","_","_","iter()","_","_"," on the container object."),(0,l.kt)("p",null,"_","_","iter()","_","_","returns an iterator object that defines the method ","_","_","next","_","_","() which accesses elements in the container one at a time. When there are no more elements, ","_","_","next","_","_","() raises a StopIteration exception which tells the for loop to terminate."),(0,l.kt)("h3",{id:"generators"},"Generators"),(0,l.kt)("p",null,"Generators are a simple and powerful tool for creating iterators. However, unlike lists, iterator object generated by Generator does not store their contents in memory. "),(0,l.kt)("p",null,"yield: Each time next() is called on it, the generator resumes where it left off (it remembers all the data values and which statement was last executed)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'## Tradition\ndef csv_reader(file_name):\n    file = open(file_name)\n    result = file.read().split("\\n")\n    return result\n\n## Generators\ndef csv_reader(file_name):\n    for row in open(file_name, "r"):\n        yield row\n## Generator expression\n# csv_gen = row for row in open("some_csv.txt","r")\n\ncsv_gen = csv_reader("some_csv.txt")\n')),(0,l.kt)("h3",{id:"common-sequence-operations"},"Common Sequence Operations"),(0,l.kt)("p",null,"s and t are sequences of the same type, n, i, j and k are integers and x is an arbitrary object that meets any type and value restrictions imposed by s"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x in s"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x not in s"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s + t"),(0,l.kt)("td",{parentName:"tr",align:null},"concatenation, range excluded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s ","*"," n or n ","*"," s"),(0,l.kt)("td",{parentName:"tr",align:null},"repeat ",(0,l.kt)("em",{parentName:"td"},"reference"),", range excluded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s","[","i","]"),(0,l.kt)("td",{parentName:"tr",align:null},"index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s","[","i:j:k","]"),(0,l.kt)("td",{parentName:"tr",align:null},"slice of s from i to j with step k")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"len(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"The argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection (such as a dictionary, set, or frozen set).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min(s)/max(s)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s.count(x)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20230428161659.png",alt:"20230428161659"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"lists = [[2]] * 3\nlists[0].append(3)\nprint(lists) # [[2, 3], [2, 3], [2, 3]]\n")),(0,l.kt)("h3",{id:"immutable-sequence-types"},"Immutable Sequence Types"),(0,l.kt)("p",null,"support hash()"),(0,l.kt)("h3",{id:"mutable-sequence-types"},"Mutable Sequence Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s","[","i","]"," = x"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s","[","i:j:k","]"," = t"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s.append(x)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s.copy()"),(0,l.kt)("td",{parentName:"tr",align:null},"creates a shallow copy of s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s.extend(t) / s += t"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s *= n"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s.insert(i, x)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s.pop() or s.pop(i)"),(0,l.kt)("td",{parentName:"tr",align:null},"retrieves the item at i and also removes it from s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s.remove(x)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s.reverse()"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"data-types"},"Data Types"),(0,l.kt)("h3",{id:"numbers"},"Numbers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Division (/) always returns a float. To do floor division and get an integer result you can use the // operator"),(0,l.kt)("li",{parentName:"ul"},"use the ** operator to calculate powers")),(0,l.kt)("h3",{id:"strings"},"Strings"),(0,l.kt)("p",null,"str is immutable, but it implement all of the common sequence operations"),(0,l.kt)("p",null,"Two ways of formating"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"print(f'The value of pi is approximately {math.pi:1.3f}.')\nprint('The value of pi is approximately {:1.3f}'.format(math.pi))\n# positional and keyword arguments\nprint('The story of {0}, {1}, and {other}.'.format('Bill', 'Manfred',other='Georg'))\ntable = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}\nprint('Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}'.format(**table)) # Jack: 4098; Sjoerd: 4127; Dcab: 8637678\n")),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"List is mutable"),(0,l.kt)("p",null,"More: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# check empty\na = []\nif a:\n    print("List has elements")\nelse:\n    print("List is empty!")\n')),(0,l.kt)("p",null,"list.sort(*, key=None, reverse=False)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"lst = [('Ann','20','400'), ('Scott','40','500'), ('Bean','10','450')]\nlst.sort(key=lambda x:x[1])\n\n# use cmp_to_key\nfrom functools import cmp_to_key\nlists = [1,23,2,134,51,213,12,33]\nlists.sort(key=cmp_to_key(lambda x,y:x-y))\n")),(0,l.kt)("h3",{id:"tuple"},"Tuple"),(0,l.kt)("p",null,"tuple is immutable"),(0,l.kt)("p",null,"Tuples may be constructed in a number of ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using a pair of parentheses to denote the empty tuple: ()"),(0,l.kt)("li",{parentName:"ul"},"Using a trailing comma for a singleton tuple: a, or (a,)"),(0,l.kt)("li",{parentName:"ul"},"Separating items with commas: a, b, c or (a, b, c)"),(0,l.kt)("li",{parentName:"ul"},"Using the tuple() built-in: tuple() or tuple(iterable)")),(0,l.kt)("h3",{id:"range"},"Range"),(0,l.kt)("p",null,"range is immutable"),(0,l.kt)("h3",{id:"dict"},"dict"),(0,l.kt)("p",null,"dict is mutable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"a = dict(one=1, two=2, three=3)\nb = {'one': 1, 'two': 2, 'three': 3}\nc = dict(zip(['one', 'two', 'three'], [1, 2, 3]))\nd = dict([('two', 2), ('one', 1), ('three', 3)])\ne = dict({'three': 3, 'one': 1, 'two': 2})\nf = dict({'one': 1, 'three': 3}, two=2)\nprint(a == b == c == d == e == f) # true\n")),(0,l.kt)("h2",{id:"control-flow-and-loops"},"Control Flow and Loops"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'## ifelse\nif x < y:\n    print("x is less than y")\nelif x > y:\n    print("x is greater than y")\nelse:\n    print("x is equal to y")\n## Switch\n# Only the first pattern that matches gets executed\nmatch status:\n    case 400:\n        return "Bad request"\n    case 401| 403 |404:\n        return "Not allowed"\n    case 404:\n        return "Not found"\n    case 418:\n        return "I\'m a teapot"\n    case _:\n        return "Something\'s wrong with the internet"\n')),(0,l.kt)("p",null,"Chaining comparison"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"def all(__iterable: Iterable","[object]",") -> bool"),(0,l.kt)("li",{parentName:"ul"},"def any(__iterable: Iterable","[object]",") -> bool")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Double comparison\nif 0< i < 10: ...\n# Multiple comparison\nif all([a>10, i<1, y>20]): ...\n")),(0,l.kt)("h2",{id:"exceptions"},"Exceptions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'try:\n    result = x / y\nexcept ZeroDivisionError:\n    print("division by zero!")\nfinally:\n    print("executing finally clause")\n')))}d.isMDXComponent=!0}}]);