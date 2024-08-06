///<reference types ="cypress-xpath"/>

import { Detailmethods } from "./Pages/Detail/Detail.methods";
import { Homemethods } from "./Pages/Homepage/Homepage.methods"
import { Placeordermethods } from "./Pages/Placeorder/Place-order.methods";

let Wait1 =1500
describe("",()=>{
  beforeEach (() => {
    cy.visit('https://www.demoblaze.com/')
})
it("Seleccionar Producto Monitors", () => {
//Agregamos el Metodo para hacer click al boton dentro del detalla del producto y agregarlo al cart
    Homemethods.Selectmonitoroptions()
    Homemethods.Clickproductoptions("ASUS Full HD")
    Detailmethods.Clikonaddtocarbuttom()
    cy.xpath("//li[@class='nav-item active']//a[@class='nav-link']").click()
    Homemethods.Selectmonitoroptions()
    Homemethods.Clickproductoptions("Apple monitor 24")
    Detailmethods.Clikonaddtocarbuttom()
    cy.wait(Wait1)
    cy.get('#cartur').click()
    cy.wait(Wait1)
//Agregando datos a los campos de Place order
    cy.xpath("//button[normalize-space()='Place Order']").click()
    Placeordermethods.Completeplaceorder()
  })
})