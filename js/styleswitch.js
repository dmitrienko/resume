(function($)
{
	var availableStylesheets = [];
	var activeStylesheetIndex = 0;
	$.stylesheetToggle = function()
	{
		activeStylesheetIndex ++;
		activeStylesheetIndex %= availableStylesheets.length;
		$.stylesheetSwitch(availableStylesheets[activeStylesheetIndex]);
};

$.stylesheetSwitch = function(styleName)
{
	$('link[@rel*=style][title]').each(
	function(i)
	{
		this.disabled = true;
		if (this.getAttribute('title') == styleName) {
		this.disabled = false;
		activeStylesheetIndex = i;
		}
		}
	);
	createCookie('style', styleName, 365);
};

$.stylesheetInit = function()
{
	$('link[rel*=style][title]').each(
	function(i)
	{
		availableStylesheets.push(this.getAttribute('title'));
	}
	);
	var c = readCookie('style');
	if (c) {
	$.stylesheetSwitch(c);
	}
	};
}
)(jQuery);


function createCookie(name,value,days)
{
if (days)
	{
	var date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}
	function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
{
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
	return null;
}
	function eraseCookie(name)
{
	createCookie(name,"",-1);
}
