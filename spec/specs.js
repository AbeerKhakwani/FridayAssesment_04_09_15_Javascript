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
          it("checks to see if a triangle can even be formed with the three sides", function() {
        expect(triangleChecker(2,2,3)).to.equal("Please enter sides that make a triangle");
    });


  
    
});
