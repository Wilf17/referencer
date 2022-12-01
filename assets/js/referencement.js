var suivant1=document.getElementById("suivant1");
var suivant2=document.getElementById("suivant2");
var precedent1=document.getElementById("precedent1");
var precedent2=document.getElementById("precedent2");
var section1=document.getElementById("infospatients");
var section2=document.getElementById("infosconstantes");
var section3=document.getElementById("infospathologies");

suivant1.addEventListener("click",function(){
   section1.style.display="none";
   section2.style.display="grid";
   section3.style.display="none";
},false);
precedent1.addEventListener("click",function(){
   section1.style.display="grid";
   section2.style.display="none";
   section3.style.display="none";
},false)
suivant2.addEventListener("click",function(){
  section1.style.display="none";
  section2.style.display="none";
  section3.style.display="grid";
  
},false)
precedent2.addEventListener("click",function(){
section1.style.display="none";
section2.style.display="grid";
section3.style.display="none";
},false)

/******************------------------------------------------------------------------***************/
function getsymthomesvalue(){
   let sympthomes = document.getElementById("sympthomes").value;
   console.log(sympthomes);
}
