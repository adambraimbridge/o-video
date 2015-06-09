'use strict';

var getDomPathTokens = require('../libs/get-dom-path-tokens');

function Video(el, opts) {
	this.containerEl = el;
	var defaultOpts = {
		classes: [],
		optimumWidth: null,
		placeholder: false
	};
	this.opts = {};
	for (var optionName in defaultOpts) {
		var optionAttribute = this.containerEl.getAttribute('data-n-video-opts-' + optionName);
		if (optionAttribute) {
			this.opts[optionName] = optionAttribute;
		} else if (opts[optionName]) {
			this.opts[optionName] = opts[optionName];
		} else {
			this.opts[optionName] = defaultOpts[optionName];
		}
	}
	this.classes = this.opts.classes || [];
	this.id = el.getAttribute('data-n-video-id');
	this.el;

	this.placeholderEl;
	this.domPathTokens = getDomPathTokens(this.containerEl);
	this.domPath = this.domPathTokens.reverse().join(' | ');

	this.containerEl.setAttribute('data-n-video-js', '');
}

Video.prototype.init = function () {
	return Promise.resolve(this);
};

module.exports = Video;
