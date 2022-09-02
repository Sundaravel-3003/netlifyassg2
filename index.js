// function foo(){

//     var res = document.getElementById("fn").value;
//     console.log(res);

//     var res1 = document.getElementById("mn").value;
//     console.log(res1);
    
//     var res2 = document.getElementById("ln").value;
//     console.log(res2);
    
//     var res3 = document.getElementById("Em").value;
//     console.log(res3);

// }

// console.log(document.getElementById("main"));
// console.log(document.getElementById("main").value);


// var res =  document.getElementsByClassName("main")[0].innerHTML;
// console.log(res);
// console.log(document.getElementsByClassName("main").length);
// var res = document.querySelectorAll("div");
// for(i=0;i<res.length;i++){
//     console.log(res[i].innerHTML);
// }

// function foo(){
//     var res = +prompt("enter the value");
//     console.log(res + 20);
// }

var button =  document.createElement("button");
button.setAttribute= ("type","submit");
button.addEventListener("click",foo);
button.innerHTML = ("click me");
document.body.append(button);

function foo(){
    console.log("hello");
}