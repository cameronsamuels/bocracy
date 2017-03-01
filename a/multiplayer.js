		var a = {
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

					id('bButton').style.backgroundImage = 'url(https://bocracy.com/assets/' + goodNames.url + '/' + b.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
					id('aButton').style.backgroundImage = 'url(https://bocracy.com/assets/' + badNames.url + '/' + a.name.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + '.png)';
				},
				all : function() {
					game.refresh.display();
					window.requestAnimationFrame(game.refresh.all);
				}
			},
			win : function(side) {
				id('overlayText').innerHTML = 'WINNER: ' + side + '!!!';
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
			if (!isMobile.any()) id('computer').style.display = "block";
			else {
				id('rotate').style.display = "block";
				id('rotateInstructions').style.display = "block";
			}

			switch (current.replace('+', '')) {
				case "aonarchy":
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
				case "citatian":
					newStats = 'true';
					badNames.url = "b";
					goodNames.url = "c";
					break;
				case "cerotopis":
					newStats = 'false';
					badNames.url = "c";
					goodNames.url = "c";
					break
				case "citopia":
					newStats = 'false';
					badNames.url = "c";
					goodNames.url = "c";
					break;
				default:
					badNames.url = "b";
					goodNames.url = "b";
			}

			a.name = badNames[current.replace('+', 'Boss')][Math.floor(Math.random() * badNames[current.replace('+', 'Boss')].length)];
			a.health = Math.min(Math.random() * 2250, 2000);
			a.orig_health = a.health;
			a.attack = Math.max(32, Math.random() * 40);
			a.speed = Math.min(Math.random() * 1000, 500);
			a.heal = Math.random() * 12;

			b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)];
			while (b.name == a.name) {
				b.name = goodNames[current.replace('+', 'Boss')][Math.floor(Math.random() * goodNames[current.replace('+', 'Boss')].length)];
			}
			b.health = a.health;
			b.orig_health = a.orig_health;
			b.attack = a.attack;
			b.heal = a.heal;

			game.on = 'true';
		}

		load();
		game.refresh.all();