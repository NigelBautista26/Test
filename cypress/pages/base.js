class Base {
    
    goToURL () { return cy.visit('http://ec2-34-250-139-60.eu-west-1.compute.amazonaws.com/') }
    
}

export default new Base()