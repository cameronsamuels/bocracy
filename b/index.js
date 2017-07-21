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
	var html = "<div id='unselected'>";
	for (i = 0; i < goodNames[b].length; i++) {
		if (localStorage[goodNames[b][i]] == 'true') {
			html = html + '<div title="' + goodNames[b][i].replace('D', '.').replace('__', '-').replace('_', ' ').replace('_', ' ').replace('_', ' ') + '" style="background-image:url(https://bocracy.com/assets/a/' + goodNames[b][i].replace('.', 'D').replace('_', '-').replace('_', '-').replace('_', '-') + '.png)"></div>';
		}
	}
	html = html + '</div><div id="selected"></div>';
	id('characters').innerHTML = html;
	id('startPlay').style.display = 'none';
	id('notEnough').style.display = 'none';
}
}
var cost;
function character(e) {
	if (e.target.id != 'characters' && e.target.id != 'selected' && e.target.id != 'unselected') {
	e.target.parentElement.id=='selected'?id('unselected').appendChild(e.target):id('selected').appendChild(e.target);
	cost = 0;
	for (i = 0; i < id('characters').querySelectorAll('#selected div').length; i++) {
		cost += Math.floor(good[id('characters').querySelectorAll('#selected div')[i].title.replace('.', 'D').replace('-', '__').replace(' ', '_').replace(' ', '_').replace(' ', '_')].info[2] *  0.03);
		cost += 5;
	}
	if (id('characters').querySelectorAll('#selected div').length > 0) {
		id('startPlay').style.display = 'block';
		id('startPlay').innerHTML = 'Play (' + cost + ')';
	}
	if (localStorage.coins < cost) {
		id('startPlay').style.display = 'none';
		id('notEnough').style.display = 'block';
		id('notEnough').innerHTML = "Not enough (" + localStorage.coins + "/" + cost + ")";
	} else id('notEnough').style.display = 'none';
	if (id('characters').querySelectorAll('#selected div').length == 0) id('startPlay').style.display = 'none';
	}
}
function startPlay() {
	if (localStorage.coins >= cost) localStorage.coins -= cost;
	var characters = id('characters').querySelectorAll('#selected div');
	for (i = 0; i < characters.length; i++) {
		localStorage['b' + (i+1)] = characters[i].title.replace('.', 'D').replace('-', '__').replace(' ', '_').replace(' ', '_').replace(' ', '_');
	}
	localStorage.sc = characters.length;
	location = "battle.html#series" + b;
}
if (mob()) {
	id('battleground').addEventListener('touchend', battleground);
	id('characters').addEventListener('touchend', character);
} else {
	id('battleground').onclick = battleground;
	id('characters').onclick = character;
}
document.body.style.backgroundPosition=1e2*Math.random()+"%";
id('battleground').innerHTML = "<div>aonarchy</div><div>ammunist</div><div>alief</div><div>eora</div>";
if (!mob()) {
	document.querySelectorAll('main div')[2].innerHTML = "BETA";
	document.querySelectorAll('main div')[2].setAttribute('ontouchend', "location='https://bocracy.com/betatest'");
}