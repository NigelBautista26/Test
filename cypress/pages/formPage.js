/// <reference types="Cypress" />

const invalidURL = 'invalidURL'

class formPage {

    get fullNameField () { return cy.get('#fullName') }
    get countryField () { return cy.get('#country') }
    get dateOfBirthField () { return cy.get("input[name='yob']") }
    get positionField () { return cy.get('#position') }
    get urlField () { return cy.get("input[name='url']") }
    get riskLevel () { return cy.get("select[name='risk']") }
    get saveButton () { return cy.get('.btn') }
    get backButton () { return cy.get('.modal-footer > .btn') }
    get addedPoliticianMessage () { return cy.get('.modal-body') }
    get invalidURLMessage () { return cy.get('.invalid-feedback') }
    get validURLMessage () { return cy.get('.valid-feedback') }
    
    assertMandatoryFields () { // This function asserts that the selectors are mandatory by checking the placeholder value assigned to easch field of the form...
        this.fullNameField.invoke('attr', 'placeholder').should('contain', 'John Doe') // The placeholder value is "John Doe"...
        this.countryField.invoke('attr', 'placeholder').should('contain', 'Neverland') // The placeholder value is "Neverland"...
        this.dateOfBirthField.invoke('attr', 'placeholder').should('contain', 'date placeholder') // The placeholder value is "date placeholder"...
        this.urlField.invoke('attr', 'placeholder').should('contain', 'url') // The placeholder value is "date url"...
    }
    addPolitician () {
        this.assertMandatoryFields()
        cy.fixture('politicianData').as('politicianFixture') // User Data from a JSON Fixture file...
        cy.get("@politicianFixture").then((politicianFixture) => { // use my Fixture Data...
        this.fullNameField.trigger('mouseover').type(politicianFixture.fullName)
        this.countryField.trigger('mouseover').type(politicianFixture.country)
        this.dateOfBirthField.trigger('mouseover').type(politicianFixture.dateOfBirth)
        this.positionField.trigger('mouseover').type(politicianFixture.position)
        this.urlField.trigger('mouseover').type(politicianFixture.url)
        this.validURLMessage.should('have.text', 'Valid URL.') // assertion for the valid URL message...
        this.riskLevel.select(politicianFixture.risk)
        this.saveButton.trigger('mouseover').click()
        cy.wait(5000) // I had an issue using a promise to wait for the Modal Element and so i just put a workaround wait here for now...
        this.addedPoliticianMessage.should('contain', 'You added')
        this.backButton.trigger('mouseover').click()
        })
    }
    addWithInvalidURL () {
        this.assertMandatoryFields()
        cy.fixture('politicianData').as('politicianFixture') // User Data from a JSON Fixture file...
        cy.get("@politicianFixture").then((politicianFixture) => { // use my Fixture Data...
        this.fullNameField.trigger('mouseover').type(politicianFixture.fullName)
        this.countryField.trigger('mouseover').type(politicianFixture.country)
        this.dateOfBirthField.trigger('mouseover').type(politicianFixture.dateOfBirth)
        this.positionField.trigger('mouseover').type(politicianFixture.position)
        this.urlField.trigger('mouseover').type(invalidURL)
        this.invalidURLMessage.should('have.text', 'Invalid URL format.') // assertion for the Invalid URL error message...
        this.riskLevel.select(politicianFixture.risk)
        this.saveButton.trigger('mouseover').click() // This is a bug, because despite the invalid url format, it still lets me click the save button.
        cy.wait(5000) // I had an issue using a promise to wait for the Modal Element and so i just put a workaround wait here for now...
        this.addedPoliticianMessage.should('contain', 'You added')
        this.backButton.trigger('mouseover').click() 
        })
    }
}

export default new formPage()