	//密码验证
window.onload = function(){
				//alert("hello");
				var pwdElement = document.getElementById("pwd");
				var confElement = document.getElementById("conf");
				pwdElement.addEventListener("blur", vaildPwd, false);
				confElement.addEventListener("blur", vaildConf, false);
			}
			function vaildEmpty(elemName){
				var objElement = document.getElementById(elemName);
				var msgElement = document.getElementById(elemName+"Msg");
				if(objElement.value != ""){//密码不为空
					objElement.className = "right";
					msgElement.innerHTML = "内容输入正确";
					return true;
				}
				else{
					objElement.className = "wrong";
					msgElement.innerHTML = "内容输入错误";
					return false;
				}
			}
			function vaildRepeat(obj, des){
				var objElement = document.getElementById(obj);
				var desElement = document.getElementById(des);
				var msgElement = document.getElementById(des+"Msg");
				if(objElement.value == desElement.value){
					desElement.className = "right";
					msgElement.innerHTML = "内容输入正确";
					return true;
				}
				else{
					desElement.className = "wrong";
					msgElement.innerHTML = "内容输入错误";
					return false;
				}
			}
			function vaildPwd(){
				return vaildEmpty("pwd");
			}
			function vaildConf(){
				if(vaildEmpty("conf")){
					return vaildRepeat("pwd", "conf");
				}
				else{
					return vaildEmpty("conf");
				}
				
			}
			