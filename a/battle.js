		var newStats, a = {
			name: '',
			health: 0,
			attack: 0,
			speed: 0
		}, b = {
			name: '',
			health: 0,
			attack: 0,
			speed: 0
		}, current = 'original', newStats;
		if (window.location.hash != '') current = window.location.hash.toString().replace('#', '');
		var game = {
			on : 'false',
			refresh : {
				display : function() {
					var bName = b.name;
					while (bName.includes('_') || bName.includes('-')) {
						bName = bName.toString().replace('_', '-');
						bName = bName.replace('--', '^');
						bName = bName.replace('-', ' ');
					}
					while (bName.includes('^')) {
						bName = bName.replace('^', '-');
					}
					bName = bName.replace('D', '.');
					id('bName').innerHTML = bName + ' ' + goodNames.url;

					var aName = a.name;
					while (aName.includes('_') || aName.includes('-')) {
						aName = aName.toString().replace('_', '-');
						aName = aName.replace('--', '^');
						aName = aName.replace('-', ' ');
					}
					while (aName.includes('^')) {
						aName = aName.replace('^', '-');
					}
					aName = aName.replace('D', '.');
					id('aName').innerHTML = aName + ' ' + badNames.url;

					id('bHealthBar').style.width = (b.health / b.orig_health)*100 + '%';
					id('aHealthBar').style.width = (a.health / a.orig_health)*100 + '%';

					id('bButton').style.backgroundImage = 'url(https://playbclick.com/assets/' + goodNames.url + '/' + b.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
					id('aButton').style.backgroundImage = 'url(https://playbclick.com/assets/' + badNames.url + '/' + a.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
				},
				all : function() {
					game.refresh.display();
					window.requestAnimationFrame(game.refresh.all);
				}
			},
			win : function(side) {
				if (side == 'green') {
					if (current.includes('+')) { var coinsEarned = bad[a.name].info[2] * 0.05; }
					else if (newStats == 'true') { var coinsEarned = bad[a.name].info[2] * 0.02; }
					else { var coinsEarned = 5; }
					if (localStorage.coins == undefined) localStorage.coins = coinsEarned;
					else localStorage.coins = parseFloat(localStorage.coins) + coinsEarned;
					id('overlayText').innerHTML = 'WINNER: ' + side + '!!!<br /><h5>You gained ' + coinsEarned + ' redbacks!</h5>';
				} else {
					id('sound').src = "snd/loss.wav";
					id('audio').load(); id('audio').play();
					id('overlayText').innerHTML = 'WINNER: ' + side + '!!!';
				}
				id('overlay').style.display = "block";
				game.on = 'false';
			},
			attack : function(atk) {
				if (game.on == 'true') {
					if (atk == 'green') {
						a.health -= b.attack;
						a.health = Math.max(0, a.health);
						a.health = Math.min(a.orig_health, a.health);
						id('bSword').style.display = "block";
						id('bSword').style.WebkitAnimationName = "bSword";
						id('bSword').style.animationName = "bSword";
						setTimeout("id('bSword').style.display = 'none';id('bSword').style.WebkitAnimationName = '';id('bSword').style.animationName = '';", 100);
					} else if (atk == 'red') {
						b.health -= a.attack;
						b.health = Math.max(0, b.health);
						b.health = Math.min(b.orig_health, b.health);
						id('aSword').style.display = "block";
						id('aSword').style.WebkitAnimationName = "aSword";
						id('aSword').style.animationName = "aSword";
						setTimeout("id('aSword').style.display = 'none';id('aSword').style.WebkitAnimationName = '';id('aSword').style.animationName = '';", 100);
					}
					if (b.health == 0 || a.health == 0) {
						game.win(atk);
					}
				}
			},
			heal : function(side) {
				if (game.on == 'true') {
					if (side == 'green') {
						b.health += b.heal;
						b.health = Math.max(0, b.health);
						b.health = Math.min(b.orig_health, b.health);
					} else if (side == 'red') {
						a.health += a.heal;
						a.health = Math.max(0, a.health);
						a.health = Math.min(a.orig_health, a.health);
					}
				}
			}
		};
		function load() {
			if (id('sound').src.includes("snd/loss.wav")) {
				id('sound').src = 'snd/sound.wav';
				id('audio').load(); id('audio').play();
			}
			switch (current.replace('+', '')) {
				case "aonarchy":
					newStats = 'true';
					badNames.url = "b";
					goodNames.url = "a";
					break;
				case "ciftian":
					newStats = 'true';
					badNames.url = "b";
					goodNames.url = "c";
					break;
				case "ammunist":
					newStats = 'true';
					badNames.url = "b";
					goodNames.url = "a";
					break;
				case "cerotopis":
					newStats = 'false';
					badNames.url = "c";
					goodNames.url = "c";
					break;
				case "citopia":
					newStats = 'false';
					badNames.url = "c";
					goodNames.url = "c";
					break;
				case "citatian":
					newStats = 'true';
					badNames.url = "b";
					goodNames.url = "c";
					break;
				default:
					newStats = 'false';
					badNames.url = "b";
					goodNames.url = "b";
			}

			a.name = badNames[current.replace('+', 'Boss')][Math.floor(Math.random() * badNames[current.replace('+', 'Boss')].length)];

			// if (localStorage.hasOwnedGood != 'true') { unlock('mystery_pack'); localStorage.hasOwnedGood = 'true'; } 
			b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)];
			// if (newStats == 'true') {
			// 	while (localStorage[b.name] != 'true') {
			// 		b.name = goodNames[current][Math.floor(Math.random() * goodNames[current].length)];
			// 	}
			// }

			if (newStats == 'false') {
				while (b.name == a.name) {
					b.name = goodNames[current][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)];
				}
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
				while (localStorage[b.name] == 'false') {
					b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)];
				}
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

			game.on = 'true';
		}

		window.addEventListener("orientationchange", function() { location.reload(); }, false);

		load();
		setInterval('game.attack("red");game.heal("red")', a.speed);
		game.refresh.all();