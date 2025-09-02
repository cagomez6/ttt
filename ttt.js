const Gameboard = (function () {
    const gameboard = new Array(9);
    const winCons = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const getBoard = () => gameboard;


    const setSquare = (index, symbol) => {
        gameboard[index] = symbol;
        return gameboard;
    };

    const isSquareEmpty = (index) => {
        return gameboard[index] === undefined
    };

    const resetBoard = () => {
        gameboard.fill(undefined);
        return gameboard;
    };

    const checkWinner = () => {
        for (const combination of winCons) {
            const [a,b,c] = combination;

            if(gameboard[a] && gameboard[a] == gameboard[b] && gameboard[a]==gameboard[c]) {
                return gameboard[a];
            }
        }

        return null;
    };

    const isFull = () => {
        for (const square of gameboard) {
            if (square === undefined) {
                return false;
            }
        }

        return true;
    };

    return {getBoard, setSquare, isSquareEmpty, resetBoard, checkWinner, isFull};
})();

function Player (name, symbol) {
    const playerName = name;
    const playerSymbol = symbol;
    const getName = () => playerName;
    const getSymbol = () => playerSymbol;

    return {getName, getSymbol};
};

const GameController = (function() {
    let currentPlayer;
    let player1;
    let player2;

    const startGame = (player1Name, player2Name) => {
        Gameboard.resetBoard();
        player1 = Player(player1Name, "X");
        player2 = Player(player2Name, "O");
        currentPlayer = player1;
        console.log("New Game Started")
        console.log(`${currentPlayer.getName()}'s turn`);
    };

})();

