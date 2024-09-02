import LoginPage from "../pages/LoginPage"
import CartruleVoucherPage from "../pages/CartruleVoucherPage"
const loginpage= new LoginPage()
const cartRule= new CartruleVoucherPage()

describe('',()=>{

    beforeEach('',()=>{
        cy.visit('/')
        cy.get('.close').click()
        cy.get('#quick-tour-0 > a').click()
        loginpage.validLogin()
    })

    it

    it('',()=>{

        cartRule.addToBagProduct()
        cartRule.applyVoucher()

    })
    
    
})