//--- Grunnleggende koding mde JS/HTML/CSS
//--- Eksempelprogram med bruk av b
//--- Deklarasjon av GLOBALE variabler legges inn her )før window.onload)

window.onload = winInit;  	// Hendelse onload(nettsida ferdig lasta): winInit kjøres automatisk
function winInit() 			// Hovedprogrammet
{ 		
	console.log("Denne skriver ut i nettleserens konsoll");
	elGetId('felt1').value    = 10;       // Alternativt document.getElementById('knapp1')
	elGetId('felt2').value    = 20;       // Setter verdier til HTML-felt
	elGetId('knapp1').onclick = doKnapp1; // Klikkhendelse: kjør funksjon doKnapp1
	elGetId('knapp2').onclick = doKnapp2; // Klikkhendelse: kjør funksjon doKnapp2
	elGetId('knapp3').onclick = doKnapp3; // Klikkhendelse: kjør funksjon doKnapp3
	elGetId('felt2').onchange = lesTall;  // Verdiendring:  kjør funksjon ved 'enter'
}
//--- Funksjoner lagd spesifikt for dette programmet følger her. 
//--- Fellesfunksjoner hentes fra ../kodebiblioteker
function elGetId(idName){ // Forenkler henting av html-objektet
	return document.getElementById(idName);
}
function doKnapp1(){ // Hva som skjer klikk på knapp1. Uten argumenter!
	let tall = parseInt(elGetId('felt1').value); // Husk å konvertere til tall (parseInt eller parseFloat) !!
	elGetId('utskrift').innerHTML = 'Du trykte på knapp1. Tallet du gav inn er : '+tall;
}
function doKnapp2(){ // Hva som skjer klikk på knapp2. 
	var inndata = elGetId('felt2').value; // Inndata blir tekst !
	elGetId('utskrift').innerHTML = 'Verdien i felt2 er '+inndata+' (datatype: '+typeof(inndata)+')';
}
function doKnapp3(){ // Hva som skjer klikk på knapp3. 
	elGetId('utskrift').innerHTML = 'Du trykte på knapp3. '+elGetId('felt2').value;
}
function lesTall(){ // Hva som skjer ved ny verdi i inputfelt 2. Trigges ved ny verdi (enter)
	let tall = parseFloat(elGetId('felt2').value); // Konverter fra tekst til flyttall 
	elGetId('utskrift').innerHTML = 'Tallet er : '+tall +' (datatype: '+typeof(tall)+')';
}


