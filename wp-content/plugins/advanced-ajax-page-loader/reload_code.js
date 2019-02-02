function AAPL_reload_code() {
//This file is generated from the admin panel - dont edit here! 
jQuery("a.fbPhoto").fancybox({
	"transitionIn"	: "elastic",
	"transitionOut"	: "elastic",
	"titlePosition" : "inside",
	"titleFormat"	: function(title, currentArray, currentIndex, currentOpts)
	{
		return "<span id=\'fancybox-title-over\' style=\'background-image:none; text-align:left;\'>" + (title.length ? title : "") + "</span>";
	}
});
}

function AAPL_click_code(thiss) {
//This file is generated from the admin panel - dont edit here! 
// highlight the current menu item
jQuery('ul.menu li').each(function() {
	jQuery(thiss).removeClass('current-menu-item');
});
jQuery(thiss).parents('li').addClass('current-menu-item');
}

function AAPL_data_code(dataa) {
//This file is generated from the admin panel - dont edit here! 

}