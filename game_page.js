player1=localStorage.getItem("Player1In");
player2=localStorage.getItem("Player2In");

player1Score=0;
player2Score=0;

document.getElementById("Player1Name").innerHTML=player1+":";
document.getElementById("Player2Name").innerHTML=player2+":";

document.getElementById("Player1Score").innerHTML=player1Score;
document.getElementById("Player2Score").innerHTML=player2Score;

document.getElementById("Player_question").innerHTML="Question Turn-"+player1;
document.getElementById("Player_answer").innerHTML="Answer Turn-"+player2;

function send(){
        
     num1=document.getElementById("num1").value;
     num2=document.getElementById("num2").value;
     actual_answer=parseInt(num1)*parseInt(num2);
     console.log (num1);
     console.log (num2);

        question_number="<h4> Q. "+num1+" X "+num2+"</h4>";
    input_box="<br>Ans:<input type='number' id='inputCheckBox'> ";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row= question_number + input_box + check_button ;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}

Question_turn="player1";
Answer_turn="player2";

function check(){
    get_answer=document.getElementById("inputCheckBox").value;
    console.log (get_answer);

     if(get_answer==actual_answer){
            if(Answer_turn=="player2"){
                player2Score=player2Score+1;
                document.getElementById("Player2Score").innerHTML=player2Score;
            }
            else{
                player1Score=player1Score+1;
                document.getElementById("Player1Score").innerHTML=player1Score;
            }
        }
        if(Question_turn=="player1"){
            Question_turn="player2";
            document.getElementById("Player_question").innerHTML="Question Turn- "+player2;
        }
        else{
            Question_turn="player1";
            document.getElementById("Player_question").innerHTML="Question Turn- "+player1;
        }
    
        if(Answer_turn=="player1"){
            Answer_turn="player2";
            document.getElementById("Player_answer").innerHTML="Answer Turn- "+player2;
        }
        else{
            Answer_turn="player1";
            document.getElementById("Player_answer").innerHTML="Answer Turn- "+player1;
        }
        document.getElementById("output").innerHTML="";
     }