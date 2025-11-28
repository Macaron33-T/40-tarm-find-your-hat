# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

<!-- Thinking Process -->
<!-- 1. Workflow Planning -->

1. Working flow

- อย่างแรกที่ควรพึงมีคือเริ่มมาหลังจาก npm run dev คือการอ่านค่า Map ที่ได้มาจากข้อ 2.2 ที่ดึงข้อมูลจาก const
- จากนั้นเมื่อสำเร็จจะทำการสุ่มตำแหน่งของผู้เล่นและหมวก โดยห้ามซ้อนทับกับหลุมที่ถูกสุ่มโดยไม่จำกัดพื้นที่ขอเพียงไม่ได้ซ้ำกับตัวแปรอื่น
- แล้วค่อย Gen แผนที่ออกมาในขนาดที่ระบุซึ่งอาจจะทำเป็นแบบ Built-in custom หรือไม่ก็ระบุค่าข้างนอก
- กรณีที่แผนที่ยังไม่ประสบความสำเร็จใช้แบบ Hardcode ไปก่อน
- จากนั้นเริ่มระบุให้การขยับ - + แกน x y นั้นขึ้นอยู่กับปุ่ม WASD โดยขยับได้ทีละช่อง
- ทำการ Set rule ต่อไปนี้เริ่มจากอย่างแรกนั้นคือให้ลิมิตการขยับนั้นอยู่ในขอบเขตที่ระบุลงไป
- แล้วระบุกฏว่าด้วยเรื่องตัวแปรแต่ละค่าเช่น Hole จะทำให้จบเกมทันทีและขึ้น text ว่า 'ว้ายๆตกหลุม' ซึ่งการขยับน่าจะเป็นการให้ตัวที่เราขยับไปนั้นจะแทนค่าด้วย Player และพื้นที่ที่ขยับจะถูกแทนทับด้วย Blank
- และถ้าโดน Hat จะเป็นการจบเกมและขึ้น text ' ชนะเกม ' แล้วระบุกฏว่าด้วยเรื่องตัวแปรแต่ละค่าเช่น Hole จะทำให้จบเกมทันทีและขึ้น text ว่า 'ว้ายๆตกหลุม'
- ซึ่งการขยับน่าจะเป็นการให้ตัวที่เราขยับไปนั้นจะแทนค่าด้วย Player และพื้นที่ที่ขยับจะถูกแทนทับด้วย Blank
- และถ้าจบเกมให้เริม่ใหม่เมื่อเริ่มรัน NPM
    <!-- 2.1. Board Functions (Hardcoded) -->

  2.1 Hardcode

- Made Array -> String via Row&Column
- Then print it to 3x3 that have const like (let board)
- Start Player at 0,0 and made hat at 1,2
- โดยเริ่มจากการสร้างตัวแปร Const ใหม่ โดนนำค่าจาก board มาแล้วระบุให้ row นั้นกลายเป็น String ล้วนจากนั้น
- ใช้ .join แทนค่า "" ไปในช่องว่างแต่ละค่าแล้วให้ \n นั้นขึ้นบรรทัดใหม่เรียงตามลำดับที่มี
  <!-- 2.2. Board Functions (Generated) -->
  <!-- 3. Input Functions -->
  <!-- 4. Movement Functions -->
  <!-- 5. Game Rule Functions -->
  <!-- 6. Game Play Loop -->

[Back to Table of Contents](#table-of-contents)

---
