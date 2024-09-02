export const logindata=require('../../fixtures/Login.json')
import Common from "../common";
const helper = new Common();


export class LoginPage {
    // visit() {
    //   cy.visit('https://uat-sociolla-web.sociolabs.io/');
    // }
  
    // enterUsername(username) {
    //   cy.fixture('Login').then((selectors) => {
    //     cy.get(selectors.username).type(username);
    //   });
    // }
  
    // enterPassword(password) {
    //   cy.fixture('Login').then((selectors) => {
    //     cy.get(selectors.password).type(password);
    //   });
    // }
  
    // clickLoginButton() {
    //   cy.fixture('Login').then((selectors) => {
    //     cy.get(selectors.clickLoginButton).click();
    //   });
    // }

    validLogin() {
      helper.assertElementVisibility(logindata.username)
      helper.setTxtBoxValue(logindata.username,logindata.validCreds.email)
      helper.assertElementVisibility(logindata.password)
      helper.setTxtBoxValue(logindata.password,logindata.validCreds.password);
      helper.assertElementVisibility(logindata.clickLoginButton)
      helper.btnClick(logindata.clickLoginButton)

    }
  
  }
  
  export default LoginPage;