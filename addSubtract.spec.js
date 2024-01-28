import { createCalculator } from "./addSubtract.js";
import { expect } from "chai";

describe("CreateCalculator", () => {
    it("should return 0 if no operation are executed", () => {
        // Arrange
        let calculator = createCalculator();
        // Act
        let result = calculator.get();
        // Assert
        expect(result).to.be.equal(0);
    });

    it ("should negative number if only subtract operation are executed", () => {
        // Arrange
        let calculator = createCalculator();
        // Act
        calculator.subtract(5); 
        calculator.subtract(10);
        let result = calculator.get();
        // Assert
        expect(result).to.be.equal(-15);
    });

    it("should return positive number if only add operation are executed", () => {
        // Arrange
        let calculator = createCalculator();
        // Act
        calculator.add(5);
        calculator.add(5);
        let result = calculator.get();
        // Assert
        expect(result).to.be.equal(10);
    });

    it("should handle number as string", () => {
        // Arrange
        let calculator = createCalculator();
        // Act
        calculator.add("10");
        calculator.add("10");
        calculator.subtract("20");
        let result = calculator.get();
        // Assert
        expect(result).to.be.equal(0);
    });

    it("should handle a mix of operation", () => {
        // Arrange
        let calculator = createCalculator();
        // Act
        calculator.add(10);
        calculator.add(10);
        calculator.subtract(20);
        let result = calculator.get();
        // Assert
        expect(result).to.be.equal(0);
    });
});