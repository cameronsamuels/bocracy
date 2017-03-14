var current = "aonarchy";
if (window.location.hash != '') current = window.location.hash.toString().replace('#', '');
if (current.includes("firstTime")) {
	// if (localStorage.hasAonarchy == undefined) {
	// 	localStorage.coins = 500;
	// 	localStorage.hasAonarchy = 'true';
	// 	unlock(current.replace("firstTime", ""));
	// } else if (localStorage.hasCiftian == undefined) {
	// 	localStorage.coins = 500;
	// 	localStorage.hasCiftian = 'true';
	// 	unlock(current.replace("firstTime", ""));
	// } else if (localStorage.hasAmmunist == undefined) {
	// 	localStorage.coins = 500;
	// 	localStorage.hasAmmunist = 'true';
	// 	unlock(current.replace("firstTime", ""));
	// } else if (localStorage.hasCitatian == undefined) {
	// 	localStorage.coins = 500;
	// 	localStorage.hasCitatian = 'true';
	// 	unlock(current.replace("firstTime", ""));
	if (localStorage['has' + current.toString().replace('firstTime', '').charAt(0).toUpperCase() + current.toString().replace('firstTime', '').substring(1)] == undefined) {
		if (localStorage.coins) localStorage.coins = parseFloat(localStorage.coins) + 500;
		else localStorage.coins = 500;
		localStorage['has' + current.toString().replace('firstTime', '').charAt(0).toUpperCase() + current.toString().replace('firstTime', '').substring(1)] = 'true';
		unlock(current.replace('firstTime', ''));
	} else {
		showAlert('No silly! You can\'t get characters for free!');
		id('unlockedPopupBtn').setAttribute('onclick', 'window.location="index.html?87"');	
	}
}
else if (current != "firstTime") purchase(current);
id('coins').innerHTML = localStorage.coins;