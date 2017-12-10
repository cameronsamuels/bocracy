// Define the selected battleground
var battleground = "aonarchy",
// Define the selected character
character;
// Function for refreshing the layout
function refresh(boxToSelect) {
	// Character boxes container
	var m = document.querySelector("main>section:nth-child(2)>div"),
	// Character box overlays container
	n = document.querySelectorAll("main>section:nth-child(2)>div")[1],
	// Define which event to trigger when selecting a character box
	event = new Event(isMobile?"touchend":"click");
	// Set battleground name in bottom half
	document.querySelectorAll("main>section")[1].querySelector("h1").textContent = battleground;
	// Delete all previous character boxes
	m.innerHTML = "";
	// Delete all previous character box overlays
	n.innerHTML = "";
	// Loop to create character boxes
	for (i = 0; i < goodNames[battleground].length; i++) {
		// Set the url of the character image
		var url = goodNames[battleground][i].replace("_", "-").replace("_", "-").replace("_", "-").replace("D", "."),
		// Set the pretty name of the character
		name = goodNames[battleground][i].replace("D", ".").replace("__", "-").replace("_", " ").replace("_", " ").replace("_", " ");
		// Create character box element
		e = document.createElement("div");
		// Set character box image
		e.style.backgroundImage = "url(../assets/characters/" + url + ".png)";
		// If unlocked, set opacity of character box to opaque
		if (ls[goodNames[battleground][i]] == "true") e.style.opacity = 1;
		// Set character box bottom text
		e.textContent = name;
		// Add click events for selecting characters
		e.addEventListener(isMobile?"touchend":"click", select);
		// Add character box element to the page
		m.appendChild(e);
		// Create character box overlay element
		var o = document.createElement("div");
		// If locked, set image source of character overlay to padlock
		if (ls[goodNames[battleground][i]] == "false") o.style.backgroundImage = "url(../assets/images/padlock.svg)";
		// If unlocked, hide the character box overlay
		else o.style.backgroundImage = "";
		// Add the character overlay to the page
		n.appendChild(o);
		// If this is the box to select, remember
		if (boxToSelect == goodNames[battleground][i]) boxToSelect = e;
	}
	// If no box to select, select the first box
	if (!boxToSelect) boxToSelect = document.querySelector("main>section:nth-child(2)>div>div");
	// Click the character box needed to be clicked
	boxToSelect.dispatchEvent(event);
}
function select(e) {
	// Set variable name of character name
	character = e.target.textContent.replace("-", "__").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(".", "D");
	// Define character boxes container element
	var c = document.querySelectorAll("main>section:nth-child(2) div>div"),
	// Set the url of the character image
	url = e.target.textContent.replace("-", "--").replace(" ", "-").replace(" ", "-").replace(" ", "-").replace("D", ".");
	// For every character box
	for (i = 0; i < c.length; i++) {
		// Remove border from character box
		c[i].style.borderColor = "";
	}
	// Select the character box
	e.target.style.borderColor = "#fff";
	// Set the character preview image
	document.querySelector("main").style.backgroundImage = "url(../assets/characters/" + url + ".png)";
	// Define purchase button element
	var purchaseButton = document.querySelector("main>section:first-child>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)"),
	// Define character stats area
	characterStats = document.querySelector("main>section:first-child>div:first-child");
	// Reset purchase button visibility back to default
	purchaseButton.style.display = "";
	// Set the character cost button text
	purchaseButton.textContent = good[character].info[2];
	// If not enough redbacks
	if (ls.redbacks < good[character].info[2] && ls[character] != "true") {
		// Set opacity of purchase button to .25 transparency
		purchaseButton.style.opacity = .25;
		// Set background color of purchase button to red
		purchaseButton.style.backgroundColor = "#b30005";
	}
	// If character is unlocked
	else if (ls[character] == "true") {
		// Hide purchase buttons
		purchaseButton.style.display = "none";
		// Set text of purchase heading to "Unlocked"
		document.querySelector("main>section:first-child>div:nth-child(2)>div:nth-child(2)>h2").textContent = "Unlocked";
	}
	// If character is not unlocked and user has enough redbacks
	else {
		// Set purchase button opacity to opaque
		purchaseButton.style.opacity = "";
		// Set background color of purchase button to default
		purchaseButton.style.backgroundColor = "";
	}
	// If not unlocked, set text of purchase heading to "Purchase"
	if (ls[character] != "true") document.querySelector("main>section:first-child>div:nth-child(2)>div:nth-child(2)>h2").textContent = "Purchase";
	// Set attack stat element text to character's attack
	characterStats.children[1].textContent = good[character].stats[0],
	// Set health stat element text to character's health
	characterStats.children[2].textContent = good[character].stats[1],
	// Set healing stat element text to character's healing
	characterStats.children[3].textContent = good[character].stats[2];
}
function changeBattleground(changeInIndex) {
	battleground = battles[battles.indexOf(battleground) + changeInIndex];
	if (!battleground && changeInIndex == 1) battleground = battles[0];
	else if (!battleground && changeInIndex == -1) battleground = battles[battles.length - 1];
	refresh();
}
// Refresh layout on page load
refresh();
// Add a purchase button click event
document.querySelector("main>section:first-child>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)").addEventListener(isMobile?"touchend":"click", function() {
	// Define the character box element
	var characterBox = document.querySelector("main>section:nth-child(2) div div[style*=border]"),
	// Define the character purchase cost
	cost = good[character].info[2];
	// If the user has enough redbacks
	if (ls.redbacks >= cost && ls[character] != "true") {
		// Take away the user's redbacks
		ls.redbacks -= cost;
		// Unlock the character
		ls[character] = true;
		// Set opacity of character box to opaque
		characterBox.style.opacity = 1;
		// Hide purchase buttons
		document.querySelector("main>section:first-child>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)").style.display = "none";
		// Set text of purchase heading to "Unlocked"
		document.querySelector("main>section:first-child>div:nth-child(2)>div:nth-child(2)>h2").textContent = "Unlocked";
		// Refresh the layout
		refresh(character);
	}
});
// Add a back button click event
document.querySelector("main>img").addEventListener(isMobile?"touchend":"click", function(){ location = "../index.html" });
// Add a change to previous battleground click event
document.querySelector("main>section:nth-child(2) img:nth-child(4)").addEventListener(isMobile?"touchend":"click", function(){ changeBattleground(-1) });
// Add a change to next battleground click event
document.querySelector("main>section:nth-child(2) img:nth-child(5)").addEventListener(isMobile?"touchend":"click", function(){ changeBattleground(1) });
// Disable dragging of images
document.ondragstart = function(){ return false };