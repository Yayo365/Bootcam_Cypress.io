///<reference types ="cypress-xpath"/>

import { Homemethods } from "./Pages/Homepage/Homepage.methods"

let Wait1 =2000
  it("Ingresar datos invalidos", () => {
    cy.visit("https://www.demoblaze.com/")
    Homemethods.Clickproductoptions();
    cy.wait(Wait1)
  })