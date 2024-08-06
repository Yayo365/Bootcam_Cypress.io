import { Placeorderelements } from "./Place-order.elements";

export class Placeordermethods {
    static Entername (name= "Test"){
        Placeorderelements.Textboxes.Name.type(name)
    }
    static Entercountry (country= "Test1"){
        Placeorderelements.Textboxes.country.type(country)
    }
    static Entercity (city= "Test2"){
        Placeorderelements.Textboxes.city.type(city)
    }
    static Entercreditcard (card= "123456789"){
        Placeorderelements.Textboxes.creditcard.type(card)
    }
    static Entermonth (month= "Diciembre"){
        Placeorderelements.Textboxes.month.type(month)
    }
    static Enteryear (year= "1990"){
        Placeorderelements.Textboxes.year.type(year)
    }
    static Clickonpurcharse (){
        Placeorderelements.Buttons.purcharse.click()
    }
    static Completeplaceorder(){
        this.Entername()
        this.Entercountry()
        this.Entercity()
        this.Entercreditcard()
        this.Entermonth()
        this.Enteryear()
        this.Clickonpurcharse()
    }
}