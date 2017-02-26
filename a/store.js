id('coins').innerHTML = localStorage.coins;
var current = "aonarchy";
if (window.location.hash != '') current = window.location.hash.toString().replace('#', '');
if (current.includes("firstTime")) {
	if (localStorage.hasAonarchy == undefined) {
		localStorage.coins = 500;
		localStorage.hasAonarchy = 'true';
		unlock(current.replace("firstTime", ""));
	} else if (localStorage.hasCortofa == undefined) {
		localStorage.coins = 500;
		localStorage.hasCortofa = 'true';
		unlock(current.replace("firstTime", ""));
	}
	else showAlert('No silly! You can\'t get characters for free!');
}
else if (current != "firstTime") purchase(current);