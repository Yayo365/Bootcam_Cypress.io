///<reference types ="cypress-xpath"/>

import { Detailmethods } from "./Pages/Detail/Detail.methods";
import { Homemethods } from "./Pages/Homepage/Homepage.methods"

let Wait1 =1500
describe("",()=>{
beforeEach (() => {
  cy.visit('https://www.demoblaze.com/')
})
it("Seleccionar Producto Phones", () => {
//Agregamos el Metodo para hacer click algun producto especifico
//Agregamos el Metodo para hacer click al boton dentro del detalla del producto y agregarlo al cart
    Homemethods.Clickproductoptions("Iphone 6 32gb")
    Detailmethods.Clikonaddtocarbuttom()
    cy.wait(Wait1)
    cy.xpath("//li[@class='nav-item active']//a[@class='nav-link']").click()
  })
  it("Seleccionar Producto Laptops", () => {
//Agregamos el Metodo para hacer click al boton dentro del detalla del producto y agregarlo al cart
    Homemethods.Selectlaptopoptions()
    Homemethods.Clickproductoptions("MacBook Pro")
    Detailmethods.Clikonaddtocarbuttom()
    cy.wait(Wait1)
    cy.xpath("//li[@class='nav-item active']//a[@class='nav-link']").click()
  })
  it("Seleccionar Producto Monitors", () => {
//Agregamos el Metodo para hacer click al boton dentro del detalla del producto y agregarlo al cart
    Homemethods.Selectmonitoroptions()
    Homemethods.Clickproductoptions("ASUS Full HD")
    Detailmethods.Clikonaddtocarbuttom()
    cy.wait(Wait1)
    cy.get('#cartur').click()
    cy.wait(Wait1)
  })
})