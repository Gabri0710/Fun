const tendina = document.getElementById("rispostaTendina");
const confermaPulsante = document.getElementById("conferma");
const videoPlayer = document.getElementById("videoPlayer");
const feedbackElement = document.getElementById("feedback");



confermaPulsante.addEventListener("click", function() {
    if (tendina.value === "opzione1"){
		feedbackElement.textContent = "No frate sei morto";

		setTimeout(function() {
                    feedbackElement.textContent = "";
                }, 2000);
	}
    else if (tendina.value === "opzione2"){
		feedbackElement.textContent = "No frate sei mortissimo";

		setTimeout(function() {
                    feedbackElement.textContent = "";
                }, 2000);
	}

	
    else if (tendina.value === "opzione3") {
	feedbackElement.textContent = "SEI VIVO";
        videoPlayer1.style.display = "block"; // Mostra il video player
        
	videoPlayer1.play(); // Avvia la riproduzione del video


        tendina.disabled = true; // Disabilita la tendina
        conferma.disabled = true; // Disabilita il pulsante "Conferma"

	window.scrollBy(0, 200);

    }
});

videoPlayer.addEventListener("pause", function() {
    tendina.disabled = false; // Riattiva la tendina quando la riproduzione è in pausa
    confermaPulsante.disabled = false; // Riattiva il pulsante "Conferma"
});
