let Uname = prompt("Username:");

if (Uname != null) {
    document.write("Welcome: " + Uname); 
};

let Question = confirm("Have you played Magic: The gathering?\n\nselect OK for yes and CANCEL for no");

if(Question == true) {
    document.write(" We should play sometime.");
    let color = prompt("What color do you play?");
    color;
    document.write("Welcome fellow " + color + " player.");
}

else {
    document.write(" You must be new. Hope this site helps :) ");
    let color = prompt("Which is your favorite color?\nRed, Green, Blue, White, or Black");
    color;
    document.write("You Might be a " + color + " player.")
};

function confidence(){
    let userAnswer = prompt("On a scale of 1-10 how confident are you at playing magic the gathering?\n\n1 being never played 10 being a pro");
    for (let i = 1; i <= userAnswer; i++) {
     document.write("<img src='star.jpg' id='beeble'/>");
    }
};
