		function id(id) { return document.getElementById(id) }

		var isMobile = {
		    Android: function() { return navigator.userAgent.match(/Android/i); },
		    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		    Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
		    any: function() { return (isMobile.Android() || isMobile.iOS() || isMobile.Windows()); }
		};

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
		}, current = 'original';
		if (window.location.hash != '') current = window.location.hash.toString().replace('#', '');
		var game = {
			on : 'false',
			refresh : {
				display : function() {
					if (!isMobile.any()) {
						var clickables = document.querySelectorAll('[ontouchend]');
						for (i = 0; i < clickables.length; i++) {
							clickables[i].setAttribute('onclick', clickables[i].getAttribute('ontouchend'));
						}
					}

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
					if (newStats == 'true') {
						if (current.includes('+')) { var coinsEarned = bad[a.name].info[2] * 0.05; }
						else { var coinsEarned = bad[a.name].info[2] * 0.02; }
						if (localStorage.coins == undefined) localStorage.coins = coinsEarned;
						else localStorage.coins = parseFloat(localStorage.coins) + coinsEarned;
						id('overlayText').innerHTML = 'WINNER: ' + side + '!!!<br /><h5>You gained ' + coinsEarned + ' coins!</h5>';
					} else {
						id('overlayText').innerHTML = 'WINNER: ' + side + '!!!';
					}
				} else {
					id('overlayText').innerHTML = 'WINNER: ' + side + '!!!';
				}
				
				id('overlay').style.display = "block";
				game.on = 'false';
				if (side == 'red') { id('sound').src = "loss.wav"; id('audio').load(); id('audio').play(); }
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
			switch (current.replace('+', '')) {
				case "aonarchy":
					newStats = 'true';
					badNames.url = "b";
					goodNames.url = "a";
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
				a.health = Math.max(Math.random() * 2000, 1000);
				a.orig_health = a.health;
				a.attack = Math.random() * 20;
				a.speed = Math.max(Math.random() * 1000, 450);
				a.heal = Math.random() * 20;

				b.health = Math.max(Math.random() * 2000, 800);
				b.orig_health = b.health;
				b.attack = Math.max(Math.random() * 10, 7);
				b.heal = Math.random() * 15;
			} else if (newStats == 'true') {
				a.health = bad[a.name].stats[1];
				a.orig_health = a.health;
				a.attack = bad[a.name].stats[0];
				a.speed = Math.max(Math.random() * 1000, 450);
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
			setInterval('game.attack("red");game.heal("red")', a.speed);
			game.refresh.all();
		}

		window.addEventListener("orientationchange", function() { location.reload(); }, false);

		load();