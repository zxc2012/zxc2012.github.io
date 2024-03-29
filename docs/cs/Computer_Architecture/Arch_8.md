# 8 Cache Coherence & Memory Consistency
## Cache Coherence
### Snoopy Cache

Have cache	watch (or snoop	upon) other	memory transactions,and	then “do the right thing”

![20220614205903](https://raw.githubusercontent.com/zxc2012/image/main/20220614205903.png)

Cache Coherence	Protocols
- write miss: the address is invalidated in all other
caches before the write is performed
- read miss: if a dirty copy is found in some cache, a writeback is performed by that cache before the memory is read 

#### MSI

||Valid Bit| Dirty Bit| Shared Bit|
|-|-|-|-|
|Modified| 1 |1| 0|
|Shared |1 |0 |X |
|Invalid| 0 |X |X |

- Modified: up-to-date, changed (dirty), OK to write
    - no other cache has a copy
- Shared: up-to-date data, not allowed to write
    - **other caches may have a copy**
- Invalid: This	block is either	not	present	in the current cache or	has	been invalidated by	a bus request,and must be fetched from memory if the block is to be stored in	this cache

Current Processor

![](https://raw.githubusercontent.com/zxc2012/image/main/20220510101653.png)

Response to Other Processors

![](https://raw.githubusercontent.com/zxc2012/image/main/20220510102030.png)

Problem: Writing to Shared is Expensive

- If block is in shared, need to check if other caches have data (so we can invalidate) if we want to write
- If block is in modified, don’t need to check other caches if we want to write.

#### MESI

||Valid Bit| Dirty Bit| Shared Bit|
|-|-|-|-|
|Modified| 1 |1| 0|
|Exclusive| 1| 0 |0|
|Shared |1 |0 |1 |
|Invalid| 0 |X |X |

- Exclusive: up-to-date data, OK to write (change to modified)
    - no other cache has a copy
    - supplies data on read instead of going to memory
- Shared: up-to-date data, not allowed to write
    - other caches have a up-to-date copy

On Write Miss: 
- Other Copies in I: Value read from **memory** to local cache
- Other Copies in S or E: Value read from **memory** to local cache + Snooping invalid
- Other Copies in M: Snooping Writes back its copy to memory, set invalid + Value read from **memory** to local cache

Current Processor

![20220510102848](https://raw.githubusercontent.com/zxc2012/image/main/20220510102848.png)

Response to Other Processors

![20220510102848](https://raw.githubusercontent.com/zxc2012/image/main/20220510102939.png)

Problem: Expensive to Share Modified

In MSI and MESI, if we want to share block in modified, Modified data has to write back to memory

#### MOESI

||Valid Bit| Dirty Bit| Shared Bit|
|-|-|-|-|
|Modified| 1 |1| 0|
|Owned |1| 1 |1|
|Exclusive| 1| 0 |0|
|Shared |1 |0 |1 |
|Invalid| 0 |X |X |

- Owner: up-to-date data, read-only (like shared, you can write if you invalidate shared copies first and your state changes to **modified**)
    - Owner supplies data on probe read instead of going to memory
- Shared: up-to-date data, not allowed to write
    - copy in memory ~~is~~ may be up-to-date

Current Processor

![20220510102848](https://raw.githubusercontent.com/zxc2012/image/main/20220510104017.png)

Response to Other Processors

![20220510102848](https://raw.githubusercontent.com/zxc2012/image/main/20220510104121.png)

### Scalable Approach:Directory Cache

Cache controllers do not observe all activity, but interact only with directory

![20220510102848](https://raw.githubusercontent.com/zxc2012/image/main/20220512155437.png)

For each cache line,there are 4	possible states(based on MSI):	
- C-invalid(=Nothing)
- C-shared(=Sh)
- C-modified(=Ex)
- C-transient(=Pending):for example, the site has just issued a	protocol request,but has not received the corresponding protocol reply).

For	each memory	line,there are	4 possible directory states:
- R(dir):The memory	line is	read-only by the sites specified in dir(dir is	a set of sites).If	dir	is	empty,the	memory line is not cached	by	any	site.
- W(id):The	memory line is	exclusively	cached	at	site id,and	has	been modified at that site.
- TR(dir)
- TW(id)

Directory: one bit for each  processor that is sharing or for the  single processor that has the modified  line

![20220512155625](https://raw.githubusercontent.com/zxc2012/image/main/20220512155625.png)

Read miss,to uncached or shared	line

![20220512155625](https://raw.githubusercontent.com/zxc2012/image/main/20220512160731.png)

Write miss,to read shared line

![20220512155625](https://raw.githubusercontent.com/zxc2012/image/main/20220512160920.png)

### False Sharing vs. Real Sharing

False Sharing: Block ping-pongs between two caches even though processors are accessing disjoint variables

![20220510102848](https://raw.githubusercontent.com/zxc2012/image/main/20220510105104.png)

Real Sharing

![20220510102848](https://raw.githubusercontent.com/zxc2012/image/main/20220510105252.png)

Assume x1 and x2 in	same cache line. P1	and	P2 both read x1 and x2 previously.

- Time1, X1 was read by P1 and needs to be invalidated from P2
- Time2, X2 was read by P2 and needs to be invalidated from P2
- Time3, X1 was invalidated by the write of X2 in P1, but that value of X1 is not used in P1
- Time4, Block is Shared->hit
- Time5, the block containing X2 is marked shared, but P2 did not read X2. 

![20220615154436](https://raw.githubusercontent.com/zxc2012/image/main/20220615154436.png)

## Memory Consistency
### Sequential Consistency

Sequential	Consistency: A system is sequentially consistent if	the	result	of	any	execution is the same as if	the	operations of all the processors were executed in	some sequential	order

- Only a few commercial ISAs require SC(Neither RISCV nor X86)
- Weaker memory	models -> fewer	guarantees

Producer-Consumer: Consumer lw xdata has to be done after lw xflag

![20220512155625](https://raw.githubusercontent.com/zxc2012/image/main/20220512202509.png)

Solutions

1. Total store ordering (TSO)

    Processor P can read B before its write to A is seen by all processors

    ![20220512155625](https://raw.githubusercontent.com/zxc2012/image/main/20220512202931.png)

    Possible Outcomes(Blue could be done before red)

    |P1.x2| P2.x2|SC|TSO|
    |--|--|--|--|
    |0 |0 |N| Y|
    |0 |1| Y| Y|
    |1 |0 |Y |Y|
    |1 |1| Y| Y|

2. Fences

    ![20220512155625](https://raw.githubusercontent.com/zxc2012/image/main/20220512203822.png)