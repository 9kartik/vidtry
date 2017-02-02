var video = document.getElementById("player"), track; 
video.addEventListener("loadedmetadata", function() { 
   track = this.addTextTrack("captions", "English", "en"); 
});