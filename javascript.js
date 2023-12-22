var pencil = document.getElementById("image");
var userinpt = document.getElementById("user");
var result = document.getElementById("allitems");

pencil.addEventListener("click", function(){
    result.innerHTML = "";
    userinpt.value = "";

})
userinpt.addEventListener("keydown", function(event){
    if( event.key == "Enter")
   additem();
   
})
function additem(){
 
    var h2 = document.createElement("h2");
    h2.innerHTML = "_ "+""+userinpt.value;
   
    h2.onclick = function(){
        h2.style.textDecoration = "line-through";
    }
     
    result.insertAdjacentElement("beforeend", h2);
    userinpt.value = "";

}

