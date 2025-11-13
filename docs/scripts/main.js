godocs = {
	mainUrl: 'Welcome.md',

	reloadContent() {
		this.downloadContent(this.getContentUrl());
	},

	downloadContent: function(url) {
		var me = this;
		//$.get('/Web/docs/api/' + url.toLowerCase() + '?_cb=' + Math.floor((Math.random() * 1000000) + 1), function (data) {
		$.get('api/' + url.toLowerCase() + '?_cb=' + Math.floor((Math.random() * 1000000) + 1), function (data) {
			me.initRenderer();
			document.getElementById('content').innerHTML = marked(data);
			godocs.connectAnchors('#content');
		});
	},

	getContentUrl: function() {
		var me = this,
			url = window.location.hash.substring(1);

		if (!url) {
			url = me.mainUrl;
		}
		return url;
	},

	getDocsType: function() {
		var url = window.location.hash.substring(1),
			lcaseUrl = url ? url.toLowerCase() : '';

		if (lcaseUrl.indexOf('api/reference/sdk/') === 0)
		    return 'api/reference/sdk';
		if (lcaseUrl.indexOf('docs/reference/rest/') === 0)
			return 'api/reference/rest';

		if (lcaseUrl.indexOf('reference/sdk/') === 0)
		    return 'reference/sdk';
		if (lcaseUrl.indexOf('reference/rest/') === 0)
		    return 'reference/rest';

		if (lcaseUrl.indexOf('sdk/') === 0)
			return 'sdk';
		if (lcaseUrl.indexOf('rest/') === 0)
			return 'rest';

		return '';
	},

	buildLinkUrl: function(href) {
	    if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0 || href.indexOf('mailto:') === 0) {
	        return href;
	    }

	    var type = this.getDocsType(),
			typeWithSlash = type + (type ? '/' : '');

		if (href.indexOf('/') === 0) {
			typeWithSlash = '';
		}

		return '#' + typeWithSlash + href;
	},

	initRenderer: function() {
		var me = this,
			renderer = new marked.Renderer();
		renderer.link = function(href, title, text) {
			if (this.options.sanitize) {
				try {
				  var prot = decodeURIComponent(unescape(href))
					.replace(/[^\w:]/g, '')
					.toLowerCase();
				} catch (e) {
					return '';
				}
				if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
					return '';
				}
			}

			href = me.buildLinkUrl(href);

			var out = '<a href="' + href + '"';
			if (title) {
				out += ' title="' + title + '"';
			}
			out += '>' + text + '</a>';
			return out;
		};

		marked.setOptions({
		  renderer: renderer,
		  gfm: true,
		  tables: true,
		  breaks: false,
		  pedantic: false,
		  sanitize: false,
		  smartLists: true,
		  smartypants: false
		});

		return renderer;
	},

	connectAnchors: function(baseQuery) {
		var me = this,
			ahrefs = $(baseQuery + ' a'),
			ahref,
			href;

		for (var i=0; i<ahrefs.length; i++) {
			ahref = $(ahrefs[i]);
			href = ahref.attr('href');
			if (!href) {
				ahref.click(me.onMenuLinkClick);
			} else if (href.indexOf('#') === 0) {
				ahref.click(me.onMenuLinkClick);
			} else {
			    if (href.indexOf('mailto:') !== 0) {
			        ahref.attr('target', '_new');
			    }
			}
		}
	},

	/*
	onInternalLinkClick: function(event) {
		setTimeout(function() {
			godocs.reloadContent();
		}, 10);
	},
	*/

	onMenuLinkClick: function(event) {
		var href = $(this),
			toggler = href.siblings('span.toggler');
		if (toggler.length) {
			toggler.click();
		}
	}
};

$(document).ready(function(){
	$('#index .root').treemenu().openActive();

	godocs.connectAnchors('#index');

	$(window).on('hashchange', function(e){
		godocs.reloadContent();	 
	});

	godocs.reloadContent();
});
