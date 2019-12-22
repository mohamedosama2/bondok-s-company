
addEventListener("load", function my_function1() {
    var txt;
    if (confirm("do you want to sign in ")) {
        var person = prompt("enter your username");
        var person = prompt("enter your password ");
    } else {
        txt
    }
    document.getElementById("demo").innerHTML = txt;
}, false);

var table  = document.querySelector("table");

function myfunction7(x){
    x.style.background ="#b7b7b7";

}
function myfunction8(x){
    x.style.background ="#939393";
}
function myfunction9(){
  alert("The Text was deleted")
}
var myInput = document.getElementById("input");
var myDiv = document.getElementById("div");
var myCurrency = document.getElementById("currency");

myCurrency.onchange = function()
{
  myDiv.innerHTML="worth " + myInput.value * myCurrency.value + " Egyprion Pound" ;
}

function progress()
{
  var prg = document.getElementById("progress");
  var percent = document.getElementById("PercentCount");
  var counter = 5;
  var progress = 25;
  var id = setInterval(frame,50);
  function frame()
  {
    if(progress == 500 && counter == 100){
      clearInterval(id);
    }else{
      progress += 5;
      counter += 1;
      prg.style.width = progress +'px';
      percent.innerHTML= counter + '%';
    }
  }
}
progress();