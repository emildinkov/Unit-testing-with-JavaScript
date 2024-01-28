import { rgbToHexColor } from "./rgb-to-hex.js";
import { expect } from "chai";

describe("rgbToHexColor", () => {
    it("if the red value is smaller than zero should return undefined", () => {
        // Arrange
        let redColor = -1;
        let greenColor = 0;
        let blueColor = 0;
        // Act
        let result = rgbToHexColor(redColor, greenColor, blueColor);
        // Assert
        expect(result).to.be.undefined;
    });

    it("if the green value is smaller than zero should return undefined", () => {
                // Arrange
                let redColor = 0;
                let greenColor = -1;
                let blueColor = 0;
                // Act
                let result = rgbToHexColor(redColor, greenColor, blueColor);
                // Assert
                expect(result).to.be.undefined;
    });

    it("if the blue value is smaller than zero should return undefined", () => {
                // Arrange
                let redColor = 0;
                let greenColor = 0;
                let blueColor = -1;
                // Act
                let result = rgbToHexColor(redColor, greenColor, blueColor);
                // Assert
                expect(result).to.be.undefined;
    });

    it("if the red value is biggest than 255 should return undefined", () => {
                // Arrange
                let redColor = 256;
                let greenColor = 0;
                let blueColor = 0;
                // Act
                let result = rgbToHexColor(redColor, greenColor, blueColor);
                // Assert
                expect(result).to.be.undefined;
    });

    it("if the green value is biggest than 255 should return undefined", () => {
                // Arrange
                let redColor = 0;
                let greenColor = 256;
                let blueColor = 0;
                // Act
                let result = rgbToHexColor(redColor, greenColor, blueColor);
                // Assert
                expect(result).to.be.undefined;
    });

    it("if the blue value is biggest than 255 should return undefined", () => {
                // Arrange
                let redColor = 0;
                let greenColor = 0;
                let blueColor = 256;
                // Act
                let result = rgbToHexColor(redColor, greenColor, blueColor);
                // Assert
                expect(result).to.be.undefined;
    });

    it ("should return undefined if any of the parameters are of an invalid type", () => {
                // Arrange
                let redColor = "color";
                let greenColor = 0;
                let blueColor = 0;
                // Act
                let result = rgbToHexColor(redColor, greenColor, blueColor);
                // Assert
                expect(result).to.be.undefined;
    });

    it ("should return the same color if the parameters are within the range", () => {
                // Arrange
                let redColor = 12;
                let greenColor = 50;
                let blueColor = 100;
                // Act
                let result = rgbToHexColor(redColor, greenColor, blueColor);
                // Assert
                expect(result).to.be.equal("#0C3264");
    });

    it("if all parameters are biggest than 255 should return undefined", () => {
                // Arrange
                let redColor = 256;
                let greenColor = 256;
                let blueColor = 256;
                // Act
                let result = rgbToHexColor(redColor, greenColor, blueColor);
                // Assert
                expect(result).to.be.undefined;
    });

    it("if all parameters are smaller than 0 should return undefined", () => {
                // Arrange
                let redColor = -1;
                let greenColor = -1;
                let blueColor = -1;
                // Act
                let result = rgbToHexColor(redColor, greenColor, blueColor);
                // Assert
                expect(result).to.be.undefined;
    });

    it("should return correct color if a max rgb value is given", () => {
        // Arrange
        let redColor = 255;
        let greenColor = 255;
        let blueColor = 255;
        // Act
        let result = rgbToHexColor(redColor, greenColor, blueColor);
        // Assert
        expect(result).to.be.equal("#FFFFFF");
    });

    it("should return correct color if a min rgb value is given", () => {
        // Arrange
        let redColor = 0;
        let greenColor = 0;
        let blueColor = 0;
        // Act
        let result = rgbToHexColor(redColor, greenColor, blueColor);
        // Assert
        expect(result).to.be.equal("#000000");
    });
})