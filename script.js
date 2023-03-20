function calculateMinCost() {
  //your code here
	var input=document.getElementById("rope-lengths").value;

	var inputarr=input.split(",");
	
	for(let i=0;i<inputarr.length;i++){
		inputarr[i]=Number(inputarr[i]);
	}
	
	

	let cost=0;
	
	while(inputarr.length>1){
		inputarr.sort(function(a,b) {return a-b;});	
		let val=inputarr[0]+inputarr[1];
		 cost+=val;
		inputarr.splice(0,2);
		inputarr.push(val);	
	}

	document.getElementById("result").innerHTML=cost;
  
  
}  
