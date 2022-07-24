let btn = document.getElementById("look");

function quiz(){
    let answer;
    while (answer != 1993){
        answer = prompt("What year was Magic first introduced at the Origins game fair?");
        if (answer > 1993){
            alert("That's a bit to high.\nTry again.");
        }
        else if (answer < 1993){
            alert("That's a bit to low.\nTry again.");
        }
        else if (answer == 1993){
            alert("CONGRATULATIONS\n\n That's Correct!!!");
        }
    }
}


btn.addEventListener("click", quiz);