window.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X'; // Start with X

    squares.forEach(function(square) {
        // Apply initial styling
        square.classList.add('square');

        // Handle click to place X or O
        square.addEventListener('click', function() {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
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
});
