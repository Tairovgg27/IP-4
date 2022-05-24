var mas=7;
var a = 0;  

function right() 
{ 
  if (a < mas-1)  
  a++ ;
   else
     a = 0;
     obj = a;
     document.getElementById("img").src="script/"+obj+".jpg";	 
}

function left() 
{     
if (a> 0)
 a--;
  else
    a = mas-1;
    obj = a;	  
    document.getElementById("img").src="script/"+obj+".jpg";			 
}