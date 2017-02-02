var video = document.getElementById("player"), track; 
var comments={}
var cue;
video.addEventListener("loadedmetadata", function() { 
   track = this.addTextTrack("captions", "English", "en"); 
	console.log(track);
   track.mode="showing";
});
cue=(tm,dur,cmt)=>track.addCue(new VTTCue(tm, tm+dur,cmt));
function addComment()
	{
		let x=0;
		console.log('stuff');
		if(!comments[player.currentTime])
			comments[player.currentTime]=[cmnt.value]
		else {x+=1;
			  comments[player.currentTime].push(cmnt.value);}
		if(player.paused)
			cue(player.currentTime,1,`<span style="background:hsl(${x*10}%,40%,50%)">${cmnt.value}</span>`)
	}