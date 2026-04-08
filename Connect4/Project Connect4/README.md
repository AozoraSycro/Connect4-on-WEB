# Connect4 - Basic Game

A simple yet interactive Connect Four game built with vanilla HTML, CSS, and JavaScript. Play against a friend in this classic two-player board game!

## Game Description

Connect Four is a two-player board game where the objective is to be the first to connect four of your own pieces in a horizontal, vertical, or diagonal row. The game features:

- **Two Players**: Player 1 (Green) and Player 2 (Red)
- **6x7 Board**: Traditional Connect Four grid layout
- **Move Tracking**: Keeps track of the number of moves each player makes
- **Multiple Win Conditions**: Horizontal, vertical, and diagonal victories
- **Draw Detection**: Game ends in a draw if the board is completely filled
- **Reset Function**: Start a new game anytime

## Features

✨ **Interactive Gameplay**
- Click on any column to drop your piece
- Pieces automatically fall to the lowest available position
- Prevents moves on full columns with an alert message

🎮 **Player Indicators**
- Clear display of whose turn it is
- Color-coded players (Green and Red)

🏆 **Win Detection**
- Automatic detection of winning positions
- Shows the number of moves taken when a player wins
- Draw game detection when board is full

🔄 **Game Reset**
- Reset button to start a new game at any time

## How to Play

1. **Open** `index.html` in your web browser
2. **Player 1 (Green)** goes first
3. **Click** on any column to drop your piece
4. **Alternate** turns with Player 2 (Red)
5. **Win** by getting four pieces in a row (horizontally, vertically, or diagonally)
6. **Reset** the board to play again

## Game Rules

- Players take turns dropping pieces into columns
- Pieces fall to the lowest available row in the selected column
- A player cannot place a piece in a full column
- The first player to align four pieces wins
- If the board fills completely with no winner, the game is a draw

## Project Structure

```
Project Connect4/
├── index.html      # Main HTML file with game board
├── styles.css      # Styling and layout
├── script.js       # Game logic and functionality
└── README.md       # Project documentation
```

## Technical Details

### HTML (`index.html`)
- Semantic HTML5 structure
- 6x7 grid of buttons representing game cells
- Player indicator display
- Reset button

### CSS (`styles.css`)
- Responsive design with Flexbox
- Google Fonts (Poppins) for typography
- Color scheme: Purple (#4f3ff0) and Light Blue (#d5deff)
- Clean, modern UI with rounded corners and shadows
- Cell dimensions: 75x75 pixels

### JavaScript (`script.js`)
- Game state management
- Event listeners for button clicks
- Win condition checking (horizontal, vertical, diagonals)
- Move validation and board updates
- Game reset functionality

## Technologies Used

- **HTML5** - Page structure and semantic markup
- **CSS3** - Styling, layout, and responsive design
- **JavaScript (Vanilla)** - Game logic and interactivity
- **Google Fonts** - Poppins font family

## Browser Compatibility

Works on all modern browsers that support:
- ES5+ JavaScript
- CSS Flexbox
- HTML5 DOM manipulation

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/Connect4_basic-game.git
   ```

2. Navigate to the project folder:
   ```bash
   cd Connect4_basic-game
   ```

3. Open `index.html` in your web browser

No additional dependencies or installation required!

## Future Enhancements

Potential improvements for the game:
- 🤖 AI opponent for single-player mode
- 🎵 Sound effects and background music
- 🏅 Score tracking and leaderboard
- ⏱️ Timer for moves
- 🎨 Theme customization (Dark mode, color schemes)
- 💾 Game history and replay feature
- 📱 Mobile optimization
- 🌐 Multiplayer over network

## Author

Created as a basic Connect Four game project

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests with improvements!

---

**Enjoy playing Connect Four!** 🎮
