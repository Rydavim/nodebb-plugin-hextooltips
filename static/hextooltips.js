$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
		composer.addButton('fa fa-diamond', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, ";hex(card)");
				controls.updateTextareaSelection(textarea, selectionStart + 5, selectionStart + 9);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, ';hex(', ')');
				controls.updateTextareaSelection(textarea, selectionStart + 3, selectionEnd + 3);
			}
		});
	});
});