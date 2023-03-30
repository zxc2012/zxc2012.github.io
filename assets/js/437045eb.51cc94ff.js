"use strict";(self.webpackChunkChance=self.webpackChunkChance||[]).push([[5778],{7807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));n(1839);const i={},r="1 Abstraction",o={unversionedId:"cs/Network/network1",id:"cs/Network/network1",title:"1 Abstraction",description:"Basic",source:"@site/docs/cs/Network/network1.md",sourceDirName:"cs/Network",slug:"/cs/Network/network1",permalink:"/docs/cs/Network/network1",draft:!1,editUrl:"https://github.com/zxc2012/zxc2012.github.io/tree/master/docs/cs/Network/network1.md",tags:[],version:"current",frontMatter:{},sidebar:"cs",previous:{title:"Numrical Analysis Summary",permalink:"/docs/cs/Math/numerical"},next:{title:"1 Abstraction",permalink:"/docs/cs/Operating_System/OS_1"}},s={},c=[{value:"Basic",id:"basic",level:2},{value:"Transport Layer",id:"transport-layer",level:2},{value:"Multiplexing and demultiplexing",id:"multiplexing-and-demultiplexing",level:3},{value:"TCP",id:"tcp",level:3},{value:"Establishing and Closing Connection",id:"establishing-and-closing-connection",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"1-abstraction"},"1 Abstraction"),(0,l.kt)("h2",{id:"basic"},"Basic"),(0,l.kt)("p",null,"Internet protocol stack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Application: supporting network applications"),(0,l.kt)("li",{parentName:"ul"},"Transport: process-process data transfer"),(0,l.kt)("li",{parentName:"ul"},"Network: routing of datagrams from source to destination"),(0,l.kt)("li",{parentName:"ul"},"Data Link: data transfer between neighboring network elements"),(0,l.kt)("li",{parentName:"ul"},"Physical: bits to/from signals \u201con the wire\u201d")),(0,l.kt)("h2",{id:"transport-layer"},"Transport Layer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TCP: Transmission Control Protocol",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"reliable, in-order delivery"),(0,l.kt)("li",{parentName:"ul"},"flow control: sender won\u2019t overwhelm receiver "),(0,l.kt)("li",{parentName:"ul"},"congestion control: throttle sender when network overloaded "),(0,l.kt)("li",{parentName:"ul"},"connection-oriented: handshaking initializes sender, receiver state before data exchange"))),(0,l.kt)("li",{parentName:"ul"},"UDP: User Datagram Protocol",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"unreliable, unordered delivery"),(0,l.kt)("li",{parentName:"ul"},"connectionless: no handshaking between UDP sender, receiver"))),(0,l.kt)("li",{parentName:"ul"},"services not available:  delay guarantees, bandwidth guarantees")),(0,l.kt)("h3",{id:"multiplexing-and-demultiplexing"},"Multiplexing and demultiplexing"),(0,l.kt)("p",null,"Multiplexing, demultiplexing: based on segment, datagram header field values"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TCP: demultiplexing using 4-tuple: source and destination IP addresses, and port numbers"),(0,l.kt)("li",{parentName:"ul"},"UDP: demultiplexing using destination port number (only)")),(0,l.kt)("h3",{id:"tcp"},"TCP"),(0,l.kt)("p",null,'Sequence numbers: byte stream "number" of first byte in segment\u2019s data'),(0,l.kt)("p",null,"Acknowledgements: seq # of next byte expected from other side or cumulative ACK"),(0,l.kt)("h4",{id:"establishing-and-closing-connection"},"Establishing and Closing Connection"),(0,l.kt)("p",null,"Problems with 2-way handshake: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"half open connection(no client)"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20230330221212.png",alt:"20230330221212"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"duplicate data accepted"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20230330221421.png",alt:"20230330221421"})))),(0,l.kt)("p",null,"3-way handshake"),(0,l.kt)("p",null,"Client sends a SYN to Server\nServer returns a SYN acknowledgment (SYN ACK)\nClient sends an ACK to acknowledge the SYN ACK"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20230330223312.png",alt:"20230330223312"})),(0,l.kt)("p",null,"4-way handshake"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"client, server each close their side of connection",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"send TCP segment with FIN bit = 1"))),(0,l.kt)("li",{parentName:"ul"},"respond to received FIN with ACK",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"on receiving FIN, ACK can be combined with own FIN"))),(0,l.kt)("li",{parentName:"ul"},"simultaneous FIN exchanges can be handled")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20230330223828.png",alt:"20230330223828"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/zxc2012/image/main/20230330225014.png",alt:"20230330225014"})))}u.isMDXComponent=!0}}]);