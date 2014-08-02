$(function(){
	hljs.configure({
		tabReplace: '    ', // 4 spaces
	});
	$('.panel').each(function(i, panel){
		var body = $(panel).find('.panel-body');
		var script = body.find('script').text().replace(/^\s+|\s+$/g, '');
		var source = body.find('.demo-source');
		source.text(script);
		try {
			hljs.highlightBlock(source[0]);
		} catch(e) {
			console.error(e);
		}
	});
});