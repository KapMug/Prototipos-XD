<!--
	// DIV #1
	var dz0 = new Dropzone("div#compradorDep1", {
		url: "/a"
	});
	dz0.on("addedfile", function(file) {
		alert("Div #1");
		file.previewElement.querySelectorAll(".start0").onclick = function() { dz0.enqueueFile(file); };
	});
	document.querySelectorAll(".start0").onclick = function() {
		dz0.enqueueFiles(dz0.getFilesWithStatus(Dropzone.ADDED));
	};
	document.querySelectorAll(".cancel0").onclick = function() {
		dz0.removeAllFiles(true);
	};
		
	// DIV #2
	var dz1 = new Dropzone("div#previews1", {
		url: "/a"
	});
	dz1.on("addedfile", function(file) {
		alert("Div #2");
		file.previewElement.querySelectorAll(".start1").onclick = function() { dz1.enqueueFile(file); };
	});
	document.querySelectorAll(".start1").onclick = function() {
		dz1.enqueueFiles(dz1.getFilesWithStatus(Dropzone.ADDED));
	};
	document.querySelectorAll(".cancel1").onclick = function() {
		dz1.removeAllFiles(true);
	};
	
	// DIV #3
	var dz2 = new Dropzone("div#previews2", {
		url: "/a"
	});
	dz2.on("addedfile", function(file) {
		alert("Div #3");
		file.previewElement.querySelectorAll(".start2").onclick = function() { dz2.enqueueFile(file); };
	});
	document.querySelectorAll(".start2").onclick = function() {
		dz2.enqueueFiles(dz2.getFilesWithStatus(Dropzone.ADDED));
	};
	document.querySelectorAll(".cancel2").onclick = function() {
		dz2.removeAllFiles(true);
	};
-->