var $ = function(e) { return document.getElementById(e) }
function mob() { return navigator.userAgent.match(/Android|IEMobile|iPhone|iPad|iPod/i) }
document.body.innerHTML="<div id=logo style='width:100%;height:100%;background:#343838'><img src=http://thebclickteam.tk/lib/boc/ico/banner.svg style='width:80%;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0'></div><div id=mainWrapper style='width:100%;height:100%;display:none'>"+document.body.innerHTML+"</div>";
var goodNames = {
	url : '', aonarchy : [], aonarchyBoss : [], alief : [], ammunist : [], ammunistBoss : [], eora : [],
	dericil : ['helicoprion', 'elasmosaurus', 'archeolon', 'megalodon', 'gar-school', 'giant-orthocone', 'alligator-gar', 'coelacanth', 'sea-scorpion', 'leedsichthys', 'mosasaur'],
	alinar : ['color-jetpack', 'thorn', 'reindeer', 'flame-archer', 'eskimo-goblins', 'rogue', 'winter-pumpkins', 'toxin', 'iceanaut-2.0', 'snow-goblin', 'mammoth', 'traitors']
}, badNames = {
	url : '', aonarchy : [], alief : [], aonarchyBoss : [], ammunist : [], ammunistBoss : [], eora : [],
	dericil : ['helicoprion', 'elasmosaurus', 'archeolon', 'megalodon', 'gar-school', 'giant-orthocone', 'alligator-gar', 'coelacanth', 'sea-scorpion', 'leedsichthys', 'mosasaur'],
	alinar : ['cyclops', 'b--2-mobile-cannon', 'b--torv-snowtrooper', 'sub-batalifor', 'flamethrower', 'abomination', 'sasquatch']
}, battles = ['dericil', 'alinar', 'aonarchy', 'alief', 'ammunist', 'eora'], good = { }, bad = { }, ls = localStorage;
function object(nm, stats, info, other) {
	this.name = nm;
	this.stats = stats;
	this.info = info;
	this.other = other;
	if (ls['has' + info[0].charAt(0).toUpperCase() + info[0].substring(1).replace('Boss', '')] == undefined && info[1] == 'true') {
		ls[nm] = 'true';
		ls['has' + info[0].charAt(0).toUpperCase() + info[0].substring(1).replace('Boss', '')] = 'true';
	}
	if (ls[nm] == undefined && info[1] == 'true') ls[nm] = 'false';
	if (info[1] == 'true') goodNames[info[0].replace('+', 'Boss')].push(nm);
	else badNames[info[0].replace('+', 'Boss')].push(nm);
	if (goodNames[info[0] + 'Boss'] != undefined && info[1] == 'true') goodNames[info[0] + 'Boss'].push(nm);
}
good.archer = new object('archer', [40, 1500, 20], ['aonarchy', 'true', 750, 'a', 'archer', 'arrow']);
good.goblin_horde = new object('goblin_horde', [50, 3200, 10], ['aonarchy', 'true', 1500, 'a', 'goblin_horde', 'goblin_sword']);
good.goblin = new object('goblin', [20, 1200, 15], ['aonarchy', 'true', 250, 'a', 'goblin', 'goblin_sword']);
good.warrior = new object('warrior', [55, 3000, 10], ['aonarchy', 'true', 1500, 'a', 'warrior', 'warrior_sword']);
good.anonymous = new object('anonymous', [30, 1500, 15], ['aonarchy', 'true', 600, 'a', 'anonymous', 'cyber_hand']);
good.a87_cannon = new object('a87_cannon', [60, 2500, 10], ['aonarchy', 'true', 1500, 'a', 'a87_cannon', 'cannonball']);

