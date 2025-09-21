
function resetGame(){
    window.location.reload();
}
function movePiece() {
    
    let chess_piece = $("#chess_location_start").val();
    let destination = $("#chess_location_end").val();
    
    $("#chess_location_start, #chess_location_end").val("");
    $("#"+destination).html( $("#"+chess_piece).html() );
    $("#"+chess_piece).html("&nbsp;");
    
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
     const $table = $("<table>");
    const $tbody = $("<tbody>");
    //  $("#chessboard").append("<table>");
    // var counter = 0
    for(var i = 0; i<= chessBoard.length; i++){
        // var tr = board.insertRow();
        const $tr = $("<tr>");
        // const $tr = $("<tr>");
        if(i<chessBoard.length){
            $tr.append($("<th>").html(verticalHeader[n-i]));
        }else{
            $tr.append($("<th>").html(""));
        }
        
        // console.log(board)
        for (var j =0 ; j <verticalHeader.length; j++){
            
            if(i===verticalHeader.length){
                $tr.append($("<th>").html(horizontalHeader[j]));
                // console.log(counter,"❤️")
                // counter++
            }
            else {
                const file = String.fromCharCode(97+j)
                const rank = chessBoard.length - i;
                const key = file +rank;
                // var td = tr.insertCell();
                // td.setAttribute("id",key)
                // td.innerHTML = chessBoard[i][key];
                $tr.append($("<td>", { id:key, html:chessBoard[i][key]}));
                // console.log(chessBoard[i][key],"👀")
                // counter++
            }
        }
        $tbody.append($tr)
    }
    $table.append($tbody);
    $("#chessboard").append($table)
}
    //___________________________________
     //creating board
//     var board = document.createElement("table")
//     var counter = 0
//     for(var i = 0; i<= chessBoard.length; i++){
//         var tr = board.insertRow();
//         var th = document.createElement("th");
//         (i<chessBoard.length) ? th.innerHTML = verticalHeader[n-i]: th.innerHTML = "" ;
//         tr.appendChild(th);
//         // console.log(board)
//         for (var j =0 ; j <verticalHeader.length; j++){
            
//             if(i===verticalHeader.length){
//                 th = document.createElement("th");
//                 tr.appendChild(th);
//                 th.innerHTML= horizontalHeader[j];
//                 console.log(counter,"❤️")
//                 counter++
//             }
//             else {
//                 var td = tr.insertCell();
//                 const file = String.fromCharCode(97+j)
//                 const rank = chessBoard.length - i;
//                 const key = file +rank;
//                 td.setAttribute("id",key)
//                 td.innerHTML = chessBoard[i][key];
//                 console.log(chessBoard[i][key],"👀")
//                 counter++
//             }
//         }
//     }
//     console.log(board)
//     var divShowBoard = document.getElementById("chessboard");
//     divShowBoard.innerHTML= "";
//     divShowBoard.appendChild(board)
// }
function boardFromJson(){

    $.ajax({
        url: "chessboard.json",
        success: function(result) {createChessBoard(result);}
    });

}



