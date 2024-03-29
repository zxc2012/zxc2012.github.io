# 3 RISCV Single-Cycle Control and Pipelining
## Basics

![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220326211448.png)

![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220331161846.png)


## Instruction Table 

|Inst[31:0] |BrEq| BrLT| PCSel| ImmSel |BrUn| ASel| BSel| ALUSel| MemRW|RegWEn|WBSel|
|- |-| -| -|- |-| -| -| -| -| -| -|
|add| * |* |+4| *| * |Reg| Reg| Add| Read| 1 (Y)| ALU|
|sub| *| *| +4| *| * |Reg| Reg| Sub| Read| 1 |ALU|
|(R-ROp)|*| *| +4| *| *| Reg| Reg |(Op) |Read| 1 |ALU|
|addi| *| *| +4| I| * |Reg| Imm| Add| Read |1 |ALU|
|lw| *| *| +4| I |* |Reg| Imm| Add| Read| 1| Mem|
|sw| *| *| +4 |S |* |Reg |Imm |Add |Write| 0 (N) |*|
|beq| 0| *| +4| B| *| PC| Imm| Add |Read| 0 |*|
|beq |1| * |ALU| B| *| PC |Imm |Add |Read| 0 |*|
|bne| 0 |*| ALU |B |* |PC| Imm |Add |Read| 0 |*|
|bne| 1| *| +4| B |* |PC |Imm| Add| Read| 0 |*|
|blt |* |1 |ALU |B |0| PC| Imm| Add |Read |0| *|
|bltu| * |1 |ALU| B |1 |PC| Imm |Add| Read| 0| *|
|jalr |* |*| ALU| I |*| Reg| Imm| Add |Read| 1| PC+4|
|jal| *| * |ALU |J |* |PC |Imm |Add| Read| 1| PC+4|
|auipc| * |* |+4| U| * |PC |Imm| Add| Read| 1 |ALU|

## Single Cycle

![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220326210350.png)

Critical Path:

$t_{Load}\geq t_{clk-to-q}+t_{IMEMread}+t_{RFRead}+t_{mux}+t_{ALU}+t_{DMEMRead}+t_{mux}+t_{RFsetup}$

$t_{Arithmetic I-Type}\geq t_{clk-to-q}+t_{IMEMread}+max(t_{RFRead},t_{imm})+t_{mux}+t_{ALU}+t_{mux}+t_{RFsetup}$

$t_{S-Type}\geq t_{clk-to-q}+t_{IMEMread}+t_{RFRead}+t_{mux}+t_{ALU}+t_{DMEMWrite}+t_{RFsetup}$

- R-Type、Arithmetic I-Type、SB-Type: No DMem
- Load I-Type: DMem Read
- S-Type: DMem Write,No second Mux(WB)
- U-Type: No $RF_{Read}$

Note: *comparator is omitted because branch comparison is
done in parallel with RegFile/ALU, which takes much longer time.*

Control Logic

- ImmSel:

    ![20220331174415](https://raw.githubusercontent.com/zxc2012/image/main/20220331174415.png)

    ![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220326220059.png)

- BrUn,BrEq,BrLT:

    ![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220326220429.png)

- ALUSel: 

    ![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220326211210.png)

## Pipelined
### Overview

![20220331211348](https://raw.githubusercontent.com/zxc2012/image/main/20220331211348.png)

IF : $t_{clk-to-q} + t_{IMEMread} + t_{Regsetup}$ 

ID : $t_{clk-to-q}+ t_{RFread} + t_{Regsetup}$

EX : $t_{clk-to-q}+ t_{mux} + t_{ALU} + t_{Regsetup}$ 

MEM : $t_{clk-to-q} + t_{DMEMread} + t_{Regsetup}$ 

WB : $t_{clk-to-q} + t_{mux} + t_{RFsetup}$

$t_{clk}\geq max(IF, ID, EX,MEM,WB)$

Forwarding Path

Compare destination of older instructions in pipeline with sources of new instruction in decode stage

![20220331211348](https://raw.githubusercontent.com/zxc2012/image/main/20220617104410.png)

### Hazard

#### Structural Hazard

1. Problem
    
    Two or more instructions in the pipeline compete for access to a single **physical resource**

2. Solution
    
    (1)Instructions take turns using resource, some instructions have to stall (wait)

    (2)Add more hardware to machine

3. Example:

    RegFile Hazard

    ![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220401220248.png)

    Solution:

    - **Double Pumping** 

        Prepare to write during 1st half, write on falling edge, read during 2nd half of each clock cycle

    - Build RegFile with independent read and write ports

    Memory

    ![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220402165402.png)

    Solution:

    Instruction and Data Caches
    ![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220402165639.png)

#### Data Hazard

Data dependency between instructions

1. R Type Instructions

    ![20220402173254](https://raw.githubusercontent.com/zxc2012/image/main/20220402173254.png)

    Solution

    (1)Stalling

    Bubble: NOP(add x0 x0 x0)

    ![20220402173254](https://raw.githubusercontent.com/zxc2012/image/main/20220402173525.png)

    (2)Forwarding(Bypass)

    ![20220402173254](https://raw.githubusercontent.com/zxc2012/image/main/20220402173656.png)

2. Load

    Forwarding Problem
    ![20220402174121](https://raw.githubusercontent.com/zxc2012/image/main/20220402174121.png)

    Solution

    (1)Hardware Stall

    ![20220402174121](https://raw.githubusercontent.com/zxc2012/image/main/20220402211411.png)

    (2)Stall

    ![20220402211539](https://raw.githubusercontent.com/zxc2012/image/main/20220402211539.png)

    (3)Code Scheduling

    ![20220402211539](https://raw.githubusercontent.com/zxc2012/image/main/20220402211912.png)

#### Control Hazard