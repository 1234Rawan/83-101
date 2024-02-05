let elementp=document.querySelector("p");
elementp.remove();

let our_element=document.querySelector(".our-element");

let befor_element=document.createElement("div");
befor_element.className="new1";
befor_element.setAttribute("title","first div");
befor_element.setAttribute("data_value","start")
befor_element.innerHTML="first item";
our_element.before(befor_element);

let after_element=document.createElement("div");
after_element.className="new2";
after_element.setAttribute("title","sec div");
after_element.setAttribute("data_value","End");
after_element.innerHTML="sec item";
our_element.after(after_element);
//task4
let element=document.querySelector("div");
console.log(element.lastChild.textContent);

console.log(element.lastChild.textContent.trim());
//task5
let first=document.querySelector("div");
let Sec=document.querySelector("span");
let third=document.querySelector("p");
let fourth=document.querySelector("article");
let fiv=document.querySelector("section");
document.body.addEventListener("click", (e) => {
    if(e.target===first){
console.log("This is div");
    }
    else if(e.target===Sec){
        console.log("This is span");
    }
    else if(e.target===third){
        console.log("This is para");
    }
    else if(e.target===fourth){
        console.log("This is article");
    }
    else{
        console.log("This is section");
    }
});


