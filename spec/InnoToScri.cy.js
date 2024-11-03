describe('Innovation Admin to Screening Committee ', () => {
it('Innovation Admin to Screening Committe', () => {

    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('innovationAdmin@beprc.com');
    cy.get('input[name="password"]').type('12345#Bmail');
    cy
    .get('#kc-login')
    .should('exist')
    .and('be.visible')
    .click();
      });

      cy
      .wait(5000);
      cy.visit('http://localhost:5173/');
      cy
      .wait(1000);

      cy
    .get('a[href="/proposal"]')
    .click();
    cy
    .wait(5000);
    cy.reload();
    cy
    .wait(5000);
    cy.contains('Submitted');
    cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/table/tbody/tr/td[8]/button').click();
    cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[1]/div/div/div').click();
    cy.wait(200);
    cy.contains('Send To Innovation Screening Committee').click();
    cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[2]/textarea')
    .type('Send To Innovation Screening Committee');
    cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[2]/div/div/div[1]/div/label/input')
    .attachFile('dummy-pdf_2.pdf');
    cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
    cy.wait(3000);
    //cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
    cy.get('.fill-gray-100').click();
      cy.wait(1000);
      cy.wait(5000);

      cy.contains('button', 'Log Out')
       .should('exist')
       .and('be.visible')
       .click();
      cy.wait(10000);
    });
});