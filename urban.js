var text = ["Passionate", "Experienced", "Enthusiastic", "Professional", "Fervent", "Rhapsodic"]
var counter = 0;
var elem = document.getElementById("flavor");
var inst = setInterval(change, 30000)

function change() {
	elem.innerHTML = text[counter];
	counter++;
	if(counter >= text.length){
		counter = 0;
	}
}