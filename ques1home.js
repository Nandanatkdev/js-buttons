var inputbox=document.getElementById('inputbox');
var result=document.getElementById('result');
inputbox.onkeyup= function (){
    result.textContent=inputbox.value;

}