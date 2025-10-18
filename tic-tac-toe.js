window.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    squares.forEach(function(square) {
        square.classList.add('square');
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X'; // Start with X

    squares.forEach(function(square) {
        square.classList.add('square');

        square.addEventListener('click', function() {
            // Only allow move if square is empty
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Switch player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});
