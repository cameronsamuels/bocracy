function indexOfMax(arr) {
    if (arr.length === 0) return -1;
    var max = arr[0]; var maxIndex = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) { maxIndex = i; max = arr[i]; }
    } return max;
}
function dynamicDivSize() {
	var a = document.querySelectorAll('main div');
	for (i = 0; i < a.length; i++) {
		a[i].style.padding = "0px";
	}
	var height = indexOfMax(a).offsetHeight;
	for (i = 0; i < a.length; i++) {
		a[i].style.padding = "calc(40px + " + (height / 2) + "px - " + (a[i].offsetHeight / 2) + "px) 2.5%";
	}
}
window.addEventListener('orientationchange', dynamicDivSize);
function load() {
	dynamicDivSize();
	if (localStorage.watchedStory == undefined) {
		localStorage.watchedStory = 'true';
		return "";
	} else {
		id('story').style.display = "none";
	}
	if (localStorage.playedBOcracy110_2 == undefined) {
		if (localStorage.hasAonarchy == undefined) {
			localStorage.hasAonarchy = 'true';
			window.location = "store.html#firstTimeaonarchy";
		} else if (localStorage.hasCortofa == undefined) {
			localStorage.hasCortofa = 'true';
			window.location = "store.html#firstTimecortofa";
		} else {
			localStorage.playedBOcracy110_2 = "true";
		}
	}
}