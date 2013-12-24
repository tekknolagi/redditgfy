$(function() {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };

    console.log("hi! gfycat extension loaded.");

    $(".title.imgScanned").each(function() {
	var href = $(this).attr("href");
	
	if (href.endsWith('gif')) {
	    $(this).attr("href",
			 "http://gfycat.com/fetch/"+href);
	}
    });

    console.log("bye! gfycat extension finished.");
});
