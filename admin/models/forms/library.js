/*--------------------------------------------------------------------------------------------------------|  www.vdm.io  |------/
    __      __       _     _____                 _                                  _     __  __      _   _               _
    \ \    / /      | |   |  __ \               | |                                | |   |  \/  |    | | | |             | |
     \ \  / /_ _ ___| |_  | |  | | _____   _____| | ___  _ __  _ __ ___   ___ _ __ | |_  | \  / | ___| |_| |__   ___   __| |
      \ \/ / _` / __| __| | |  | |/ _ \ \ / / _ \ |/ _ \| '_ \| '_ ` _ \ / _ \ '_ \| __| | |\/| |/ _ \ __| '_ \ / _ \ / _` |
       \  / (_| \__ \ |_  | |__| |  __/\ V /  __/ | (_) | |_) | | | | | |  __/ | | | |_  | |  | |  __/ |_| | | | (_) | (_| |
        \/ \__,_|___/\__| |_____/ \___| \_/ \___|_|\___/| .__/|_| |_| |_|\___|_| |_|\__| |_|  |_|\___|\__|_| |_|\___/ \__,_|
                                                        | |                                                                 
                                                        |_| 				
/-------------------------------------------------------------------------------------------------------------------------------/

	@version		2.6.x
	@created		30th April, 2015
	@package		Component Builder
	@subpackage		library.js
	@author			Llewellyn van der Merwe <http://vdm.bz/component-builder>	
	@github			Joomla Component Builder <https://github.com/vdm-io/Joomla-Component-Builder>
	@copyright		Copyright (C) 2015. All Rights Reserved
	@license		GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html 
	
	Builds Complex Joomla Components 
                                                             
/-----------------------------------------------------------------------------------------------------------------------------*/

// Some Global Values
jform_vvvvvzvvzm_required = false;
jform_vvvvvzvvzn_required = false;
jform_vvvvwaavzo_required = false;

// Initial Script
jQuery(document).ready(function()
{
	var how_vvvvvzu = jQuery("#jform_how").val();
	vvvvvzu(how_vvvvvzu);

	var how_vvvvvzv = jQuery("#jform_how").val();
	vvvvvzv(how_vvvvvzv);

	var how_vvvvvzw = jQuery("#jform_how").val();
	vvvvvzw(how_vvvvvzw);

	var how_vvvvvzx = jQuery("#jform_how").val();
	vvvvvzx(how_vvvvvzx);

	var how_vvvvvzy = jQuery("#jform_how").val();
	vvvvvzy(how_vvvvvzy);

	var how_vvvvvzz = jQuery("#jform_how").val();
	vvvvvzz(how_vvvvvzz);

	var type_vvvvwaa = jQuery("#jform_type input[type='radio']:checked").val();
	vvvvwaa(type_vvvvwaa);
});

// the vvvvvzu function
function vvvvvzu(how_vvvvvzu)
{
	if (isSet(how_vvvvvzu) && how_vvvvvzu.constructor !== Array)
	{
		var temp_vvvvvzu = how_vvvvvzu;
		var how_vvvvvzu = [];
		how_vvvvvzu.push(temp_vvvvvzu);
	}
	else if (!isSet(how_vvvvvzu))
	{
		var how_vvvvvzu = [];
	}
	var how = how_vvvvvzu.some(how_vvvvvzu_SomeFunc);


	// set this function logic
	if (how)
	{
		jQuery('#jform_addconditions-lbl').closest('.control-group').show();
	}
	else
	{
		jQuery('#jform_addconditions-lbl').closest('.control-group').hide();
	}
}

// the vvvvvzu Some function
function how_vvvvvzu_SomeFunc(how_vvvvvzu)
{
	// set the function logic
	if (how_vvvvvzu == 2)
	{
		return true;
	}
	return false;
}

