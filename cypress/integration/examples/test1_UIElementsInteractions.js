/// <reference types="Cypress" />
import PracticePage from "../pageObjects/practicePage";
const practicePage = new PracticePage();

describe('Test Suite for Basic Web UI Elements interaction', function() 
{

beforeEach(() => { 
    //visit the url saved in env before executing every test
     cy.visit(Cypress.env('url')+'AutomationPractice/')
})

let data;
before(function() {


    cy.fixture('example').then((fdata) => {
        data = fdata
    }
    );
   
});

it('Test Case for Interacting with Radio Button',function() {

    // Select value of radio button you want to check from (0-1)
    cy.selectRadioButton(0).check()

    //assert that the selected radio button is checked
    practicePage.getRadioButtonList().eq(0).should('be.checked');


}  )

it('Test Case for interaction with check box', function(){

    // Select value of check box you want to check from (0-1)
    cy.selectCheckBox(0).check()

    //assert that the selected checkbox button is checked
    practicePage.getCheckBoxList().eq(0).should('be.checked');
})

it('Test Case for interaction with button', function(){

    //click on home button
    practicePage.getHomeButton().click()


    //verify that redirected on home page
    cy.url().should('eq', Cypress.env('url'))
})

it('Test Case for interaction with static drop down',function(){

    // select an option from the dropdown
    cy.selectDropdown('option1')

    //Verify option selected is correct
    practicePage.getCheckBoxList().should('have.value', 'option1')

})

it('Test Case for interaction with dynamic drop down', function(){

    //Enter name of country
    practicePage.getDynamicDropdownInput().type(data.countryName)

    //Select Country
    practicePage.getDynamicDropdownList().each(($e1, index, $list) => {

        if($e1.text() == data.countryName )
        {
            $e1.click();
        }
    
    })

    //Verify value selected in dropdown
    practicePage.getDynamicDropdownInput().should('have.value', data.countryName)


})
 
 
}  )