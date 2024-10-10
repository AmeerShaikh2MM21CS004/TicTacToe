# TicTacToe Game

A simple browser-based **TicTacToe** game implemented using HTML, CSS, and JavaScript. This game allows two players to take turns marking spaces in a 3x3 grid. The game ends when one player wins by aligning three of their marks vertically, horizontally, or diagonally, or when all spaces are filled and the game is a draw.

## Features

- **Two-player functionality**: Play as Player X or Player O.
- **Real-time winner detection**: Detects a winner based on common winning patterns (rows, columns, and diagonals).
- **Draw detection**: Declares a draw if all spaces are filled without a winner.
- **Reset functionality**: Reset the game board to play again.
- **New Game button**: Easily start a fresh new game.

## Demo

![TicTacToe Screenshot](images/1.png)  
![TicTacToe Screenshot](images/2.png) 
![TicTacToe Screenshot](images/3.png) 
_A screenshot of the game interface._

## How to Play

1. Player X starts the game by clicking on any box in the 3x3 grid.
2. Player O then takes their turn by selecting an empty box.
3. The game alternates between Player X and Player O until:
   - One player wins by getting three of their marks in a row, column, or diagonal.
   - All boxes are filled, resulting in a draw.
4. Once the game is over, click the "New Game" or "Reset Game" button to play again.

## Project Structure

```plaintext
TicTacToe/
│
├── index.html         # Main HTML file for the game
├── style.css          # CSS file for styling the game
├── javascript.js      # JavaScript file containing the game logic
├── assets/            # Folder for any assets (images, screenshots, etc.)
│   └── tictactoe_screenshot.png
└── README.md          # Project documentation
