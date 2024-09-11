document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const resetButton = document.getElementById('reset');
    const newGameButton = document.getElementById('new'); // New Game Button

    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    let xWins = 0;
    let oWins = 0;
    let draws = 0;

    const xWinsElem = document.getElementById('x-wins');
    const oWinsElem = document.getElementById('o-wins');
    const drawsElem = document.getElementById('draws');

    const clickSound = new Audio('click.mp3');
    const winSound = new Audio('win.mp3');
    const drawSound = new Audio('draw.mp3');

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;
        clickedCell.classList.add('clicked');
        clickedCell.setAttribute('aria-label', `Cell ${clickedCellIndex} contains ${currentPlayer}`);
        clickSound.play();

        checkForWin();
        checkForDraw();

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (gameActive) {
            status.textContent = `Player ${currentPlayer}'s turn`;
        }
    }

    function checkForWin() {
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                gameActive = false;
                status.textContent = `Player ${gameState[a]} wins!`;
                highlightWinningCells(a, b, c);
                winSound.play();

                if (gameState[a] === 'X') {
                    xWins++;
                    xWinsElem.textContent = xWins;
                } else {
                    oWins++;
                    oWinsElem.textContent = oWins;
                }
                return;
            }
        }
    }

    function checkForDraw() {
        if (!gameState.includes('') && gameActive) {
            gameActive = false;
            status.textContent = "It's a draw!";
            drawSound.play();
            draws++;
            drawsElem.textContent = draws;
        }
    }

    function highlightWinningCells(a, b, c) {
        cells[a].style.backgroundColor = '#90EE90';
        cells[b].style.backgroundColor = '#90EE90';
        cells[c].style.backgroundColor = '#90EE90';
    }

    function resetGame() {
        currentPlayer = 'X';
        gameState = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        status.textContent = `Player ${currentPlayer}'s turn`;
        cells.forEach(cell => {
            cell.textContent = '';
            cell.style.backgroundColor = '';
            cell.classList.remove('clicked');
            cell.setAttribute('aria-label', 'Empty cell'); // Reset aria-labels
        });
    }

    function newGame() {
        resetGame();
        // Reset win counts and draws
        xWins = 0;
        oWins = 0;
        draws = 0;
        xWinsElem.textContent = xWins;
        oWinsElem.textContent = oWins;
        drawsElem.textContent = draws;
    }

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    resetButton.addEventListener('click', resetGame);
    newGameButton.addEventListener('click', newGame);

    // Initialize aria-labels for empty cells
    cells.forEach(cell => {
        cell.setAttribute('aria-label', 'Empty cell');
    });
});
