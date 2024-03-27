class LoginPage1 {
    enterUserName(){
        cy.get(Cypress.selectors.username1).clear()
        .type('Admin')
    }

    enterPassword(){
        cy.get(Cypress.selectors.password1).clear()
        .type('admin123')

    }

    clickSubmit(){
        cy.get(Cypress.selectors.submitbtn)
        .click()
        
    }

   // clickAdmin(){
       // cy.contains('Admin').click()
        //}
// Create  an Employee
clickPIM(){
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    }

    clickName(){
        cy.get('.orangehrm-header-container > .oxd-button').click()
        }

 enterOlu(){
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Olusola')
        }

enterIdo(){
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Idowu')
        }

 enterAji(){
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ajibade')
         }

 clickAA(){
    cy.get('.oxd-button--secondary').click({force: true})  //cy.get('[disabled]').click({force: true}).
        } 

//Edit an Employee
clickBB(){
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        } 

entermiddle(){
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Olusola')
         }

clickKK(){
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
          } 

clickYY(){
    cy.get('.oxd-icon.bi-pencil-fill').click()
        } 

clickZZ(){
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
         } 
//Delete an Employee

clickAB(){
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
         }

clickAC(){
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Olusola')
         } 

clickAD(){
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
         }  

clickAE(){
    cy.get('.oxd-table-cell-actions > :nth-child(1)').click()
         } 

clickAF(){
    cy.get('.oxd-button--text').click()
       }

}

export default LoginPage1