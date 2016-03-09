window.addEventListener('load', function() {
	//stran nalozena
	
	var izvediPrijavo = function(event) {
		// pridobi vrednost uporabniskega imena
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		// nastavi "Pozdravljen, uporabnik!"
		document.getElementById("uporabnik").innerHTML=uporabnik;
		// skrij pokrivalo
		// var pokrivalo = document.querySelector(".pokrivalo").style.visibility='hidden';
		document.querySelector(".pokrivalo").style.display='none';
	}
	
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	
	var dodajOpomnik = function(event) {
		// pridobi vnešeni vrednosti za naziv in čas trajanja opomnika
		var naziv = document.querySelector("#naziv_opomnika").value;
		var cas = document.querySelector("#cas_opomnika").value;
		// resetira vrednosti vnosnih polj
		document.getElementById("naziv_opomnika").value = "";
		document.getElementById("cas_opomnika").value = "";
		// v HTML element z id-jem opomniki doda sledečo HTML kodo, v katero vstavite vrednosti, ki jih je vnesel uporabnik
	    document.getElementById("opomniki").innerHTML += "<div class='opomnik'> <div class='naziv_opomnika'>"+naziv+"</div> <div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div> </div>";
	}
	
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});