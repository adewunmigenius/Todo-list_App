var button = document.getElementById("button");

button.addEventListener("click", function(){
	var inputval = document.getElementById('input').value;
	
	//get selected element 
	var selectval = document.getElementById('select').value
	//create a new div
	var newdiv = document.createElement("div");
	//create an input text from the value
	var text = document.createTextNode(selectval+": "+inputval);
	//apend text to the div
	newdiv.appendChild(text);
	//apend div to #output
	document.getElementById("output").appendChild(newdiv);
});

