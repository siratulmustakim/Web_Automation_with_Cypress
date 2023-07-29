class MakeAppoinmentPage{
    bookAppoinment(){
        cy.get('select').select('Seoul CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicaid').click();
        cy.get('#txt_visit_date').type('31/07/2023');
        cy.get('h2').click();
        cy.get('#txt_comment').type('Consider urgently please!')
        cy.get('#btn-book-appointment').click();

        cy.get('h2').should('have.text', 'Appointment Confirmation')
    }
}
export default MakeAppoinmentPage;