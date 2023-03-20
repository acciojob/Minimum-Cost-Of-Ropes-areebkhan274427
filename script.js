function calculateMinCost() {
  //your code here
	var input=document.querySelector("#rope-lengths").value;
	var inputarr=input.split(",");
	for(let i=0;i<inputarr.length;i++){
		inputarr[i]=Number(inputarr[i]);
	}
	

	inputarr.sort(function(a,b) {return a-b;});
	

	let cost=0;
	
	while(inputarr.length>1){
		let val=inputarr[0]+inputarr[1];
		let cost+=val;
		inputarr.splice(0,2);
		input.push(val);
		alert(val);
		inputarr.sort(function(a,b) {return a-b;});	
	}

	document.querySelector("#result").textContent=cost;
  
  
}  
