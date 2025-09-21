
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
    
     // var board = document.createElement("table")
    // var $board = $("<table>");
    // const $tbody = $("<tbody>");
     $("#chessboard").append("<table>");


    // var counter = 0
    for(var i = 0; i<= chessBoard.length; i++){
        // var tr = board.insertRow();
        $("#chessboard").append("<tr>");
        // const $tr = $("<tr>");
        if(i<chessBoard.length){
            $("#chessboard").append("<th>" +verticalHeader[n-i]+"</th>");
        }else{
            $("#chessboard").append("<th></th>");
        }
        
        // console.log(board)
        for (var j =0 ; j <verticalHeader.length; j++){
            
            if(i===verticalHeader.length){
                $("#chessboard").append("<th>" +horizontalHeader[j]+"</th>")
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
                $("#chessboard").append("<td>" +chessBoard[i][key]+"</td>")
                // console.log(chessBoard[i][key],"👀")
                // counter++
            }
        }
        $("#chessboard").append("</tr>")
    }
    $("#chessboard").append("</table>")
}
function boardFromJson(){

    $.ajax({
        url: "chessboard.json",
        success: function(result) {createChessBoard(result);}
    });

}



