// window.onload = function welcome(){
// 	alert("hello! Welcome to 'Make your Family Tree'! Let's get started!");
// };


// var yourname, momname, dadname, sistername, brothername;

// yourname=$("#start");



// var yourName = document.getElementById("yourName");
// yourName.innerHTML = "Family Tree"

	


function addName() {
	var you = document.getElementById("you").value;



	//you = document.getElementById("yourName").innerHTML;

	

	var entry = document.createElement("li");
	entry.appendChild(document.createTextNode(you));


	
	var tree = document.getElementById("tree");
	tree.appendChild(entry);
}


