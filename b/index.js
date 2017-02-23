function id(id) { return document.getElementById(id) }
var isMobile = {
	Android: function() { return navigator.userAgent.match(/Android/i); },
	iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
	any: function() { return (isMobile.Android() || isMobile.iOS() || isMobile.Windows()); }
};

if (!isMobile.any()) id('homescreenTip').style.display = 'none';
if (window.navigator.standalone == true) id('homescreenTip').style.display = 'none';

function indexOfMax(arr) {
    if (arr.length === 0) return -1;
    var max = arr[0]; var maxIndex = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) { maxIndex = i; max = arr[i]; }
    } return max;
}
var a = document.querySelectorAll('div:not(#title):not(.clear)');
var height = indexOfMax(a).offsetHeight;
for (i = 0; i < a.length; i++) {
	a[i].style.padding = "calc(40px + " + (height / 2) + "px - " + (a[i].offsetHeight / 2) + "px) 2.5%";
}