function addEventsListener(element, type, func){
	if(window.addEventListener){
		element.addEventListener(type, func, false);
	}

	else if(window.attachEvent){
		element.addEventListener('on'+type, func);
	}

	else{
		var oldFunc = element['on'+type];
		if(!oldFunc){
			element['on'+type] = func;
		}
		else{
			element['on'+type] = function(){
				oldFunc();
				func();
			}
		}
	}
}