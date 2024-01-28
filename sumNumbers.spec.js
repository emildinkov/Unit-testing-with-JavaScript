import { sum } from "./sumNumbers.js";
import { expect } from "chai";

describe("sum", () => {
    it("should return 0 if an empty array is given", () => {
        // Arrange
        let inputArray = [];
        // Act
        let result = sum(inputArray);
        // Assert
        expect(result).to.be.equals(0);
    });

    it("should return the single element as a sum if a single element array is given", () => {
        // Arrange
        let inputArray = [1];
        // Act
        let result = sum(inputArray);
        // Assert
        expect(result).to.be.equal(1);
    });

    it("should return the total sum of an array if a multi array is given", () => {
        // Arrange
        let inputArray = [2, 3, 5];
        // Act
        let result = sum(inputArray);
        // Assert
        expect(result).to.be.equal(10);
    });
})
