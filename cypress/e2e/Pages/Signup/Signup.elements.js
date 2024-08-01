///<reference types ="cypress-xpath"/>
export class Signupelements {
    static get textboxes (){
        return{
            get username(){
                return cy.get("#sign-username")
            },
            get password(){
                return cy.get("#sign-password")
            }
        }
    }
    static get buttons (){
        return{
            get close(){
                return cy.xpath("//div[@id='signInModal']//button[@class='btn btn-secondary']")
            },
            get signup(){
                return cy.xpath("//button[normalize-space()='Sign up']")
            }
        }
    }
}