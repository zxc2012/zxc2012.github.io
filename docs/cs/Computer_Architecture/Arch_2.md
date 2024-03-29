# 2 RISCV Assembly
## RISC-V Architecture

- Register Size: 1 word = 32 bits = 4 bytes
- 32 registers:

    x0(holds the value zero)-x31

    ![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220317214717.png)

- Byte Ordering 

    Little Endian(x86, ARM)

    Eg: 0x01234567

    ![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220316203925.png)

- Sign Extend: Take the most-significant bit and copy it to the new bits

## RISC-V Instructions
### Assembly Syntax

![20220310173933](https://raw.githubusercontent.com/zxc2012/image/main/20220316201927.png)

no-op: an instruction that does nothing

```armasm
add x0,x0,x0  # Writes to x0 are always ignored
```

Shifting Instructions

- When using immediate, only values 0-31 are practical
- When using variable, only lowest 5 bits are used (read as unsigned)

Data Transfer Instructions

- sw/lw

    ```verilog 
    Store word: M[R[rs1]+imm](31:0) = R[rs2](31:0)//rs1:transfer的结果
    Load word: R[rd] = M[R[rs1]+imm](31:0)
    ```
- sb/lb
    
    on sb, upper 24 bits are ignored

    On lb, upper 24 bits are filled by sign-extension

    ```verilog
    Store Byte: M[R[rs1]+imm](7:0) = R[rs2](7:0)
    Load Byte: R[rd] = {24’bM[](7), M[R[Rs1]+imm](7:0)}
    ```
- others

    On sh, upper 16 bits are ignored

    On lh, upper 16 bits are filled by sign-extension

    On l(b/h)u, upper bits are filled by zero-extension

For e.g.,  s0 = 0x00000180 (all 32 bits)

```armasm
lb s1,1(s0) # s1 = 0x00000001
lb s2,0(s0) # s2 = 0xFFFFFF80
sb s2,2(s0) # *(s0) = 0x00800180
```

*常见错误*
```armasm
add x10,x11,4(x12) # 必须先lw再add
```

branches
- conditional branch
    - branch if equal (beq) or branch if not equal (bne)
    - branch if less than (blt) and branch if greater than or equal (bge)
- unconditional branch
    ```armasm
    j label # pseudo-code 
    jal dst label # Writes PC+4 to dst, set PC=lable
    jalr dst src imm # Writes PC+4 to dst, set PC=src+imm
    jr ra # pseudo-code:ret = jr ra = jalr x0, ra, 0
    ```

### Example 

C Loop Mapped to RISC-V Assembly
```c
int A[20];
int sum = 0;
for (int i=0; i<20; i++)
sum +=  A[i];
```

```armasm
# Assume x8 holds pointer to A
# Assign x10=sum
add x10, x0, x0 # sum=0
add x11, x0, x8 # Copy of A
addi x12,x11, 80 # x12=80 + A
loop:
    lw x13, 0(x11)
    add x10, x10, x13
    addi x11, x11, 4
    blt x11, x12, loop
```

## Calling a function

![20220616161007](https://raw.githubusercontent.com/zxc2012/image/main/20220616161007.png)

Callee Saved(registers are	expected to	be the same	before and after a function call)
- s0-s11 (saved registers)
- sp (stack	pointer)

Caller Saved(These registers can be	freely	changed by the calleE,caller must save those values	before making a procedure call)
- t0-t6 (temporary registers)
- a0-a7 (function arguments)
- ra (return address)
    - because ra will change if	calleE invokes another function

Choosing Your Registers
- Function does NOT call another function
    - just use t0-t6 and there is nothing to save
- Function calls other functions
    - Values you need throughout go	in s0-s11, others go	in t0-t6

```armasm
Prologue:
addi sp,sp, -framesize
sw ra, <framesize-4>(sp) # 次二高,随后逐级递减
#store other callee saved registers
#save other regs if need be
Body:

Epilogue:
#restore other regs if need be
#restore other callee saved registers
lw ra, <framesize-4>(sp)
addi sp,sp, framesize
jr ra
```

E.g.
```c
int sumSquare(int x, int y) {
    return mult(x,x)+ y; 
}
```

```armasm
# Prologue
addi sp,sp,-8 # make space on stack
sw ra, 4(sp) # save ret addr
sw a1, 0(sp) # save y
add a1,a0,x0 # set 2nd mult arg

# Body
jal mult # call mult

# Epilogue
lw a1, 0(sp) # restore y
add a0,a0,a1 # ret val = mult(x,x)+y
lw ra, 4(sp) # get ret addr
addi sp,sp,8 # restore stack
jr ra

mult: 
```

## Instruction Format

<table>
<thead><tr><th>Type</th><th>7</th><th>5</th><th>5</th><th>3</th><th>5</th><th>7</th><th>comments</th></tr></thead><tbody>
 <tr><td>R</td><td>funct7</td><td>rs2</td><td>rs1</td><td>funct3</td><td>rd</td><td>opcode</td><td>add&#44;xor&#44;mul </td></tr>
 <tr><td>I</td><td colSpan="2">imm&#91;11&#58;0&#93;</td><td>rs1</td><td>funct3</td><td>rd</td><td>opcode</td><td>lw&#44; jalr&#44; slli</td></tr>
 <tr><td>S</td><td>imm&#91;11&#58;5&#93;</td><td>rs2</td><td>rs1</td><td>funct3</td><td>imm&#91;4&#58;0&#93;</td><td>opcode</td><td>rs1--transfer的结果</td></tr>
 <tr><td>SB&#40;Branch&#41;</td><td>imm&#91;12&#44;10&#58;5&#93;</td><td>rs2</td><td>rs1</td><td>funct3</td><td>imm&#91;4&#58;1&#44; 11&#93;</td><td>opcode</td><td>imm&#58; lowest bit of offset is always zero</td></tr>
 <tr><td>U</td><td colSpan="4">imm&#91;31&#58;12&#93;</td><td>rd</td><td>opcode</td><td>lui&#44;auipc</td></tr>
 <tr><td>UJ</td><td colSpan="4">imm&#91;20&#44;10&#58;1&#44;11&#44; 19&#58;12&#93;</td><td>rd</td><td>opcode</td><td>jal</td></tr>
</tbody>
</table>

### I format

12-bit immediate must be sign-extended to 32 bits

![20220616165009](https://raw.githubusercontent.com/zxc2012/image/main/20220616165009.png)

### SB format

$-2^{12}$ to $2^{12}-2$ = offset(byte)

### U and UJ format

```armasm
# Load Upper Immediate,clears the lower 12 bits
lui rd, immediate   #rd = (immediate[31:12] << 12)
# Add Upper Immediate to PC
auipc rd, immediate    #rd = pc+(immediate[31:12] << 12)
```

E.g. How to set 0xDEADBEEF?

```armasm
# Wrong answer
lui x10, 0xDEADB # x10 = 0xDEADB000
addi x10, x10,0xEEF # if top bit of the 12-bit immediate is a 1, it will subtract -1 from upper 20 bits,thus x10 = 0xDEADAEEF

# Right
lui x10, 0xDEADC # x10 = 0xDEADC000
addi x10, x10,0xEEF # x10 = 0xDEADBEEF

#  Call function at any 32-bit absolute address
lui x1, <hi 20 bits>
jalr ra, x1, <lo 12 bits>

# Jump PC-relative with 32-bit offset
auipc x1, <hi 20 bits>
jalr x0, x1, <lo 12 bits>
```