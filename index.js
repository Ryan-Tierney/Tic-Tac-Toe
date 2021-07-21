let board = ['', '', '', '', '', '', '', '', ''];

const board_container = document.quearySelector(".board");

const render_board = () => {
    board_container.innerHTML = "";
    board.forEach((e, i) => {
        board_conatiner.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${board[i]}</div>`;
        if (e == player || e == computer) {
            document.querySelector(`#block_${i}`).classList.add("occupied");
        }
    });
};

render_board();

const player = "O";
const computer = "X";

const addPlayerMove = e => {
    if (board[e] == "") {
        board[e] = player;
        render_board();
        addComputerMove();
    }
}

const addComputerMove = () => {
    do {
        selected = Math.floor(Math.random() * 9);
    } while (board[selected] != "");
    board[selected] = computer;
    render_board();
}