var showOrder = function (){
    //input
var userOrder;
var orderImage ="";
//process
while(userOrder !== "house" && userOrder !== "hotel")
{
userOrder = prompt("please enter house or hotel");
}
var numberOfImages;
numberOfImages = prompt("What is the number of hotel or house ?");

for (var i=0; i< numberOfImages ;i++)
{
if(userOrder === "hotel" ) {
    orderImage = orderImage + '<img src="images/hotel.png">';
}
else if (userOrder === "house") {
    orderImage = orderImage + '<img src="images/house.png">';
}
}
//output
return orderImage;
}


document.write('<h3>' + showOrder() + '</h3>');

