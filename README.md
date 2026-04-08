# 🎮 Connect4: Interactive Web Board Game
> **A lightweight, interactive web implementation of the classic Connect Four game built entirely with Vanilla JavaScript.**
> โปรเจกต์เกมกระดาน Connect Four แบบ 2 ผู้เล่น พัฒนาด้วยเทคโนโลยีเว็บพื้นฐาน เน้นการจัดการ Game State และ Logic การตรวจสอบเงื่อนไขการชนะ

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript">
</p>

---


## 📋 Project Overview
Connect Four is a strategic two-player connection board game. The objective is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. This project demonstrates foundational web development skills, including DOM manipulation, event handling, and algorithmic matrix-checking.

---

## ✨ Key Features

🧠 **Core Game Logic & State Management**
- **Gravity Simulation:** Discs automatically "fall" to the lowest available empty slot in the selected column.
- **Smart Win Detection:** Real-time algorithmic checking for horizontal, vertical, and diagonal win conditions after every move.
- **Draw Detection:** Automatically identifies when the 6x7 grid is fully occupied with no victor.
- **Move Tracking:** Keeps a precise count of total moves executed by each player.

🎨 **Modern UI/UX Design**
- **Dynamic Player Indicators:** Clear visual cues indicating active turns (Player 1: Green / Player 2: Red).
- **Responsive Layout:** Flexbox-driven design ensuring the game board scales gracefully.
- **Input Validation:** Prevents invalid moves (e.g., clicking on a completely filled column) with user-friendly alert feedback.

🔄 **Session Control**
- **Instant Reset:** A dedicated reset mechanism to clear the matrix and restart the game state immediately.

---

## 🛠️ Technical Architecture

### Tech Stack
- **Structure:** Semantic HTML5
- **Styling:** CSS3 (Flexbox, Google Fonts 'Poppins', Custom UI components)
- **Logic:** Vanilla JavaScript (ES5/ES6)

### Project Directory
```text
Connect4/Project Connect4
│
├── index.html       # Main UI structure and game board grid
├── styles.css       # Styling, layout, color palette (#4f3ff0 & #d5deff)
└── script.js        # Core game mechanics, matrix arrays, and event listeners
