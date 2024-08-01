import { Homeelements } from "./Homepage.Elements";

export class Homemethods{
    static Selectphoneoptions(){
        Homeelements.Categories.Phone.click()
    }
    static Selectlaptopoptions(){
        Homeelements.Categories.Laptops.click()
    }
    static Selectmonitoroptions(){
        Homeelements.Categories.Monitors()
    }
    static Clickproductoptions(Productname="Iphone 6 32gb"){
        Homeelements.SelectProduct(Productname).click()
    }
}