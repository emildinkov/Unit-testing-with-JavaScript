import {isSymmetric} from "./checkForSymmetry.js";
import { expect } from "chai";

describe("isSymmetric", () => {
    it("if a given an empty array should return true", () => {
        // Arrange
        let inputArray = [];
        // Act
        let result = isSymmetric(inputArray);
        // Assert
        expect(result).to.be.true;
    });

    it("should return false if a non-array is given", () => {
        // Arrange
        // Act
        let texResult = isSymmetric("one");
        let numResult = isSymmetric(123);
        let objectResult = isSymmetric({});
        let nanResult = isSymmetric(NaN);
        let undefinedResult = isSymmetric(undefined);
        let nullResult = isSymmetric(null);
        // Assert
        expect(texResult).to.be.false;
        expect(objectResult).to.be.false;
        expect(nanResult).to.be.false;
        expect(undefinedResult).to.be.false;
        expect(numResult).to.be.false;
        expect(nullResult).to.be.false;
    });

    it("should return false if a non-symmetric array is given", () => {
        // Arrange
        let inputArray = [1, 2, 3, 4];
        // Act
        let result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.false;
    });

    it("should return true if a symmetric array is given", () => {
        // Arrange
        let inputArray = [3, 2, 1, 2, 3];
        // Act
        let result = isSymmetric(inputArray);
        // Assert
        expect(result).to.be.true;
    });
    it("should return false if a mix of numbers is given", () => {
        // Arrange
        let inputArray = ["1", "2", "3", 2, 1];
        // Act
        let result = isSymmetric(inputArray);
        // Assert
        expect(result).to.be.false;
    });
})