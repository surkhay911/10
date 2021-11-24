
var width1 = 1;
var width2 = 1;
var width3 = 1;

var widthEnd1 = 60;
var widthEnd2 = 75;//переменная что бы менять количество процентов
var widthEnd3 = 85;

if (width1<widthEnd1){
    var id1 = setInterval(()=>{
        width1++; //увеличиваем проценты на 1
        document.getElementById("skills-html").style.width = width1 + '%'; //изменяет стиль тем самым происходит анимация
        document.getElementById("skills-html").innerHTML = width1 * 1 + '%';//изменяет количество процентов
if(width1>=widthEnd1){
    clearInterval(id1);//функция для остановки анимации
}},25);}

if (width2<widthEnd2){
    var id2 = setInterval(()=>{
        
    width2++; 
    document.getElementById("skills-css").style.width = width2 + '%'; 
    document.getElementById("skills-css").innerHTML = width2 * 1 + '%';
    if(width2>=widthEnd2){
        clearInterval(id2);
    }
},30);}



if (width3<widthEnd3){
var id3 = setInterval(()=>{
    
    width3++; 
    document.getElementById("skills-js").style.width = width3 + '%'; 
    document.getElementById("skills-js").innerHTML = width3 * 1 + '%';
    if(width3>=widthEnd3){
        clearInterval(id3);
    }
},20);}