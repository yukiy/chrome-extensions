console.log("I'm called in background");

var pianoOn = false;

var c3 = new Audio();
c3.src = "./data/piano_scale/3C.mp3";
c3.load();

var d3 = new Audio();
d3.src = "./data/piano_scale/3D.mp3";
d3.load();

var e3 = new Audio();
e3.src = "./data/piano_scale/3E.mp3";
e3.load();

var f3 = new Audio();
f3.src = "./data/piano_scale/3F.mp3";
f3.load();

var g3 = new Audio();
g3.src = "./data/piano_scale/3G.mp3";
g3.load();

var a4 = new Audio();
a4.src = "./data/piano_scale/4A.mp3";
a4.load();

var b4 = new Audio();
b4.src = "./data/piano_scale/4B.mp3";
b4.load();


//---when the active tab is changed
chrome.tabs.onActivated.addListener(function(activeInfo){

	//---get information about the selected tab
	chrome.tabs.getSelected(function(data){

		console.log(data);

		if(pianoOn){
			if(data.index % 7 == 0){
				c3.currentTime = 0;
				c3.play();
			}else if(data.index % 7 == 1){
				d3.currentTime = 0;
				d3.play();
			}else if(data.index % 7 == 2){
				e3.currentTime = 0;
				e3.play();
			}else if(data.index % 7 == 3){
				f3.currentTime = 0;
				f3.play();
			}else if(data.index % 7 == 4){
				g3.currentTime = 0;
				g3.play();
			}else if(data.index % 7 == 5){
				a4.currentTime = 0;
				a4.play();
			}else if(data.index % 7 == 6){
				b4.currentTime = 0;
				b4.play();
			}
		}

	})

})


//---wait for a message from popup.html(popup.js)
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.message == "let's play the piano"){
			if(pianoOn){
				pianoOn = false;
				sendResponse({
					message: "STOP."
				});
			}else{
				pianoOn = true;
				sendResponse({
					message: "PIANO!"
				});
			}
		}
});



