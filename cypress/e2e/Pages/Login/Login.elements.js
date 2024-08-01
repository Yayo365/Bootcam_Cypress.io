///<reference types ="cypress-xpath"/>
export class Loginelements {
    static get textboxes (){
        return{
            get username(){
                return cy.get("#loginusername")
            },
            get password(){
                return cy.get("#loginpassword")
            }
        }
    }
    static get buttons (){
        return{
            get close(){
                return cy.xpath("//div[@id='logInModal']//button[@type='button'][normalize-space()='Close']")
            },
            get login(){
                return cy.xpath("//button[normalize-space()='Log in']")
            }
        }
    }
}