$('redbacks').innerHTML = ls.redbacks;
var battlegrounds = ["aonarchy","ammunist","alief","eora","alinar","dericil"], m = document.querySelector('main');
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
		if (!html.includes("</div><div")) html = "";
		html += "</section>";
		m.innerHTML += html;
	}
	if (m.innerHTML == "") m.innerHTML = "<div id='unlockedAll'><h2>You have unlocked all the characters!</h2><h3>Come back soon!</h3><img width='100' src='http://blib.tk/boc/img/merchant.svg'></div>";
}
function showAlert() {
    $('unlockedPopupText').innerHTML = "Insufficient redbacks";
    $('unlockedPopupImg').style.display = "none";
    $('unlockedPopup').style.height = "110px";
    $('unlockedPopup').style.top = "calc(50% - 120px)";
    $('unlockedPopup').style.display = "block";
    $('popupOverlay').style.display = "block";
}
function purchase(item) {
	$('confirmText').innerHTML = item.includes(".")?
	"<p>Purchase</p>" + item.substring(item.indexOf(".")+1,item.length).replace('D', '.').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('__', '-') + "<p>for<br>" + good[item.substring(item.indexOf(".")+1,item.length)].info[2] + " redbacks</p>"
    :"<p>Purchase random</p>" + item + " <p>character for<br />700 redbacks</p>";
    $('confirmYesBtn').setAttribute('onclick', "$('confirmPopup').style.display='';$('popupOverlay').style.display='';unlock('" + item + "')");
    $('confirmPopup').style.display = "block";
    $('popupOverlay').style.display = "block";
}
function unlock(item) {
	if (!item.includes(".")) {
		if (ls.redbacks < 700) {
			showAlert();
			return;
		}
		var unlocked = goodNames[item][Math.floor(Math.random() * goodNames[item].length)];
		while (ls[unlocked] == 'true') unlocked = goodNames[item][Math.floor(Math.random() * goodNames[item].length)];
		ls.redbacks -= 700;
	} else {
		var unlocked = item.toString().split('.')[1];
        if (ls.redbacks < good[unlocked].info[2]) {
			showAlert();
			return;
		}
		ls.redbacks -= good[unlocked].info[2];
	}
	ls[unlocked] = 'true';
	var characterName = unlocked.toString().replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('D', '.').replace('Boss', '');	
	$('unlockedPopupText').innerHTML = "<p>You unlocked</p>" + characterName;
	$('unlockedPopupImg').style.display = "";
	$('unlockedPopupImg').src = 'http://blib.tk/boc/' + good[unlocked].info[3] + '/' + unlocked.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + ".png";
	$('unlockedPopup').style.height = "300px";
    $('unlockedPopup').style.top = "calc(50% - 210px)";
	$('unlockedPopup').style.display = "block";
	$('popupOverlay').style.display = "block";
	$('redbacks').innerHTML = ls.redbacks;
	refreshStore();
}
$('confirmNoBtn').onclick = function(){$('confirmPopup').style.display='';$('popupOverlay').style.display=''},
$('unlockedPopupBtn').onclick = function(){$('unlockedPopup').style.display='';$('popupOverlay').style.display=''};
refreshStore();