bad.sharkanator = new object('sharkanator', [100, 5000, 0], ['aonarchy', 'false', 2500, 'a', 'sharkanator', 'cannonball']);
bad.bentacrabb_2D1 = new object('bentacrabb_2D1', [50, 3200, 5], ['aonarchy', 'false', 1500, 'a', 'bentacrabb_2D1', 'cannonball']);
bad.bylo_ken = new object('bylo_ken', [45, 2200, 20], ['aonarchy', 'false', 800, 'a', 'bylo_ken', 'saber']);
bad.d15_cannon = new object('d15_cannon', [60, 2200, 5], ['aonarchy', 'false', 1500, 'a', 'd15_cannon', 'cannonball']);
bad.byter = new object('byter', [40, 1500, 20], ['aonarchy', 'false', 750, 'a', 'byter', 'missile']);

bad.sharkanatorBoss = new object('sharkanatorBoss', [100, 5000, 0], ['aonarchy+', 'false', 2500, 'a', 'sharkanatorBoss', 'cannonball']);
bad.reinforced_sharkanatorBoss = new object('reinforced_sharkanatorBoss', [120, 6000, 5], ['aonarchy+', 'false', 3000, 'a', 'reinforced_sharkanatorBoss', 'cannonball']);
bad.bylo_kenBoss = new object('bylo_kenBoss', [35, 1500, 20], ['aonarchy+', 'false', 600, 'a', 'bylo_kenBoss', 'saber']);
bad.d15_cannonBoss = new object('d15_cannonBoss', [60, 2000, 5], ['aonarchy+', 'false', 1500, 'a', 'd15_cannonBoss', 'cannonball']);

good.witchcraft = new object('witchcraft', [45, 1500, 20], ['alief', 'true', 800, 'a', 'witchcraft', 'spell']);
good.phantom = new object('phantom', [30, 2000, 20], ['alief', 'true', 750, 'a', 'phantom', 'shadowball']);
good.elemental = new object('elemental', [48, 3000, 20], ['alief', 'true', 1500, 'a', 'elemental', 'elements']);
// good.mage = new object('mage', [50, 3500, 40], ['alief', 'true', 2000, 'a', 'mage', 'spell']);

bad.ultacrabb = new object('ultacrabb', [60, 2000, 5], ['alief', 'false', 1500, 'a', 'ultacrabb', 'missile']);
bad.f87_cannon = new object('f87_cannon', [40, 1250, 20], ['alief', 'false', 750, 'a', 'f87_cannon', 'missile']);
bad.dark_knight = new object('dark_knight', [60, 2000, 5], ['alief', 'false', 1500, 'a', 'dark_knight', 'dark_sword']);
bad.scubbars = new object('scubbars', [50, 1500, 25], ['alief', 'false', 1000, 'a', 'scubbars', 'scorpion_spikes']);
bad.boverr_1D2 = new object('boverr_1D2', [50, 2000, 10], ['alief', 'false', 1000, 'a', 'boverr_1D2', 'scorpion_spikes']);
bad.batalifor_general = new object('batalifor_general', [40, 2000, 15], ['alief', 'false', 1000, 'a', 'batalifor_general', 'green_fluid_sword']);

good.siren = new object('siren', [35, 1500, 20], ['ammunist', 'true', 600, 'a', 'siren', 'music']);
good.guardian = new object('guardian', [30, 1500, 35], ['ammunist', 'true', 1000, 'a', 'guardian', 'fairy_dust']);
good.jak_o_anterns = new object('jak_o_anterns', [20, 2000, 10], ['ammunist', 'true', 450, 'a', 'jak_o_anterns', 'sickle']);
good.spiky = new object('spiky', [35, 2000, 20], ['ammunist', 'true', 1000, 'a', 'spiky', 'spikes']);
good.jetpack = new object('jetpack', [35, 2500, 15], ['ammunist', 'true', 1200, 'a', 'jetpack', 'fireball']);
good.worldwar = new object('worldwar', [50, 2000, 15], ['ammunist', 'true', 1500, 'a', 'worldwar', 'bomb']);

