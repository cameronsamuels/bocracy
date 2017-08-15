if (window.location.hash != '') {
    var current = window.location.hash.toString().replace('#', '');
	purchase(current);
}
$('redbacks').innerHTML = ls.redbacks;
var battlegrounds = ["aonarchy","ammunist","alief","eora"], m = document.querySelector('main');
function refreshStore(){
	m.innerHTML = "";
	for (i = 0; i < battlegrounds.length; i++) {
		var html = "";
		html = html + "<section><h1>" + battlegrounds[i] + "</h1><div style='background-image:url(http://blib.tk/boc/img/shuffle.svg)' onclick='purchase(\"" + battlegrounds[i] + "\")'></div>";
		for (j = 0; j < goodNames[battlegrounds[i]].length; j++) {
			if (ls[good[goodNames[battlegrounds[i]][j]].name] != "true") {
				var characterName = good[goodNames[battlegrounds[i]][j]].name.replace('D', '.').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('__', '-');
				html += "<div style='background-image:url(http://blib.tk/boc/" + good[goodNames[battlegrounds[i]][j]].info[3] + "/" + good[goodNames[battlegrounds[i]][j]].name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.') + ".png)' onclick='purchase(\"" + battlegrounds[i] + "." + good[goodNames[battlegrounds[i]][j]].name + "\")'></div>";
			}
		}
		if (!html.includes("</div><div")) {
			html = "";
		}
		html += "</section>";
		m.innerHTML += html;
	}
	if (m.innerHTML == "") m.innerHTML = "<div style='color:white;margin:10vh 0'><h2>You have unlocked all the characters!</h2><h3>Come back soon!</h3></div>";
}
function showConfirm(text, yes, no) {
    $('confirmText').innerHTML = text;
    $('confirmYesBtn').setAttribute('onclick', "document.getElementById('confirmPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';eval(" + yes + ")");
    $('confirmNoBtn').setAttribute('onclick', "document.getElementById('confirmPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';eval(" + no + ")");
    $('confirmPopup').style.display = "block";
    $('popupOverlay').style.display = "block";
}
function showAlert(text) {
    $('unlockedPopupText').innerHTML = text;
    $('unlockedPopupImg').style.display = "none";
    $('unlockedPopup').style.display = "block";
    $('popupOverlay').style.display = "block";
    $('unlockedPopupBtn').setAttribute('onclick', "document.getElementById('unlockedPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none'");	
}

function unlockConfirmed(item) {
	unlock(item);
}

function purchase(item) {
	if (item.includes("."))
	showConfirm("<p>Purchase</p>" + item.substring(item.indexOf(".")+1,item.length).replace('D', '.').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('__', '-') + "<p>for<br />" + good[item.substring(item.indexOf(".")+1,item.length)].info[2] + " redbacks</p>", "unlockConfirmed('" + item + "')");
	else showConfirm("<p>Purchase random</p>" + item + " <p>character for<br />700 redbacks</p>", "unlockConfirmed('" + item + "')");
}

function unlock(item) {
	if (!item.includes(".")) {
		for (i = 0; i < goodNames[item].length; i++) {
			if (ls[goodNames[item][i]] == "false") {
				break;
			} else if (i == (goodNames[item].length) - 1) {
				showAlert("You have unlocked all the characters here");
				setTimeout(function(){$('popupOverlay').style.display = "block"},500);
				return;
			}
		}
		if (ls.redbacks < 700) {
			showAlert("Insufficient redbacks");
			return;
		}
		var unlocked = goodNames[item][Math.floor(Math.random() * goodNames[item].length)];
		while (ls[unlocked] == 'true') {
			unlocked = goodNames[item][Math.floor(Math.random() * goodNames[item].length)];
		}
		ls.redbacks -= 700;
	} else {
		var unlocked = item.toString().split('.')[1];
        if (ls[good[unlocked].name] == "true") {
			showAlert("You have unlocked this character already");
			return;
		}
        if (ls.redbacks < good[unlocked].info[2]) {
			showAlert("Insufficient redbacks");
			return;
		}
		ls.redbacks -= good[unlocked].info[2];
	}
	ls[unlocked] = 'true';
	var characterName = unlocked.toString().replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('D', '.').replace('Boss', '');	
	$('unlockedPopupText').innerHTML = "You unlocked the " + characterName + " " + good[unlocked].info[3];
	$('unlockedPopupImg').style.display = "block";
	$('unlockedPopupImg').src = 'http://blib.tk/boc/' + good[unlocked].info[3] + '/' + unlocked.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + ".png";
	$('unlockedPopupBtn').setAttribute('onclick', "document.getElementById('unlockedPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none'");
	$('unlockedPopup').style.display = "block";
	setTimeout(function(){$('popupOverlay').style.display = "block"},400);
	$('redbacks').innerHTML = ls.redbacks;
	refreshStore();
}
refreshStore();