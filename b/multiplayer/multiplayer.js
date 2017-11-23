var newStats, a = { name: '', health: 0, attack: 0 },
b = { name: '', health: 0, attack: 0 },
current = battles[Math.floor(Math.random() * battles.length)];
if (window.location.hash != '') current = window.location.hash.toString().replace('#', '');
var game = { on : false,
	refresh : { display : function() {
		$('bHealthBar').style.width = (b.health / b.orig_health)*100 + '%';
		$('aHealthBar').style.width = (a.health / a.orig_health)*100 + '%';
	}, all : function() {
		game.refresh.display();
		window.requestAnimationFrame(game.refresh.all);
	}},	win : function(side) {
		$('overlayText').innerHTML = '<div>' + (side=='green'?'<--':'-->') + '</div>';
		$('restartText').style.display = "none";
		setTimeout(function(){$('restartText').style.display = "block"}, 750);
		$('overlay').style.display = "block";
		game.on = false;
	}, attack : function(atk) {
		if (game.on == true) { if (atk == 'green') {
			a.health -= b.attack; a.health = Math.max(0, a.health); a.health = Math.min(a.orig_health, a.health);
			$('leftWeapon').style.display = "block";
			$('leftWeapon').style.animationName = "leftWeapon";
			setTimeout("$('leftWeapon').style.display = 'none';$('leftWeapon').style.animationName = ''", 100);
		} else if (atk == 'red') {
			b.health -= a.attack; b.health = Math.max(0, b.health);
			b.health = Math.min(b.orig_health, b.health);
			$('rightWeapon').style.display = "block";
			$('rightWeapon').style.animationName = "rightWeapon";
			setTimeout("$('rightWeapon').style.display = 'none';$('rightWeapon').style.animationName = ''", 100);
		}
		if (b.health == 0 || a.health == 0) game.win(atk);
		document.querySelector('#aHealth p').innerHTML = Math.round(a.health) + '/' + Math.round(a.orig_health);
		document.querySelector('#bHealth p').innerHTML = Math.round(b.health) + '/' + Math.round(b.orig_health);
	}}, heal : function(side) {
		if (game.on == true) { if (side == 'green') {
			b.health += b.heal;
			b.health = Math.max(0, b.health);
			b.health = Math.min(b.orig_health, b.health);
		} else if (side == 'red') {
			a.health += a.heal;
			a.health = Math.max(0, a.health);
			a.health = Math.min(a.orig_health, a.health);
		}
	}}
};
function load() {
	if (!window.location.toString().includes('#')) current = battles[Math.floor(Math.random() * battles.length)];
	switch (current.replace('+', '')) {
		case "aonarchy": newStats = true; badNames.url = "b"; goodNames.url = "a"; break;
		case "alief": newStats = true; badNames.url = "b"; goodNames.url = "a"; break;
		case "ammunist": newStats = true; badNames.url = "b"; goodNames.url = "a"; break;
		case "alinar": newStats = false; badNames.url = "b"; goodNames.url = "a"; break;
		case "eora": newStats = true; badNames.url = "b"; goodNames.url = "a"; break;
		default: newStats = false; badNames.url = "b"; goodNames.url = "b";
	}
	a.name = badNames[current.replace('+', 'Boss')][Math.floor(Math.random() * badNames[current.replace('+', 'Boss')].length)];
	a.health = Math.min(Math.random() * 2250, 2000);
	a.orig_health = a.health;
	a.attack = Math.max(32, Math.random() * 40);
	a.heal = Math.random() * 12;
	b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)];
	while (b.name == a.name) { b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)]; }
	b.health = a.health;
	b.orig_health = a.orig_health;
	b.attack = a.attack;
	b.heal = a.heal;
	game.on = true;
	var bName = b.name;
	while (bName.includes('_') || bName.includes('-')) { bName = bName.toString().replace('_', '-').replace('--', '^').replace('-', ' '); }
	while (bName.includes('^')) { bName = bName.replace('^', '-'); }
	bName = bName.replace('D', '.');
	$('bName').innerHTML = bName + ' ' + goodNames.url;
	var aName = a.name;
	while (aName.includes('_') || aName.includes('-')) {
		aName = aName.toString().replace('_', '-').replace('--', '^').replace('-', ' ');
	}
	while (aName.includes('^')) { aName = aName.replace('^', '-'); }
	aName = aName.replace('D', '.').replace('Boss', '');
	$('aName').innerHTML = aName + ' ' + badNames.url;
	$('bName').style.fontSize = (10-($('bName').innerHTML.length/2)||2) + "vh";
	$('aName').style.fontSize = Math.min((10-($('aName').innerHTML.length/2)||2),$('bName').style.fontSize.replace('vh','')) + "vh";
	$('bName').style.fontSize = Math.min($('bName').style.fontSize.replace('vh',''),$('aName').style.fontSize.replace('vh','')) + "vh";
	if ($('bName').style.fontSize.replace('vh','')<2) {
		$('bName').style.fontSize = "2vh";
		$('aName').style.fontSize = "2vh";
	}
	$('bButton').style.backgroundImage = 'url(https://blib.tk/boc/' + goodNames.url + '/' + b.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
	$('aButton').style.backgroundImage = 'url(https://blib.tk/boc/' + badNames.url + '/' + a.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
	var weapon  = 'sword';
	if (newStats == true) { if (bad[a.name].info[4] != undefined) weapon = bad[a.name].info[4] }
	if (('url("https://blib.tk/boc/wpn/' + weapon + '.svg")') != $('rightWeapon').style.backgroundImage) $('rightWeapon').style.backgroundImage = 'url("https://blib.tk/boc/wpn/' + weapon + '.svg")';
	var weapon  = 'sword';
	if (newStats == true)	{ if (good[b.name].info[4] != undefined) weapon = good[b.name].info[4]; }
	if (('url("https://blib.tk/boc/wpn/' + weapon + '.svg")') != $('leftWeapon').style.backgroundImage) $('leftWeapon').style.backgroundImage = 'url("https://blib.tk/boc/wpn/' + weapon + '.svg")';
	document.querySelector('#aHealth p').innerHTML = Math.round(a.health) + '/' + Math.round(a.orig_health);
	document.querySelector('#bHealth p').innerHTML = Math.round(b.health) + '/' + Math.round(b.orig_health);
	var img = new Image();
	img.onload = function() {
		$('bSection').style.background = 'transparent';
		$('aSection').style.background = 'transparent';
		$('background').style.backgroundImage = 'url(https://blib.tk/boc/bg/' + current.replace('+', '') + '.svg)';
		$('aButton').style.backgroundColor = 'transparent';
		$('bButton').style.backgroundColor = 'transparent';
	};
	img.onerror = function() {
		$('bSection').style.backgroundImage = '';
		$('aSection').style.backgroundImage = '';
		$('aButton').style.backgroundColor = '';
		$('bButton').style.backgroundColor = '';
	};
	img.src = 'https://blib.tk/boc/bg/' + current.replace('+', '') + '.svg';
}
function restart() {
	game.on = false;
	$('overlay').style.display = 'none';
	load();
}
load();
game.refresh.all();
document.ontouchmove=function(e){e.preventDefault()}
$("backButton").addEventListener(isMobile?'touchend':'click', function(){location="../"});