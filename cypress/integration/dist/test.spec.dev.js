"use strict";

describe("Check: Does number button print to display", function () {
  it("Can print a single number to display", function () {
    cy.visit("http://127.0.0.1:5500/"); // cy.get("[data-cy=nine]").click();

    cy.get(".calculator__number-nine").click();
    cy.get(".calculator__number-nine").click(); //cy.get(".calculator__display-value").should("have.text", "9");

    cy.get(".calculator__display").should("have.text", "99"); // cy.get(".calculator__display").should(($div) => {
    //     expect($div.text().trim()).equal("99");
    //   });
  });
}); // describe("Check: Does operator button print to display", () => {
//     it("Does not do much", () => {
// describe("Check: Can it perform a simple operation", () => {
//     it("Does not do much", () => {
//         expect(true).to.equal(true);
//     })
// })
// Initial code
// describe("Check: Can it check", () => {
//     it("Does not do much", () => {
//         expect(true).to.equal(true);
//     })
// })