bad.batalifor_sentry = new object('batalifor_sentry', [60, 3000, 10], ['ammunist', 'false', 1500, 'a', 'batalifor_sentry', 'cannonball']);
bad.batalifor_2D4 = new object('batalifor_2D4', [30, 1500, 20], ['ammunist', 'false', 750, 'a', 'batalifor_2D4', 'red_fluid_sword']);
bad.b__torv_troops = new object('b__torv_troops', [40, 3000, 15], ['ammunist', 'false', 1300, 'a', 'b__torv_troops', 'missile']);
bad.b__torv_commander = new object('b__torv_commander', [30, 2000, 20], ['ammunist', 'false', 1000, 'a', 'b__torv_commander', 'saber']);
bad.b_shuttle = new object('b_shuttle', [50, 3500, 7], ['ammunist', 'false', 1500, 'a', 'b_shuttle', 'cannonball']);
bad.batalifor_1D0 = new object('batalifor_1D0', [20, 2000, 10], ['ammunist', 'false', 1000, 'a', 'batalifor_1D0', 'cannonball']);

bad.batalifor_sentryBoss = new object('batalifor_sentryBoss', [60, 3500, 5], ['ammunist+', 'false', 1500, 'a', 'batalifor_sentryBoss', 'cannonball']);
bad.b_shuttleBoss = new object('b_shuttleBoss', [60, 4000, 5], ['ammunist+', 'false', 1500, 'a', 'b_shuttleBoss', 'cannonball']);
bad.bentacrabb_2D1Boss = new object('bentacrabb_2D1Boss', [60, 3500, 5], ['ammunist+', 'false', 1500, 'a', 'bentacrabb_2D1Boss', 'cannonball']);

bad.poor_worker = new object('poor_worker', [30, 2000, 20], ['eora', 'false', 250, 'a', 'poor_worker', 'sickle']);
bad.dynamite = new object('dynamite', [50, 2500, 20], ['eora', 'false', 1500, 'a', 'dynamite', 'dynamite']);
bad.mercenary = new object('mercenary', [50, 3000, 20], ['eora', 'false', 1600, 'a', 'mercenary', 'missile']);
bad.teratul_rider = new object('teratul_rider', [75, 4500, 10], ['eora', 'false', 2222, 'a', 'teratul_rider', 'knife']);
bad.defensive_destroyer = new object('defensive_destroyer', [75, 3000, 10], ['eora', 'false', 1919, 'a', 'defensive_destroyer', 'bomb']);
bad.bucarrun_assasin = new object('bucarrun_assasin', [40, 2500, 20], ['eora', 'false', 1000, 'a', 'bucarrun_assasin', 'knife']);

good.mineral = new object('mineral', [35, 2222, 15], ['eora', 'true', 1000, 'a', 'mineral', 'rocks']);
good.prospector = new object('prospector', [30, 1750, 15], ['eora', 'true', 750, 'a', 'prospector', 'shovel']);
good.camel_rider = new object('camel_rider', [40, 2500, 15], ['eora', 'true', 1200, 'a', 'camel_rider', 'scavenger_sword']);
good.cactus = new object('cactus', [35, 1750, 25], ['eora', 'true', 1000, 'a', 'cactus', 'thorns']);
good.scavenger = new object('scavenger', [40, 2222, 15], ['eora', 'true', 1000, 'a', 'scavenger', 'scavenger_sword']);
good.mountain_jetpack = new object('mountain_jetpack', [30, 2222, 15], ['eora', 'true', 800, 'a', 'mountain_jetpack', 'fireball']);

function convertClick() {
	if (!mob()) {
		var clickables = document.querySelectorAll('[ontouchend]');
		for (i = 0; i < clickables.length; i++) clickables[i].setAttribute('onclick', clickables[i].getAttribute('ontouchend')), clickables[i].removeAttribute('ontouchend');
		requestAnimationFrame(convertClick);
	}
}
function loadLive() { convertClick(), setTimeout(function(){$('logo').style.display='none';$('mainWrapper').style.display = "";},1000) }
document.addEventListener('DOMContentLoaded', loadLive, false);
if (!ls.coins) ls.coins = 0;
else ls.coins = Math.round(ls.coins);
document.oncontextmenu = function(e) { e.preventDefault() }