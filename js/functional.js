var funcs = {
	init : function(){
		$('#add-button').on('click', funcs.addArticle);
		$('#main').on('click', '.close', function(){
			var $target = $(this).parent('.article');
			funcs.closeArticle($target);
			return false;
		});
		$('#main').on('click', '.edit', funcs.editArticle);
		$('.more-article').on('click', funcs.ajaxxml);
	},

	addArticle : function(){
		var content = $('textarea').val();
		var newItem = funcs.addItem(content);
		$(newItem).insertBefore($('.article')[0]);
		//设置val和获取val
		$('textarea').val("");
		return false;

	},

	addItem : function(content){
		var articles = "";
		var date = new Date();
		articles+='<div class="article">';
		articles+='<div class="meta"><span class="date">'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'</span> ';
		articles+='<span class="time">'+date.getHours()+':'+date.getMinutes()+'</span></div><div class="close"><a href="#">×</a></div><div class="edit"><a href="#">edit</a></div>';
		articles+='<p>'+content+'</p></div>';
		return articles;
	},

	closeArticle : function($target){
		$target.remove();
	},

	editArticle : function(){
		var $this = $(this);
		var $target = $this.parent('.article');
		var content = $target.find('p').html();
		$('textarea').val(content);
		funcs.closeArticle($target);
		return false;
	},

	ajaxxml : function(){
		$.get('remote/ajaxxml.xml', function(data){
			$(data).find('article').each(function(){
				var content = $(this).find('content').text();
				var newArticle = funcs.addItem(content);
				$(newArticle).insertBefore('.more-article');
			});
		}, 'xml');	
	}
}

funcs.init();
