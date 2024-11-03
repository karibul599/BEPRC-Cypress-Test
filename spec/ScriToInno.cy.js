describe('Innovation Screening Committee Innovation Admin ', () => {
    it('Innovation Screening Committee Innovation Admin', () => {
     
      
      cy.visit('http://localhost:5173');
      cy
      .wait(3000);
      cy.contains('button', 'Login / Register')
      .click();
  
  
      cy.origin('https://uat-beprc.oss.net.bd', () => {
   
      cy.get('input[name="username"]').type('incScCm1@beprc.com');
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
      .get('.text-gray-200')
      .then($element => {
        if ($element.text()
          .includes('Innovation Negotiation Committee')) {
          cy.contains('Innovation Screening Committee')
          .should('exist')
          .and('be.visible');
        }else{
          cy
          .get('.text-gray-200')
          .click();  
          cy
          .wait(1000);
          cy
          .contains('Innovation Screening Committee')
          .should('exist').and('be.visible')
          .click();
        }
      });
      
        // cy
        // .get('a[href="/dashboard"]')
        // .click();
        // cy
        //   .wait(1000);
  
          cy
        .get('a[href="/proposal"]')
        .click();
        cy
          .wait(1000);
        cy.reload();
        cy.contains('Waiting For Innovation Screening Committee Review');
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/table/tbody/tr/td[8]/button').click();
        cy.wait(2000);
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/form/table/thead/tr/th[3]/label/span[1]/input').click();
        cy.wait(300);
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/form/div/div/button').click();

      cy
      .wait(500);
      cy.xpath('/html/body/div/div/div[2]/div/div/button').click();

      cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/div[2]/div[1]/div[1]/div/div/div').click();
      cy.contains('Send To Innovation Admin').click();
      cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/div[2]/div[1]/div[2]/textarea').type('Pass');
      cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/div[2]/div[2]/div[1]/div/div[1]/div/label/input')
      .attachFile('dummy-pdf_2.pdf');
      cy.wait(1000);
      cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/div[3]/form/button').click();

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
  
 