"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[4900],{3019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));n(1839);const r={},l="Build and Test Tools",p={unversionedId:"Language/Tools",id:"Language/Tools",title:"Build and Test Tools",description:"Maven",source:"@site/docs/Language/Tools.md",sourceDirName:"Language",slug:"/Language/Tools",permalink:"/docs/Language/Tools",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/Language/Tools.md",tags:[],version:"current",frontMatter:{},sidebar:"C",previous:{title:"3 Machine Learning",permalink:"/docs/Language/Python/3"},next:{title:"Files and Memory",permalink:"/docs/Language/\u5185\u5b58\u5206\u914d"}},i={},s=[{value:"Maven",id:"maven",level:2},{value:"JUnit",id:"junit",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-and-test-tools"},"Build and Test Tools"),(0,o.kt)("h2",{id:"maven"},"Maven"),(0,o.kt)("p",null,"POM: project object model"),(0,o.kt)("p",null,"groupId and artifactId"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n  <modelVersion>4.0.0</modelVersion>\n \n  \x3c!-- the id of the project's group --\x3e\n  <groupId>com.mycompany.app</groupId>\n  \x3c!-- the id of the artifact (project)--\x3e\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n</project>\n")),(0,o.kt)("p",null,"Example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n |-- my-module\n |   `-- pom.xml\n `-- parent\n     `-- pom.xml\n")),(0,o.kt)("p",null,"Project Inheritance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n  \x3c!-- pom under my-module --\x3e\n  <modelVersion>4.0.0</modelVersion>\n \n  <parent>\n    <groupId>com.mycompany.app</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n    <relativePath>../parent/pom.xml</relativePath>\n  </parent>\n \n  \x3c!-- groupId the same as parent--\x3e\n  <artifactId>my-module</artifactId>\n  \x3c!-- version the same as parent>\n</project>\n")),(0,o.kt)("p",null,"Project Aggregation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Change the parent POMs packaging to the value "pom"'),(0,o.kt)("li",{parentName:"ul"},"Specify in the parent POM the directories of its modules (children POMs)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\n  <modelVersion>4.0.0</modelVersion>\n \n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <packaging>pom</packaging>\n \n  <modules>\n    <module>../my-module</module>\n  </modules>\n</project>\n")),(0,o.kt)("h2",{id:"junit"},"JUnit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@org.junit.Test\norg.junit.Assert.assertEquals(expected, actual)\n")),(0,o.kt)("p",null,"It is annoying to type out the name of the library repeatedly,\nto avoid this we\u2019ll start every test file with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import org.junit.Test;\nimport static org.junit.Assert.*;\n")))}d.isMDXComponent=!0}}]);