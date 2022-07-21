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