// the vvvvvzv function
function vvvvvzv(how_vvvvvzv)
{
	if (isSet(how_vvvvvzv) && how_vvvvvzv.constructor !== Array)
	{
		var temp_vvvvvzv = how_vvvvvzv;
		var how_vvvvvzv = [];
		how_vvvvvzv.push(temp_vvvvvzv);
	}
	else if (!isSet(how_vvvvvzv))
	{
		var how_vvvvvzv = [];
	}
	var how = how_vvvvvzv.some(how_vvvvvzv_SomeFunc);


	// set this function logic
	if (how)
	{
		jQuery('#jform_php_setdocument').closest('.control-group').show();
		if (jform_vvvvvzvvzm_required)
		{
			updateFieldRequired('php_setdocument',0);
			jQuery('#jform_php_setdocument').prop('required','required');
			jQuery('#jform_php_setdocument').attr('aria-required',true);
			jQuery('#jform_php_setdocument').addClass('required');
			jform_vvvvvzvvzm_required = false;
		}

		jQuery('#jform_php_preparedocument').closest('.control-group').show();
		if (jform_vvvvvzvvzn_required)
		{
			updateFieldRequired('php_preparedocument',0);
			jQuery('#jform_php_preparedocument').prop('required','required');
			jQuery('#jform_php_preparedocument').attr('aria-required',true);
			jQuery('#jform_php_preparedocument').addClass('required');
			jform_vvvvvzvvzn_required = false;
		}

	}
	else
	{
		jQuery('#jform_php_setdocument').closest('.control-group').hide();
		if (!jform_vvvvvzvvzm_required)
		{
			updateFieldRequired('php_setdocument',1);
			jQuery('#jform_php_setdocument').removeAttr('required');
			jQuery('#jform_php_setdocument').removeAttr('aria-required');
			jQuery('#jform_php_setdocument').removeClass('required');
			jform_vvvvvzvvzm_required = true;
		}
		jQuery('#jform_php_preparedocument').closest('.control-group').hide();
		if (!jform_vvvvvzvvzn_required)
		{
			updateFieldRequired('php_preparedocument',1);
			jQuery('#jform_php_preparedocument').removeAttr('required');
			jQuery('#jform_php_preparedocument').removeAttr('aria-required');
			jQuery('#jform_php_preparedocument').removeClass('required');
			jform_vvvvvzvvzn_required = true;
		}
	}
}

// the vvvvvzv Some function
function how_vvvvvzv_SomeFunc(how_vvvvvzv)
{
	// set the function logic
	if (how_vvvvvzv == 3)
	{
		return true;
	}
	return false;
}

// the vvvvvzw function
function vvvvvzw(how_vvvvvzw)
{
	if (isSet(how_vvvvvzw) && how_vvvvvzw.constructor !== Array)
	{
		var temp_vvvvvzw = how_vvvvvzw;
		var how_vvvvvzw = [];
		how_vvvvvzw.push(temp_vvvvvzw);
	}
	else if (!isSet(how_vvvvvzw))
	{
		var how_vvvvvzw = [];
	}
	var how = how_vvvvvzw.some(how_vvvvvzw_SomeFunc);


	// set this function logic
	if (how)
	{
		jQuery('.note_display_library_config').closest('.control-group').show();
	}
	else
	{
		jQuery('.note_display_library_config').closest('.control-group').hide();
	}
}

// the vvvvvzw Some function
function how_vvvvvzw_SomeFunc(how_vvvvvzw)
{
	// set the function logic
	if (how_vvvvvzw == 2 || how_vvvvvzw == 3)
	{
		return true;
	}
	return false;
}

