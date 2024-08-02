///<reference types ="cypress-xpath"/>
import { Signupmethods } from "./Pages/Signup/Singup.methods"

let Wait1 =2000
  it("Ingresar datos invalidos", () => {
    cy.visit("https://www.demoblaze.com/")
//Agregamos el Xpath para hacer click en el icono de Signup
    cy.xpath("//a[@id='signin2']").click()
    cy.wait(Wait1)
//Agregamos el Metodo para agregar datos en los campos de Signup
    Signupmethods.Enterdata()
    cy.wait(Wait1)
  })