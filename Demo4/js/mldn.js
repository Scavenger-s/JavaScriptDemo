//公共函数
//判断不为空
function vaildEmpty(eleName){
	var obj = document.getElementById(eleName);
	var msg = document.getElementById(eleName + "Msg");
	
	if(obj.value != ""){
		obj.className = "right";
		if(msg != null){
			msg.innerHTML = "<font color='#00FF00'>内容输入正确</font>";
		}
		return true;
	}
	else{
		obj.className = "wrong";
		if(msg != null){
			msg.innerHTML = "<font color='#00FF00'>内容不允许为空</font>";
		}
		return false;
	}
}

//判断正则
function vaildRegex(eleName, regex){
	var obj = document.getElementById(eleName);
	var msg = document.getElementById(eleName + "Msg");
	
	if( regex.test(obj.value) ){
		obj.className = "right";
		if(msg != null){
			msg.innerHTML = "<font color='#00FF00'>内容输入正确</font>";
		}
		return true;
	}
	else{
		
		obj.className = "wrong";
		if(msg != null){
			msg.innerHTML = "<font color='#FF0000'>内容格式不正确</font>";
		}
		return false;
	}
}
