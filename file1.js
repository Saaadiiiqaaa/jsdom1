let a = document.getElementById("text")
let b = document.getElementsByClassName("box")
let c = document.getElementsByTagName('h2')
function callMe(){
    console.log(a.innerText);
}
function call(){
    console.log(b[0].innerText);
    console.log(b[1].innerText);
}
function call_me(){
    console.log(c[0].innerText);
}
let text=document.getElementById('textchange')
function change_me(){
    let newtext.innerHTML="hellooo world"
   console.log(newtext);
}

let parent=document.querySelector("flex");

let btn=document.querySelector("change");

function changeflex(){
document.getElementById("flex").style.display="block";
document.getElementById("flex").style.marginBottom="20px";

}
let content=document.getElementById("heading")
function changecolor() {
content.setAttribute("style","color:red")
}

let tim=document.getElementById("time");
function clock(){
    let date = new Date();
   let hrs  =date.getHours();
   let mins= date.getMinutes();
   let secs = date.getSeconds();
    console.log(hrs,mins,secs);
   let  times;
   times= " hours-" + hrs +':  Minutes-' + mins +': seconds-'+secs
    tim.innerText= times;
}
setInterval(()=>{
    clock();
},1000)
/*......game...*/
let checknumber=document.querySelector('#displays');
let buttn = document.querySelector("#check");
let para =document.querySelectorAll("p");
let randomNumber = Math.floor(Math.random()*100+1); 
let count=100;
function check(){
    console.log(randomNumber);
    if(randomNumber < parseInt(checknumber.value)){
       para[0].innerText="your guess is higher";
       count--;
       para[1].innerText=count;
    }
    else if(randomNumber > parseInt(checknumber.value)){
        para[0].innerText="your guess is lower"
        count--;
        para[1].innerText=count;
    }
    else if(randomNumber === parseInt(checknumber.value)){
        para[0].innerText="hurray you won";
        count--; 
        para[1].innerText='chances:' + count;
        para[2].innerText='highscore:'+ count;
        document.getElementById("body").style.backgroundColor="green";
    }
}

