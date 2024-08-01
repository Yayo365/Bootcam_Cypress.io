import { Homeelements } from "./Homepage.Elements";

export class Homemethods{
    static Selectphoneoptions(){
        Homeelements.Categories.Phone.should("be.visible").click()
    }
    static Selectlaptopoptions(){
        Homeelements.Categories.Laptops.should("be.visible").click()
    }
    static Selectmonitoroptions(){
        Homeelements.Categories.Monitors.should("be.visible").click()
    }
    static Clickproductoptions(Productname="Iphone 6 32gb"){
        Homeelements.SelectProduct(Productname).should("be.visible").click()
    }
} 