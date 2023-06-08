describe('Test Suite for file Upload and Downlaod', function(){

    it('Test case for uploading a file', function(){

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').selectFile('cypress/fixtures/QEP Team.png')

        cy.get('#file-submit').click()

        cy.get("#uploaded-files").contains("QEP Team.png")
        
    })
})