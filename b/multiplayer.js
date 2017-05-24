var newStats, a = { name: '', health: 0, attack: 0, speed: 0 },
b = { name: '', health: 0, attack: 0 },
current = battles[Math.floor(Math.random() * battles.length)], newStats;
if (window.location.hash != '') current = window.location.hash.toString().replace('#', '');
var game = { on : 'false',
	refresh : { display : function() {
		id('bHealthBar').style.width = (b.health / b.orig_health)*100 + '%';
		id('aHealthBar').style.width = (a.health / a.orig_health)*100 + '%';
		id('bButton').style.backgroundImage = 'url(https://bocracy.com/assets/' + goodNames.url + '/' + b.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
		id('aButton').style.backgroundImage = 'url(https://bocracy.com/assets/' + badNames.url + '/' + a.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
	}, all : function() {
		game.refresh.display();
		window.requestAnimationFrame(game.refresh.all);
	}},	win : function(side) {
		id('overlayText').innerHTML = '<div>WINNER: ' + side + '</div>';
		id('overlay').style.display = "block";
		game.on = 'false';
	}, attack : function(atk) {
		if (game.on == 'true') { if (atk == 'green') {
			a.health -= b.attack; a.health = Math.max(0, a.health); a.health = Math.min(a.orig_health, a.health);
			var weapon  = 'sword';
			if (newStats == 'true')	{ if (good[b.name].info[5] != undefined) weapon = good[b.name].info[5]; }
			if (('url("img/' + weapon + '.png")') != id('bSword').style.backgroundImage) id('bSword').style.backgroundImage = 'url("img/' + weapon + '.png")';
			id('bSword').style.display = "block"; id('bSword').style.WebkitAnimationName = "bSword";
			id('bSword').style.animationName = "bSword";
			setTimeout("id('bSword').style.display = 'none';id('bSword').style.WebkitAnimationName = '';id('bSword').style.animationName = '';", 100);
		} else if (atk == 'red') {
			b.health -= a.attack; b.health = Math.max(0, b.health);
			b.health = Math.min(b.orig_health, b.health);
			var weapon  = 'sword';
			if (newStats == 'true') { if (bad[a.name].info[5] != undefined) weapon = bad[a.name].info[5]; }
			if (('url("img/' + weapon + '.png")') != id('aSword').style.backgroundImage) id('aSword').style.backgroundImage = 'url("img/' + weapon + '.png")';
			id('aSword').style.display = "block";
			id('aSword').style.WebkitAnimationName = "aSword";
			id('aSword').style.animationName = "aSword";
			setTimeout("id('aSword').style.display = 'none';id('aSword').style.WebkitAnimationName = '';id('aSword').style.animationName = '';", 100);
		}
		if (b.health == 0 || a.health == 0) game.win(atk);
	}}, heal : function(side) {
		if (game.on == 'true') { if (side == 'green') {
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
	if (!isMobile.any()) id('computer').style.display = "block";
	else { id('rotate').style.display = "block"; id('rotateInstructions').style.display = "block"; }
	if (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
		id('computer').style.display = 'none';
		id('rotate').style.display = "block";
		id('rotateInstructions').style.display = "block";
	}
	if (!window.location.toString().includes('#')) current = battles[Math.floor(Math.random() * battles.length)];
	switch (current.replace('+', '')) {
		case "aonarchy": newStats = 'true'; badNames.url = "b"; goodNames.url = "a"; break;
		case "ciftian": newStats = 'true'; badNames.url = "b"; goodNames.url = "c"; break;
		case "ammunist": newStats = 'true'; badNames.url = "b"; goodNames.url = "a"; break;
		case "cerotopis": newStats = 'false'; badNames.url = "b"; goodNames.url = "c"; break;
		case "citopia": newStats = 'false'; badNames.url = "b"; goodNames.url = "c"; break;
		case "citatian": newStats = 'true'; badNames.url = "b"; goodNames.url = "c"; break;
		case "alinar": newStats = 'false'; badNames.url = "b"; goodNames.url = "a"; break;
		case "eora": newStats = 'true'; badNames.url = "b"; goodNames.url = "a"; break;
		default: newStats = 'false'; badNames.url = "b"; goodNames.url = "b";
	}
	a.name = badNames[current.replace('+', 'Boss')][Math.floor(Math.random() * badNames[current.replace('+', 'Boss')].length)];
	a.health = Math.min(Math.random() * 2250, 2000);
	a.orig_health = a.health;
	a.attack = Math.max(32, Math.random() * 40);
	a.speed = Math.min(Math.random() * 1000, 500);
	a.heal = Math.random() * 12;
	b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)];
	while (b.name == a.name) { b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)]; }
	b.health = a.health;
	b.orig_health = a.orig_health;
	b.attack = a.attack;
	b.heal = a.heal;
	game.on = 'true';
	var bName = b.name;
	while (bName.includes('_') || bName.includes('-')) { bName = bName.toString().replace('_', '-').replace('--', '^').replace('-', ' '); }
	while (bName.includes('^')) { bName = bName.replace('^', '-'); }
	bName = bName.replace('D', '.');
	id('bName').innerHTML = bName + ' ' + goodNames.url;
	var aName = a.name;
	while (aName.includes('_') || aName.includes('-')) {
		aName = aName.toString().replace('_', '-').replace('--', '^').replace('-', ' ');
	}
	while (aName.includes('^')) { aName = aName.replace('^', '-'); }
	aName = aName.replace('D', '.').replace('Boss', '');
	id('aName').innerHTML = aName + ' ' + badNames.url;
	id('bName').style.fontSize = (10-(id('bName').innerHTML.length/2)||2) + "vh";
	id('aName').style.fontSize = Math.min((10-(id('aName').innerHTML.length/2)||2),id('bName').style.fontSize.replace('vh','')) + "vh";
	id('bName').style.fontSize = Math.min(id('bName').style.fontSize.replace('vh',''),id('aName').style.fontSize.replace('vh','')) + "vh";
	if (id('bName').style.fontSize.replace('vh','')<2) {
		id('bName').style.fontSize = "2vh";
		id('aName').style.fontSize = "2vh";
	}
}
function restart() {
	game.on = 'false';
	id('overlay').style.display = 'none';
	load();
}
load();
game.refresh.all();
document.body.ontouchmove=function(e){e.preventDefault()}