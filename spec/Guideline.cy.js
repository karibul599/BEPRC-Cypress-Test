describe('Guideline ', () => {
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
          .get('a[href="/guidlines"]')
          .click();
          cy
          .wait(3000);
          
          cy.wait(500);
          cy.get('input[type="file"]').attachFile('dummy-pdf_2.pdf');
          cy.wait(15000);
          cy.wait(500);
          cy.contains('button', 'View')
            .should('exist')
            .and('be.visible')
            .click();
            cy.wait(500);
            cy.xpath('/html/body/div/div/div[2]/div/div/button').click()
            cy.wait(5000);
            cy.xpath('/html/body/div[2]/div[3]/div/h2/div/button').click();
            cy.wait(500);
            // cy.xpath('/html/body/div/div/div[2]/div/div/button').click()
            // cy.wait(500);
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