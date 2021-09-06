const App = document.getElementById("app");

let typewriter = new Typewriter(app, {
	strings : ["Youtuber", "Live Streamer", "Web Developer"],
	autoStart : true,
	loop : true,
	delay : 60,
	pauseFor : 1000,
});