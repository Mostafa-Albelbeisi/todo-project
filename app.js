
function massWel(){

var name = prompt("Please enter your name");


var gender = prompt("Are you Male or Female?");
let text1;
if(gender == "Male"){
    text1 = "Mr";
}//end if1
else if(gender == "Female"){
    text1 = "Ms";
}//end else if
else{
    text1 = welMass;
}//end else


var age = prompt("How old are you?");
let text2;
if(age > 0 ){
text2 = "You can continue";
}//end if2
else{
    text2 = "You cannot continue";
}//end else2


var welMass = confirm("Are you want to skip the welcoming message?");
let text3;
if(welMass == "yes" && welMass == "no"){
    text3 = "Take care";

}//end if3
else{
    text3 = "Welcome " + text1 + "." + name + " " + text2;
}//end else3

console.log(text3);
}//end masswel
massWel();

function phase2(){
    var qoustion = [];
    for(var count = 0; count < 1; count++){
    var married = prompt("Are you married?");
    let text4;
    if(married == "yes"){
    qoustion.push("yes");
    }//end else4
    else{
        qoustion.push("invalid");
    }//end else4

    var work = prompt("Are you work?");
    let text5;
    if(work == "yes"){
    qoustion.push("yes");

    }//end if5
    else{
        qoustion.push("invalid");
    }//end else5
    var workPartTime = prompt("Are you work a part time?");
    let text6;
    if(workPartTime == "yes"){
        qoustion.push("yes");
    }//end if6
    else{
        qoustion.push("invalid");
    }//end else6
    break;
}//end forloop

console.log(qoustion);
    
}//end phase2
phase2();


// // function phase2(){
// // var qoustion = [];
// // for(var count = 0; count < 5; count++){
// // qoustion.push(prompt("Are you married?"));
// // qoustion.push(prompt("Are you work?"));
// // qoustion.push(prompt("Are you work a part time?"));
// // }//end for
// // }//end functionPhase2