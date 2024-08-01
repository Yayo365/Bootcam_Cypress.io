///<reference types ="cypress-xpath"/>
import { Signupmethods } from "./Pages/Signup/Singup.methods"

let Wait1 =2000
  it("Ingresar datos invalidos", () => {
    cy.visit("https://www.demoblaze.com/")
    cy.xpath("//a[@id='signin2']").click()
    cy.wait(Wait1)
    Signup100.Login100()
    cy.wait(Wait1)
  })