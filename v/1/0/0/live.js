var goodNames = {
			url : '',
			original : ['saw', 'spiky', 'electric', 'shark', 'ghost', 'dragonball', 'giant', 'spear', 'superhero'],
			bocracy : ['knight', 'archer', 'barbed', 'flower', 'muscle', 'trump'],
			dinotera : ['carnotaurus', 'shark'],
			fantasy : ['dovahkinn', 'mage', 'superhero', 'giant', 'dragonball', 'ghost'],
			horror : ['killer', 'carnotaurus', 'trump', 'ghost', 'shark'],
			aonarchy : [],
			aonarchyBoss : [],
			bictatorship : ['superhero', 'giant', 'barbed', 'muscle', 'electric', 'trump'],
			weaklings : ['regular', 'lowercase', 'handrawn', 'fancy', 'curved', 'thin'],
			christmas : ['santa', 'candycane'],
			team : ['cameron', 'faith', 'ethan', 'alwin', 'michael', 'srisha', 'cooper', 'jessica', 'vishwam']
}, badNames = {
			url : '',
			original : ['saw', 'spiky', 'electric', 'shark', 'ghost', 'dragonball', 'giant', 'spear', 'superhero'],
			bocracy : ['knight', 'archer', 'barbed', 'flower', 'muscle', 'trump'],
			dinotera : ['carnotaurus', 'shark'],
			fantasy : ['dovahkinn', 'mage', 'superhero', 'giant', 'dragonball', 'ghost'],
			horror : ['killer', 'carnotaurus', 'trump', 'ghost', 'shark'],
			aonarchy : [],
			aonarchyBoss : [],
			bictatorship : ['superhero', 'giant', 'barbed', 'muscle', 'electric', 'trump'],
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
good.witchcraft = new object('witchcraft', [35, 1500, 20], ['aonarchy', 'true', 600, 'a', 'witchcraft']);
good.guardian = new object('guardian', [20, 1250, 30], ['aonarchy', 'true', 500, 'a', 'guardian']);
good.siren = new object('siren', [30, 1000, 20], ['aonarchy', 'true', 450, 'a', 'siren']);
good.jak_o_anterns = new object('jak_o_anterns', [15, 2000, 5], ['aonarchy', 'true', 300, 'a', 'jak_o_anterns']);
good.archer = new object('archer', [40, 1250, 20], ['aonarchy', 'true', 750, 'a', 'archer']);
good.phantom = new object('phantom', [30, 1500, 15], ['aonarchy', 'true', 550, 'a', 'phantom']);
good.anonymous = new object('anonymous', [20, 1500, 15], ['aonarchy', 'true', 500, 'a', 'anonymous']);
good.a87_cannon = new object('a87_cannon', [60, 2000, 5], ['aonarchy', 'true', 1500, 'a', 'a87_cannon']);



bad.sharkanator = new object('sharkanator', [100, 5000, 0], ['aonarchy', 'false', 2500, 'a', 'sharkanator']);
bad.bentacrabb_2D1 = new object('bentacrabb_2D1', [50, 3200, 5], ['aonarchy', 'false', 1500, 'a', 'bentacrabb_2D1']);
bad.boverr_1D2 = new object('boverr_1D2', [50, 3000, 10], ['aonarchy', 'false', 1000, 'a', 'boverr_1D2']);
bad.b__torv_commander = new object('b__torv_commander', [50, 3000, 10], ['aonarchy', 'false', 1000, 'a', 'b__torv_commander']);
bad.b_shuttle = new object('b_shuttle', [50, 3000, 10], ['aonarchy', 'false', 1500, 'a', 'b_shuttle']);
bad.bylo_ken = new object('bylo_ken', [35, 1500, 20], ['aonarchy', 'false', 600, 'a', 'bylo_ken']);
bad.byter = new object('byter', [35, 1500, 20], ['aonarchy', 'false', 600, 'a', 'byter']);
bad.batalifor_2D4 = new object('batalifor_2D4', [30, 1000, 20], ['aonarchy', 'false', 450, 'a', 'batalifor_2D4']);
bad.batalifor_1D0 = new object('batalifor_1D0', [15, 2000, 5], ['aonarchy', 'false', 1000, 'a', 'batalifor_1D0']);
bad.f87_cannon = new object('f87_cannon', [40, 1250, 20], ['aonarchy', 'false', 750, 'a', 'f87_cannon']);
bad.batalifor_general = new object('batalifor_general', [30, 1500, 15], ['aonarchy', 'false', 550, 'a', 'batalifor_general']);
bad.b__torv_troops = new object('b__torv_troops', [30, 1500, 15], ['aonarchy', 'false', 550, 'a', 'b__torv_troops']);
bad.scubbars = new object('scubbars', [20, 1500, 15], ['aonarchy', 'false', 500, 'a', 'scubbars']);
bad.d15_cannon = new object('d15_cannon', [60, 2000, 5], ['aonarchy', 'false', 1500, 'a', 'd15_cannon']);
bad.batalifor_sentry = new object('batalifor_sentry', [60, 2000, 5], ['aonarchy', 'false', 1500, 'a', 'batalifor_sentry']);
bad.ultacrabb = new object('ultacrabb', [60, 2000, 5], ['aonarchy', 'false', 1500, 'a', 'ultacrabb']);

bad.sharkanatorBoss = new object('sharkanatorBoss', [100, 5000, 0], ['aonarchy+', 'false', 2500, 'a', 'sharkanatorBoss']);
bad.bentacrabb_2D1Boss = new object('bentacrabb_2D1Boss', [50, 3200, 5], ['aonarchy+', 'false', 1500, 'a', 'bentacrabb_2D1Boss']);
bad.b_shuttleBoss = new object('b_shuttleBoss', [50, 3000, 10], ['aonarchy+', 'false', 1500, 'a', 'b_shuttleBoss']);
bad.bylo_kenBoss = new object('bylo_kenBoss', [35, 1500, 20], ['aonarchy+', 'false', 600, 'a', 'bylo_kenBoss']);
bad.f87_cannonBoss = new object('f87_cannonBoss', [40, 1250, 20], ['aonarchy+', 'false', 750, 'a', 'f87_cannonBoss']);
bad.d15_cannonBoss = new object('d15_cannonBoss', [60, 2000, 5], ['aonarchy+', 'false', 1500, 'a', 'd15_cannonBoss']);
bad.batalifor_sentryBoss = new object('batalifor_sentryBoss', [60, 2000, 5], ['aonarchy+', 'false', 1500, 'a', 'batalifor_sentryBoss']);
bad.ultacrabbBoss = new object('ultacrabbBoss', [60, 2000, 5], ['aonarchy+', 'false', 1500, 'a', 'ultacrabbBoss']);


// function unlockPopup(item, url) {
// 	id('popup').innerHTML = "<h1>You unlocked the " + item + ' ' + url + "</h1><img src='https://playbclick.com/assets/" + url + ".png' /><btn ontouchend='id(\'popup\').style.display = \'none\';'>Close</btn>";
// 	id('popup').style.display = "block";
// }

// function unlock(item) {
// 	if (item.includes('_pack')) {
// 		switch (item) {
// 			case 'mystery_pack':
// 				unlocked = goodNames[current][Math.floor(Math.random() * goodNames.length)];
// 				while (localStorage[unlocked] == 'true') {
// 					unlocked = goodNames[current][Math.floor(Math.random() * goodNames.length)];
// 				}
// 				localStorage[unlocked] = 'true';
// 				unlockPopup(unlocked, 'a');
// 				break;
// 		}
// 		return;
// 	}
// }