// the vvvvvzx function
function vvvvvzx(how_vvvvvzx)
{
	if (isSet(how_vvvvvzx) && how_vvvvvzx.constructor !== Array)
	{
		var temp_vvvvvzx = how_vvvvvzx;
		var how_vvvvvzx = [];
		how_vvvvvzx.push(temp_vvvvvzx);
	}
	else if (!isSet(how_vvvvvzx))
	{
		var how_vvvvvzx = [];
	}
	var how = how_vvvvvzx.some(how_vvvvvzx_SomeFunc);


	// set this function logic
	if (how)
	{
		jQuery('.note_display_library_files_folders_urls').closest('.control-group').show();
	}
	else
	{
		jQuery('.note_display_library_files_folders_urls').closest('.control-group').hide();
	}
}

// the vvvvvzx Some function
function how_vvvvvzx_SomeFunc(how_vvvvvzx)
{
	// set the function logic
	if (how_vvvvvzx == 1 || how_vvvvvzx == 2 || how_vvvvvzx == 3)
	{
		return true;
	}
	return false;
}

// the vvvvvzy function
function vvvvvzy(how_vvvvvzy)
{
	if (isSet(how_vvvvvzy) && how_vvvvvzy.constructor !== Array)
	{
		var temp_vvvvvzy = how_vvvvvzy;
		var how_vvvvvzy = [];
		how_vvvvvzy.push(temp_vvvvvzy);
	}
	else if (!isSet(how_vvvvvzy))
	{
		var how_vvvvvzy = [];
	}
	var how = how_vvvvvzy.some(how_vvvvvzy_SomeFunc);


	// set this function logic
	if (how)
	{
		jQuery('.note_no_behaviour_one').closest('.control-group').show();
		jQuery('.note_no_behaviour_three').closest('.control-group').show();
		jQuery('.note_no_behaviour_two').closest('.control-group').show();
	}
	else
	{
		jQuery('.note_no_behaviour_one').closest('.control-group').hide();
		jQuery('.note_no_behaviour_three').closest('.control-group').hide();
		jQuery('.note_no_behaviour_two').closest('.control-group').hide();
	}
}

// the vvvvvzy Some function
function how_vvvvvzy_SomeFunc(how_vvvvvzy)
{
	// set the function logic
	if (how_vvvvvzy == 0)
	{
		return true;
	}
	return false;
}

// the vvvvvzz function
function vvvvvzz(how_vvvvvzz)
{
	if (isSet(how_vvvvvzz) && how_vvvvvzz.constructor !== Array)
	{
		var temp_vvvvvzz = how_vvvvvzz;
		var how_vvvvvzz = [];
		how_vvvvvzz.push(temp_vvvvvzz);
	}
	else if (!isSet(how_vvvvvzz))
	{
		var how_vvvvvzz = [];
	}
	var how = how_vvvvvzz.some(how_vvvvvzz_SomeFunc);


	// set this function logic
	if (how)
	{
		jQuery('.note_yes_behaviour_one').closest('.control-group').show();
		jQuery('.note_yes_behaviour_two').closest('.control-group').show();
	}
	else
	{
		jQuery('.note_yes_behaviour_one').closest('.control-group').hide();
		jQuery('.note_yes_behaviour_two').closest('.control-group').hide();
	}
}

// the vvvvvzz Some function
function how_vvvvvzz_SomeFunc(how_vvvvvzz)
{
	// set the function logic
	if (how_vvvvvzz == 1)
	{
		return true;
	}
	return false;
}

// the vvvvwaa function
function vvvvwaa(type_vvvvwaa)
{
	// set the function logic
	if (type_vvvvwaa == 2)
	{
		jQuery('#jform_libraries').closest('.control-group').show();
		if (jform_vvvvwaavzo_required)
		{
			updateFieldRequired('libraries',0);
			jQuery('#jform_libraries').prop('required','required');
			jQuery('#jform_libraries').attr('aria-required',true);
			jQuery('#jform_libraries').addClass('required');
			jform_vvvvwaavzo_required = false;
		}

	}
	else
	{
		jQuery('#jform_libraries').closest('.control-group').hide();
		if (!jform_vvvvwaavzo_required)
		{
			updateFieldRequired('libraries',1);
			jQuery('#jform_libraries').removeAttr('required');
			jQuery('#jform_libraries').removeAttr('aria-required');
			jQuery('#jform_libraries').removeClass('required');
			jform_vvvvwaavzo_required = true;
		}
	}
}

