class TicTacToe {
    currentPlayer = 0
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]

    generateCells(i, j) {
        // 1. create button 
        // 2. assign props to button 
        //3. create div
        //4. assign props to div
        //5. append child button to div and return div

        let btn = document.createElement("button");
        btn.classList.add("submit-btn")
        btn.id = i + "_" + j

        btn.addEventListener("click", (event) => {
            this.fillBoard(this.board, btn.id)
            if (this.currentPlayer == 0) {
                document.getElementById(event.target.id).innerText = 'X'
                this.currentPlayer = 1
            } else {
                document.getElementById(event.target.id).innerText = 'O'
                this.currentPlayer = 0
            }
            const result = this.checkWinner(this.board)
            console.log(result)
            if (result != "incomplete") {
                alert("Player " + result + " WON")
                this.board = [
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""]
                ]
                const elem = document.getElementById("root")
                elem.innerHTML = ''
                this.generateBoard(document.getElementById("root"))
            }

        })

        let div = document.createElement("div");
        div.classList.add("flex-item")

        div.appendChild(btn)
        return div
    }

    generateBoard(ele) {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.length; j++) {
                const cell = this.generateCells(i, j)
                ele.appendChild(cell)
            }
        }
    }


    debug() {
        console.table(this.board)
    }


    checkWinner(board) {
        let emptySpaces = 0
        let i = 0
        let j = 0
        if (i == 0) {
            if (board[i][j] == board[i + 1][j] && board[i + 2][j] == board[i][j] && board[i][j] != "") {
                //win game
                return board[i][j]
            } else if (board[i][j] == board[i][j + 1] && board[i][j + 2] == board[i][j] && board[i][j] != "") {
                //win game
                return board[i][j]
            } else if (board[i][j] == board[i + 1][j + 1] && board[i][j] == board[i + 2][j + 2] && board[i][j] != "") {
                return board[i][j]
            } else {
                i++;
                j++;
            }
        }
        if (i == 1) {
            if (board[i][j] == board[i + 1][j] && board[i - 1][j] == board[i][j] && board[i][j] != "") {
                //win game
                return board[i][j]
            } else if (board[i][j] == board[i][j + 1] && board[i][j - 1] == board[i][j] && board[i][j] != "") {
                //win game
                return board[i][j]
            } else {
                i++;
                j++;
            }
        }
        if (i == 2) {
            if (board[i][j] == board[i - 1][j] && board[i - 2][j] == board[i][j] && board[i][j] != "") {
                //win game
                return board[i][j]
            } else if (board[i][j] == board[i][j - 1] && board[i][j - 2] == board[i][j] && board[i][j] != "") {
                //win game
                return board[i][j]
            } else {
                i++;
                j++;
            }
        }
        for (let k = 0; k < board.length; k++) {
            for (let m = 0; m < board[k].length; m++) {
                if (board[k][m] == "") {
                    emptySpaces++;
                }
            }
        }
        if (emptySpaces <= 0) {
            return "DRAW"
        } else {
            return "incomplete"
        }

    }

    fillBoard(board, id) {
        const itemId = id
        let arr = itemId.split('_')
        let p = arr[0]
        let q = arr[1]
        if (this.currentPlayer == 0) {
            this.board[p][q] = 'X'
        } else {
            this.board[p][q] = 'O'
        }
        return board
    }


} 