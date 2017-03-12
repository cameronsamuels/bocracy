function load() {
	if (localStorage.loadedBOcracy == undefined) {
		localStorage.loadedBOcracy = 'true';
		window.location = 'battle.html#alinar';
	}
	id('wrapper').style.display = 'block';
	id('loader').style.display = 'none';
}