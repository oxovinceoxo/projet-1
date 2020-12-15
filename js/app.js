
function reponse(){
	let reponse = document.getElementById("lareponse").value
	if(reponse.length == 0){
		document.getElementById("affiche-reponse").innerHTML = "<b>Merci de remplir le champs</b>"
	}else if(reponse == 64){
		document.getElementById("affiche-reponse").innerHTML = "<b>bonne réponse !</b>"
	}else if(reponse >= 64){
		document.getElementById("affiche-reponse").innerHTML = "<b>la réponse est plus basse</b>"
	}else{
		document.getElementById("affiche-reponse").innerHTML = "<b>la réponse est plus haute</b>"
	}
}
