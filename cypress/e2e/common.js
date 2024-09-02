// import Utils from "./utils";
// const util = new Utils();

export default class Common {

    openWeb = (path)=> {
        cy.clearAllCookies();
        console.log(Cypress.browser)
        return cy.visit(path);
    }

    assertElementVisibility = (selector)=>{
        cy.get(selector,{timeout: 10000}).should('be.visible');
    }

    assertElementWithTextVisibility = (selector, text)=>{
        cy.get(selector,{timeout: 10000}).contains(text).should('be.visible');
    }

    assertElementNotExist = (selector)=>{
        cy.get(selector,{timeout: 10000}).should('not.exist');
    }

    assertElementEnabled = (selector)=>{
        cy.get(selector,{timeout: 10000}).should('be.visible').should('be.enabled');
    }

    assertElementWithTextEnabled = (selector, text)=>{
        cy.get(selector,{timeout: 10000}).contains(text).should('be.visible').should('be.enabled');
    }

    assertElementDisabled = (selector)=>{
        cy.get(selector,{timeout: 10000}).should('be.visible').should('be.disabled');
    }

    assertElementChecked = (selector)=>{
        cy.get(selector,{timeout: 10000}).should('be.checked');
    }
 
    assertElementValue = (selector, value)=>{
        cy.get(selector).invoke('val').should('eq', value)
    }

    assertLengthOfElement= (selector, length)=>{
        cy.get(selector).should('have.lengthOf', length);
    }

    assertElementNotExist= (selector)=>{
        cy.get(selector).should('not.exist');
    }

    click = (selector)=>{
        // this.assertElementEnabled(selector);
        cy.get(selector).click();
    }

    setTxtBoxValue = (selector, value)=>{
        // this.assertElementEnabled(selector);
        cy.get(selector).clear().type(value);
    }

    setTxtAreaValue = (selector, value)=>{
        // this.assertElementEnabled(selector);
        cy.get(selector).clear().type(value);
    }

    btnClick = (selector)=>{
        // this.assertElementEnabled(selector);
        cy.get(selector).click();
    }

    btnClickWithText = (selector, text)=>{
        cy.get(selector).contains(text).click();
    }

    getTxtValue = (selector)=>{
        return cy.get(selector).invoke('val').then(sometext => cy.log(sometext));
    }

    linkClick = (_selector, text)=>{
        // this.assertElementWithTextEnabled(_selector, text);
        cy.get(_selector).contains(text).click();
    }

    assertElementValue = (selector, value)=>{
        cy.get(selector).invoke('val').should('eq', value)
    }

    assertLengthOfElement= (selector, length)=>{
        cy.get(selector).should('have.lengthOf', length);
    }

    btnDoubleClick = (selector)=>{
        cy.get(selector).dblclick();
    }

    toBeRightClick = (selector)=>{
        cy.get(selector).rightclick();
    }

    toBeClear = (selector)=>{
        cy.get(selector).clear();
    }

    toBeCheck = (selector)=>{
        cy.get(selector).check();
    }

    toBeUnCheck = (selector)=>{
        cy.get(selector).uncheck();
    }

    toBeFocus = (selector)=>{
        cy.get(selector).focus();
    }

    toBeBlur = (selector)=>{
        cy.get(selector).blur();
    }

    submitForm = (selector)=>{
        cy.get(selector).blur();
    }
    
    setLogs = (message)=>{
        cy.log(message);
    }

    waitFor = (time)=>{
        cy.wait(time);
    }

    pauseFor = ()=>{
        cy.pause();
    }

    setDebug =()=>{
        cy.debug()
    }

    goBackBrowser = ()=>{
        cy.go("back")
    }

    goForwardBrowser = ()=>{
        cy.go("forward");
    }

    reloadPage = ()=>{
        cy.reload();
    }

    toBeHover = (selector)=>{
        cy.get(selector).hover();
    }

    getCurrentPageUrl = ()=>{
        return cy.url();
    }
    
    getCurrentWindow = ()=>{
        return cy.window();
    }

    getScrollIntoView = ()=>{
        return cy.scrollIntoView();
    }

    getCurrentPageTitle = ()=>{
        return cy.title();
    }

    getScrollPosition = (point1, point2)=>{
        cy.scrollTo(point1, point2);
    }

    //

    getScrollPosition = (point1, point2)=>{
        cy.scrollTo(point1, point2);
    }

    pressESCKey = () =>{
        cy.log("Log:- Pressing ASC Key from Keyboard")
        console.log("Log:- Pressing ASC Key from Keyboard")
        cy.get('body').type('{esc}');
    }

    pressALTKey = () =>{
        cy.get('body').type('{alt}');
    }

    setDateTimeToDateField = (selector, inputDateTime)=>{
        this.assertElementVisibility(selector);
        this.assertElementEnabled(selector);
        this.printLog("Setting date time as", inputDateTime);
        cy.get(selector).clear().type(inputDateTime);
        // this.pressESCKey();
    } 

    setDateTimeToDateField2 = (selector, inputDateTime)=>{
        this.assertElementVisibility(selector);
        this.assertElementEnabled(selector);
        this.printLog("setting date time as", inputDateTime);
        cy.get(selector).clear().type(inputDateTime);
        // this.pressESCKey();
    } 

    printLog = (inputText) => {
        cy.log("Log:- " + inputText);
        console.log("Log:- " + inputText);
    }

    printLogs = (msg, inputText) => {
        cy.log("#Log: " +msg+" → '"+ inputText + "'");
        console.log("#Log: " +msg+" → '"+ inputText + "'");
    }

    assertSelectorValue = (selector, inputValue)=>{
        return cy.get(selector).should('have.value', inputValue);
    }

    assertBackGroundColour = (selector, inputValue)=>{
        this.printLog(`Comparing back ground colour of elelment ${selector} as ${inputValue}...`)
        return cy.get(selector).should('have.css', 'background-color').and('eq', inputValue);
    }

    assertFontColour = (selector, inputValue)=>{
        this.printLog(`Comparing font colour of elelment in success ${selector} as ${inputValue}...`)
        return cy.get(selector).should('have.css', 'color').and('eq', inputValue);
    }

    scrollIntoView(selector) {
        cy.get(selector).scrollIntoView();
      }

}