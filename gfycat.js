loadGfycat = function loadGfycatF () {
    console.log("loadGfycat called");

    $(".title a.imgScanned").each(function() {
	var href = $(this).attr("href");
	
	if (href.endsWith('gif') && !href.startsWith('http://gfycat.com')) {
	    $(this).attr("href",
			 "http://gfycat.com/fetch/"+href);
	}
    });    
};

waitLoadGfycat = function waitLoadGfycatF () {
    setTimeout(loadGfycat, 500);
}

$(function () {
    String.prototype.endsWith = function (suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };

    String.prototype.startsWith = function (prefix) {
	return this.indexOf(prefix) == 0;
    };

    loadGfycat();
    $(window).bind("neverEndingLoad", waitLoadGfycat);
});


