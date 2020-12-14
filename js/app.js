
function reponse(){
	let reponse = document.getElementById("lareponse").value
	if(reponse.length == 0){
		alert("Merci de remplir le champs")
	}else if(reponse == 64){
		alert("bonne reponse")
	}else if(reponse >= 64){
		alert("la réponse est plus basse")
	}else{
		alert("la réponse est plus haute")
	}
}

