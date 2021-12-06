let boardstate = [["", "", ""],
["", "", ""],
["", "", ""]];

let currentPlayer = "X";
let winner = "none";
let activePlayer = document.querySelector("#activePlayer");

function getIndex(id) {
    let indx = parseInt(id);
    indx--;
    let row = Math.floor(indx / 3);
    let col = indx % 3;
    return [row, col];

}

function checkstatus() {
    //row
    for (let i = 0; i < boardstate.length; i++) {
        let cnt = 1;
        for (let j = 1; j < boardstate[i].length; j++) {
            if (boardstate[i][j] != "" && boardstate[i][j - 1] != "" && boardstate[i][j] == boardstate[i][j - 1]) {
                cnt++;
            }
        }
        if (cnt == 3) {
            return true;
        }

    }
    //column
    for (let i = 0; i < boardstate.length; i++) {
        let cnt = 1;
        for (let j = 1; j < boardstate[i].length; j++) {
            if (boardstate[j][i] != "" && boardstate[j - 1][i] != "" && boardstate[j][i] == boardstate[j - 1][i]) {
                cnt++;
            }
        }
        if (cnt == 3) {
            return true;
        }

    }
    //downdiagonal
    let i = 1, j = 1, cnt = 1;
    while (i != boardstate.length) {
        if (boardstate[j][i] != "" && boardstate[i - 1][j - 1] != "" && boardstate[i][j] == boardstate[i - 1][j - 1]) {
            cnt++;
        }
        i++, j++;
    }
    if (cnt == 3) {
        return true;
    }

    // Updiagonal
    cnt = 1;
    i = 1, j = 1;
    while (i >= 0) {
        if (boardstate[j][i] != "" && boardstate[i + 1][j - 1] != "" && boardstate[i][j] == boardstate[i + 1][j - 1]) {
            cnt++;
        }
        i--, j++;
    }
    if (cnt == 3) {
        return true;
    }

    return false;


}


function finalmessage() {
    winner = currentPlayer;
    alert(`${winner} won`);
}
function play(event) {
    if (winner != "none") {
        alert("Start new game");
        return;
    }
    let indx = getIndex(event.id);
    let r = indx[0], c = indx[1];
    if (boardstate[r][c] != "") {
        return;
    }
    boardstate[r][c] = currentPlayer;
    let chk = checkstatus();

    event.innerText = currentPlayer;
    if (chk) {
        finalmessage();
        return;
    }

    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    activePlayer.innerText = currentPlayer;
    console.log(boardstate);

}

function clearboard() {
    boardstate = [["", "", ""],
    ["", "", ""],
    ["", "", ""]];

    currentPlayer = "X";
    winner = "none";
    activePlayer.innerText = currentPlayer;
    cell_list = document.querySelectorAll(".cell");
    for (let i = 0; i < cell_list.length; i++) {
        console.log(cell_list);
        cell_list[i].innerText = "";
    }
}