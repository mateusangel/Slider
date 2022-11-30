var btn1 = document.getElementById("r1");
var btn2 = document.getElementById("r2");
var btn3 = document.getElementById("r3");
var btn4 = document.getElementById("r4");
var sl1 = document.getElementById("slide1");
var sl2 = document.getElementById("slide2");
var sl3 = document.getElementById("slide3");
var sl4 = document.getElementById("slide4");

r1.addEventListener("click",clicar1);
r2.addEventListener("click",clicar2);
r3.addEventListener("click",clicar3);
r4.addEventListener("click",clicar4);


    function clicar1(){
       
        sl1.style.marginLeft=`-0px`
        sl1.style.transition="1s"
        
    }
    function clicar2(){
       
        sl1.style.marginLeft=`-900px`
        sl1.style.transition="1s"
    }
    
    function clicar3(){
       
        sl1.style.marginLeft=`-1800px`
        sl1.style.transition="1s"
    }

    
    function clicar4(){
        sl1.style.marginLeft=`-2700px`
        sl1.style.transition="1s"
    }




// var array = [0 ,-900 ,-1800 ,-2700];
// var slider = ["sl1","sl2","sl3","sl4"];

// function começar(){
//     for(var i = 0; i<array.length;i++){

//         slider[i].style.marginLeft=`${array[i]}px`;
        
//         if(i>=4){
//             i=0
//         }

//     }
// }





