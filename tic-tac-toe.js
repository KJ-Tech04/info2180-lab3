function checkWinner(player, squares) {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];

    return winPatterns.some(pattern => 
        pattern.every(index => squares[index].textContent === player)
    );
}

window.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    const newGameButton = this.document.querySelector('.btn');
    let currentPlayer = 'X'; // Start with X

    squares.forEach(function(square) {
        // Apply initial styling
        square.classList.add('square');

        // Handle click to place X or O
        square.addEventListener('click', function() {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                if (checkWinner(currentPlayer, squares)) {
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        // Handle mouse hover
        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });
    // Reset game on New Game button click
    newGameButton.addEventListener('click', function() {
        squares.forEach(function(square){
            square.textContent = '';
            square.classList.remove('X', 'O');
        });

        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
        currentPlayer = 'x';
    });
});
