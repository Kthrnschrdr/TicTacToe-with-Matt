$(document).ready(function(){
  
  // Collection of all squares on the board.
  var $squares = $('td');
  
  var timer = 0;
  var turn = "";
  
  var add_mark = function(){
    if(timer % 2 == 0){ // && this.innerHTML == "-"){
      var turn = "X";
      this.innerHTML = turn;
      timer++;
    }else if(timer % 2 == 1){ // && this.innerHTML == "-"
      var turn = "O";
      this.innerHTML = turn;
      timer++;
    }
    win();
  }
  // var i = 0;
  
 function win() {
    if(
      ($squares[0].innerHTML == "X" && $squares[1].innerHTML == "X" && $squares[2].innerHTML == "X") ||
      ($squares[3].innerHTML == "X" && $squares[4].innerHTML == "X" && $squares[5].innerHTML == "X") ||
      ($squares[6].innerHTML == "X" && $squares[7].innerHTML == "X" && $squares[8].innerHTML == "X") ||
      ($squares[0].innerHTML == "X" && $squares[3].innerHTML == "X" && $squares[6].innerHTML == "X") ||
      ($squares[1].innerHTML == "X" && $squares[4].innerHTML == "X" && $squares[7].innerHTML == "X") ||
      ($squares[2].innerHTML == "X" && $squares[5].innerHTML == "X" && $squares[8].innerHTML == "X") ||
      ($squares[0].innerHTML == "X" && $squares[4].innerHTML == "X" && $squares[8].innerHTML == "X") ||
      ($squares[2].innerHTML == "X" && $squares[4].innerHTML == "X" && $squares[6].innerHTML == "X")) {
      console.log("We have a winner!");
      // i = 10;
    } else if(
      ($squares[0].innerHTML == "O" && $squares[1].innerHTML == "O" && $squares[2].innerHTML == "O") ||
      ($squares[3].innerHTML == "O" && $squares[4].innerHTML == "O" && $squares[5].innerHTML == "O") ||
      ($squares[6].innerHTML == "O" && $squares[7].innerHTML == "O" && $squares[8].innerHTML == "O") ||
      ($squares[0].innerHTML == "O" && $squares[3].innerHTML == "O" && $squares[6].innerHTML == "O") ||
      ($squares[1].innerHTML == "O" && $squares[4].innerHTML == "O" && $squares[7].innerHTML == "O") ||
      ($squares[2].innerHTML == "O" && $squares[5].innerHTML == "O" && $squares[8].innerHTML == "O") ||
      ($squares[0].innerHTML == "O" && $squares[4].innerHTML == "O" && $squares[8].innerHTML == "O") ||
      ($squares[2].innerHTML == "O" && $squares[4].innerHTML == "O" && $squares[6].innerHTML == "O")) {
      console.log("We have a winner!");
      // i = 10
    } else {
        if(timer == 9){  
          console.log("Cat's Game");
        }
    }
  }
  
   $squares.each(function(i){
	   $(this).on("click", add_mark);
	  });
  

});
