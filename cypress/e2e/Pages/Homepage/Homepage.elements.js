export class Homeelements{
    static get Categories(){
        return{
            get Phone(){
                return cy.xpath ("//a[.='Phones']")
            },
            get Laptops(){
                return cy.xpath("//a[.='Laptops']")
            }, 
            get Monitors(){
                return cy.xpath("//a[.='Monitors']")
            }
        }
    }
    static SelectProduct(Productname){
        return cy.contains ("a",Productname)
    }
}