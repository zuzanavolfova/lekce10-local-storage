// do proměnné si uložíme prvek ve stránce, 
// kam budeme vypisovat výsledek
let vysledek = document.querySelector('#vysledek');

// ihned po načtení stránky zavoláme funkci,
// která přečte hodnotu z Local Storage a zobrazí ji

// funkce pro načtení a zobrazení hodnoty z Local Storage
function nactiHodnotu() {
	// načteme z Local Storage

	// pokud hodnota nexistuje, vypíšeme chybu
		
	// jinak hodnota existuje a vypíšeme ji

}

// funkce pro uložení hodnoty do Local Storage
function ulozHodnotu() {
	// hodnotu načteme z pole formuláře
	let mojeHodnota = document.querySelector('#hodnota').value;
		// a uložíme do local storage pod jménem "mojehodnota"
	localStorage.mojeHodnota=JSON.stringify(mojeHodnota);
		// a hned zavoláme funkci pro zobrazení hodnoty,
		// aby se změna v Local Storage promítla i na stránce
	vysledek.innerHTML=mojeHodnota;

}

// funkce pro smazání hodnoty z Local Storage
function smazatHodnotu() {
	// smažeme hodnotu uloženou pod jménem "mojehodnota",
	// pokud takový klíč neexistuje, nestane se nic
localStorage.removeItem('mojeHodnota');
localStorage.clear();
	// a hned zavoláme funkci pro zobrazení hodnoty,
	// aby se změna v Local Storage promítla i na stránce
	vysledek.innerHTML= '';
}