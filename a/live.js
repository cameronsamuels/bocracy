function id(id) { return document.getElementById(id) }

var isMobile = {
	Android: function() { return navigator.userAgent.match(/Android/i); },
	iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
   	any: function() { return (isMobile.Android() || isMobile.iOS() || isMobile.Windows()); }
};

var goodNames = {
			url : '',
			original : ['santa', 'skater', 'saw', 'spiky', 'electric', 'shark', 'ghost', 'dragonball', 'giant', 'spear', 'superhero'],
			bocracy : ['knight', 'archer', 'barbed', 'flower', 'muscle', 'trump'],
			dinotera : ['triceratops', 't--rex', 'mosasaur', 'apatosaurus', 'carnotaurus', 'shark'],
			fantasy : ['dovahkinn', 'mage', 'superhero', 'giant', 'dragonball', 'ghost'],
			horror : ['killer', 'carnotaurus', 'trump', 'ghost', 'shark'],
			aonarchy : [],
			aonarchyBoss : [],
			ammunist : [],
			ammunistBoss : [],
			ciftian : [],
			ciftianBoss : [],
			citatian : [],
			cerotopis : ['overlapping', 'light-warrior', 'paramedics', 'triple-odd', 'night', 'enslaved'],
			bictatorship : ['worldwar', 'superhero', 'giant', 'barbed', 'muscle', 'electric', 'trump'],
			weaklings : ['regular', 'lowercase', 'handrawn', 'fancy', 'curved', 'thin'],
			christmas : ['santa', 'candycane'],
			team : ['cameron', 'faith', 'ethan', 'alwin', 'michael', 'srisha', 'cooper', 'jessica', 'vishwam']
}, badNames = {
			url : '',
			original : ['saw', 'spiky', 'electric', 'shark', 'ghost', 'dragonball', 'giant', 'spear', 'superhero'],
			bocracy : ['knight', 'archer', 'barbed', 'flower', 'muscle', 'trump'],
			dinotera : ['apatosaurus', 'carnotaurus', 'shark'],
			fantasy : ['dovahkinn', 'mage', 'superhero', 'giant', 'dragonball', 'ghost'],
			horror : ['killer', 'carnotaurus', 'trump', 'ghost', 'shark'],
			aonarchy : [],
			aonarchyBoss : [],
			ammunist : [],
			ammunistBoss : [],
			ciftian : [],
			ciftianBoss : [],
			citatian : [],
			cerotopis : ['overlapping', 'light-warrior', 'paramedics', 'triple-odd', 'night', 'enslaved'],
			bictatorship : ['worldwar', 'superhero', 'giant', 'barbed', 'muscle', 'electric', 'trump'],
			weaklings : ['regular', 'lowercase', 'handrawn', 'fancy', 'curved', 'thin'],
			christmas : ['santa', 'candycane', 'reindeer'],
			team : ['cameron', 'faith', 'ethan', 'alwin', 'michael', 'srisha', 'cooper', 'jessica', 'vishwam']
}, good = { }, bad = { };
function object(nm, stats, info, other) {
	/*  nm = name as string;
		stats = [attack as float, health as float, heal as float];
		info = [category as string, side as boolean, cost as float, letter as string, name as string, release as date, duration_hours as float]
		other = {  }*/
	this.name = nm;
	this.stats = stats;
	this.info = info;
	this.other = other;
	if (localStorage[nm] == undefined) localStorage[nm] = 'false';
	if (info[1] == 'true') goodNames[info[0].replace('+', 'Boss')].push(nm);
	else badNames[info[0].replace('+', 'Boss')].push(nm);
	if (goodNames[info[0] + 'Boss'] != undefined && info[1] == 'true') goodNames[info[0] + 'Boss'].push(nm);
}
good.goblin_horde = new object('goblin_horde', [50, 3200, 5], ['aonarchy', 'true', 1500, 'a', 'goblin_horde']);
good.goblin = new object('goblin', [15, 1000, 10], ['aonarchy', 'true', 250, 'a', 'goblin']);
good.warrior = new object('warrior', [50, 3000, 10], ['aonarchy', 'true', 1500, 'a', 'warrior']);
good.archer = new object('archer', [40, 1250, 20], ['aonarchy', 'true', 750, 'a', 'archer']);
good.phantom = new object('phantom', [30, 1500, 15], ['aonarchy', 'true', 550, 'a', 'phantom']);
good.anonymous = new object('anonymous', [20, 1500, 15], ['aonarchy', 'true', 500, 'a', 'anonymous']);
good.a87_cannon = new object('a87_cannon', [60, 2000, 5], ['aonarchy', 'true', 1500, 'a', 'a87_cannon']);
good.witchcraft = new object('witchcraft', [35, 1500, 20], ['aonarchy', 'true', 600, 'a', 'witchcraft']);

