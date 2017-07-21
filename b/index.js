function play() {
	$('select').style.display = 'block';
	$('startPlay').style.display = 'none';
}
function battleground(e) {
	if (e.target.id != 'battleground' && !e.target.style.border.toString().includes('white')) {
	b = e.target.innerHTML;
	for (i = 0; i < document.querySelectorAll('#battleground div').length; i++)
	document.querySelectorAll('#battleground div')[i].style.border= '1px transparent solid';
	e.target.style.border = "1px white solid";
	$('characters').innerHTML = "";
	var html = "<div id='unselected'>";
	for (i = 0; i < goodNames[b].length; i++) {
		if (ls[goodNames[b][i]] == 'true') {
			html = html + '<div title="' + goodNames[b][i].replace('D', '.').replace('__', '-').replace('_', ' ').replace('_', ' ').replace('_', ' ') + '" style="background-image:url(https://bocracy.com/assets/a/' + goodNames[b][i].replace('.', 'D').replace('_', '-').replace('_', '-').replace('_', '-') + '.png)"></div>';
		}
	}
	html = html + '</div><div id="selected"></div>';
	$('characters').innerHTML = html;
	$('startPlay').style.display = 'none';
	$('notEnough').style.display = 'none';
}
}
var cost;
function character(e) {
	if (e.target.id != 'characters' && e.target.id != 'selected' && e.target.id != 'unselected') {
	e.target.parentElement.id=='selected'?$('unselected').appendChild(e.target):$('selected').appendChild(e.target);
	cost = 0;
	for (i = 0; i < $('characters').querySelectorAll('#selected div').length; i++) {
		cost += Math.floor(good[$('characters').querySelectorAll('#selected div')[i].title.replace('.', 'D').replace('-', '__').replace(' ', '_').replace(' ', '_').replace(' ', '_')].info[2] *  0.03);
		cost += 5;
	}
	if ($('characters').querySelectorAll('#selected div').length > 0) {
		$('startPlay').style.display = 'block';
		$('startPlay').innerHTML = 'Play (' + cost + ')';
	}
	if (ls.coins < cost) {
		$('startPlay').style.display = 'none';
		$('notEnough').style.display = 'block';
		$('notEnough').innerHTML = "Not enough (" + ls.coins + "/" + cost + ")";
	} else $('notEnough').style.display = 'none';
	if ($('characters').querySelectorAll('#selected div').length == 0) $('startPlay').style.display = 'none';
	}
}
function startPlay() {
	if (ls.coins >= cost) ls.coins -= cost;
	var characters = $('characters').querySelectorAll('#selected div');
	for (i = 0; i < characters.length; i++) {
		ls['b' + (i+1)] = characters[i].title.replace('.', 'D').replace('-', '__').replace(' ', '_').replace(' ', '_').replace(' ', '_');
	}
	ls.sc = characters.length;
	location = "battle.html#series" + b;
}
if (mob()) {
	$('battleground').addEventListener('touchend', battleground);
	$('characters').addEventListener('touchend', character);
} else {
	$('battleground').onclick = battleground;
	$('characters').onclick = character;
}
document.body.style.backgroundPosition=1e2*Math.random()+"%";
$('battleground').innerHTML = "<div>aonarchy</div><div>ammunist</div><div>alief</div><div>eora</div>";
if (!mob()) {
	document.querySelectorAll('main div')[2].innerHTML = "BETA";
	document.querySelectorAll('main div')[2].setAttribute('ontouchend', "location='https://bocracy.com/betatest'");
}