
/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import "cypress-iframe"


describe('Test Suite for iframes', function(){

    it('Interaction with an iframe',function(){

        cy.visit(Cypress.env('url')+'AutomationPractice/')
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href='https://courses.rahulshettyacademy.com/courses']").eq(0).click();

    })

})
