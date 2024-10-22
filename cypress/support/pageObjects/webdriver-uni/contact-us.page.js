class ContactUs {
    contactForm_Submission(firstName, lastName, email, comment) {
        cy.get('[name=first_name]').type(firstName)
        cy.get('[name=last_name]').type(lastName)
        cy.get('[name=email]').type(email)
        cy.get('[name=message]').type(comment)
        cy.get('[type="submit"]').click()
    }

    getSubmissionError() {
        return cy.get('body')
    }

    getSubmissionSuccess() {
        return cy.get('h1')
    }
}

export default ContactUs