//task0
document.querySelector("#elzero");
document.querySelector(".element");
document.querySelector("[name='js']");
document.querySelector("div");
document.querySelector("#elzero.element");
document.querySelector("div#elzero");
document.querySelector("div.element");
//task1
let newImages=document.images;
for(i=0;i<newImages.length;i++){
   newImages[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
   newImages[i].alt=("Elzero Logo");
   newImages[i].style="background-color:pink";
}
//task2
let first=document.querySelector("input");
let second=document.getElementsByClassName("result")[0];
first.oninput=function(){
   second.innerHTML=`${first.value} USD Dollar = ${(first.value*15.6).toFixed(2)} Egyptian Pound`;
}
//task3
let one=document.getElementsByClassName("one")[0];
let two=document.getElementsByClassName("two")[0];
one.title=one.className;
two.title=two.className
//task4
let image=document.querySelectorAll("img");
for(i=0;i<image.length;i++){
   if(image[i].hasAttribute("alt")){
     image[i].alt="old";
   }else{
      image[i].alt="elzero name";
   }
}
//task5