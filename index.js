// Write your code here!

const testVar = "hi"

/* Enter the code to remove the node element here */
document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";


let header = document.getElementById("div#header");
header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
