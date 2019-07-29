window.onload = function(){
	document.getElementById("unitprice").addEventListener("blur", vaildUnitPrice, false);
	document.getElementById("rent").addEventListener("blur", vaildRent, false);
	document.getElementById("cost").addEventListener("blur", vaildCost, false);
	document.getElementById("area").addEventListener("blur", vaildArea, false);
	document.getElementById("interest").addEventListener("blur", vaildInterest, false);
	var tdElem = document.all("tableRow");
	for(var i = 0; i < tdElem.length; i++){
		tdElem[i].addEventListener("mousemove", function(){changeColor(this, '#FFFFFF')}, false);
		tdElem[i].addEventListener("mouseout", function(){changeColor(this, '#F2F2F2')}, false);
	}
	document.getElementById("calBut").addEventListener("click", cal, false);
}
function vaildUnitPrice(){
	//alert("值为"+vaildRegex("unitprice", /^\d+(\.\d{1,2})?$/));
	return vaildRegex("unitprice", /^\d+(\.\d{1,2})?$/);
}
//function vaildRegex(eleName, regex){
//	
//}
function vaildRent(){
	return vaildRegex("rent", /^\d+(\.\d{1,2})?$/);
}
function vaildCost(){
	return vaildRegex("cost", /^\d+(\.\d{1,2})?$/);
}
function vaildArea(){
	return vaildRegex("area", /^\d+(\.\d{1,2})?$/);
}

function vaildInterest(){
	return vaildRegex("interest", /^\d+(\.\d{1,2})?$/);
}
function changeColor(obj, color){
	obj.bgColor = color;
}
function vaildate(){
	return vaildUnitPrice()&&
	       vaildRent()&&
	       vaildCost()&&
	       vaildArea()&&
	       vaildInterest();
}
function cal(){//计算函数
	if(vaildate()){
			var t_uintprice = parseFloat(getValue("unitprice"));//平米单价
			var t_rent = parseFloat(getValue("rent"));//租金
			var t_cost = parseFloat(getValue("cost"));//物业费
			var t_area = parseFloat(getValue("area"));//取得面积
			var t_first = parseInt(getValue("first"))/10;//首付比率
			var t_interest = parseFloat(getValue("interest"))/100;//贷款利息
			//首付金额
			document.getElementById("firstRes").innerHTML = "￥"+round(t_uintprice*t_area*t_first, 2);
			//贷款总额
			document.getElementById("totalRes").innerHTML = "￥"+round(t_uintprice*t_area*(1 - t_first), 2);
			//每月支付利息
			document.getElementById("monthRes").innerHTML = "￥"+round(t_uintprice*t_area*(1 - t_first)
			*t_interest/12, 2);
			//每月租金
			document.getElementById("rentRes").innerHTML = "￥"+round(t_rent*t_area, 2);
			//每月物业费
			document.getElementById("costRes").innerHTML = "￥"+round(t_cost*t_area, 2);
	}
}

function getValue(eleName){//取出内容函数
	if(document.getElementById(eleName) != null){
		return document.getElementById(eleName).value;
	}
	else
		return "";
}
function round(num, scale){
	return (Math.round(num * Math.pow(10, scale)))/Math.pow(10, scale);
}