bad.sharkanator = new object('sharkanator', [100, 5000, 0], ['aonarchy', 'false', 2500, 'a', 'sharkanator']);
bad.bentacrabb_2D1 = new object('bentacrabb_2D1', [50, 3200, 5], ['aonarchy', 'false', 1500, 'a', 'bentacrabb_2D1']);
bad.bylo_ken = new object('bylo_ken', [35, 1500, 20], ['aonarchy', 'false', 600, 'a', 'bylo_ken']);
bad.d15_cannon = new object('d15_cannon', [60, 2000, 5], ['aonarchy', 'false', 1500, 'a', 'd15_cannon']);

bad.sharkanatorBoss = new object('sharkanatorBoss', [100, 5000, 0], ['aonarchy+', 'false', 2500, 'a', 'sharkanatorBoss']);
bad.bylo_kenBoss = new object('bylo_kenBoss', [35, 1500, 20], ['aonarchy+', 'false', 600, 'a', 'bylo_kenBoss']);
bad.d15_cannonBoss = new object('d15_cannonBoss', [60, 2000, 5], ['aonarchy+', 'false', 1500, 'a', 'd15_cannonBoss']);

good.triple_odd = new object('triple_odd', [40, 2500, 20], ['ciftian', 'true', 1000, 'c', 'triple_odd']);
good.night = new object('night', [25, 1250, 20], ['ciftian', 'true', 750, 'c', 'night']);
good.light_warrior = new object('light_warrior', [60, 2250, 15], ['ciftian', 'true', 1500, 'c', 'light_warrior']);
good.enslaved = new object('enslaved', [25, 2250, 10], ['ciftian', 'true', 850, 'c', 'enslaved']);

bad.ultacrabb = new object('ultacrabb', [60, 2000, 5], ['ciftian', 'false', 1500, 'a', 'ultacrabb']);
bad.batalifor_1D0 = new object('batalifor_1D0', [15, 2000, 5], ['ciftian', 'false', 1000, 'a', 'batalifor_1D0']);
bad.f87_cannon = new object('f87_cannon', [40, 1250, 20], ['ciftian', 'false', 750, 'a', 'f87_cannon']);
bad.dark_knight = new object('dark_knight', [60, 2000, 5], ['ciftian', 'false', 1500, 'a', 'dark_knight']);

bad.f87_cannonBoss = new object('f87_cannonBoss', [40, 1250, 20], ['ciftian+', 'false', 750, 'a', 'f87_cannonBoss']);
bad.ultacrabbBoss = new object('ultacrabbBoss', [60, 2000, 5], ['ciftian+', 'false', 1500, 'a', 'ultacrabbBoss']);
bad.dark_knightBoss = new object('dark_knightBoss', [60, 2000, 5], ['ciftian+', 'false', 1500, 'a', 'dark_knightBoss']);

