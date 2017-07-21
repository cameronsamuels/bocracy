if (location.protocol.includes('http')) var kiipInstance = new Kiip('fca374961f67f78f76e4072c37997e4d');
var bSword, aSword, bgPos = 0, newStats, a = { name: '', health: 0, attack: 0, speed: 0 },
b = { name: '', health: 0, attack: 0 }, base, clicks = 0,
current = battles[Math.floor(Math.random() * battles.length)], series = {w:window.location.hash.includes("series"),t:1,c:0,k:0};
if (window.location.hash != '' && window.location.hash != '#series') current = window.location.hash.toString().replace('#', '').replace('series','');
var game = { on : 'false',
	refresh : { all : function() {
		id('bHealthBar').style.width = (b.health / b.orig_health)*100 + '%';
		id('aHealthBar').style.width = (a.health / a.orig_health)*100 + '%';
		window.requestAnimationFrame(game.refresh.all);
	}}, win : function(side) {
		if (series.w) {
			if (side == 'green') {
				series.c = parseFloat(series.c) + Math.round(Math.max((a.attack/b.attack)*20, 10));
				series.k++;
				var aName = a.name;
				do {
					a.name = badNames[current.replace('+', 'Boss')][Math.floor(Math.random() * badNames[current.replace('+', 'Boss')].length)];
				} while (a.name == aName);
				a.health = bad[a.name].stats[1];
				a.orig_health = a.health;
				a.attack = bad[a.name].stats[0];
				a.speed = 450;
				a.heal = bad[a.name].stats[2];
				b.health = Math.min(b.orig_health, b.health*1.3);
				updateCharacter();
			} else {
				series.t++;
				if (series.t > localStorage.sc) {
					series.c = Math.round(series.c * series.t);
					if (localStorage.coins == undefined) localStorage.coins = series.c;
					else localStorage.coins = parseFloat(localStorage.coins) + series.c;
					id('overlayText').innerHTML = '<div>GAME OVER</div><div id="overlayStats"><h5><span>' + series.k + '</span>kls</h5><h5><span>' + neatTime(new Date().getTime() - base) + '</span>sec</h5><h5><img src="http://thebclickteam.tk/lib/boc/img/rbo.svg"/>' + series.c + '</h5><h5><span>' + clicks + '</span>clk</h5><h5><span>' + localStorage.sc + '</span>dth</h5></div>';
					id('overlay').style.backgroundColor = '#b30005';
					id('restartText').style.display = "none";
					setTimeout(function(){id('restartText').style.display = "block"}, 750);
					id('overlay').style.display = "block";
					game.on = 'false';
					series.t = 1;
					series.k = 0;
					return;
				}
				b.name = localStorage['b' + series.t];
				b.health = good[b.name].stats[1];
				b.orig_health = b.health;
				b.attack = good[b.name].stats[0];
				b.heal = good[b.name].stats[2];
				updateCharacter();
			}
		} else {
		game.on = 'false';
		if (side == 'green') {
			if (current.includes('+')) var coinsEarned = Math.round(Math.max((a.attack/b.attack)*30, 25));
			else var coinsEarned = Math.round(Math.max((a.attack/b.attack)*20, 10));
			if (localStorage.coins == undefined) localStorage.coins = coinsEarned;
			else localStorage.coins = parseFloat(localStorage.coins) + coinsEarned;
			id('overlayText').innerHTML = '<div>VICTORY</div><div id="overlayStats"><h5><span>' + neatTime(new Date().getTime() - base) + '</span>sec</h5><h5><img src="http://thebclickteam.tk/lib/boc/img/rbo.svg"/>' + coinsEarned + '</h5><h5><span>' + clicks + '</span>clk</h5></div>';
			id('overlay').style.backgroundColor = '#64DD17';
			var rewardable = ['sharkanator', 'bentacrabb_2D1', 'b--2-mobile-cannon', 'sub-batalifor', 'teratul_rider', 'defensive_destroyer', 'batalifor-sentry', 'b--torv-troops', 'dark_knight'];
			if (rewardable.indexOf(a.name) != -1) kiipInstance.postMoment('defeating the ' + a.name);
		} else {
			id('overlayText').innerHTML = '<div>DEFEAT</div><div id="overlayStats"><h5><span>' + neatTime(new Date().getTime() - base) + '</span>sec</h5><h5><span>' + clicks + '</span>clk</h5></div>';
			id('overlay').style.backgroundColor = '#b30005';
		}
		id('restartText').style.display = "none";
		setTimeout(function(){id('restartText').style.display = "block"}, 750);
		id('overlay').style.display = "block";
		id('bSection').style.backgroundPosition = '0% 80%';
		id('aSection').style.backgroundPosition = '50% 80%';
		bgPos = 0;
		}
	}, attack : function(atk) {
		if (game.on == 'true') {
			if (atk == 'green') {
				a.health -= b.attack;
				a.health = Math.max(0, a.health);
				a.health = Math.min(a.orig_health, a.health);
				var newone = id('bSword').cloneNode(true);
				id('bSword').parentNode.replaceChild(newone, id('bSword'));
				id('bSword').style.display = "block";
				id('bSword').style.animationName = "bSword";
				id('clickToStart').style.display = 'none';
				clearTimeout(bSword);
				bSword = setTimeout("id('bSword').style.display = 'none';id('bSword').style.animationName = '';", 150);
				clicks++;
				if (a.health == 0) game.win('green');
				bgPos -= 10;
				if (bgPos < -(window.innerWidth/4)) bgPos = -(window.innerWidth/4);
				id('bSection').style.backgroundPosition = 'calc(0% + ' + bgPos + 'px) 80%';
				id('aSection').style.backgroundPosition = 'calc(50% + ' + bgPos + 'px) 80%';
			} else if (atk == 'red') {
				b.health -= a.attack;
				b.health = Math.max(0, b.health);
				b.health = Math.min(b.orig_health, b.health);
				var newone = id('aSword').cloneNode(true);
				id('aSword').parentNode.replaceChild(newone, id('aSword'));
				id('aSword').style.display = "block";
				id('aSword').style.animationName = "aSword";
				clearTimeout(aSword);
				aSword = setTimeout("id('aSword').style.display = 'none';id('aSword').style.animationName = '';", 100);
				if (b.health == 0) game.win('red');
				bgPos += 10;
				if (bgPos > 0) bgPos = 0;
				id('bSection').style.backgroundPosition = 'calc(0% + ' + bgPos + 'px) 80%';
				id('aSection').style.backgroundPosition = 'calc(50% + ' + bgPos + 'px) 80%';
			}
			document.querySelector('#aHealth p').innerHTML = Math.round(a.health) + '/' + Math.round(a.orig_health);
			document.querySelector('#bHealth p').innerHTML = Math.round(b.health) + '/' + Math.round(b.orig_health);
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
	if (!window.location.hash.includes('#') || window.location.hash == '#series') current = battles[Math.floor(Math.random() * battles.length)];
	switch (current.replace('+', '')) {
		case "aonarchy": newStats = 'true'; badNames.url = "b"; goodNames.url = "a"; break;
		case "alief": newStats = 'true'; badNames.url = "b"; goodNames.url = "a"; break;
		case "ammunist": newStats = 'true'; badNames.url = "b"; goodNames.url = "a"; break;
		case "cerotopis": newStats = 'false'; badNames.url = "b"; goodNames.url = "c"; break;
		case "alinar": newStats = 'false'; badNames.url = "b"; goodNames.url = "a"; break;
		case "eora": newStats = 'true'; badNames.url = "b"; goodNames.url = "a"; break;
		case "cadrinal": newStats = 'false'; badNames.url = "b"; goodNames.url = "a"; break;
		case "acitus": newStats = 'false'; badNames.url = "c"; goodNames.url = "a"; break;
		default: newStats = 'false'; badNames.url = "b"; goodNames.url = "b";
	}
	if (newStats == 'true' && localStorage['has' + current.toString().charAt(0).toUpperCase() + current.toString().substring(1).replace('+', '')] == undefined) {
		localStorage[goodNames[current][Math.floor(Math.random()*goodNames[current].length)]] = 'true';
		localStorage['has' + current.toString().charAt(0).toUpperCase() + current.toString().substring(1).replace('+', '')] = 'true';
	} 
	if (series.w) b.name = localStorage.b1;
	else {
		var bName = b.name;
		do {
			b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)];
			
		} while (b.name == bName);
	}
	series.c = 0;
	var aName = a.name;
	do {
		a.name = badNames[current.replace('+', 'Boss')][Math.floor(Math.random() * badNames[current.replace('+', 'Boss')].length)];
	} while (a.name == aName);
	if (newStats == 'false') {
		while (b.name == a.name) { b.name = goodNames[current][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)]; }
		a.health = Math.max(Math.random() * 2000, 1500);
		a.attack = Math.max(20, Math.random() * 35);
		a.heal = Math.random() * 15;
		b.health = parseFloat(a.health * 0.8);
		b.attack = parseFloat(a.attack * 0.8);
		b.heal = parseFloat(a.heal * 0.8);
	} else if (newStats == 'true') {
		while (localStorage[b.name] == 'false') { b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)]; }
		a.health = bad[a.name].stats[1];
		a.attack = bad[a.name].stats[0];
		a.heal = bad[a.name].stats[2];
		b.health = good[b.name].stats[1];
		b.attack = good[b.name].stats[0];
		b.heal = good[b.name].stats[2];
	}
	if (mob()) a.speed = 300;
	else a.speed = 450;
	b.orig_health = b.health;
	a.orig_health = a.health;
	if (current.includes('+')) {
		var stats = ['attack', 'health', 'speed', 'heal', 'orig_health'];
		for (i = 0; i < stats.length; i++) {
			if (stats[i] == 'speed') a.speed / 1.25;
			else a[stats[i]] *= 1.25;
		}
	}
	document.querySelector('#aHealth p').innerHTML = Math.round(a.health) + '/' + Math.round(a.orig_health);
	document.querySelector('#bHealth p').innerHTML = Math.round(b.health) + '/' + Math.round(b.orig_health);
	id('title').innerHTML = current;
	var img = new Image();
	img.onload = function() {
		id('bSection').style.backgroundImage = 'url(http://thebclickteam.tk/lib/boc/bg/' + current.replace('+', '') + '.svg)';
		id('aSection').style.backgroundImage = 'url(http://thebclickteam.tk/lib/boc/bg/' + current.replace('+', '') + '.svg)';
		id('aButton').style.backgroundColor = 'transparent';
		id('bButton').style.backgroundColor = 'transparent';
	};
	img.onerror = function() {
		id('bSection').style.backgroundImage = '';
		id('aSection').style.backgroundImage = '';
		id('aButton').style.backgroundColor = '';
		id('bButton').style.backgroundColor = '';
	};
	img.src = 'http://thebclickteam.tk/lib/boc/bg/' + current.replace('+', '') + '.svg';
	id('refreshButton').style.display = "";
	updateCharacter();
}
function updateCharacter() {
	var bName = b.name;
	bName = bName.replace('D', '.').replace('__', '^').replace('--', '^').replace('_', ' ').replace('_', ' ').replace('-', ' ').replace('-', ' ').replace('^', '-').replace('Boss', ' boss');
	id('bName').innerHTML = bName + ' ' + goodNames.url;
	var aName = a.name;
	aName = aName.replace('D', '.').replace('__', '^').replace('--', '^').replace('_', ' ').replace('_', ' ').replace('-', ' ').replace('-', ' ').replace('^', '-').replace('Boss', ' boss');
	id('aName').innerHTML = aName + ' ' + badNames.url;
		id('bButton').style.backgroundImage = 'url(https://bocracy.com/assets/' + goodNames.url + '/' + b.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
	id('aButton').style.backgroundImage = 'url(https://bocracy.com/assets/' + badNames.url + '/' + a.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
//	id('bName').style.fontSize = Math.abs(9-(id('bName').innerHTML.length/2)||2) + "vw";
	
//	id('aName').style.fontSize = Math.abs(Math.min((9-(id('aName').innerHTML.length/2)||2),id('bName').style.fontSize.replace('vw',''))) + "vw";
	
//	id('bName').style.fontSize = Math.abs(Math.min(id('bName').style.fontSize.replace('vw',''),id('aName').style.fontSize.replace('vw',''))) + "vw";
//	if (id('bName').style.fontSize.replace('vw','')<2) {
//		if (id('bName').style.fontSize.replace('vw','')<0) {
//			id('bName').style.fontSize = '0.5vw';
//			id('aName').style.fontSize = id('bName').style.fontSize;
//		} else {
//			id('bName').style.fontSize = (parseFloat(id('bName').style.fontSize.replace('vw', '')) + 0.5) + 'vw';
//			id('aName').style.fontSize = id('bName').style.fontSize;
//		}
//	}
	id('bName').style.fontSize = (30-id('bName').innerHTML.length)/5 + 'vw';
	id('aName').style.fontSize = Math.min((30-id('aName').innerHTML.length)/5,id('bName').style.fontSize.replace('vw', '')) + 'vw';
	if (id('aName').style.fontSize.replace('vw', '') < 1) id('aName').style.fontSize = (parseFloat(id('aName').style.fontSize.replace('vw', ''))+0.8) + 'vw';
	id('bName').style.fontSize = Math.min((30-id('bName').innerHTML.length)/5,id('aName').style.fontSize.replace('vw', '')) + 'vw';
	var aw  = 'sword', bw = 'sword';
	try {
		if (bad[a.name.replace('--', '__').replace('-', '_').replace('-', '_').replace('-', '_')].info[5] != undefined) aw = bad[a.name.replace('--', '__').replace('-', '_').replace('-', '_').replace('-', '_')].info[5];
	} catch (ex) {}
	try {
		if (good[b.name.replace('--', '__').replace('-', '_').replace('-', '_').replace('-', '_')].info[5] != undefined) bw = good[b.name.replace('--', '__').replace('-', '_').replace('-', '_').replace('-', '_')].info[5];
	} catch (ex){}
	id('bSword').style.backgroundImage = 'url("http://thebclickteam.tk/lib/boc/wpn/' + bw + '.svg")';
	id('aSword').style.backgroundImage = 'url("http://thebclickteam.tk/lib/boc/wpn/' + aw + '.svg")';
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