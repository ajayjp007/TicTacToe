;(function (window) {
    const ticTacToe = new TicTacToe();
    ticTacToe.generateBoard(document.getElementById("root"));
    ticTacToe.debug();
})(window);