bad.batalifor_sentry = new object('batalifor_sentry', [60, 2000, 5], ['ammunist', 'false', 1500, 'a', 'batalifor_sentry']);
bad.batalifor_2D4 = new object('batalifor_2D4', [30, 1000, 20], ['ammunist', 'false', 450, 'a', 'batalifor_2D4']);
bad.b__torv_troops = new object('b__torv_troops', [30, 1500, 15], ['ammunist', 'false', 550, 'a', 'b__torv_troops']);
bad.b__torv_commander = new object('b__torv_commander', [50, 3000, 10], ['ammunist', 'false', 1000, 'a', 'b__torv_commander']);
bad.b_shuttle = new object('b_shuttle', [50, 3000, 10], ['ammunist', 'false', 1500, 'a', 'b_shuttle']);

good.guardian = new object('guardian', [20, 1250, 30], ['ammunist', 'true', 500, 'a', 'guardian']);
good.siren = new object('siren', [30, 1000, 20], ['ammunist', 'true', 450, 'a', 'siren']);
good.jak_o_anterns = new object('jak_o_anterns', [15, 2000, 5], ['ammunist', 'true', 300, 'a', 'jak_o_anterns']);

bad.batalifor_sentryBoss = new object('batalifor_sentryBoss', [60, 2000, 5], ['ammunist+', 'false', 1500, 'a', 'batalifor_sentryBoss']);
bad.b_shuttleBoss = new object('b_shuttleBoss', [50, 3000, 10], ['ammunist+', 'false', 1500, 'a', 'b_shuttleBoss']);
bad.bentacrabb_2D1Boss = new object('bentacrabb_2D1Boss', [50, 3200, 5], ['ammunist+', 'false', 1500, 'a', 'bentacrabb_2D1Boss']);

good.paramedics = new object('paramedics', [20, 1250, 30], ['citatian', 'true', 750, 'c', 'paramedics']);
good.overlapping = new object('overlapping', [40, 3200, 10], ['citatian', 'true', 1300, 'c', 'overlapping']);

bad.batalifor_general = new object('batalifor_general', [30, 1500, 15], ['citatian', 'false', 550, 'a', 'batalifor_general']);
bad.scubbars = new object('scubbars', [20, 1500, 15], ['citatian', 'false', 500, 'a', 'scubbars']);
bad.byter = new object('byter', [35, 1500, 20], ['citatian', 'false', 600, 'a', 'byter']);
bad.boverr_1D2 = new object('boverr_1D2', [50, 3000, 10], ['citatian', 'false', 1000, 'a', 'boverr_1D2']);

function showConfirm(text, yes, no) {
    id('confirmText').innerHTML = text;
    id('confirmYesBtn').setAttribute('onclick', "eval(" + yes + "); document.getElementById('confirmPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';");
    id('confirmNoBtn').setAttribute('onclick', "eval(" + no + "); document.getElementById('confirmPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';");
    id('confirmPopup').style.display = "block";
    id('popupOverlay').style.display = "block";
}
function showAlert(text) {
    id('unlockedPopupText').innerHTML = text;
    id('youGotMail').style.display = "none";
    id('unlockedPopupImg').style.display = "none";
    id('unlockedPopup').style.display = "block";
    id('popupOverlay').style.display = "block";
    id('unlockedPopupBtn').setAttribute('onclick', "document.getElementById('unlockedPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';");	
}

function unlockConfirmed(item) {
	if (localStorage.coins >= 500) {
		unlock(item);
	} else {
		showAlert('Not enough redbacks!');
		id('unlockedPopupBtn').setAttribute('onclick', id('unlockedPopupBtn').getAttribute('onclick') + "window.location='index.html'");
	}
}

function purchase(item) {
	setTimeout(function(){showConfirm("Buy a character from " + item + " for 500 redbacks?", "unlockConfirmed('" + item + "')", "window.location='index.html?47'")}, 500);
}

