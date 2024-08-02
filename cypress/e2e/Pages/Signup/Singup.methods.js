import { Signupelements } from "./Signup.elements"

export class Signupmethods {
    static entername(Username="Test"){
        Signupelements.textboxes.username.type(Username)
    }
    static enterpassword(Pass="1234567"){
        Signupelements.textboxes.password.type(Pass)
    }
    static clickonsignupbutton(){
        Signupelements.buttons.signup.click()
    }
    static Enterdata(){
        this.entername()
        this.enterpassword()
        this.clickonsignupbutton()
    }
}