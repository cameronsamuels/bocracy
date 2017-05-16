if (window.location.hash != '') {
    var current = window.location.hash.toString().replace('#', '');
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
		window.location = window.location.toString().replace('firstTime', '');
		location.reload();	
	}
}
//else if (localStorage['has' + current.toString().replace('firstTime', '').charAt(0).toUpperCase() + current.toString().replace('firstTime', '').substring(1)] != undefined) purchase(current);
//else {
//	window.location.hash = "#firstTime" + current;
//	location.reload();
//}
}
id('coins').innerHTML = localStorage.coins;
if (!isMobile.iOS()) id('playButton').style.display = 'none';
var battlegrounds = ["aonarchy","ammunist","ciftian","citatian"], m = document.querySelector('main');
function refreshStore(){
	m.innerHTML = "";
	for (i = 0; i < battlegrounds.length; i++) {
		var html = "";
		html = html + "<section><h1>" + battlegrounds[i] + "<span class='button' onclick='window.location=\"battle.html#" + battlegrounds[i] + "\"'>Play</span></h1><div style='background-image:url(img/shuffle.png)' onclick='purchase(\"" + battlegrounds[i] + "\")'>Random</div>";
		for (j = 0; j < goodNames[battlegrounds[i]].length; j++) {
			if (localStorage[good[goodNames[battlegrounds[i]][j]].name] != "true") {
				var characterName = good[goodNames[battlegrounds[i]][j]].name.replace('D', '.').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('__', '-');
				html += "<div style='background-image:url(https://bocracy.com/assets/" + good[goodNames[battlegrounds[i]][j]].info[3] + "/" + good[goodNames[battlegrounds[i]][j]].name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.') + ".png)' onclick='purchase(\"" + battlegrounds[i] + "." + good[goodNames[battlegrounds[i]][j]].name + "\")'>" + characterName + "</div>";
			}
		}
		if (!html.includes("</div><div")) {
			html = "<section><h1>" + battlegrounds[i] + "<span class='button' onclick='window.location=\"battle.html#" + battlegrounds[i] + "\"'>Play</span></h1>";
		}
		html += "</section>";
		m.innerHTML += html;
	}
}
function showConfirm(text, yes, no) {
    id('confirmText').innerHTML = text;
    id('confirmYesBtn').setAttribute('onclick', "eval(" + yes + "); document.getElementById('confirmPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';");
    id('confirmNoBtn').setAttribute('onclick', "eval(" + no + "); document.getElementById('confirmPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';");
    id('confirmPopup').style.display = "block";
    id('popupOverlay').style.display = "block";
}
function showAlert(text) {
    id('unlockedPopupText').innerHTML = text;
    id('unlockedPopupImg').style.display = "none";
    id('unlockedPopup').style.display = "block";
    id('popupOverlay').style.display = "block";
    id('unlockedPopupBtn').setAttribute('onclick', "document.getElementById('unlockedPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';");	
}

function unlockConfirmed(item) {
	unlock(item);
}

function purchase(item) {
	if (item.includes("."))
	showConfirm("Buy " + item.substring(item.indexOf(".")+1,item.length).replace('D', '.').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('__', '-') + " for " + good[item.substring(item.indexOf(".")+1,item.length)].info[2] + " redbacks?", "unlockConfirmed('" + item + "')");
	else showConfirm("Buy a character from " + item + " for 500 redbacks?", "unlockConfirmed('" + item + "')");
}

function unlock(item) {
	if (!item.includes(".")) {
		for (i = 0; i < goodNames[item].length; i++) {
			if (localStorage[goodNames[item][i]] == "false") {
				break;
			} else if (i == (goodNames[item].length) - 1) {
				showAlert("You have unlocked all the characters here");
				setTimeout(function(){id('popupOverlay').style.display = "block"},500);
				return;
			}
		}
		var unlocked = goodNames[item][Math.floor(Math.random() * goodNames[item].length)];
		while (localStorage[unlocked] == 'true') {
			unlocked = goodNames[item][Math.floor(Math.random() * goodNames[item].length)];
		}
		localStorage.coins -= 500;
	} else {
		var unlocked = item.toString().split('.')[1];
        if (localStorage[good[unlocked].name] == "true") {
			showAlert("You have unlocked this character already");
			return;
		}
        if (localStorage.coins < good[unlocked].info[2]) {
			showAlert("Insufficient redbacks");
			return;
		}
		localStorage.coins -= good[unlocked].info[2];
	}
	localStorage[unlocked] = 'true';
	var characterName = unlocked.toString().replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('D', '.').replace('Boss', '');	
	id('unlockedPopupText').innerHTML = "You unlocked the " + characterName + " " + good[unlocked].info[3];
	id('unlockedPopupImg').style.display = "block";
	id('unlockedPopupImg').src = 'https://bocracy.com/assets/' + good[unlocked].info[3] + '/' + unlocked.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + ".png";
	id('unlockedPopupBtn').setAttribute('onclick', "document.getElementById('unlockedPopup').style.display = 'none';document.getElementById('popupOverlay').style.display = 'none'");
	id('unlockedPopup').style.display = "block";
	id('popupOverlay').style.display = "block";
	id('coins').innerHTML = localStorage.coins;
	refreshStore();
}
refreshStore();