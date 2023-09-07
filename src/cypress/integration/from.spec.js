// cypress/integration/form.spec.js
describe('Form Tests', () => {
    it('Successfully submits the form', () => {
      
      cy.visit('/');
  
     
      cy.get('select').select('1'); // Replace '1' with the value of the user you want to select
  
      // Enter a title
      cy.get('input[name="Title"]').type('Test Title');
  
      // Enter a body
      cy.get('input[name="Body"]').type('Test Body');
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Verify success message or any other post-submit behavior
      cy.contains('Form submitted successfully').should('be.visible');
    });
  
    it('Displays an error message for invalid submission', () => {
      // Visit your app's URL
      cy.visit('/');
  
      // Submit the form without filling in required fields
      cy.get('button[type="submit"]').click();
  
      // Verify error message(s)
      cy.contains('Please select a user').should('be.visible');
      cy.contains('Title is required').should('be.visible');
      cy.contains('Body is required').should('be.visible');
    });
  });
  