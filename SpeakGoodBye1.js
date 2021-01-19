
(function(window){
	var byeSpeaker1 = {};
	var speakWord = "Good Bye";

	byeSpeaker1.speak = function(name) {
	  console.log(speakWord + " " + name);
	}

	window.byeSpeaker1 = byeSpeaker1;
})(window);

