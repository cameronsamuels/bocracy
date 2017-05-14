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
for (i = 0; i < battlegrounds.length; i++) {
    var html = "";
    html = html + "<section><h1>" + battlegrounds[i] + "<span class='button' onclick='window.location=\"battle.html#" + battlegrounds[i] + "\"'>Play</span></h1><div style='background-image:url(img/shuffle.png)' onclick='purchase(\"" + battlegrounds[i] + "\")'>Random</div>";
    for (j = 0; j < goodNames[battlegrounds[i]].length; j++) {
		var characterName = good[goodNames[battlegrounds[i]][j]].name.replace('D', '.').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('__', '-');
        html += "<div style='background-image:url(https://bocracy.com/assets/" + good[goodNames[battlegrounds[i]][j]].info[3] + "/" + good[goodNames[battlegrounds[i]][j]].name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.') + ".png)' onclick='purchase(\"" + battlegrounds[i] + "." + good[goodNames[battlegrounds[i]][j]].name + "\")'>" + characterName + "</div>";
    }
    html += "</section>";
    m.innerHTML += html;
}