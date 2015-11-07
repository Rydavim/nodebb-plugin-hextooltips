"use strict";

var plugin = {};

plugin.parse = function(data, callback) {
	if (!data || !data.postData || !data.postData.content) {
	    return callback(null, data);
	}
	// this regex could be better
	data.postData.content = data.postData.content
	  .replace(/;hex\((.*)\)/gm, '<a data-name="$1" href="http://hex.tcgbrowser.com/card/$1">$1</a>');
  
  // replaces instances with no card link with their syntax so you can post syntax, could have better solution
  data.postData.content = data.postData.content
	  .replace(/<a data-name="card" href="http:\/\/hex.tcgbrowser.com\/card\/card">card<\/a>/gm, ';hex(card)');
  
	callback(null, data);
};

module.exports = plugin;