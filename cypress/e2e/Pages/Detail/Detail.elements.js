///<reference types ="cypress-xpath"/>
export class Detailelements{
    static get Button(){
        return{
            get Addtocartbutton (){
                return cy.xpath("//a[normalize-space()='Add to cart']")
            }
        }
    }
}