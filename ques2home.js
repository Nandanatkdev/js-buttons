function addHello(){
    var helloElement=document.createElement('h1');
    helloElement.textContent="Hello";
    document.getElementById('container').appendChild(helloElement);

}
document.getElementById("addButton").addEventListener("click",addHello);