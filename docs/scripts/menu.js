var menuCreator = {
	defaultUrl: 'api/welcome.md',
	expandedCls: 'expanded',

	createMenu: function() {
		var me = this,
			topContainer = $('#body-container'),
			menuContainer = $('<div class="menu-container"></div>'),
			rootEl;

		//me.createSearchEl(menuContainer);

		rootEl = $('<ul id="mainMenu" class="menu children"><ul/>').appendTo(menuContainer);

		for (var i=0; i<menuData.Items.length; i++) {
			me.renderItem(rootEl, menuData.Items[i], 0)
		}

		var contentContainer = $('<div class="content-container"><div id="content"></div></div>');

		topContainer.append(menuContainer);
		topContainer.append(contentContainer);
	},

	createSearchEl: function(container) {
		var search,
			searchEl;
			
		search  = '<div class="search-container">';
		search += '<label for="searchfield"><span class="fa fa-search"></span></label>';
		search += '<input id="searchfield" autocomplete="off" autocomplete="new-password" value="" placeholder="Search...">';
		search += '<span class="fa fa-close"></span>';
		search += '<div/>';

		searchEl = $(search).appendTo(container);
	},

	renderItem: function(parentEl, currentItem, indentLevel) {
		var me = this,
			itemEl,
			itemsEl,
			cls = currentItem.Items.length > 0 ? ' expandable' : '',
			dataUrl = currentItem.Url ? ' data-itemid="' + me.hashCode(currentItem.CategoryPath + '\\' + currentItem.Url) + '"' : '';

		itemEl = $('<li class="menu-item' + cls + ' level-' + indentLevel +'"' + dataUrl + '></li>');

		itemInnerEl = $('<div class="inner"></div>');
		itemInnerEl.appendTo(itemEl);
		itemInnerEl.append('<span class="text" title="' + currentItem.Name + '">' + currentItem.Name + '</span>');


		if (currentItem.Items.length > 0) {
			itemInnerEl.append($('<span class="menu-item-expand-icon fa"></span>'));

			itemsEl = $('<ul class="children"></ul>');
			itemsEl.appendTo(itemEl);

			itemInnerEl.click(me.onExpandableClick.bind(me, currentItem, itemEl, itemInnerEl, itemsEl));

			for (var itemIdx=0; itemIdx < currentItem.Items.length; itemIdx++) {
				me.renderItem(itemsEl, currentItem.Items[itemIdx], indentLevel+1);
			}
		} else {
			itemEl.addClass('navtarget');
			itemEl.click(me.onMenuItemClick.bind(me, currentItem, itemEl, itemInnerEl, itemsEl));
		}
		
		itemEl.appendTo(parentEl);

		return itemEl;
	},

	onExpandableClick: function(item, itemEl, itemInnerEl, itemsEl) {
		var me = this,
			arrowEl = itemInnerEl.find('.menu-item-expand-icon');
		itemEl.toggleClass(me.expandedCls);
	},

	onMenuItemClick: function(item, el) {
		var me = this;
//		selectedEls = $('.menu-item.selected');
//		selectedEls.removeClass('selected');
		el.addClass('selected');
		window.location.hash = item.Url + '?itemid=' +  me.hashCode(item.CategoryPath + '\\' + item.Url);
	},

	onNavigate: function(href) {
		var me = this,
			url = href.hash.substring(1),
			hash = me.urlParam(url, 'itemid'),
			expandedEls,
			selectedEls,
			parentEls,
			itemEl;


		me.downloadContent(url);

		if (hash !== false) {
			itemEl = $('.menu-item[data-itemid=\'' + hash + '\']');

			selectedEls = $('.menu-item.selected');
			selectedEls.removeClass('selected');
			
			itemEl.addClass('selected');

			parentEls = itemEl.parents('.menu-item.expandable');
			parentEls.addClass('expanded selected');
		}
	},

	

	downloadContent: function(url) {
		var me = this;

		if (me.currentContentXhr) {
			me.currentContentXhr.abort();
			me.currentContentXhr = null;
		}

		$.ajax({
			type: 'GET',
			url: url.toLowerCase(),
			cache: false,
			beforeSend: function(xhr) {
				me.currentContentXhr = xhr;
			},
			success: function (data) {
				me.initMarkdownRenderer(url.toLowerCase());
				$('#content')[0].innerHTML = marked(data);
				me.initHightlights();
			},
			error: function(xhr, textStatus) {
				if (textStatus != 'abort') {
					$('#content')[0].innerHTML = '<h1>Failed to load content</h1><p>Please try again</p>';
				}
			},
			complete: function() {
				me.currentContentXhr = null;
			}
		});
		

/*		me.currentContentXhr = $.get(url.toLowerCase() + '?_cb=' + Math.floor((Math.random() * 1000000) + 1), function (data) {
			me.currentContentXhr = null;
			me.initMarkdownRenderer(url.toLowerCase());
			$('#content')[0].innerHTML = marked(data);
			me.initHightlights();
		});
		*/
	},

	initHightlights: function() {
		var me = this;
		document.querySelectorAll('#content pre code').forEach((block) => {
			var el = $(block),
				cls = el.attr('class');
			if (!cls)
				return;

			var classList = el.attr('class').split(/\s+/);
			$.each(classList, function(index, item) {
				if (item.substring(0, 5) == 'lang-') {
					var lang = item.substring(5);
					el.addClass(lang);
					hljs.highlightBlock(el[0])
				}
			});
		});
	},
	
	initMarkdownRenderer: function(currentUrl) {
		var me = this,
			renderer = new marked.Renderer(),
			baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/")+1),
			hash = me.urlParam(window.location.hash.substring(1), 'itemid'),
			hashParam = hash !== false ? '?itemid=' + hash : '';

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

			var newHref = me.buildLinkUrl(baseUrl, href) + hashParam;

			var out = '<a href="' + newHref + '"';
			if (title) {
				out += ' title="' + title + '"';
			}
			out += '>' + text;
			if (href.indexOf('http://') == 0 || href.indexOf('https://') == 0) {
				out += '&nbsp;<i class="fas fa-external-link-alt"></i>';
			}
			out += '</a>';
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

	buildLinkUrl: function(baseUrl, href) {
	    if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0 || href.indexOf('mailto:') === 0) {
	        return href;
	    }

		return '#' + baseUrl + href;
	},

	hashCode: function(str){
		var hash = 0;
		if (str.length == 0) return hash;
		for (i = 0; i < str.length; i++) {
			char = str.charCodeAt(i);
			hash = ((hash<<5)-hash)+char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	},

	urlParam: function(url, name) {
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
		return (results !== null) ? results[1] || 0 : false;
	}
}

$(document).ready(function() {
	
	menuCreator.createMenu();
	$(window).on('hashchange', function(e){
		menuCreator.onNavigate(window.location);
	});

	if (window.location.hash.length > 1 && window.location.hash.substring(0,1) == '#') {
		menuCreator.onNavigate(window.location);
	} else if (!window.location.hash) {
		window.location.hash = menuCreator.defaultUrl;
	}

});