function unlock(item) {
	switch (item) {
		case 'aonarchy':
			for (i = 0; i < goodNames["aonarchy"].length; i++) {
				if (localStorage[goodNames["aonarchy"][i]] == "false") {
					break;
				} else if (i == (goodNames["aonarchy"].length) - 1) {
					showAlert("You have unlocked all the characters in Aonarchy! Wait for more characters to release!");
					id('unlockedPopupBtn').setAttribute('onclick', id('unlockedPopupBtn').getAttribute('onclick') + "window.location='index.html'");
					return;
				}
			}
			var unlocked = goodNames["aonarchy"][Math.floor(Math.random() * goodNames["aonarchy"].length)];
			while (localStorage[unlocked] == 'true') {
				unlocked = goodNames["aonarchy"][Math.floor(Math.random() * goodNames["aonarchy"].length)];
			}
			localStorage[unlocked] = 'true';
			var characterName = unlocked;
			while (characterName.includes('_') || characterName.includes('-')) {
				characterName = characterName.toString().replace('_', '-');
				characterName = characterName.replace('--', '^');
				characterName = characterName.replace('-', ' ');
			}
			while (characterName.includes('^')) {
				characterName = characterName.replace('^', '-');
			}
			characterName = characterName.replace('D', '.');
			id('unlockedPopupText').innerHTML = "You unlocked the " + characterName + " A";
			id('youGotMail').style.display = "block";
			id('unlockedPopupImg').style.display = "block";
			id('unlockedPopupImg').src = 'https://playbclick.com/assets/a/' + unlocked.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + ".png";
			id('unlockedPopupBtn').setAttribute('onclick', "document.getElementById('unlockedPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';window.location='index.html'");
			id('unlockedPopup').style.display = "block";
			id('popupOverlay').style.display = "block";
			localStorage.coins -= 500;
			break;
		case 'ciftian':
			for (i = 0; i < goodNames["ciftian"].length; i++) {
				if (localStorage[goodNames["ciftian"][i]] == "false") {
					break;
				} else if (i == (goodNames["ciftian"].length) - 1) {
					showAlert("You have unlocked all the characters in Ciftian! Wait for more characters to release!");
					id('unlockedPopupBtn').setAttribute('onclick', id('unlockedPopupBtn').getAttribute('onclick') + "window.location='index.html'");
					return;
				}
			}
			var unlocked = goodNames["ciftian"][Math.floor(Math.random() * goodNames["ciftian"].length)];
			while (localStorage[unlocked] == 'true') {
				unlocked = goodNames["ciftian"][Math.floor(Math.random() * goodNames["ciftian"].length)];
			}
			localStorage[unlocked] = 'true';
			var characterName = unlocked;
			while (characterName.includes('_') || characterName.includes('-')) {
				characterName = characterName.toString().replace('_', '-');
				characterName = characterName.replace('--', '^');
				characterName = characterName.replace('-', ' ');
			}
			while (characterName.includes('^')) {
				characterName = characterName.replace('^', '-');
			}
			characterName = characterName.replace('D', '.');
			id('unlockedPopupText').innerHTML = "You unlocked the " + characterName + " C";
			id('youGotMail').style.display = "block";
			id('unlockedPopupImg').style.display = "block";
			id('unlockedPopupImg').src = 'https://playbclick.com/assets/c/' + unlocked.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + ".png";
			id('unlockedPopupBtn').setAttribute('onclick', "document.getElementById('unlockedPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';window.location='index.html'");
			id('unlockedPopup').style.display = "block";
			id('popupOverlay').style.display = "block";
			localStorage.coins -= 500;
			break;
		case 'ammunist':
			for (i = 0; i < goodNames["ammunist"].length; i++) {
				if (localStorage[goodNames["ammunist"][i]] == "false") {
					break;
				} else if (i == (goodNames["ammunist"].length) - 1) {
					showAlert("You have unlocked all the characters in Ammunist! Wait for more characters to release!");
					id('unlockedPopupBtn').setAttribute('onclick', id('unlockedPopupBtn').getAttribute('onclick') + "window.location='index.html'");
					return;
				}
			}
			var unlocked = goodNames["ammunist"][Math.floor(Math.random() * goodNames["ammunist"].length)];
			while (localStorage[unlocked] == 'true') {
				unlocked = goodNames["ammunist"][Math.floor(Math.random() * goodNames["ammunist"].length)];
			}
			localStorage[unlocked] = 'true';
			var characterName = unlocked;
			while (characterName.includes('_') || characterName.includes('-')) {
				characterName = characterName.toString().replace('_', '-');
				characterName = characterName.replace('--', '^');
				characterName = characterName.replace('-', ' ');
			}
			while (characterName.includes('^')) {
				characterName = characterName.replace('^', '-');
			}
			characterName = characterName.replace('D', '.');
			id('unlockedPopupText').innerHTML = "You unlocked the " + characterName + " A";
			id('youGotMail').style.display = "block";
			id('unlockedPopupImg').style.display = "block";
			id('unlockedPopupImg').src = 'https://playbclick.com/assets/a/' + unlocked.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + ".png";
			id('unlockedPopupBtn').setAttribute('onclick', "document.getElementById('unlockedPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';window.location='index.html'");
			id('unlockedPopup').style.display = "block";
			id('popupOverlay').style.display = "block";
			localStorage.coins -= 500;
			break;
		case 'citatian':
			for (i = 0; i < goodNames["citatian"].length; i++) {
				if (localStorage[goodNames["citatian"][i]] == "false") {
					break;
				} else if (i == (goodNames["citatian"].length) - 1) {
					showAlert("You have unlocked all the characters in Citatian! Wait for more characters to release!");
					id('unlockedPopupBtn').setAttribute('onclick', id('unlockedPopupBtn').getAttribute('onclick') + "window.location='index.html'");
					return;
				}
			}
			var unlocked = goodNames["citatian"][Math.floor(Math.random() * goodNames["citatian"].length)];
			while (localStorage[unlocked] == 'true') {
				unlocked = goodNames["citatian"][Math.floor(Math.random() * goodNames["citatian"].length)];
			}
			localStorage[unlocked] = 'true';
			var characterName = unlocked;
			while (characterName.includes('_') || characterName.includes('-')) {
				characterName = characterName.toString().replace('_', '-');
				characterName = characterName.replace('--', '^');
				characterName = characterName.replace('-', ' ');
			}
			while (characterName.includes('^')) {
				characterName = characterName.replace('^', '-');
			}
			characterName = characterName.replace('D', '.');
			id('unlockedPopupText').innerHTML = "You unlocked the " + characterName + " C";
			id('youGotMail').style.display = "block";
			id('unlockedPopupImg').style.display = "block";
			id('unlockedPopupImg').src = 'https://playbclick.com/assets/c/' + unlocked.toString().replace('_', '-').replace('_', '-').replace('_', '-').replace('D', '.').replace('Boss', '') + ".png";
			id('unlockedPopupBtn').setAttribute('onclick', "document.getElementById('unlockedPopup').style.display = 'none'; document.getElementById('popupOverlay').style.display = 'none';window.location='index.html'");
			id('unlockedPopup').style.display = "block";
			id('popupOverlay').style.display = "block";
			localStorage.coins -= 500;
			break;
		default:
	}
}
function convertClick() {
	if (!isMobile.any()) {
		var clickables = document.querySelectorAll('[ontouchend]');
		for (i = 0; i < clickables.length; i++) {
			clickables[i].setAttribute('onclick', clickables[i].getAttribute('ontouchend'));
		}
		requestAnimationFrame(convertClick);
	}
}

function loadLive() {
	id('body').oncontextmenu = function(e) { e.preventDefault(); }
	convertClick();
}
document.addEventListener('DOMContentLoaded', loadLive, false);