export class Placeorderelements {
    static get Textboxes(){
        return{
        get Name (){
            return cy.xpath("//input[@id='name']")
        },
        get country(){
            return cy.xpath("//input[@id='country']")
        },
        get city (){
            return  cy.xpath("//input[@id='city']")
        }, 
        get creditcard(){
            return cy.xpath("//input[@id='card']")
        },
        get month (){
            return cy.xpath("//input[@id='month']")
        },
        get year (){
            return cy.xpath("//input[@id='year']")
        }
    }
    }
    static get Buttons (){
        return {
            get close (){
                return cy.xpath("//div[@id='orderModal']//button[@type='button'][normalize-space()='Close']")
            },
            get purcharse (){
                return cy.xpath("//button[normalize-space()='Purchase']")
            }
        }
    }
}