import LoginPage1 from "../pageObject/orangeHrmLogin";

const hrm = new LoginPage1();

describe('poc login', ()=>{
    it('valid login', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(1280, 800)

        hrm.enterUserName()
        hrm.enterPassword()
        hrm.clickSubmit()
        //hrm.clickAdmin()
        hrm.clickPIM()
        hrm.clickName()
        hrm.enterOlu()
        hrm.enterIdo()
        hrm.enterAji()
        hrm.clickAA()
        hrm.clickBB()
        hrm.entermiddle()
        hrm.clickAA()
        hrm.clickYY()
        hrm.clickZZ()
        hrm.clickAB()
        hrm.clickAC()
        hrm.clickAD()
        hrm.clickAE()
        hrm.clickAF()

        
    })
})