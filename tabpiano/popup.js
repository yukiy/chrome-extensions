//---send a message to background.html(background.js)
chrome.runtime.sendMessage({
	message: "let's play the piano"

}, function(res) {
	//---display background's reply to popup.html
	$('body').append(res.message);
});

