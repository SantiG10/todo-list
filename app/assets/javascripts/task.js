function valueChanged() {
  if ($('#checkbox_complete').is(':checked')) {
    $('#complete_tasks').show();
  }else{
    $('#complete_tasks').hide();
  }
}

jQuery.fn.submitOnCheck = function() {
	this.find('input[type=submit]').remove();
	this.find('input[type=checkbox]').click(function() {
		$(this).parent('form').submit();
	});
	return this;
}

$(function() {
	$('.edit_task').submitOnCheck();
});
