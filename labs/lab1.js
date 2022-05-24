var str=document.getElementById('inp_1').value
var str1=document.getElementById('inp_2').value

function proverka(){
    var str=document.getElementById('inp_1').value
    var i=0;
    if(str.length!=0)
  { 
    if(str[0]%2!=0) 
    {
      i++;
      if(/^[0-9]+$/.test(str[i]))
      {
        i++;
        if(/^[a-zA-Z]+$/.test(str[i]))
        {
        alert("данные 1 множества введены верно");
        }
        else
        alert("ожидалась буква(1 множество)");
      }
      else
      alert("ожидалась цифра(1 множество)");
    }
    else 
    alert("ожидалась нечетная цифра (1 множество)");   
  }
  else
  alert("введите первое множество!")
  return ;
   
}
function proverkal(){
  var str=document.getElementById('inp_2').value
  var i=0;
  if(str.length!=0)
  {  
  if(str[0]%2!=0) 
  {
    i++;
    if(/^[0-9]+$/.test(str[i]))
    {
      i++;
      if(/^[a-zA-Z]+$/.test(str[i]))
      {
      alert("данные 2 множества введены верно");
      }
      else
      alert("ожидалась буква (2 множество)");
    }
    else
    alert("ожидалась цифра (2 множество)");
  }
  else 
  alert("ожидалась нечетная цифра (2 множество)");
}
else
alert("введите второе множество!")  
return;  
}
 function intersection()
 {
  var str=document.getElementById('inp_1').value
  var str1=document.getElementById('inp_2').value
  var strl=str.length;
  var str1l=str1.length;
  var strob=new Array();
   i=0,j=0,k=0;
   while(i<=strl&&j<=str1l)
  {
     if(str[i]==str1[j])
     {
       strob[k]=str[i];
       i++;
       k++;
       j=0;
     } 
     if((j+1)==str1l){
      i++;
      j=0;
  }   
     if(str[i]!=str1[j])
     {
      j++;
     }
  }
  document.getElementById('strob').innerHTML=strob.join("");
} 

function addition()
{
  var str=document.getElementById('inp_1').value
  var str1=document.getElementById('inp_2').value
  var strl=str.length;
  var str1l=str1.length;
  var strob=new Array();
   i=0,j=0,k=0;
   if(strl>=str1l){
   while ((i <=strl) && (j <=str1l)) 
	{
    
    
		if (str[i] == str1[j])
		{ 
      j++;
			i++;
		} else {
			if ( str1[j]>str[i]) {
				strob[k] = str[i];
				k++;
				i++; 
			} 
      else
       {
				j++; 
			}
		}
  }
	while (i <= strl) {
	strob[k]=str[i];
		k++, i++;
  
	}
  document.getElementById('strob').innerHTML=strob.join("");
   }
 else{
 while ((i <=strl) && (j <=str1l)) 
    {
		if (str[i] == str1[j])
		{ 
      j++;
			i++;
		} else {
			if ( str1[j]<str[i]) {
				strob[k] = str1[j];
				k++;
				j++; 
			} 
      else
       {
				i++; 
			}
		}
	}
	while (j <= str1l) {
	strob[k]=str1[j];
		k++, j++;
	}
 
  
document.getElementById('strob').innerHTML=strob.join("");
}
}

 
function unification()
{
  var str=document.getElementById('inp_1').value
  var str1=document.getElementById('inp_2').value
  var strl=str.length;
  var str1l=str1.length;
  var strob=new Array();
  i=0,j=0,k=0;
  while ((i <=strl) && (j <=str1l)) 
	{
		if (str[i] == str1[j])
		{ 
			strob[k] = str[i];
			k++,i++,j++;
		} else {
			if (str[i] < str1[j]) {
				strob[k] =str[i];
				k++;
				i++; 
			} else {
				strob[k] = str1[j];
				k++;
				j++; 
			}
		}
	}
	while (i <=strl) {
		strob[k] = str[i];
		k++, i++;
	}
	while (j <=str1l) {
		strob[k] = str1[j];
		k++, j++;
	}
  document.getElementById('strob').innerHTML=strob.join("");
}
 function simmetric() 
 {
  var str=document.getElementById('inp_1').value
  var str1=document.getElementById('inp_2').value
  var strl=str.length;
  var str1l=str1.length;
  var strob=new Array();
  i=0,j=0,k=0;
  while ((i < strl) && (j < str1l)) 
  { 
    if (str[i] < str1[j]) { 
        strob[k] = str[i];
        k++;
        i++; 
    } else if (str[i] > str1[j]) {
        strob[k] = str1[j];
        k++;
        j++; 
    } else {
        i++, j++;
    }
}
while (i < strl) { 
    strob[k] = str[i];
    k++, i++;
}
while (j < str1l) {
    strob[k] = str1[j];
    k++, j++;
}
document.getElementById('strob').innerHTML=strob.join("");
 }
