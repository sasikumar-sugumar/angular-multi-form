'use strict';
var config = angular.module('multiform.config', []);
window.console = window.console || {};
window.console.log = window.console.log || function() {
};
config.constant('CONFIG', (function() {
	var contextpath = 'http://localhost:8081/';
	var staticcontent = "getStaticContent";
	var templateuri = "/assets/js/directive/template/";
	var partials = "/assets/js/partials/";
	var images = "/assets/images/";
	return {
		CONTEXT : contextpath,
		STATIC_CONTENT : contextpath + '/' + staticcontent,
		TEMPLATECONTEXT : contextpath + templateuri,
		PARTIALS : contextpath + partials,
		IMAGE : contextpath + images,
	};
})());