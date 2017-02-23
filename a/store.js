id('coins').innerHTML = localStorage.coins;
var current = "aonarchy";
if (window.location.hash != '') current = window.location.hash.toString().replace('#', '');
if (current.includes("firstTime")) {
	localStorage.coins = 500;
	unlock(current.replace("firstTime", ""));
}
else if (current != "firstTime") purchase(current);