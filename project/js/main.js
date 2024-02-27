const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
var date = new Date();
document.querySelector("#time").innerHTML = date;

var nama = prompt("What's your name?");
document.querySelector("#Hai").innerHTML = "Hai "+nama+" <br> How's your day?";
