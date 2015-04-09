describe('triangleChecker', function() {
    it("checks to see if a triangle can even be formed with the three sides", function() {
        expect(triangleChecker(2,2,8)).to.equal("Please enter sides that make a triangle");
    });
      it("checks to see if a triangle can even be formed with the three sides", function() {
        expect(triangleChecker(2,8,2)).to.equal("Please enter sides that make a triangle");
    });
        it("checks to see if a triangle can even be formed with the three sides", function() {
        expect(triangleChecker(8,2,2)).to.equal("Please enter sides that make a triangle");
    });
         it("checks to see if a triangle can even be formed with the three sides", function() {
        expect(triangleChecker(8,2,10)).to.equal("Please enter sides that make a triangle");
    });
          it("checks to see if a triangle is an equalatrial Triangle", function() {
        expect(triangleChecker(2,2,2)).to.equal("This is an equilateral");
    });
        it("checks to see if a triangle is an isoceles Triangle", function() {
        expect(triangleChecker(2,2,3)).to.equal("This is an isosceles");
    });
        it("checks to see if a triangle is an isoceles Triangle", function() {
        expect(triangleChecker(2,3,2)).to.equal("This is an isosceles");
    });
        it("checks to see if a triangle is an isoceles Triangle", function() {
        expect(triangleChecker(3,2,2)).to.equal("This is an isosceles");
    });
        it("checks to see if a triangle is an scalene Triangle", function() {
        expect(triangleChecker(30,20,32)).to.equal("This is a scalene");
    });


  
    
});
