function play() {
	id('select').style.display = 'block';
	id('startPlay').style.display = 'none';
}
function battleground(e) {
	if (e.target.id != 'battleground') {
	b = e.target.innerHTML;
	id('characters').innerHTML = "";
	for (i = 0; i < goodNames[b].length; i++) {
		if (localStorage[goodNames[b][i]] == 'true') {
			id('characters').innerHTML = id('characters').innerHTML + '<div>' + goodNames[b][i].replace('D', '.').replace('__', '-').replace('_', ' ').replace('_', ' ').replace('_', ' ') + '</div>';
		}
	}
	id('startPlay').style.display = 'none';
}
}
function character(e) {
	if (e.target.id != 'characters') {
	e.target.style.border=e.target.style.border?"":"1px white solid";
	if (document.querySelectorAll('[style*="border"]').length > 0) id('startPlay').style.display = 'block';
	else id('startPlay').style.display = 'none';
	}
}
function startPlay() {
	var characters = document.querySelectorAll('[style*="border"]');
	for (i = 0; i < characters.length; i++) {
		localStorage['b' + (i+1)] = characters[i].innerHTML.replace('.', 'D').replace('-', '__').replace(' ', '_').replace(' ', '_').replace(' ', '_');
	}
	localStorage.sc = characters.length;
	location = "battle.html?14#series" + b;
}
if (isMobile.any()) {
	id('battleground').addEventListener('touchend', battleground);
	id('characters').addEventListener('touchend', character);
}
else {
	id('battleground').onclick = battleground;
	id('characters').onclick = character;
}
id("body").style.backgroundPosition=1e2*Math.random()+"%";
id('battleground').innerHTML = "<div>aonarchy</div><div>ammunist</div><div>citatian</div><div>ciftian</div>";