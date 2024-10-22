/// <reference types='cypress' />
import HomePage from "../../../support/pageObjects/webdriver-uni/home.page";
import ContactUs from "../../../support/pageObjects/webdriver-uni/contact-us.page";

describe('Test Contact Us Feature', () => {
    //this command applies default command timeout for this test suite only.
    Cypress.config('defaultCommandTimeout', 20000)
    
    const homePage = new HomePage()
    const contactUsPage = new ContactUs()

    before(() => {
        cy.fixture('contact').then(function(data) {
            globalThis.data = data
        })
    });
    beforeEach(() => {
        homePage.visitHomePage()
        homePage.clickOn_ContactUs_Button()
    });
    it('should be able to submit a form', () => {
        contactUsPage.contactForm_Submission(Cypress.env('first_name'), data.last_name, data.email, data.comment)
        contactUsPage.getSubmissionSuccess().contains('Thank You for your Message!', {matchCase:false})
    });

    it('should not be able to submit a form', () => {
        contactUsPage.contactForm_Submission(Cypress.env('first_name'), data.last_name, " ", data.comment)
        contactUsPage.getSubmissionError().contains("Error: invalid email address", {matchCase:false})
    });
});