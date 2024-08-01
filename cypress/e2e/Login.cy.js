///<reference types ="cypress-xpath"/>
import { Loginmethods } from "./Pages/Login/Login.Methods"

let Wait1 =2000
  it("Ingresar datos invalidos", () => {
    cy.visit("https://www.demoblaze.com/")
    cy.xpath("//a[@id='login2']").click()
    cy.wait(Wait1)
    Loginmethods.Login100()
    cy.wait(Wait1)
  })