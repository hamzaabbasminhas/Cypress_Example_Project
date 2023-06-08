/// <reference types="Cypress" />
 
describe('Test Suite for Web table', function() 
{

    beforeEach(() => { 
        //visit the url saved in env before executing every test
     cy.visit(Cypress.env('url')+'AutomationPractice/')
    })
    it('Get Name of the course with price 35',function() {

        cy.get('[name="courses"]>tbody>tr>td:nth-child(3)').each(($e1, index, $list)=>{

            const price = $e1.text()

            if(price == '35')
            {
                cy.get('[name="courses"]>tbody>tr>td:nth-child(2)').eq(index).then((name)=>{
                    
                    const courseName = name.text()
                    cy.log(courseName)
                })
            }
        })
 
    })

    it('Get position,city and amount for given name', function(){

        cy.get('.tableFixHead>#product>tbody>tr>td:nth-child(1)').each(($e1, index, $list)=>{

            if($e1.text() === 'Jack'){

                const postion = $e1.next().text()
                const city = $e1.next().next().text()
                const amount = $e1.next().next().next().text()

                cy.log('Position is '+postion)
                cy.log('City is '+city)
                cy.log('Amount is '+amount)
            }

        })

    })

    it('Verify total amount is correct', function(){

        let sum = 0;
        cy.get('.tableFixHead>#product>tbody>tr>td:nth-child(4)').each(($e1, index, $list)=>{

            const price  = Number($e1.text());
            sum = sum + price;
        }).then(()=>{
            expect(sum).be.equal(296)

        }
        )

        
    })
 
})