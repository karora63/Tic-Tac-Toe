# Tic-Tac-Toe
This repository contains a modern, web-based **Tic-Tac-Toe** game, built using **HTML**, **CSS**, and **JavaScript**. The game offers an engaging and visually appealing experience, with smooth animations, score tracking, and accessibility features.

## Features

### 1. **User Interface**
- A minimalist design using a light blue color palette with subtle gradients.
- A **3x3 game grid** where players take turns as either Player X or Player O.
- **Winning cells** are highlighted in bright green to clearly indicate a winner.
- **Reset button** with hover and animation effects, allowing players to restart the game easily.
  
### 2. **Gameplay**
- Players alternate turns, placing their respective symbols (X or O) on the grid.
- **Winning combinations** (three in a row, column, or diagonal) trigger a victory message.
- **Draw detection**: If all cells are filled without a winner, the game announces a draw.
  
### 3. **Scoreboard**
- Track the number of wins for both Player X and Player O.
- The game also tracks the number of draws, creating a competitive environment.

### 4. **Accessibility**
- Fully accessible with **ARIA live regions**, announcing player turns and game outcomes.
- Keyboard navigable, allowing users to play without a mouse.
- Clear focus states and **aria-labels** for screen reader users.

### 5. **Sound Effects** (Optional)
- You can add **click** and **win** sounds to enhance the user experience. Just add `click.mp3`, `win.mp3`, and `draw.mp3` to the project folder.

### 6. **Mobile-Friendly**
- The game layout is responsive, making it easily playable on both mobile and desktop devices. The grid and buttons scale down appropriately for smaller screens.

## Technologies Used
- **HTML5**: Provides the structure of the webpage and game layout.
- **CSS3**: Handles styling, grid layout, and animations, ensuring a cohesive and interactive UI.
- **JavaScript**: Implements the core game logic, event handling, and user interactions.

## How to Play
1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. Click on any cell in the game grid to start playing as Player X.
4. Alternate between Player X and Player O, trying to get three marks in a row.
5. The game will display the result (win or draw) and allow you to reset the game for another round.

## Project Structure
- **`index.html`**: Contains the structure of the Tic-Tac-Toe game.
- **`styles.css`**: Provides the design, animations, and responsive layout.
- **`script.js`**: Implements the game logic and interactions.


This **README** provides clear instructions on the game’s features, how to play, and how to run the project. You can customize it further with additional details or installation instructions based on your project needs.
