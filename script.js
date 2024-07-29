var slider= document.getElementById("ranged");
var fahOutput=document.getElementById("fahr");
var clsOutput=document.getElementById("cls");
fahOutput.innerHTML= slider.value + "° F";
clsOutput.innerHTML=((Number(slider.value)-32)*(5/9)).toFixed(0)+"° C";
slider.oninput=function()
{
    fahOutput.innerHTML=this.value+"° F";
    clsOutput.innerHTML=((Number(this.value)-32)*(5/9)).toFixed(0)+"° C";
};
