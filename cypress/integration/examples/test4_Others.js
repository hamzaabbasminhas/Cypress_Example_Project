/// <reference types="Cypress" />
 
describe('Other common UI Elements Test Suite', function() 
{
 
beforeEach(() => { 
        //visit the url saved in env before executing every test
     cy.visit(Cypress.env('url')+'AutomationPractice/')
    })
it('Test Force click on hovering',function() {

    cy.contains('Top').click({force:true})

    cy.url().should('include', '#top')
 
})

it('Show hidden element using invoke', function(){

    cy.get('div.mouse-hover-content').invoke('show')

    cy.contains('Top').click()

    cy.url().should('include', '#top')

    cy.get('div.mouse-hover-content').invoke('show')

    cy.contains('Reload').click()

    cy.url().should('not.include', '#top')

})

it('Check element visible and not visible', function(){

    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
})

 
 
})