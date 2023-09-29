// 7aga malha4 lazma bs 3mltha 34an 2sbt lnfsy 2ny gamed
let ele = document.getElementsByClassName("navbar_name");
let ele_out = document.getElementsByClassName("button1"); 
let ele_out1 = document.getElementsByClassName("button2"); 
let ele_out2 = document.getElementsByClassName("button3"); 
// let ele_add = document.getElementsByClassName("add_button"); 
ele[0].onmouseenter = function(){
        ele[0].style.cursor = "pointer";
        ele_out[0].style.boxShadow = "1px 0px 20px 4px #1256ba";
        ele_out[0].style.transition = "all .3s linear";  
        ele_out1[0].style.boxShadow = "1px 0px 20px 4px #1256ba";
        ele_out1[0].style.transition = "all .5s linear";  
        ele_out2[0].style.boxShadow = "1px 0px 20px 4px red";
        ele_out2[0].style.transition = "all .6s linear";  
}
ele[0].onmouseleave = function(){
    ele_out[0].style.boxShadow = "1px 0px 6px 0px #1256ba";
    ele_out1[0].style.boxShadow = "1px 0px 6px 0px #1256ba";
    ele_out2[0].style.boxShadow = "1px 0px 6px 0px red";
}