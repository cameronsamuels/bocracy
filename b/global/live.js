(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-50194959-4', 'auto');
ga('send', 'pageview');

if (document.documentMode==(11||10))
	alert("This browser is unsupported for b-Ocracy. Get a newer browser"),
	location = "http://google.com/chrome/browser/desktop";

var $ = function(e) { return document.getElementById(e) },
isMobile = navigator.userAgent.match(/Android|IEMobile|iPhone|iPad|iPod/i);
document.body.innerHTML="<div id=logo style='width:100%;height:100%;background:#343838'><img src=https://blib.tk/boc/ico/banner.svg style='width:80%;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0'></div><div id=mainWrapper style='width:100%;height:100%;display:none'>"+document.body.innerHTML+"</div>";
var goodNames = { url : '', aonarchy : [], aonarchyBoss : [], alief : [], ammunist : [], ammunistBoss : [], eora : [], dericil : [], alinar : [] },
badNames = { url : '', aonarchy : [], alief : [], aonarchyBoss : [], ammunist : [], ammunistBoss : [], eora : [], dericil : [], alinar : [] },
battles = ['dericil', 'alinar', 'aonarchy', 'alief', 'ammunist', 'eora'], good = { }, bad = { }, ls = localStorage;
function c(e, s, p) {
	this.name = e;
	this.stats = s;
	this.info = p;
	if (ls['has' + p[0].charAt(0).toUpperCase() + p[0].substring(1).replace('Boss', '')] == undefined && p[1] == true) {
		ls[e] = true;
		ls['has' + p[0].charAt(0).toUpperCase() + p[0].substring(1).replace('Boss', '')] = true;
	}
	if (ls[e] == undefined && p[1] == true) ls[e] = false;
	if (p[1] == true) goodNames[p[0].replace('+', 'Boss')].push(e);
	else badNames[p[0].replace('+', 'Boss')].push(e);
	if (goodNames[p[0] + 'Boss'] != undefined && p[1] == true) goodNames[p[0] + 'Boss'].push(e);
}
good.archer = new c('archer', [40, 1500, 20], ['aonarchy', true, 750, 'a', 'archer', 'arrow']);
good.goblin_horde = new c('goblin_horde', [50, 3200, 10], ['aonarchy', true, 1500, 'a', 'goblin_horde', 'goblin_sword']);
good.goblin = new c('goblin', [20, 1200, 15], ['aonarchy', true, 250, 'a', 'goblin', 'goblin_sword']);
good.warrior = new c('warrior', [55, 3000, 10], ['aonarchy', true, 1500, 'a', 'warrior', 'warrior_sword']);
good.anonymous = new c('anonymous', [30, 1500, 15], ['aonarchy', true, 600, 'a', 'anonymous', 'cyber_hand']);
good.a87_cannon = new c('a87_cannon', [60, 2500, 10], ['aonarchy', true, 1500, 'a', 'a87_cannon', 'cannonball']);

bad.sharkanator = new c('sharkanator', [100, 5000, 0], ['aonarchy', false, 2500, 'a', 'sharkanator', 'cannonball']);
bad.bentacrabb_2D1 = new c('bentacrabb_2D1', [50, 3200, 5], ['aonarchy', false, 1500, 'a', 'bentacrabb_2D1', 'cannonball']);
bad.bylo_ken = new c('bylo_ken', [45, 2200, 20], ['aonarchy', false, 800, 'a', 'bylo_ken', 'saber']);
bad.d15_cannon = new c('d15_cannon', [60, 2200, 5], ['aonarchy', false, 1500, 'a', 'd15_cannon', 'cannonball']);
bad.byter = new c('byter', [40, 1500, 20], ['aonarchy', false, 750, 'a', 'byter', 'missile']);

bad.sharkanatorBoss = new c('sharkanatorBoss', [100, 5000, 0], ['aonarchy+', false, 2500, 'a', 'sharkanatorBoss', 'cannonball']);
bad.reinforced_sharkanatorBoss = new c('reinforced_sharkanatorBoss', [120, 6000, 5], ['aonarchy+', false, 3000, 'a', 'reinforced_sharkanatorBoss', 'cannonball']);
bad.bylo_kenBoss = new c('bylo_kenBoss', [35, 1500, 20], ['aonarchy+', false, 600, 'a', 'bylo_kenBoss', 'saber']);
bad.d15_cannonBoss = new c('d15_cannonBoss', [60, 2000, 5], ['aonarchy+', false, 1500, 'a', 'd15_cannonBoss', 'cannonball']);

good.witchcraft = new c('witchcraft', [45, 1500, 20], ['alief', true, 800, 'a', 'witchcraft', 'spell']);
good.phantom = new c('phantom', [30, 1750, 15], ['alief', true, 750, 'a', 'phantom', 'shadowball']);
good.elemental = new c('elemental', [35, 2500, 20], ['alief', true, 1500, 'a', 'elemental', 'elements']);
good.sorcerer = new c('sorcerer', [40, 2000, 30], ['alief', true, 1750, 'a', 'sorcerer', 'spell']);
good.steel_knight = new c('steel_knight', [50, 3000, 20], ['alief', true, 2000, 'a', 'steel_knight', 'knife']);
good.slayer = new c('slayer', [40, 1750, 15], ['alief', true, 1300, 'a', 'slayer', 'knife']);

bad.ultacrabb = new c('ultacrabb', [60, 2000, 5], ['alief', false, 1500, 'a', 'ultacrabb', 'missile']);
bad.f87_cannon = new c('f87_cannon', [40, 1250, 20], ['alief', false, 750, 'a', 'f87_cannon', 'missile']);
bad.dark_knight = new c('dark_knight', [60, 2000, 5], ['alief', false, 1500, 'a', 'dark_knight', 'dark_sword']);
bad.scubbars = new c('scubbars', [50, 1500, 25], ['alief', false, 1000, 'a', 'scubbars', 'scorpion_spikes']);
bad.boverr_1D2 = new c('boverr_1D2', [50, 2000, 10], ['alief', false, 1000, 'a', 'boverr_1D2', 'scorpion_spikes']);
bad.batalifor_general = new c('batalifor_general', [40, 2000, 15], ['alief', false, 1000, 'a', 'batalifor_general', 'green_fluid_sword']);

good.siren = new c('siren', [35, 1500, 20], ['ammunist', true, 600, 'a', 'siren', 'music']);
good.guardian = new c('guardian', [30, 1500, 35], ['ammunist', true, 1000, 'a', 'guardian', 'fairy_dust']);
good.jak_o_anterns = new c('jak_o_anterns', [20, 2000, 10], ['ammunist', true, 450, 'a', 'jak_o_anterns', 'sickle']);
good.spiky = new c('spiky', [35, 2000, 20], ['ammunist', true, 1000, 'a', 'spiky', 'spikes']);
good.jetpack = new c('jetpack', [35, 2500, 15], ['ammunist', true, 1200, 'a', 'jetpack', 'fireball']);
good.worldwar = new c('worldwar', [50, 2000, 15], ['ammunist', true, 1500, 'a', 'worldwar', 'bomb']);

bad.batalifor_sentry = new c('batalifor_sentry', [60, 3000, 10], ['ammunist', false, 1500, 'a', 'batalifor_sentry', 'cannonball']);
bad.batalifor_2D4 = new c('batalifor_2D4', [30, 1500, 20], ['ammunist', false, 750, 'a', 'batalifor_2D4', 'red_fluid_sword']);
bad.b__torv_troops = new c('b__torv_troops', [40, 3000, 15], ['ammunist', false, 1300, 'a', 'b__torv_troops', 'missile']);
bad.b__torv_commander = new c('b__torv_commander', [30, 2000, 20], ['ammunist', false, 1000, 'a', 'b__torv_commander', 'saber']);
bad.b_shuttle = new c('b_shuttle', [50, 3500, 7], ['ammunist', false, 1500, 'a', 'b_shuttle', 'cannonball']);
bad.batalifor_1D0 = new c('batalifor_1D0', [20, 2000, 10], ['ammunist', false, 1000, 'a', 'batalifor_1D0', 'cannonball']);

bad.batalifor_sentryBoss = new c('batalifor_sentryBoss', [60, 3500, 5], ['ammunist+', false, 1500, 'a', 'batalifor_sentryBoss', 'cannonball']);
bad.b_shuttleBoss = new c('b_shuttleBoss', [60, 4000, 5], ['ammunist+', false, 1500, 'a', 'b_shuttleBoss', 'cannonball']);
bad.bentacrabb_2D1Boss = new c('bentacrabb_2D1Boss', [60, 3500, 5], ['ammunist+', false, 1500, 'a', 'bentacrabb_2D1Boss', 'cannonball']);

bad.poor_worker = new c('poor_worker', [30, 2000, 20], ['eora', false, 250, 'a', 'poor_worker', 'sickle']);
bad.dynamite = new c('dynamite', [50, 2500, 20], ['eora', false, 1500, 'a', 'dynamite', 'dynamite']);
bad.mercenary = new c('mercenary', [50, 3000, 20], ['eora', false, 1600, 'a', 'mercenary', 'missile']);
bad.teratul_rider = new c('teratul_rider', [75, 4500, 10], ['eora', false, 2222, 'a', 'teratul_rider', 'knife']);
bad.defensive_destroyer = new c('defensive_destroyer', [75, 3000, 10], ['eora', false, 1919, 'a', 'defensive_destroyer', 'bomb']);
bad.bucarrun_assasin = new c('bucarrun_assasin', [40, 2500, 20], ['eora', false, 1000, 'a', 'bucarrun_assasin', 'knife']);

good.mineral = new c('mineral', [35, 2222, 15], ['eora', true, 1000, 'a', 'mineral', 'rocks']);
good.prospector = new c('prospector', [30, 1750, 15], ['eora', true, 750, 'a', 'prospector', 'shovel']);
good.camel_rider = new c('camel_rider', [40, 2500, 15], ['eora', true, 1200, 'a', 'camel_rider', 'scavenger_sword']);
good.cactus = new c('cactus', [35, 1750, 25], ['eora', true, 1000, 'a', 'cactus', 'thorns']);
good.scavenger = new c('scavenger', [40, 2222, 15], ['eora', true, 1000, 'a', 'scavenger', 'scavenger_sword']);
good.mountain_jetpack = new c('mountain_jetpack', [30, 2222, 15], ['eora', true, 800, 'a', 'mountain_jetpack', 'fireball']);

good.elasmosaurus = new c('elasmosaurus', [35, 1800, 15], ['dericil', true, 1000, 'b', 'elasmosaurus']);
good.giant_orthocone = new c('giant_orthocone', [25, 1800, 15], ['dericil', true, 600, 'b', 'giant_orthocone']);
good.alligator_gar = new c('alligator_gar', [35, 1500, 15], ['dericil', true, 700, 'b', 'alligator_gar']);
good.archelon = new c('archelon', [30, 2500, 12], ['dericil', true, 800, 'b', 'archelon']);
good.ichthyosaur = new c('ichthyosaur', [35, 2000, 15], ['dericil', true, 1200, 'b', 'ichthyosaur']);
good.helicoprion = new c('helicoprion', [40, 2500, 15], ['dericil', true, 1600, 'b', 'helicoprion']);

bad.coelacanth = new c('coelacanth', [25, 1800, 20], ['dericil', false, 900, 'b', 'coelacanth']);
bad.sea_scorpion = new c('sea_scorpion', [38, 2000, 15], ['dericil', false, 1500, 'b', 'sea_scorpion']);
bad.leedsichthys = new c('leedsichthys', [35, 2200, 15], ['dericil', false, 1300, 'b', 'leedsichthys']);
bad.mosasaur = new c('mosasaur', [40, 2500, 15], ['dericil', false, 1500, 'b', 'mosasaur']);
bad.megalodon = new c('megalodon', [50, 3000, 12], ['dericil', false, 1800, 'b', 'megalodon']);

good.flame_archer = new c('flame_archer', [35, 1700, 5], ['alinar', true, 900, 'a', 'flame_archer']);
good.reindeer = new c('reindeer', [25, 1700, 10], ['alinar', true, 750, 'a', 'reindeer']);
good.toxin = new c('toxin', [35, 1800, 5], ['alinar', true, 1000, 'a', 'toxin']);
good.iceanaut_2D0 = new c('iceanaut_2D0', [35, 2000, 5], ['alinar', true, 1200, 'a', 'iceanaut_2D0']);
good.eskimo_goblins = new c('eskimo_goblins', [45, 2500, 10], ['alinar', true, 1600, 'a', 'eskimo_goblins']);
good.mammoth = new c('mammoth', [40, 2500, 15], ['alinar', true, 1600, 'a', 'mammoth']);

bad.sasquatch = new c('sasquatch', [25, 1600, 15], ['alinar', false, 800, 'a', 'sasquatch']);
bad.abomination = new c('abomination', [30, 1800, 15], ['alinar', false, 900, 'a', 'abomination']);
bad.b__torv_snowtrooper = new c('b__torv_snowtrooper', [35, 1800, 15], ['alinar', false, 1000, 'a', 'b__torv_snowtrooper']);
bad.cyclops = new c('cyclops', [40, 2000, 20], ['alinar', false, 1200, 'a', 'cyclops']);
bad.flamethrower = new c('flamethrower', [40, 1800, 15], ['alinar', false, 1300, 'a', 'flamethrower']);
bad.sub_batalifor = new c('sub_batalifor', [45, 2500, 15], ['alinar', false, 1500, 'a', 'sub_batalifor']);
bad.b__2_mobile_cannon = new c('b__2_mobile_cannon', [50, 2500, 12], ['alinar', false, 1800, 'a', 'b__2_mobile_cannon']);

// good.color_jetpack = new c('color_jetpack', [60, 2500, 10], ['alinar', true, 1500, 'a', 'color_jetpack']);
// good.winter_pumpkins = new c('giant_orthocone', [60, 2500, 10], ['alinar', true, 1500, 'a', 'giant_orthocone']);
// good.thorn = new c('thorn', [60, 2500, 10], ['alinar', true, 1500, 'a', 'thorn']);
// good.snow_goblin = new c('giant_orthocone', [60, 2500, 10], ['alinar', true, 1500, 'a', 'giant_orthocone']);
// good.traitors = new c('giant_orthocone', [60, 2500, 10], ['alinar', true, 1500, 'a', 'giant_orthocone']);
// good.rogue = new c('rogue', [60, 2500, 10], ['alinar', true, 1500, 'a', 'rogue']);

function t() {
	if (!isMobile) {
		var clickables = document.querySelectorAll('[ontouchend]');
		for (i = 0; i < clickables.length; i++) clickables[i].setAttribute('onclick', clickables[i].getAttribute('ontouchend')), clickables[i].removeAttribute('ontouchend');
		requestAnimationFrame(t);
	}
}
function ld() { t(), setTimeout(function(){$('logo').style.display='none';$('mainWrapper').style.display = ""},1000) }
document.addEventListener('DOMContentLoaded', ld, false);
if (!ls.redbacks) ls.redbacks = 0;
else ls.redbacks = Math.round(ls.redbacks);
document.oncontextmenu = function(e) { e.preventDefault() }