// update required fields
function updateFieldRequired(name,status)
{
	var not_required = jQuery('#jform_not_required').val();

	if(status == 1)
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required+','+name;
		}
		else
		{
			not_required = ','+name;
		}
	}
	else
	{
		if (isSet(not_required) && not_required != 0)
		{
			not_required = not_required.replace(','+name,'');
		}
	}

	jQuery('#jform_not_required').val(not_required);
}

// the isSet function
function isSet(val)
{
	if ((val != undefined) && (val != null) && 0 !== val.length){
		return true;
	}
	return false;
}

jQuery(document).ready(function()
{
	// now load the displays
	getAjaxDisplay('library_config');
	getAjaxDisplay('library_files_folders_urls');
});

function addData(result,where){
	jQuery(result).insertAfter(jQuery(where).closest('.control-group'));
}
			
function addButtonID_server(type, size){
	var getUrl = JRouter("index.php?option=com_componentbuilder&task=ajax.getButtonID&format=json&vdm="+vastDevMod);
	if(token.length > 0 && type.length > 0 && size > 0){
		var request = 'token='+token+'&type='+type+'&size='+size;
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'jsonp',
		data: request,
		jsonp: 'callback'
	});
}
function addButtonID(type, where, size){
	addButtonID_server(type, size).done(function(result) {
		if(result){
			if (2 == size) {
				jQuery('#'+where).html(result);
			} else {
				addData(result, '#jform_'+where);
			}
		}
	});
}			
			
function addButton_server(type){
	var getUrl = JRouter("index.php?option=com_componentbuilder&task=ajax.getButton&format=json&vdm="+vastDevMod);
	if(token.length > 0 && type.length > 0){
		var request = 'token='+token+'&type='+type;
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'jsonp',
		data: request,
		jsonp: 'callback'
	});
}
function addButton(type,where){
	addButton_server(type).done(function(result) {
		if(result){
			addData(result,'#jform_'+where);
		}
	})
}			

function getAjaxDisplay(type){
	getAjaxDisplay_server(type).done(function(result) {
		if (result) {
			jQuery('#display_'+type).html(result);
		}
		// set button
		addButtonID(type,'header_'+type+'_buttons', 2); // <-- little edit button
	});
}

function getAjaxDisplay_server(type){
	var getUrl = "index.php?option=com_componentbuilder&task=ajax.getAjaxDisplay&format=json&vdm="+vastDevMod;
	if (token.length > 0 && type.length > 0) {
		var request = 'token='+token+'&type=' + type;
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'jsonp',
		data: request,
		jsonp: 'callback'
	});
}

function getFieldSelectOptions_server(fieldId){
	var getUrl = "index.php?option=com_componentbuilder&task=ajax.fieldSelectOptions&format=json";
	if (token.length > 0 && fieldId > 0) {
		var request = 'token='+token+'&id='+fieldId;
	}
	return jQuery.ajax({
		type: 'GET',
		url: getUrl,
		dataType: 'jsonp',
		data: request,
		jsonp: 'callback'
	});
}

function getFieldSelectOptions(fieldKey){
	// first check if the field is set
	if(jQuery("#jform_addconditions__addconditions"+fieldKey+"__option_field").length) {
		var fieldId = jQuery("#jform_addconditions__addconditions"+fieldKey+"__option_field option:selected").val();
		getFieldSelectOptions_server(fieldId).done(function(result) {
			if(result) {
				jQuery('textarea#jform_addconditions__addconditions'+fieldKey+'__field_options').val(result);
			} else {
				jQuery('textarea#jform_addconditions__addconditions'+fieldKey+'__field_options').val('');
			}
		});
	}
} 