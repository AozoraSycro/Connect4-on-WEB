// DOM Variables

var buttons = document.getElementsByClassName("btn");
var reset = document.getElementById("reset-btn");
var playerType = document.getElementById("player-type");

// Game Flow Variables

var playerNumber = 1; // Initially player - 1 starts their turn
var filledGrid = []; // Player board
var filledCells = 0; // Number of filled cells
var player1Moves = 0; // Track Player 1's moves
var player2Moves = 0; // Track Player 2's moves

// Initialize the grid
for (var i = 0; i < 6; i++) {
    var arr = [-1, -1, -1, -1, -1, -1, -1]; // Board initialized with -1
    filledGrid.push(arr);
}

// Event Listener for Reset Button
reset.addEventListener("click", function () {
    resetBoard();
});

// Event Listener for Game Buttons
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonNo = this.classList[1];
        makeMove(this, buttonNo.slice(4));
    });
}

// Function to Make a Move
function makeMove(button, buttonNo) {
    var col = buttonNo % 7 === 0 ? 6 : (buttonNo % 7) - 1; // Column number
    var row = findLowestEmptyRow(col); // Find the lowest empty row in column

    if (row === -1) {
        alert("Column is full! Choose another column.");
        return;
    }

    var buttonIndex = row * 7 + (col + 1);
    var targetButton = buttons[buttonIndex - 1];

    if (playerNumber === 1) {
        targetButton.classList.add("btn-player-1");
        filledGrid[row][col] = 1;
        filledCells++;
        player1Moves++; // Increment Player 1's move count

        if (playerWon(row, col, 1)) {
            setTimeout(function () {
                alert("Game Over: Green Wins in " + player1Moves + " moves!");
                resetBoard();
            }, 200);
            return;
        }

        playerNumber = 2;
        playerType.textContent = "Player - 2 : RED";

    } else {
        targetButton.classList.add("btn-player-2");
        filledGrid[row][col] = 2;
        filledCells++;
        player2Moves++; // Increment Player 2's move count

        if (playerWon(row, col, 2)) {
            setTimeout(function () {
                alert("Game Over: Red Wins in " + player2Moves + " moves!");
                resetBoard();
            }, 200);
            return;
        }

        playerNumber = 1;
        playerType.textContent = "Player - 1 : GREEN";
    }

    if (filledCells === 42) {
        setTimeout(function () {
            alert("Game Draw");
            resetBoard();
        }, 200);
        return;
    }

    setTimeout(function () {
        targetButton.disabled = true;
    }, 10);
}

// Find the lowest empty row in the column
function findLowestEmptyRow(col) {
    for (var row = 5; row >= 0; row--) {
        if (filledGrid[row][col] === -1) {
            return row;
        }
    }
    return -1; // Column is full
}

// Check if a player has won
function playerWon(row, col, player) {
    var count = 0;

    // Check columns
    for (var i = 0; i < 7; i++) {
        if (filledGrid[row][i] === player) {
            count++;
            if (count === 4) return true;
        } else {
            count = 0;
        }
    }

    count = 0;

    // Check rows
    for (var i = 0; i < 6; i++) {
        if (filledGrid[i][col] === player) {
            count++;
            if (count === 4) return true;
        } else {
            count = 0;
        }
    }

    count = 0;

    // Check primary diagonal
    if (row >= col) {
        var i = row - col;
        var j = 0;

        for (; i <= 5; i++, j++) {
            if (filledGrid[i][j] === player) {
                count++;
                if (count === 4) return true;
            } else {
                count = 0;
            }
        }
    } else {
        var i = 0;
        var j = col - row;

        for (; j <= 6; i++, j++) {
            if (filledGrid[i][j] === player) {
                count++;
                if (count === 4) return true;
            } else {
                count = 0;
            }
        }
    }

    count = 0;

    // Check secondary diagonal
    if (row + col <= 5) {
        var i = row + col;
        var j = 0;

        for (; i >= 0 && j <= row + col; i--, j++) {
            if (filledGrid[i][j] === player) {
                count++;
                if (count === 4) return true;
            } else {
                count = 0;
            }
        }
    } else {
        var i = 5;
        var j = row + col - 5;

        for (; j <= 6; j++, i--) {
            if (filledGrid[i][j] === player) {
                count++;
                if (count === 4) return true;
            } else {
                count = 0;
            }
        }
    }

    return false;
}

// Function to reset the board
function resetBoard() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].classList.remove("btn-player-1");
        buttons[i].classList.remove("btn-player-2");
    }

    playerNumber = 1;
    playerType.textContent = "Player - 1 : GREEN";
    filledCells = 0;
    player1Moves = 0; // Reset Player 1's moves
    player2Moves = 0; // Reset Player 2's moves

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            filledGrid[i][j] = -1;
        }
    }
}
