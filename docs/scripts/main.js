// Dark mode functionality
function initDarkMode() {
	const darkMode = localStorage.getItem('darkMode') === 'true';
	if (darkMode) {
		document.body.classList.add('dark-mode');
		document.getElementById('sunIcon').style.display = 'block';
		document.getElementById('moonIcon').style.display = 'none';
	}
	
	const toggle = document.getElementById('darkModeToggle');
	if (toggle) {
		toggle.addEventListener('click', function() {
			const isDark = document.body.classList.toggle('dark-mode');
			localStorage.setItem('darkMode', isDark);
			document.getElementById('sunIcon').style.display = isDark ? 'block' : 'none';
			document.getElementById('moonIcon').style.display = isDark ? 'none' : 'block';
		});
	}
}

// Sidebar resize functionality
function initSidebarResize() {
	const leftMenu = document.getElementById('leftmenu');
	const resizeHandle = document.getElementById('resize-handle');
	const content = document.querySelector('.content');
	
	if (!leftMenu || !resizeHandle || !content) return;
	
	// Load saved width from localStorage
	const savedWidth = localStorage.getItem('sidebarWidth');
	if (savedWidth) {
		const width = parseInt(savedWidth);
		leftMenu.style.width = width + 'px';
		resizeHandle.style.left = width + 'px';
		content.style.marginLeft = width + 'px';
	}
	
	let isResizing = false;
	let startX;
	let startWidth;
	
	resizeHandle.addEventListener('mousedown', function(e) {
		isResizing = true;
		startX = e.clientX;
		startWidth = leftMenu.offsetWidth;
		resizeHandle.classList.add('dragging');
		document.body.style.cursor = 'col-resize';
		document.body.style.userSelect = 'none';
		e.preventDefault();
	});
	
	document.addEventListener('mousemove', function(e) {
		if (!isResizing) return;
		
		const delta = e.clientX - startX;
		let newWidth = startWidth + delta;
		
		// Enforce min/max width
		const minWidth = 200;
		const maxWidth = 600;
		newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
		
		leftMenu.style.width = newWidth + 'px';
		resizeHandle.style.left = newWidth + 'px';
		content.style.marginLeft = newWidth + 'px';
	});
	
	document.addEventListener('mouseup', function() {
		if (isResizing) {
			isResizing = false;
			resizeHandle.classList.remove('dragging');
			document.body.style.cursor = '';
			document.body.style.userSelect = '';
			
			// Save the new width to localStorage
			localStorage.setItem('sidebarWidth', leftMenu.offsetWidth);
		}
	});
}

// Initialize on page load
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', function() {
		initDarkMode();
		initSidebarResize();
	});
} else {
	initDarkMode();
	initSidebarResize();
}

godocs = {
	mainUrl: 'Welcome.md',

	reloadContent() {
		this.downloadContent(this.getContentUrl());
	},

	downloadContent: function(url) {
		var me = this;
		var cacheBuster = Math.floor((Math.random() * 1000000) + 1),
			primaryUrl = 'api/' + url + '?_cb=' + cacheBuster,
			fallbackUrl = 'api/' + url.toLowerCase() + '?_cb=' + cacheBuster;

		$.get(primaryUrl, function (data) {
			me.initRenderer();
			document.getElementById('content').innerHTML = marked(data);
			godocs.connectAnchors('#content');
		}).fail(function() {
			if (fallbackUrl === primaryUrl) {
				document.getElementById('content').innerHTML = '<h1>Failed to load content</h1><p>Please try again</p>';
				return;
			}

			$.get(fallbackUrl, function (data) {
				me.initRenderer();
				document.getElementById('content').innerHTML = marked(data);
				godocs.connectAnchors('#content');
			}).fail(function() {
				document.getElementById('content').innerHTML = '<h1>Failed to load content</h1><p>Please try again</p>';
			});
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
