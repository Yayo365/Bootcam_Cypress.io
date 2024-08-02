///<reference types ="cypress-xpath"/>

import { Detailmethods } from "./Pages/Detail/Detail.methods";
import { Homemethods } from "./Pages/Homepage/Homepage.methods"

let Wait1 =2000
  it("Ingresar datos invalidos", () => {
    cy.visit("https://www.demoblaze.com/")
//Agregamos el Metodo para hacer click algun producto especifico
    Homemethods.Clickproductoptions();
    cy.wait(Wait1)
//Agregamos el Metodo para hacer click al boton dentro del detalla del producto
    Detailmethods.Clikonaddtocarbuttom()
    cy.wait(Wait1)
  })