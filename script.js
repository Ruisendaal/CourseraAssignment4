(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim", "Maaike"];
  for (var i=0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    var name = names[i];
 
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else if (name === "Maaike") {
      greatSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);
