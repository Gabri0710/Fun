document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input");
    const nextButton = document.getElementById("next1");
	const label = document.getElementById("label");
	const label2 = document.getElementById("label2");

    
    let firstname = ""; // La variabile per conservare il nome
	let secondname = ""; // La variabile per conservare il nome
	let action = ""; // La variabile per conservare il nome
	let place = ""; // La variabile per conservare il nome
	let clickCount = 0

    nextButton.addEventListener("click", function () {
	clickCount++;

        
	if (clickCount === 1) {
		firstname = inputField.value; // Salva il testo nella variabile firstname
            label.textContent = "Inserisci il secondo nome:";
		inputField.value = "";
        } else if (clickCount === 2) {
		secondname = inputField.value;
            label.textContent = "Inserisci un'azione:";
		inputField.value = "";
        } 
	else if (clickCount === 3) {
		action = inputField.value;
            label.textContent = "Inserisci un luogo:";
		inputField.value = "";
		nextButton.textContent  = "Genera frase";
        } 
	else if (clickCount === 4) {
		place = inputField.value;
            	label.textContent = "Risultato:";
		inputField.value = "";
		inputField.style.display = "none";
		nextButton.textContent  = "Nuovo";
		
		// Stampare il nome nell'HTML
        	//const outputDiv = document.createElement("div");
        	//outputDiv.textContent = firstname+" e "+ secondname + " " + action + " " + place;
		label2.textContent = firstname+" e "+ secondname + " " + action + " " + place;
        	//document.body.appendChild(outputDiv);
        } 

	else if (clickCount === 5) {
		clickCount = 0;
		inputField.style.display = "block";
            	label.textContent = "Inserisci il primo nome:";
		label2.textContent = "";
		nextButton.textContent  = "Avanti";
        } 
	
	

        // Puoi eseguire ulteriori azioni qui utilizzando il valore di 'firstname'
    });
});
