class PracticePage{

    getRadioButtonList()
    {
        return cy.get('[type=radio]')
    }

    getCheckBoxList()
    {
        return cy.get('[type=checkbox]')
    }

    getHomeButton()
    {
        return cy.get('a > .btn')
    }

    getDropdownList()
    {
        return cy.get('#dropdown-class-example')
    }

    getDynamicDropdownInput()
    {
        return cy.get('#autocomplete')
    }
    getDynamicDropdownList()
    {
        return cy.get('.ui-menu-item div')
    }

    getOpenTabButton(){
        return cy.get('#opentab')
    }

    getNameField(){
        return cy.get('#name')
    }

    getConfirmAletButton(){
        return cy.get('#confirmbtn')
    }

}

export default PracticePage;