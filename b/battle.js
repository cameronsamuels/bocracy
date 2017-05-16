var newStats, a = { name: '', health: 0, attack: 0, speed: 0 },
b = { name: '', health: 0, attack: 0 }, base, clicks = 0,
current = battles[Math.floor(Math.random() * battles.length)], newStats;
if (window.location.hash != '') current = window.location.hash.toString().replace('#', '');
var game = { on : 'false',
	refresh : { display : function() {
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
		id('bHealthBar').style.width = (b.health / b.orig_health)*100 + '%';
		id('aHealthBar').style.width = (a.health / a.orig_health)*100 + '%';
		id('bButton').style.backgroundImage = 'url(https://bocracy.com/assets/' + goodNames.url + '/' + b.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
		id('aButton').style.backgroundImage = 'url(https://bocracy.com/assets/' + badNames.url + '/' + a.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
		id('bName').style.fontSize = (10-(id('bName').innerHTML.length/2)||2) + "vw";
		
		id('aName').style.fontSize = Math.min((10-(id('aName').innerHTML.length/2)||2),id('bName').style.fontSize.replace('vw','')) + "vw";
		
		id('bName').style.fontSize = Math.min(id('bName').style.fontSize.replace('vw',''),id('aName').style.fontSize.replace('vw','')) + "vw";
		if (id('bName').style.fontSize.replace('vw','')<2) {
			id('bName').style.fontSize = "2vw";
			id('aName').style.fontSize = "2vw";
		}
	}, all : function() {
		game.refresh.display();
		window.requestAnimationFrame(game.refresh.all);
	}}, win : function(side) {
		if (side == 'green') {
			if (current.includes('+')) var coinsEarned = bad[a.name].info[2] * 0.2;
			else if (newStats == 'true') var coinsEarned = bad[a.name].info[2] * 0.05;
			else var coinsEarned = 10;
			if (localStorage.coins == undefined) localStorage.coins = coinsEarned;
			else localStorage.coins = parseFloat(localStorage.coins) + coinsEarned;
			id('sound').src = "snd/victory.wav";
			id('audio').load(); id('audio').play();
			id('overlayText').innerHTML = '<div>VICTORY</div><div id="overlayStats"><h5><span>' + neatTime(new Date().getTime() - base) + '</span>sec</h5><h5><img src="img/rbo.png"/>' + coinsEarned + '</h5><h5><span>' + clicks + '</span>clk</h5></div>';
			id('overlay').style.backgroundColor = '#64DD17';
		} else {
			id('sound').src = "snd/loss.wav";
			id('audio').load(); id('audio').play();
			id('overlayText').innerHTML = '<div>DEFEAT</div><div id="overlayStats"><h5><span>' + neatTime(new Date().getTime() - base) + '</span>sec</h5><h5><span>' + clicks + '</span>clk</h5></div>';
			id('overlay').style.backgroundColor = '#b30005';
		}
		id('restartText').style.display = "none";
		setTimeout(function(){id('restartText').style.display = "block"}, 750);
		id('overlay').style.display = "block";
		game.on = 'false';
	}, attack : function(atk) {
		if (game.on == 'true') {
			if (atk == 'green') {
				a.health -= b.attack;
				a.health = Math.max(0, a.health);
				a.health = Math.min(a.orig_health, a.health);
				var weapon  = 'sword';
				if (newStats == 'true')	{ if (good[b.name].info[5] != undefined) weapon = good[b.name].info[5]; }
				if (('url("img/' + weapon + '.png")') != id('bSword').style.backgroundImage) id('bSword').style.backgroundImage = 'url("img/' + weapon + '.png")';
				id('bSword').style.display = "block";
				id('bSword').style.WebkitAnimationName = "bSword";
				id('bSword').style.animationName = "bSword";
				id('clickToStart').style.display = 'none';
				setTimeout("id('bSword').style.display = 'none';id('bSword').style.WebkitAnimationName = '';id('bSword').style.animationName = '';", 100);
				clicks++;
			} else if (atk == 'red') {
				b.health -= a.attack;
				b.health = Math.max(0, b.health);
				b.health = Math.min(b.orig_health, b.health);
				var weapon  = 'sword';
				if (newStats == 'true')	{ if (bad[a.name].info[5] != undefined) weapon = bad[a.name].info[5]; }
				if (('url("img/' + weapon + '.png")') != id('aSword').style.backgroundImage) id('aSword').style.backgroundImage = 'url("img/' + weapon + '.png")';
				id('aSword').style.display = "block";
				id('aSword').style.WebkitAnimationName = "aSword";
				id('aSword').style.animationName = "aSword";
				setTimeout("id('aSword').style.display = 'none';id('aSword').style.WebkitAnimationName = '';id('aSword').style.animationName = '';", 100);
			}
			if (b.health == 0 || a.health == 0) game.win(atk);
		}
	}, heal : function(side) {
		if (game.on == 'true') {
			if (side == 'green') {
				b.health += b.heal; b.health = Math.max(0, b.health);
				b.health = Math.min(b.orig_health, b.health);
			} else if (side == 'red') {
				a.health += a.heal; a.health = Math.max(0, a.health);
				a.health = Math.min(a.orig_health, a.health);
			}
		}
	}
};
function load() {
	clicks = 0;
	if (!isMobile.any()) {
		id('portrait').style.display = 'none';
		id('bSection').style.display = 'block';
		id('aSection').style.display = 'block';
		id('bSword').style.display = '';
		id('aSword').style.display = '';
		id('overlay').style.display = '';
	}
	if (id('sound').src.includes("snd/loss.wav") || id('sound').src.includes("snd/victory.wav")) {
		id('sound').src = 'snd/sound.wav';
		id('audio').load(); id('audio').play();
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
		default: newStats = 'false'; badNames.url = "b"; goodNames.url = "b";
	}
	if (newStats == 'true' && localStorage['has' + current.toString().charAt(0).toUpperCase() + current.toString().substring(1).replace('+', '')] == undefined) {
		localStorage[goodNames[current][Math.floor(Math.random()*goodNames[current].length)]] = 'true';
		localStorage['has' + current.toString().charAt(0).toUpperCase() + current.toString().substring(1).replace('+', '')] = 'true';
	} 
	a.name = badNames[current.replace('+', 'Boss')][Math.floor(Math.random() * badNames[current.replace('+', 'Boss')].length)];
	b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)];
	if (newStats == 'false') {
		while (b.name == a.name) { b.name = goodNames[current][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)]; }
		a.health = Math.min(Math.random() * 2250, 2000);
		a.orig_health = a.health;
		a.attack = Math.max(32, Math.random() * 40);
		a.speed = 450;
		a.heal = Math.random() * 12;
		b.health = parseFloat(a.health * 0.85);
		b.orig_health = b.health;
		b.attack = parseFloat(a.attack * 0.85);
		b.heal = parseFloat(a.heal * 0.85);
	} else if (newStats == 'true') {
		while (localStorage[b.name] == 'false') { b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)]; }
		a.health = bad[a.name].stats[1];
		a.orig_health = a.health;
		a.attack = bad[a.name].stats[0];
		a.speed = 450;
		a.heal = bad[a.name].stats[2];
		b.health = good[b.name].stats[1];
		b.orig_health = b.health;
		b.attack = good[b.name].stats[0];
		b.heal = good[b.name].stats[2];;
	}
	if (current.includes('+')) {
		var stats = ['attack', 'health', 'speed', 'heal', 'orig_health'];
		for (i = 0; i < stats.length; i++) {
			if (stats[i] == 'speed') a.speed / 1.25;
			else a[stats[i]] *= 1.25;
		}
	}	
}
function restart() {
	game.on = 'false';
	id('clickToStart').style.display = 'block';
	id('overlay').style.display = 'none';
	load();
}
function neatTime(time) {
	var h = Math.floor(time / 3600000);
	var m = Math.floor(time / 60000) - (h * 60);
	var s = Math.floor(time / 1000) - (m * 60);
          if (h > 0) s = s - (m * 60);
	time = '';
	if (h >= 1) { time = h + ':' }
	if (m >= 1) { time += m + ':' }
	time += s;
	return time;
}
load();
setInterval('game.attack("red");game.heal("red")', a.speed);
game.refresh.all();
document.body.ontouchmove=function(e){e.preventDefault()}