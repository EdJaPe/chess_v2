function resetGame(){
    window.location.reload();
}
function movePiece() {
    let chess_piece = document.getElementById("chess_location_start").value;
    let destination = document.getElementById("chess_location_end").value;
    document.getElementById("chess_location_start").value = "";
    document.getElementById("chess_location_end").value = "";
    document.getElementById(destination).innerHTML= document.getElementById(chess_piece).innerHTML; 
    document.getElementById(chess_piece).innerHTML = "&nbsp";     
}
function createChessBoard(jsonData){

    //create Chess Headers
    var chessBoard = jsonData.chessboard;
    const n = chessBoard.length-1;
    var horizontalHeader = [];
    var verticalHeader = [];
    var vh = 1;
    var asciiStart = 97;
    chessBoard.forEach(element => {
        horizontalHeader.push("&#"+ asciiStart.toString()+";")
        verticalHeader.push(vh)
        vh++
        asciiStart++
    });
     //creating board
    var board = document.createElement("table")
    var counter = 0
    for(var i = 0; i<= chessBoard.length; i++){
        var tr = board.insertRow();
        var th = document.createElement("th");
        (i<chessBoard.length) ? th.innerHTML = verticalHeader[n-i]: th.innerHTML = "" ;
        tr.appendChild(th);
        // console.log(board)
        for (var j =0 ; j <verticalHeader.length; j++){
            
            if(i===verticalHeader.length){
                th = document.createElement("th");
                tr.appendChild(th);
                th.innerHTML= horizontalHeader[j];
                console.log(counter,"❤️")
                counter++
            }
            else {
                var td = tr.insertCell();
                const file = String.fromCharCode(97+j)
                const rank = chessBoard.length - i;
                const key = file +rank;
                td.setAttribute("id",key)
                td.innerHTML = chessBoard[i][key];
                console.log(chessBoard[i][key],"👀")
                counter++
            }
        }
    }
    console.log(board)
    var divShowBoard = document.getElementById("chessboard");
    divShowBoard.innerHTML= "";
    divShowBoard.appendChild(board)
}
function boardFromJson(){
    xhttpObj = new XMLHttpRequest();
    xhttpObj.onload = function() { createChessBoard(JSON.parse(this.responseText)) };
    xhttpObj.open("GET", "chessboard.json");
    xhttpObj.send();
}

// function createTable(jsonData) {
//         // Extract table headings
//         var myBooks = jsonData.books;
//         var headings = [];
//         for (var key in myBooks[0]) {
//                 headings.push(key);
//         }
//         // Create table.
//         var table = document.createElement("table");

//         // Create table header row using the extracted headers above.
//         var tr = table.insertRow();
//         for (var i = 0; i < headings.length; i++) {
//                 var th = document.createElement("th");
//                 th.innerHTML = headings[i];
//                 tr.appendChild(th);
//         }
//         // add json data to the table as rows.
//         for (var i = 0; i < myBooks.length; i++) {
//                 tr = table.insertRow();
//                 for (var j = 0; j < headings.length; j++) {
//                         var td = tr.insertCell();
//                         td.innerHTML = myBooks[i][headings[j]];
//                 }
//         }
//         // Insert the table into the page.
//         var divShowData = document.getElementById('booksTable');
//         divShowData.innerHTML = "";
//         divShowData.appendChild(table);
// }
// function tableFromJson() {
//         xhttpObj = new XMLHttpRequest();
//         xhttpObj.onload = function() { createTable(JSON.parse(this.responseText)) };
//         xhttpObj.open("GET", "books.json");
//         xhttpObj.send();
// }
