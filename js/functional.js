var main = document.getElementById('main');
var contentForm = document.getElementById('edit-div');

	contentForm.onsubmit = addContent;

	var as = document.getElementsByTagName('a');
	for(var i=0;i<as.length;i++){
		if(as[i].parentNode.className == 'close'){
			as[i].onclick = closeArticle;
		}
	}


	

	function closeArticle(){
		var target = this.parentNode.parentNode;
		if(confirm('ar u fucking sure ?')){
			target.parentNode.removeChild(target);
		}
		return false;
	}

	function addContent(){
		var contentTextarea = contentForm.getElementsByTagName('textarea')[0];

		//textarea input 都用value获取里面的值
		var content = contentTextarea.value;
		var article = document.createElement('DIV');
		article.className = 'article';
		article.innerHTML = '<div class="meta"><span class="date">2013-9-30</span> <span class="time">19:00</span></div><div class="close"><a href="#">×</a></div><div class="edit"><a href="#">edit</a></div><p>'+content+'</p></div>';
		article.getElementsByTagName('a')[0].onclick = closeArticle;

		//非文本节点的子节点集合
		var firstArticle = main.children[0];
		main.insertBefore(article, firstArticle);
		return false;
	} 

	
	
