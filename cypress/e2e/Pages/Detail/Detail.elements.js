///<reference types ="cypress-xpath"/>
export class Detailelements{
   static Buttom(){
    return{
        get Addtocartbutton (){
            return cy.xpath("//a[normalize-space()='Add to cart']")
        }
    }
   }
}