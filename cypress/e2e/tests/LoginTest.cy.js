///<reference types= "cypress"/>

import LoginPage from "../pages/LoginPage"
const loginpage= new LoginPage()

describe('',()=>{

    beforeEach('',()=>{
        cy.visit('/')
        cy.get('.close').click()
        cy.get('#quick-tour-0 > a').click()
    })

    it('',()=>{
        
        // cy.get('#username').type('raghavtest123@mailinator.com')
        // cy.get('#form-login > :nth-child(2) > .fieldarea > .form-control').type('123456')
        // cy.get('#form-login > .formaction > .button').click()
        loginpage.validLogin()
    })
    
})