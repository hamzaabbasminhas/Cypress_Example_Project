/// <reference types="Cypress" />
import PracticePage from "../pageObjects/practicePage";

const practicePage = new PracticePage();

describe('Test Suite for Alerts, Switching tabs, etc', function() 
{

beforeEach(() => { 
        //visit the url saved in env before executing every test
     cy.visit(Cypress.env('url')+'AutomationPractice/')
    })
 
it('Alert tests',function() {

    practicePage.getNameField().type('Hamza Abbas')

    practicePage.getConfirmAletButton().click()   

    cy.on('window:confirm', (str)=>{

        expect(str).to.equal('Hello Hamza Abbas, Are you sure you want to confirm?')
    })

it('Switch tab test')

    //By default cypress doesnot allow to switch tab within a test

    practicePage.getOpenTabButton().invoke('removeAttr','target').click().then(()=>

    cy.url().should('include',"qaclickacademy")

    )
    cy.go('back').then(()=>{
        cy.url().should('include',"rahulshetty")
    }
    )

}  )
 
 
 
}  )