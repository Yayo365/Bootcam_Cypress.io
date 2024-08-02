///<reference types ="cypress-xpath"/>
import { Loginmethods } from "./Pages/Login/Login.Methods"

let Wait1 =2000
  it("Ingresar datos invalidos", () => {
    cy.visit("https://www.demoblaze.com/")
//Agregamos el Xpath para hacer click en el icono de Login
    cy.xpath("//a[@id='login2']").click()
    cy.wait(Wait1)
//Agregamos el Metodo para agregar datos en los campos de Login
    Loginmethods.Enterdata()
    cy.wait(Wait1)
  })