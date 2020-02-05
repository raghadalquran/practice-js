function ourgreeting(){
    //input
    var hourNow = prompt("What Is The Time Now ?");;
    var greeting;
//process
if(hourNow > 18 && hourNow <= 24 ) {
    greeting = 'Good evening!';
}
else if (hourNow > 12 && hourNow <= 18){
    greeting ='Good afternoon!';
}
else if (hourNow > 0 && hourNow <= 12) {
    greeting = 'Good morning!';
}
else {
    greeting = 'welcome!';
}
//output
return greeting;
}

document.write('<h3>' + ourgreeting() + '</h3>');