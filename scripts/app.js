window.onload = function welcome(){
	alert("hello! Welcome to 'Make your Family Tree'! Let's get started!");
};


// var yourname, momname, dadname, sistername, brothername;

// yourname=$("#start");





	


function addName() {
	var you = document.getElementbyId("you").value;



	you = document.getElementbyId("yourName").innerHTML;

	

	var entry = document.createElement("li");
	entry.appendChild(document.createTextNode(you));



	
	var tree = document.getElementbyId("tree");
	tree.appendChild(entry);
}


