describe('Key Activities', () => {
    it('from', ()=>{
        cy.visit('http://localhost:5173');
        cy.wait(3000);
    
        cy.contains('button', 'Login / Register').click();
    
        cy.origin('https://uat-beprc.oss.net.bd', () => {
          cy.get('input[name="username"]').type('superadmin@beprc.com');
          cy.get('input[name="password"]').type('12345#Bmail');
          cy.get('#kc-login')
            .should('exist')
            .and('be.visible')
            .click();
        });
    
        cy.wait(5000);
        cy.visit('http://localhost:5173/');
        cy.wait(1000);
    
        cy.get('.text-sm.text-gray-200')
          .contains('Super Admin')
          .should('be.visible');
          cy
          .get('a[href="/activities"]')
          .click();
          cy
          .wait(3000);
          cy.contains('button', 'Edit')
          .should('exist')
          .and('be.visible')
          .click();

          cy.get('[name="description"]')
          .should('exist')
          .and('be.visible')
          .click().clear()
          .type('Updated: BEPRC recognizes the critical role of Innovation in transforming the energy landscape. To this end, it actively supports and funds research projects that aim to create novel solutions for the challenges facing the industry.');
          const file = ['download (1).jpg', 'download (2).jpg', 'download (3).jpg','download (4).jpg','download.jpg'];
          cy.wait(500);
          cy.get('input[type="file"]').attachFile(file[2]);
          cy.wait(15000);
          cy.wait(500);
          cy.contains('button', 'Update')
            .should('exist')
            .and('be.visible')
            .click();
            cy.wait(500);
            cy.xpath('/html/body/div/div/div[2]/div/div/button').click()
            cy.wait(500);
            cy.wait(500);
            cy.get('.fill-gray-100').click();
        
            cy.wait(5000);
            cy.contains('button', 'Log Out')
            .should('exist')
            .and('be.visible')
            .click();
           cy.wait(5000);
    });
});