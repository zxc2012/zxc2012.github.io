# 9 Complex Pipelining
## Basics
### Advanced Data Hazard

Out-of-order write hazards due to variable latencies of different functional units(FDIV,FMUL takes more than one cycle)

![20220513105012](https://raw.githubusercontent.com/zxc2012/image/main/20220513105012.png)

### In-order and Out-of-order

RAW(red) WAR(purple) WAW(green)

![20220513105012](https://raw.githubusercontent.com/zxc2012/image/main/20220513112822.png)

regrardless of WAR, look for what can be fetched next(dependency), if empty finish execute waiting instruction

![20220513105012](https://raw.githubusercontent.com/zxc2012/image/main/20220513120540.png)

### Table for Correct Issue

![20220519214047](https://raw.githubusercontent.com/zxc2012/image/main/20220519214047.png)

## In-order

Assuming: Suppose the instruction is not issued	by the Issue stage if a RAW	hazard exists or the required FU is busy,and that operands are registered by functional unit on issue

- NO WAR: Earlier instructions read	their operands at issue
    - no need to keep src1 and src2
- still WAW	hazard: e.g. Out-of-order completion
    - WP[reg#],a bit-vector to record the registers for which writes are pending(cleared after WB stage)
    - Busy[FU#],a bit-vector to	indicate FU’s availability(FU=	Int,Add,Mult,Div)

Lookup:

- FU available?	*Busy[FU#]*
- RAW? *WP[src1] or WP[src2]*
- WAW? *WP[dest]*		

Example

Diagnol means pipeline

![20220519214902](https://raw.githubusercontent.com/zxc2012/image/main/20220519214902.png)

In-oder issue limitations

![20220519215254](https://raw.githubusercontent.com/zxc2012/image/main/20220519215254.png)

## Out-of-order

Decode adds	next instruction to	buffer	if	there is space and the instruction does not	cause a	WAR	or WAW hazard.	

Note: WAR possible again because issue is out-of-order(WAR not possible with in-order issue and registering of input operands at functional unit)	

Example

Number of Registers limit the number of instructions in	the	pipeline.

![20220520101336](https://raw.githubusercontent.com/zxc2012/image/main/20220520101336.png)

Solution: Renaming 5 f4->f4'(no WAW hazard)

![20220520103228](https://raw.githubusercontent.com/zxc2012/image/main/20220520103228.png)

### Renaming Table

Decode does register renaming and adds instructions to the	 issue-stage instruction reorder buffer(ROB)

tag deallocated-> broadcast and some src p1(present) set to 1

![20220520111838](https://raw.githubusercontent.com/zxc2012/image/main/20220520111838.png)

### Reorder Buffer

ROB	managed	circularly
- exec bit is set when instruction begins execution
- When an instruction completes, its use bit is marked free(ptr2 incremented and tag deallocated)

    *deallocated also known as commited*

Instruction is candidate for execution when
- use bit is set
- p1 and p2 are set 
- has not started execution(exec 0)

![20220520112029](https://raw.githubusercontent.com/zxc2012/image/main/20220520112029.png)

![images](https://raw.githubusercontent.com/zxc2012/image/main/images.gif)

In-Order Commit	for	Precise	Exceptions

![20220522152822](https://raw.githubusercontent.com/zxc2012/image/main/20220522152822.png)

### Physical Register Management

Decoding and Despatching all the instructions into ROB first, then go back and execute
- Free List: Physical Register currently available
- Rd: Architecture Register
- LPRd: Last Physical Register

![ROB](https://raw.githubusercontent.com/zxc2012/image/main/ROB.gif)

![Execution](https://raw.githubusercontent.com/zxc2012/image/main/Execution.gif)

### Superscalar Register Renaming 

![20220522161111](https://raw.githubusercontent.com/zxc2012/image/main/20220522161111.png)

## Load-Store Issue

- Store commits	when oldest	instruction	and	
both address and data available:		
    - clear speculative	bit	and	eventually move data to cache
- On store abort:clear valid bit

![20220522161623](https://raw.githubusercontent.com/zxc2012/image/main/20220522161623.png)

Conservative Out-of-order Load	Execution

![20220522161722](https://raw.githubusercontent.com/zxc2012/image/main/20220522161722.png)

## Branch Prediction
### BHT

- Temporal correlation: The way a branch resolves may	be a good predictor of the	way	it	will resolve at	the next execution
- Spatial correlation: Several branches may resolve in a	highly correlated manner(a preferred path of execution)

#### Temporal Correlation

One bit Branch history predictor

last fail -> invert the bit

![20220529165614](https://raw.githubusercontent.com/zxc2012/image/main/20220529165614.png)

Two bits Branch predictor

Change the prediction after two	consecutive	mis-predictions

![20220529165814](https://raw.githubusercontent.com/zxc2012/image/main/20220529165814.png)

Branch History Table

![20220529165939](https://raw.githubusercontent.com/zxc2012/image/main/20220529165939.png)

#### Spatial Correlation

Notion: A History register, records the direction of the last N branches	executed by	the	processor

![20220529170306](https://raw.githubusercontent.com/zxc2012/image/main/20220529170306.png)

### BTB

Limitations of BHT

![20220529170514](https://raw.githubusercontent.com/zxc2012/image/main/20220529170514.png)

Branch Target Buffer

![20220529170628](https://raw.githubusercontent.com/zxc2012/image/main/20220529170628.png)