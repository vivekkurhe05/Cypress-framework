/// <reference types="cypress" />
import AutoStoreHomePage from "../../../support/pageObjects/automation-test-store/autostore-home.page";
import AutoStoreHairCarePage from "../../../support/pageObjects/automation-test-store/autostore-haircare.page";

describe('Add multiple items to basket', () => {
    const HomePage = new AutoStoreHomePage()
    const HairCarePage = new AutoStoreHairCarePage()

    before(() => {
        cy.fixture('products').then(function(data) {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        HomePage.visitHomePage()
        HomePage.clickOn_HairCare_Link()
    });

    it('add specific items to basket', () => {
        HairCarePage.addHairCareProductsToBasket()
    });
});