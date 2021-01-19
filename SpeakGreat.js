
(function(window){
	var greatSpeaker = {};
	var speakWord = "You're the best";

	greatSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name + "!");
	}

	window.greatSpeaker = greatSpeaker;
	
})(window);
