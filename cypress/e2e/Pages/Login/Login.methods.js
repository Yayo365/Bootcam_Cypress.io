import { Loginelements } from "./Login.elements";

export class Loginmethods {
    static entername(Username="Test"){
        Loginelements.textboxes.username.type(Username)
    }
    static enterpassword(Pass="1234567"){
        Loginelements.textboxes.password.type(Pass)
    }
    static clickonLoginbutton(){
        Loginelements.buttons.login.click()
    }
    static Enterdata(){
        this.entername()
        this.enterpassword()
        this.clickonLoginbutton()
    }
}