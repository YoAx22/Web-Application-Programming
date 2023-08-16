var URL="###";

var dfCounter=0;
var psCounter=0;
var avgCounter=0;
var networkCounter=0;
var errorCounter=0;

$( document ).ready(function() {
	getDisk();
	getProcess();
	getLoadAvg();
	getNetwork();
});


function getDisk() {

	a=$.ajax({
		url: '###',
		method: "GET"
	}).done(function(data) {
		dfCounter++;
		//clear out old data
		$("#dfRun").html(dfCounter);
		$("#disk").html("");
		$("#disk").append("<tr><th>Mount Point</th><th>Size</th><th>Used</th></tr>");
		len = data.df.length;
		for (i=0;i<len;i++) {
			$("#disk").append("<tr><td>" + data.df[i].Mount+"</td><td>" + data.df[i].Size + "</td><td>" + data.df[i].Used + "</td></tr>");
		}
		
		setTimeout(getDisk,5000);
	}).fail(function(error) {
		errorCounter++;
		$("#logRun").html(errorCounter);
		console.log("error",error.statusText);
		$("#log").prepend("df error "+new Date()+"<br>");
		
		setTimeout(getDisk,5000);
	});
}


function getProcess() {
 
	a=$.ajax({
		url: '###',
		method: "GET"
	}).done(function(data) {
		psCounter++;
		//clear out old data
		$("#processRun").html(psCounter);
		$("#processes").html("");
		len = data.ps.length;
		for (i=0;i<len;i++) {
	$("#processes").append("<tr><td>" + data.ps[i].user+"</td><td>" + data.ps[i].pid + "</td><td>" + data.ps[i].runTime+ "</td><td>"+ data.ps[i].cmd+"</td></tr>");
		console.log(data);
		}
		
		setTimeout(getProcess,5000);
	}).fail(function(error) {
		errorCounter++;
		$("#logRun").html(errorCounter);
		console.log("error",error.statusText);
		$("#log").prepend("ps error "+new Date()+"<br>");
		
		setTimeout(getProcess,5000);
	});
}


function getLoadAvg() {

	a=$.ajax({
		url: '###',
		method: "GET"
	}).done(function(data) {
		avgCounter++;
		//clear out old data
		$("#loadRun").html(avgCounter);
		$("#onemin").html(""); 
		$("#fivemin").html("");
		$("#fifteenmin").html("");
		$("#numRunning").html("");
		$("#ttlProc").html("");

		len = data.loadavg.length;

		$("#onemin").append(data.loadavg.OneMinAvg);
	 	$("#fivemin").append(data.loadavg.FiveMinAvg);	
		$("#fifteenmin").append(data.loadavg.FifteenMinAvg);
		$("#numRunning").append(data.loadavg.NumRunning);
		$("#ttlProc").append(data.loadavg.TtlProcesses);
		
		
		setTimeout(getLoadAvg,5000);
	}).fail(function(error) {
		errorCounter++;
		$("#logRun").html(errorCounter);
		console.log("error",error.statusText);
		$("#log").prepend("loadavg error "+new Date()+"<br>");
		
		setTimeout(getLoadAvg,5000);
	});
}


function getNetwork() {

	a=$.ajax({
		url: '###',
		method: "GET"
	}).done(function(data) {
		networkCounter++;
		//clear out old data
		$("#networkRun").html(networkCounter);

		$("#txbytes").html(""); 
		$("#rxbytes").html("");

		$("#txavg").html(""); 
		$("#rxavg").html("");
	
		len = data.network.length;

		$("#txbytes").append(data.network.txbytes);
	 	$("#rxbytes").append(data.network.rxbytes);

		$("#txavg").append(data.network.txbytes/86400);
	 	$("#rxavg").append(data.network.rxbytes/86400);
			
		
		setTimeout(getNetwork,5000);
	}).fail(function(error) {
		errorCounter++;
		$("#logRun").html(errorCounter);
		console.log("error",error.statusText);
		$("#log").prepend("network error "+new Date()+"<br>");
		
		setTimeout(getNetwork,5000);
	});
}


