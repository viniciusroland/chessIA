var board;
function setup() {
   board = new Board(642, 642);
    createCanvas(board.width, board.height) 
    background(51)

    board.divideBoard()
}

function draw() {
    //createCanvas(board.width, board.height) 
    //background(51)

    //board.divideBoard()

}
