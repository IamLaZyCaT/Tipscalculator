
// js
function cal()
{
    var a,b,c; 
    let tip=0;
    a = document.getElementById("bill").value;
    b = document.getElementById("rate").value;
    c = document.getElementById("number").value;
   if(a==""  || c=="" )
   
   { 

       alert("Enter all the box ");
   }
   else
   {
    
    tip = (parseInt(a) * (parseInt(b)/100))/parseInt(c);
    document.getElementById("answer").value = tip; 
   }
}
