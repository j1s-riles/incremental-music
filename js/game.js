var funds = 0.0;
var numArtists = 1;
var artistCut = 0.5;
var numSongs = 0;
var songProductionRate = 0.5;
var totalStreams = 0;
var streamsPerSecondPerSong = 10;
var dollarsPerStream = 0.00318 * 2;
var costPerArtist = 10.0;

var recruitScaling = 2.0;

updateMainStats();

// Main gameplay loop
var gameplay = setInterval(function (){ // Refreshes once per second
    // Per-second calculations
    numSongs += numArtists * songProductionRate;
    let streams = Math.floor(numSongs * streamsPerSecondPerSong);
    totalStreams += streams;
    funds += (streams * dollarsPerStream) * (1.0 - artistCut);

    // Update DOM to reflect new stats
    updateMainStats();
}, 1000);

// Updates the DOM with the current stats
function updateMainStats() {
    document.getElementById("funds").innerHTML = funds.toFixed(2);
    document.getElementById("numArtists").innerHTML = numArtists;
    document.getElementById("artistCut").innerHTML = artistCut;
    document.getElementById("numSongs").innerHTML = Math.floor(numSongs);
    document.getElementById("dollarsPerStream").innerHTML = dollarsPerStream;
    document.getElementById("costPerArtist").innerHTML = costPerArtist.toFixed(2);
}

document.getElementById("stop").onclick = function (){ 
    clearInterval(gameplay) 
}

document.getElementById("recruitNewArtist").onclick = function (){
    if (funds >= costPerArtist){
        funds -= costPerArtist;
        costPerArtist *= recruitScaling;
        recruitScaling *= 1.1;
        numArtists++;
        updateMainStats();
    }
    
}

