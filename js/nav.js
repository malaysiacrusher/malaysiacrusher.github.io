function Mea(value){
	var n=value;
	setBg(value);
	}
function setBg(value){
	for(var i=0;i<7;i++){
	   if(value==i){
	     document.getElementById("a"+value).className='li1';      
			}	else{	
			 document.getElementById("a"+i).className='li0';
			}  
	} 
}
