// window.onload = function welcome(){
// 	alert("hello! Welcome to 'Make your Family Tree'! Let's get started!");
// };


// var yourname, momname, dadname, sistername, brothername;

// yourname=$("#start");



// var yourName = document.getElementById("yourName");
// yourName.innerHTML = "Family Tree"

	


function addName() {
	var you = document.getElementById("you").value;
	var mom = document.getElementById("mom").value;
	var dad = document.getElementById("dad").value;
	var sister = document.getElementById("sister").value;
	var brother = document.getElementById("brother").value;
	
	var entry = document.createElement("li");
	entry.appendChild(document.createTextNode(you));
	entry.appendChild(document.createTextNode(mom));
	entry.appendChild(document.createTextNode(dad));
	entry.appendChild(document.createTextNode(sister));
	entry.appendChild(document.createTextNode(brother));


	
	var tree = document.getElementById("tree");
	tree.appendChild(entry);
}


