// Define the play button
var playButton = document.querySelector("main>div"),
// Define the bottom buttons container
buttonsContainer = document.querySelector("section"),
// Define the buttons to create
buttons = ["endless:endless", "pvp:multiplayer", "store:store", "credits:credits"];
// Add a click event to the play button
playButton.addEventListener("touchend", function() {
	// Load the battle page
	location = "battle/index.html";
});
// For every button needed to create
for (i = 0; i < buttons.length; i++) {
	// Create the button element
	var button = document.createElement("div");
	// Add text to the button
	button.textContent = buttons[i].split(":")[0];
	// Add a click event to the button
	button.addEventListener("touchend", function(e) {
		// Searches for the clicked button
		function buttonSearch(i) {
			// Returns true if this is the button clicked
			return i.includes(e.target.textContent);
		}
		// Load the page the button needs
		location = buttons.find(buttonSearch).split(":")[1] + "/index.html";
	});
	// Add the button to the page
	buttonsContainer.appendChild(button);
}
// Disable touch moving (scrolling)
document.addEventListener("touchmove", function(e){ e.preventDefault() });
