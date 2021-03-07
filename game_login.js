function addUser(){
    Player1=document.getElementById("Player_1_input").value;
    Player2=document.getElementById("Player_2_input").value;
 
    localStorage.setItem("Player1In",Player1);
    localStorage.setItem("Player2In",Player2);
 
    window.location="game.html";
 }