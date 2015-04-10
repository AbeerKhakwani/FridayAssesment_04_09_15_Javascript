var triangleChecker = function(side1, side2, side3)
{

    side1 = parseInt(side1);
    side2 = parseInt(side2);
    side3 = parseInt(side3);
    var first2Added = side1 + side2; // 2+2=4
    var second2Added = side2 + side3; //2+8 =10
    var lastAndFirstAdded = side3 + side1; //2+8=10
    var returnString = "";

    if ((first2Added <= side3) || (lastAndFirstAdded <= side2) || (second2Added <= side1))
    {
        returnString += "Please enter sides that make a triangle";
    }
    else
    {
      if((side1===side2)&&(side1===side3)){

          returnString+="This is an equilateral";
      } 
      else if((side1===side2)|| (side1===side3)||(side2===side3))
      {

        returnString+="This is an isosceles";

      }
      else{
           returnString+="This is a scalene";

      }
    }


    return returnString;
}


$(function(){
  $("form#triangle_form").submit(function(event){
    var value1 = $("input#side1").val();
    var value2 = $("input#side2").val();
    var value3 = $("input#side3").val();
    
    var result = triangleChecker(value1,value2,value3);

    console.log("result is returning "+ result)

    $(".checked").text(result);

    $("#result").show();



  event.preventDefault();



   })




});