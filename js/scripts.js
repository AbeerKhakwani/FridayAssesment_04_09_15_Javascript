var triangleChecker = function(side1, side2, side3)
{
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