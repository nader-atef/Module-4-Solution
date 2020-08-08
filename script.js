(function (window) {
    var names = ["Yaakov", "John", "Nader", "Atef", "Hussein", "Attia", "Messi", "Ronaldo", "Pirlo", "Hazard"];
  
    for (var i in names) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })(window);