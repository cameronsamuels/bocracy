function play() {
	id('select').style.display = 'block';
	id('startPlay').style.display = 'none';
}
function battleground(e) {
	if (e.target.id != 'battleground' && !e.target.style.border.toString().includes('white')) {
	b = e.target.innerHTML;
	for (i = 0; i < document.querySelectorAll('#battleground div').length; i++)
	document.querySelectorAll('#battleground div')[i].style.border= '1px transparent solid';
	e.target.style.border = "1px white solid";
	id('characters').innerHTML = "";
	for (i = 0; i < goodNames[b].length; i++) {
		if (localStorage[goodNames[b][i]] == 'true') {
			id('characters').innerHTML = id('characters').innerHTML + '<div>' + goodNames[b][i].replace('D', '.').replace('__', '-').replace('_', ' ').replace('_', ' ').replace('_', ' ') + '</div>';
		}
	}
	id('startPlay').style.display = 'none';
	id('notEnough').style.display = 'none';
}
}
var cost;
function character(e) {
	if (e.target.id != 'characters') {
	e.target.style.background=e.target.style.background?"":"#730005";
	cost = 0;
	for (i = 0; i < id('characters').querySelectorAll('[style*="background"]').length; i++) {
		cost += Math.floor(good[id('characters').querySelectorAll('[style*="background"]')[i].innerHTML.replace('.', 'D').replace('-', '__').replace(' ', '_').replace(' ', '_').replace(' ', '_')].info[2] *  0.03);
		cost += 5;
	}
	if (id('characters').querySelectorAll('[style*="background"]').length > 0) {
		id('startPlay').style.display = 'block';
		id('startPlay').innerHTML = 'Play (' + cost + ')';
	}
	if (localStorage.coins < cost) {
		id('startPlay').style.display = 'none';
		id('notEnough').style.display = 'block';
		id('notEnough').innerHTML = "Not enough (" + localStorage.coins + "/" + cost + ")";
	} else id('notEnough').style.display = 'none';
	if (id('characters').querySelectorAll('[style*="background"]').length == 0) id('startPlay').style.display = 'none';
	}
}
function startPlay() {
	if (localStorage.coins >= cost) localStorage.coins -= cost;
	var characters = id('characters').querySelectorAll('[style*="background"]');
	for (i = 0; i < characters.length; i++) {
		localStorage['b' + (i+1)] = characters[i].innerHTML.replace('.', 'D').replace('-', '__').replace(' ', '_').replace(' ', '_').replace(' ', '_');
	}
	localStorage.sc = characters.length;
	location = "battle.html#series" + b;
}
if (isMobile.any()) {
	id('battleground').addEventListener('touchend', battleground);
	id('characters').addEventListener('touchend', character);
} else {
	id('battleground').onclick = battleground;
	id('characters').onclick = character;
}
document.body.style.backgroundPosition=1e2*Math.random()+"%";
id('battleground').innerHTML = "<div>aonarchy</div><div>ammunist</div><div>eora</div>";