/// <reference types="Cypress" />
import base from "../../pages/base"
import formPage from "../../pages/formPage"

describe("Test The Application", () => {
    beforeEach(() => {  
        base.goToURL()
        cy.url().should("include", "compute.amazonaws.com/")
    })
    it("Add a Politician Happy Scenario...", () => {
        formPage.addPolitician()
    })
    it("Add a Politician With an invalid URL...", () => {
        formPage.addWithInvalidURL()
    })
})