var food = 0;
var gold = 0;
var wood = 0;
var scavenger = 0;
var lumberjack = 0;
var miner = 0;


function foodClick(number){
	food = food + number;
	document.getElementById("food").innerHTML = food;
}

function woodClick(number){
	wood = wood + number;
	document.getElementById("wood").innerHTML = wood;
}

function goldClick(number){
	gold = gold + number;
	document.getElementById("gold").innerHTML = gold;
}








function buyScavenger(){
	var scavengerCost = Math.floor(10*Math.pow(1.1,scavenger));
	if (food >= scavengerCost) {
		scavenger = scavenger + 1;
		food = food - scavengerCost;
		document.getElementById('scavenger').innerHTML = scavenger;
		document.getElementById('food').innerHTML = food;
	};
	var nscavenegerCost = Math.floor(10 * Math.pow(1.1,scavenger));
	document.getElementById('scavengerCost').innerHTML = nscavenegerCost;
};
	window.setInterval(function(){
	foodClick(scavenger);
		}, 1000);


function buyLumberjack(){
	var lumberjackCost = Math.floor(15*Math.pow(1.1,lumberjack));
	if (food >= lumberjackCost) {
		lumberjack = lumberjack + 1;
		food = food - lumberjackCost;
		document.getElementById('lumberjack').innerHTML = lumberjack;
		document.getElementById('food').innerHTML = food;
	};
	var nlumberjackCost = Math.floor(15 * Math.pow(1.1,lumberjack));
	document.getElementById('lumberjackCost').innerHTML = nlumberjackCost;
};
	window.setInterval(function(){
	woodClick(lumberjack);
		}, 1000);
	

function buyMiner(){
	var minerCost = Math.floor(20*Math.pow(1.1,miner));
	if (food >= minerCost) {
		miner = miner + 1;
		food = food - minerCost;
		document.getElementById('miner').innerHTML = miner;
		document.getElementById('food').innerHTML = food;
	};
	var nminerCost = Math.floor(20 * Math.pow(1.1,miner));
	document.getElementById('minerCost').innerHTML = nminerCost;
};
	window.setInterval(function(){
	goldClick(miner);
}, 1000);
